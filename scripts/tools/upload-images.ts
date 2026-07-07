/**
 * Upload picked candidates from scripts/tools/image-review/ to the R2
 * bucket, then splice the resulting keys into that species' seed module's
 * `images` array (and run Prettier on it).
 *
 * Usage:
 *   tsx scripts/tools/upload-images.ts <genus> <species> <candidateIndex...> [--variety slug] [--start N]
 *
 * Example:
 *   tsx scripts/tools/upload-images.ts begonia rex 3 4 6 11 16
 *
 * Candidate indices refer to the numbering printed by find-images.ts and
 * recorded in that species' manifest.json. --start controls the img-<n>
 * suffix; it defaults to one past however many images are already in the
 * seed module's `images` array, so re-running for the same species appends
 * rather than overwrites. Requires R2_ACCOUNT_ID, R2_ACCESS_KEY_ID,
 * R2_SECRET_ACCESS_KEY, and R2_BUCKET_NAME in .env.local (an API token
 * scoped to Object Read & Write on the bucket is enough).
 */

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { execFile } from 'node:child_process';
import { readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

process.loadEnvFile('.env.local');

const execFileAsync = promisify(execFile);

interface Candidate {
    title: string;
    fileUrl: string;
    sourceUrl: string;
    width: number;
    height: number;
    license: string;
    artist: string;
    localFile: string;
}

interface ImageEntry {
    url: string;
    alt: string;
}

const CONTENT_TYPES: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
};

function parseArgs(argv: string[]) {
    const [genus, species, ...rest] = argv;
    const indices: number[] = [];
    let variety: string | undefined;
    let start: number | undefined;

    for (let i = 0; i < rest.length; i++) {
        if (rest[i] === '--variety') variety = rest[++i];
        else if (rest[i] === '--start') start = Number(rest[++i]);
        else if (/^\d+$/.test(rest[i])) indices.push(Number(rest[i]));
    }

    if (!genus || !species || indices.length === 0) {
        console.error(
            'Usage: tsx scripts/tools/upload-images.ts <genus> <species> <candidateIndex...> [--variety slug] [--start N]',
        );
        process.exit(1);
    }

    return { genus, species, indices, variety, start };
}

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(
            `Missing ${name} in .env.local. Generate an R2 API token scoped to the bucket ` +
                '(Object Read & Write) in the Cloudflare dashboard, then set R2_ACCOUNT_ID, ' +
                'R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, and R2_BUCKET_NAME.',
        );
    }
    return value;
}

/** Locates the `images: [ ... ]` array literal in a seed module's source. */
function findImagesArraySpan(content: string): { openBracket: number; closeBracket: number } {
    const marker = 'images: [';
    const markerIndex = content.indexOf(marker);
    if (markerIndex === -1) {
        throw new Error('Could not find an "images: [" array in the seed file.');
    }

    const openBracket = markerIndex + marker.length - 1;
    let depth = 0;
    let closeBracket = -1;
    for (let i = openBracket; i < content.length; i++) {
        if (content[i] === '[') depth++;
        else if (content[i] === ']') {
            depth--;
            if (depth === 0) {
                closeBracket = i;
                break;
            }
        }
    }
    if (closeBracket === -1) {
        throw new Error('Could not find the matching "]" for the images array.');
    }

    return { openBracket, closeBracket };
}

function parseExistingEntries(inner: string): ImageEntry[] {
    const entries: ImageEntry[] = [];
    const re = /\{\s*url:\s*'((?:[^'\\]|\\.)*)'\s*,?\s*(?:alt:\s*'((?:[^'\\]|\\.)*)'\s*,?)?\s*\}/g;
    let match: RegExpExecArray | null;
    while ((match = re.exec(inner))) {
        entries.push({ url: match[1], alt: match[2] ?? '' });
    }
    return entries;
}

function renderImagesArray(entries: ImageEntry[]): string {
    if (entries.length === 0) return '[]';
    const items = entries
        .map((e) => `{ url: '${e.url.replace(/'/g, "\\'")}', alt: '${e.alt.replace(/'/g, "\\'")}' },`)
        .join('\n');
    return `[\n${items}\n]`;
}

async function main() {
    const { genus, species, indices, variety, start } = parseArgs(process.argv.slice(2));

    const accountId = requireEnv('R2_ACCOUNT_ID');
    const accessKeyId = requireEnv('R2_ACCESS_KEY_ID');
    const secretAccessKey = requireEnv('R2_SECRET_ACCESS_KEY');
    const bucket = requireEnv('R2_BUCKET_NAME');

    const dirName = [genus, species, variety].filter(Boolean).join('-');
    const reviewDir = path.resolve(import.meta.dirname, 'image-review', dirName);
    const manifest: Candidate[] = JSON.parse(
        await readFile(path.join(reviewDir, 'manifest.json'), 'utf-8'),
    );

    const repoRoot = path.resolve(import.meta.dirname, '..', '..');
    const seedFilePath = path.join(repoRoot, 'scripts', 'seed', `${dirName}.ts`);
    try {
        await access(seedFilePath);
    } catch {
        throw new Error(
            `No seed module at scripts/seed/${dirName}.ts — create it first (see AGENTS.md's ` +
                '"Adding a plant cultivar/variety" section), then re-run this script.',
        );
    }

    const seedContent = await readFile(seedFilePath, 'utf-8');
    const { openBracket, closeBracket } = findImagesArraySpan(seedContent);
    const existingEntries = parseExistingEntries(
        seedContent.slice(openBracket + 1, closeBracket),
    );
    const startIndex = start ?? existingEntries.length + 1;

    const client = new S3Client({
        region: 'auto',
        endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
        credentials: { accessKeyId, secretAccessKey },
    });

    const keyPrefix = ['plants', genus, species, variety].filter(Boolean).join('/');
    const uploaded: { url: string; candidate: Candidate }[] = [];

    for (const [i, index] of indices.entries()) {
        const candidate = manifest[index - 1];
        if (!candidate || !candidate.localFile) {
            console.warn(`  [${index}] no such candidate in manifest.json, skipping`);
            continue;
        }

        const ext = path.extname(candidate.localFile).toLowerCase();
        const contentType = CONTENT_TYPES[ext] ?? 'application/octet-stream';
        const n = startIndex + i;
        const key = `${keyPrefix}/img-${n}${ext}`;
        const body = await readFile(path.join(reviewDir, candidate.localFile));

        await client.send(
            new PutObjectCommand({
                Bucket: bucket,
                Key: key,
                Body: body,
                ContentType: contentType,
            }),
        );

        uploaded.push({ url: key, candidate });
        console.log(`  [${index}] uploaded -> ${key}`);
    }

    if (uploaded.length === 0) {
        console.log('\nNothing uploaded — no seed file changes made.');
        return;
    }

    const newEntries: ImageEntry[] = uploaded.map(({ url }) => ({ url, alt: '' }));
    const mergedEntries = [...existingEntries, ...newEntries];
    const updatedContent =
        seedContent.slice(0, openBracket) +
        renderImagesArray(mergedEntries) +
        seedContent.slice(closeBracket + 1);
    await writeFile(seedFilePath, updatedContent);
    await execFileAsync('npx', ['prettier', '--write', seedFilePath]);

    const relSeedPath = path.relative(repoRoot, seedFilePath);
    console.log(`\nUpdated ${relSeedPath} with ${uploaded.length} new image(s).`);
    console.log(`Fill in the "alt" text for each new entry before committing.`);

    console.log('\nAttribution (keep for records — CC BY / CC BY-SA require credit):\n');
    for (const { url, candidate } of uploaded) {
        console.log(`${url}`);
        console.log(`  ${candidate.license} — ${candidate.artist}`);
        console.log(`  ${candidate.sourceUrl}\n`);
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
