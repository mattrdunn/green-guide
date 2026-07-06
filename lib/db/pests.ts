import type { PestSummaryData } from '@/app/pests/types';
import { connectToDatabase } from '@/lib/db/connect';
import { PestModel } from '@/lib/db/models/Pest';

/** Lean projection doc — fields may be absent on older/partial documents. */
export interface PestSummaryDoc {
    slug: string;
    name: string;
    category?: string;
    categoryLabel?: string;
    tag?: string;
    severity?: number;
    signs?: string;
}

/** Map lean pest documents to summary card data. */
export function toPestSummaries(docs: PestSummaryDoc[]): PestSummaryData[] {
    return docs.map((doc) => ({
        slug: doc.slug,
        name: doc.name,
        category: doc.category ?? 'other',
        categoryLabel: doc.categoryLabel ?? 'Other',
        tag: doc.tag ?? '',
        severity: doc.severity ?? 1,
        signs: doc.signs ?? '',
    }));
}

/**
 * Slim projection of every pest for the hub grid and filters — mirrors
 * `fetchPlantSummaries` in `plantSummaries.ts`. Throws when the database is
 * unreachable; callers decide the fallback.
 */
export async function fetchPestSummaries(): Promise<PestSummaryData[]> {
    await connectToDatabase();

    const docs = await PestModel.find(
        {},
        {
            slug: 1,
            name: 1,
            category: 1,
            categoryLabel: 1,
            tag: 1,
            severity: 1,
            signs: 1,
        },
    )
        .sort({ name: 1 })
        .lean();

    return toPestSummaries(docs);
}

export interface PestDetailDoc {
    slug: string;
    name: string;
    category: string;
    categoryLabel: string;
    tag: string;
    severity: number;
    signs: string;
    identification: string;
    lifeCycle: string;
    treatmentOrganic: string[];
    treatmentChemical: string[];
    prevention: string[];
    affects: { genus: string; species: string; variety?: string }[];
}

/** Full document for the pest detail page, or null when the slug doesn't exist. */
export async function fetchPestBySlug(
    slug: string,
): Promise<PestDetailDoc | null> {
    await connectToDatabase();

    return PestModel.findOne(
        { slug: slug.toLowerCase() },
        {
            _id: 0,
            slug: 1,
            name: 1,
            category: 1,
            categoryLabel: 1,
            tag: 1,
            severity: 1,
            signs: 1,
            identification: 1,
            lifeCycle: 1,
            treatmentOrganic: 1,
            treatmentChemical: 1,
            prevention: 1,
            affects: 1,
        },
    ).lean<PestDetailDoc | null>();
}
