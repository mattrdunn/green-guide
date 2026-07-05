import type { PlantCardData } from '@/app/components/home/types';
import { connectToDatabase } from '@/lib/db/connect';
import { PlantModel } from '@/lib/db/models/Plant';

/** The lean projection returned by the summaries query — fields may be absent on older documents. */
export interface PlantSummaryDoc {
    genus: string;
    species: string;
    commonNames?: string[];
    images?: { url?: string; alt?: string }[];
    tags?: string[];
    vitals?: {
        light?: { value?: string };
        difficulty?: { value?: string };
    };
}

/**
 * Map lean plant documents to card data, with plants that have a photo
 * sorted ahead of those without one.
 */
export function toPlantSummaries(docs: PlantSummaryDoc[]): PlantCardData[] {
    return docs
        .map((doc) => ({
            genus: doc.genus,
            species: doc.species,
            commonNames: doc.commonNames ?? [],
            imageKey: doc.images?.[0]?.url ?? null,
            imageAlt: doc.images?.[0]?.alt ?? null,
            tags: doc.tags ?? [],
            light: doc.vitals?.light?.value ?? '—',
            care: doc.vitals?.difficulty?.value ?? '—',
        }))
        .sort(
            (a, b) => Number(b.imageKey !== null) - Number(a.imageKey !== null),
        );
}

/**
 * Slim projection of every plant for cards and search — shared by the home
 * page (server component) and the `/api/plants` route handler. Throws when
 * the database is unreachable; callers decide the fallback.
 */
export async function fetchPlantSummaries(): Promise<PlantCardData[]> {
    await connectToDatabase();

    const docs = await PlantModel.find(
        {},
        {
            genus: 1,
            species: 1,
            commonNames: 1,
            images: 1,
            tags: 1,
            'vitals.light.value': 1,
            'vitals.difficulty.value': 1,
        },
    )
        .sort({ genus: 1, species: 1 })
        .lean();

    return toPlantSummaries(docs);
}
