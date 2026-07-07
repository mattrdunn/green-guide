/**
 * Fetch candidate species photos from Wikimedia Commons for manual review.
 *
 * Usage:
 *   tsx scripts/tools/find-images.ts <genus> <species> [--query "search terms"] [--limit 20] [--variety slug]
 *
 * Downloads full-resolution originals (>=500x500px, permissively licensed)
 * into scripts/tools/image-review/<genus>-<species>[-<variety>]/, alongside
 * a manifest.json carrying license/attribution metadata for each one. Files
 * are not uploaded anywhere — review the folder, pick winners, rename them
 * to the R2 object-key convention, and upload via the Cloudflare dashboard
 * as usual.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const USER_AGENT = 'GreenGuideImageFinder/0.1 (contact: mattrdunn97@gmail.com)';

const ALLOWED_LICENSES = [
    'Public domain',
    'CC0',
    'CC BY 2.0',
    'CC BY 3.0',
    'CC BY 4.0',
    'CC BY-SA 2.0',
    'CC BY-SA 3.0',
    'CC BY-SA 4.0',
];

interface CommonsImageInfo {
    url: string;
    descriptionurl: string;
    width: number;
    height: number;
    mime: string;
    extmetadata?: Record<string, { value: string }>;
}

interface CommonsPage {
    title: string;
    imageinfo?: CommonsImageInfo[];
}

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

function stripHtml(input: string): string {
    return input
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function parseArgs(argv: string[]) {
    const [genus, species, ...rest] = argv;
    if (!genus || !species) {
        console.error(
            'Usage: tsx scripts/tools/find-images.ts <genus> <species> [--query "search terms"] [--limit 20] [--variety slug]',
        );
        process.exit(1);
    }

    let query = `${genus} ${species}`;
    let limit = 20;
    let variety: string | undefined;

    for (let i = 0; i < rest.length; i++) {
        if (rest[i] === '--query') query = rest[++i];
        else if (rest[i] === '--limit') limit = Number(rest[++i]);
        else if (rest[i] === '--variety') variety = rest[++i];
    }

    return { genus, species, query, limit, variety };
}

async function searchCommons(query: string, limit: number): Promise<Candidate[]> {
    const params = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrnamespace: '6',
        gsrsearch: query,
        gsrlimit: String(limit),
        prop: 'imageinfo',
        iiprop: 'url|size|mime|extmetadata',
        format: 'json',
    });

    const res = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
        headers: { 'User-Agent': USER_AGENT },
    });
    if (!res.ok) {
        throw new Error(`Commons search failed: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    const pages = Object.values(data?.query?.pages ?? {}) as CommonsPage[];

    const candidates: Candidate[] = [];
    for (const page of pages) {
        const info = page.imageinfo?.[0];
        if (!info) continue;
        if (info.width < 500 || info.height < 500) continue;
        if (!['image/jpeg', 'image/png'].includes(info.mime)) continue;

        const license = info.extmetadata?.LicenseShortName?.value ?? 'Unknown';
        if (!ALLOWED_LICENSES.includes(license)) continue;

        const artist = info.extmetadata?.Artist?.value
            ? stripHtml(info.extmetadata.Artist.value)
            : 'Unknown';

        candidates.push({
            title: page.title,
            fileUrl: info.url,
            sourceUrl: info.descriptionurl,
            width: info.width,
            height: info.height,
            license,
            artist,
            localFile: '',
        });
    }
    return candidates;
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function downloadWithRetry(url: string, attempts = 3): Promise<Response> {
    for (let attempt = 1; attempt <= attempts; attempt++) {
        const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
        if (res.status !== 429) return res;
        const backoffMs = 1000 * attempt;
        console.warn(`  rate limited, retrying in ${backoffMs}ms...`);
        await sleep(backoffMs);
    }
    return fetch(url, { headers: { 'User-Agent': USER_AGENT } });
}

async function main() {
    const { genus, species, query, limit, variety } = parseArgs(process.argv.slice(2));
    const dirName = [genus, species, variety].filter(Boolean).join('-');
    const outDir = path.resolve(import.meta.dirname, 'image-review', dirName);
    await mkdir(outDir, { recursive: true });

    console.log(`Searching Wikimedia Commons for "${query}"...`);
    const candidates = await searchCommons(query, limit);
    console.log(`${candidates.length} candidate(s) passed the resolution/license filter.\n`);

    for (const [i, candidate] of candidates.entries()) {
        const ext = path.extname(new URL(candidate.fileUrl).pathname).toLowerCase() || '.jpg';
        const localName = `candidate-${i + 1}${ext}`;
        const res = await downloadWithRetry(candidate.fileUrl);
        if (!res.ok) {
            console.warn(`  [${i + 1}] failed to download ${candidate.fileUrl}: ${res.status}`);
            continue;
        }
        const buf = Buffer.from(await res.arrayBuffer());
        await writeFile(path.join(outDir, localName), buf);
        candidate.localFile = localName;
        console.log(
            `  [${i + 1}] ${candidate.width}x${candidate.height}  ${candidate.license}  -> ${localName}`,
        );
        await sleep(300);
    }

    await writeFile(path.join(outDir, 'manifest.json'), JSON.stringify(candidates, null, 4));

    console.log(`\nSaved ${candidates.length} image(s) to ${outDir}`);
    console.log('manifest.json has license/attribution details for each candidate.');
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
