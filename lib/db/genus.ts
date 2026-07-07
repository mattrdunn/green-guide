import type { GenusSpeciesItem } from '@/app/[genus]/components/types';
import { connectToDatabase } from '@/lib/db/connect';
import { GenusModel, type GenusVitals, type GenusNativeRange, type GenusCareCadenceItem, type GenusTaxonomy } from '@/lib/db/models/Genus';
import { PlantModel } from '@/lib/db/models/Plant';

/** Lean projection of a Genus document — everything the genus profile page needs. */
export interface GenusDetailDoc {
    genus: string;
    speciesEstimate: number;
    description: string;
    images: { url?: string; alt?: string }[];
    highlights: string[];
    vitals: GenusVitals;
    nativeRange: GenusNativeRange;
    careCadence: GenusCareCadenceItem[];
    taxonomy: GenusTaxonomy;
    relatedGenera: string[];
}

/** Full genus document for the profile page, or null when the slug doesn't exist. */
export async function fetchGenusBySlug(
    genus: string,
): Promise<GenusDetailDoc | null> {
    await connectToDatabase();

    return GenusModel.findOne(
        { genus: genus.toLowerCase() },
        {
            _id: 0,
            genus: 1,
            speciesEstimate: 1,
            description: 1,
            images: 1,
            highlights: 1,
            vitals: 1,
            nativeRange: 1,
            careCadence: 1,
            taxonomy: 1,
            relatedGenera: 1,
        },
    ).lean<GenusDetailDoc | null>();
}

/** Lean projection of a Plant doc — fields may be absent on older/partial documents. */
export interface GenusSpeciesPlantDoc {
    species: string;
    variety?: string | null;
    commonNames?: string[];
    description?: string;
    images?: { url?: string; alt?: string }[];
    vitals?: {
        light?: { value?: string };
        watering?: { value?: string };
        hardinessZone?: { value?: string };
    };
    overview?: {
        humidity?: { value?: string };
        nativeHabitat?: { value?: string };
    };
}

/** Map lean Plant documents for one genus onto Species & Varieties grid data. */
export function toGenusSpeciesItems(
    genus: string,
    docs: GenusSpeciesPlantDoc[],
): GenusSpeciesItem[] {
    return docs.map((doc) => ({
        genus,
        species: doc.species,
        variety: doc.variety ?? null,
        type: doc.variety ? 'cultivar' : 'species',
        commonName: doc.commonNames?.[0] ?? null,
        description: doc.description ?? '',
        imageKey: doc.images?.[0]?.url ?? null,
        imageAlt: doc.images?.[0]?.alt ?? null,
        light: doc.vitals?.light?.value ?? '—',
        watering: doc.vitals?.watering?.value ?? '—',
        humidity: doc.overview?.humidity?.value ?? '—',
        zone: doc.vitals?.hardinessZone?.value ?? '—',
        origin: doc.overview?.nativeHabitat?.value ?? '—',
    }));
}

/** Every species/cultivar document under a genus, for the Species & Varieties tab. */
export async function fetchSpeciesByGenus(
    genus: string,
): Promise<GenusSpeciesItem[]> {
    await connectToDatabase();

    const docs = await PlantModel.find(
        { genus: genus.toLowerCase() },
        {
            species: 1,
            variety: 1,
            commonNames: 1,
            description: 1,
            images: 1,
            'vitals.light.value': 1,
            'vitals.watering.value': 1,
            'vitals.hardinessZone.value': 1,
            'overview.humidity.value': 1,
            'overview.nativeHabitat.value': 1,
        },
    )
        .sort({ species: 1, variety: 1 })
        .lean();

    return toGenusSpeciesItems(genus.toLowerCase(), docs);
}
