import { Schema, model, models, type Model } from 'mongoose';

/**
 * A display value with optional supporting copy. Numeric companions
 * (zoneMin, minF, …) exist alongside display strings so future features
 * (glossary filters, landscaping recommendations, the Anys AI layer) can
 * query ranges without parsing prose.
 */
export interface VitalFact {
    value: string;
    caption?: string;
}

export interface OverviewDetail {
    value: string;
    detail?: string;
}

export interface PlantImage {
    url: string;
    alt?: string;
}

/**
 * 1–5 intensity used to render vital meters:
 * light  — 1 low-light tolerant … 5 full sun
 * water  — 1 rare, drought-loving … 5 constantly moist
 * difficulty — 1 near-indestructible … 5 expert-level fussy
 */
export type VitalScore = 1 | 2 | 3 | 4 | 5;

export interface PlantVitals {
    hardinessZone: VitalFact & { zoneMin?: number; zoneMax?: number };
    light: VitalFact & { score: VitalScore };
    watering: VitalFact & { score: VitalScore };
    difficulty: VitalFact & {
        score: VitalScore;
        level: 'easy' | 'moderate' | 'advanced';
    };
    toxicity: VitalFact & { level: 'non-toxic' | 'mildly-toxic' | 'toxic' };
}

export interface CareCadenceItem {
    interval: 'weekly' | 'monthly' | 'seasonal' | 'as-needed';
    task: string;
}

export interface PlantOverview {
    height: OverviewDetail & { minFt?: number; maxFt?: number };
    soil: OverviewDetail;
    semiHydro: OverviewDetail & { compatible: boolean };
    fertilizer: OverviewDetail & { npk?: string };
    fertilizerFrequency: OverviewDetail;
    nativeHabitat: OverviewDetail;
    humidity: OverviewDetail & { minPct?: number };
    temperature: OverviewDetail & { minF?: number; maxF?: number };
    growSeason: OverviewDetail;
    dailyRhythm: { heading: string; body: string; highlights: string[] };
    careCadence: CareCadenceItem[];
}

export interface PlantCare {
    pillars: { label: string; stat: string; detail: string }[];
    wateringRhythm: { heading: string; body: string; tips: string[] };
    seasonalWatering: { season: string; cadence: string; tip?: string }[];
    routines: {
        interval: 'daily' | 'weekly' | 'monthly' | 'seasonal';
        steps: string[];
    }[];
    toolkit: { item: string; note?: string }[];
}

export interface PlantIssues {
    stressSignals: {
        title: string;
        tag?: string;
        description: string;
        actions: string[];
    }[];
    pests: {
        name: string;
        tag?: string;
        signs: string;
        treatment: string;
        image?: string;
        /** Slug of the matching entry in the shared Pest library, when one exists. */
        pestSlug?: string;
    }[];
    stabilityChecklist: string[];
}

export interface Plant {
    genus: string;
    species: string;
    /**
     * Cultivar/variety slug for species with materially identical care but
     * distinct identity (e.g. `epipremnum aureum` "neon", "marble-queen").
     * Omitted entirely for the canonical/no-variety document of a species.
     */
    variety?: string;
    commonNames: string[];
    description: string;
    images: PlantImage[];
    tags: string[];
    highlights: string[];
    vitals: PlantVitals;
    overview: PlantOverview;
    care: PlantCare;
    issues: PlantIssues;
    createdAt: Date;
    updatedAt: Date;
}

const vitalScore = {
    type: Number,
    required: true,
    min: 1,
    max: 5,
};

const vitalFact = (extra: Record<string, unknown> = {}) =>
    new Schema(
        {
            value: { type: String, required: true },
            caption: String,
            ...extra,
        },
        { _id: false },
    );

const overviewDetail = (extra: Record<string, unknown> = {}) =>
    new Schema(
        {
            value: { type: String, required: true },
            detail: String,
            ...extra,
        },
        { _id: false },
    );

const PlantSchema = new Schema<Plant>(
    {
        genus: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        species: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        variety: {
            type: String,
            lowercase: true,
            trim: true,
        },
        commonNames: { type: [String], default: [] },
        description: { type: String, required: true },
        images: {
            type: [
                new Schema(
                    {
                        url: { type: String, required: true },
                        alt: String,
                    },
                    { _id: false },
                ),
            ],
            default: [],
        },
        tags: { type: [String], default: [], lowercase: true, trim: true },
        highlights: { type: [String], default: [] },
        vitals: new Schema<PlantVitals>(
            {
                hardinessZone: vitalFact({ zoneMin: Number, zoneMax: Number }),
                light: vitalFact({ score: vitalScore }),
                watering: vitalFact({ score: vitalScore }),
                difficulty: vitalFact({
                    score: vitalScore,
                    level: {
                        type: String,
                        enum: ['easy', 'moderate', 'advanced'],
                        required: true,
                    },
                }),
                toxicity: vitalFact({
                    level: {
                        type: String,
                        enum: ['non-toxic', 'mildly-toxic', 'toxic'],
                        required: true,
                    },
                }),
            },
            { _id: false },
        ),
        overview: new Schema<PlantOverview>(
            {
                height: overviewDetail({ minFt: Number, maxFt: Number }),
                soil: overviewDetail(),
                semiHydro: overviewDetail({
                    compatible: { type: Boolean, required: true },
                }),
                fertilizer: overviewDetail({ npk: String }),
                fertilizerFrequency: overviewDetail(),
                nativeHabitat: overviewDetail(),
                humidity: overviewDetail({ minPct: Number }),
                temperature: overviewDetail({ minF: Number, maxF: Number }),
                growSeason: overviewDetail(),
                dailyRhythm: new Schema(
                    {
                        heading: { type: String, required: true },
                        body: { type: String, required: true },
                        highlights: { type: [String], default: [] },
                    },
                    { _id: false },
                ),
                careCadence: {
                    type: [
                        new Schema<CareCadenceItem>(
                            {
                                interval: {
                                    type: String,
                                    enum: [
                                        'weekly',
                                        'monthly',
                                        'seasonal',
                                        'as-needed',
                                    ],
                                    required: true,
                                },
                                task: { type: String, required: true },
                            },
                            { _id: false },
                        ),
                    ],
                    default: [],
                },
            },
            { _id: false },
        ),
        care: new Schema<PlantCare>(
            {
                pillars: [
                    new Schema(
                        {
                            label: { type: String, required: true },
                            stat: { type: String, required: true },
                            detail: { type: String, required: true },
                        },
                        { _id: false },
                    ),
                ],
                wateringRhythm: new Schema(
                    {
                        heading: { type: String, required: true },
                        body: { type: String, required: true },
                        tips: { type: [String], default: [] },
                    },
                    { _id: false },
                ),
                seasonalWatering: [
                    new Schema(
                        {
                            season: { type: String, required: true },
                            cadence: { type: String, required: true },
                            tip: String,
                        },
                        { _id: false },
                    ),
                ],
                routines: [
                    new Schema(
                        {
                            interval: {
                                type: String,
                                enum: [
                                    'daily',
                                    'weekly',
                                    'monthly',
                                    'seasonal',
                                ],
                                required: true,
                            },
                            steps: { type: [String], default: [] },
                        },
                        { _id: false },
                    ),
                ],
                toolkit: [
                    new Schema(
                        {
                            item: { type: String, required: true },
                            note: String,
                        },
                        { _id: false },
                    ),
                ],
            },
            { _id: false },
        ),
        issues: new Schema<PlantIssues>(
            {
                stressSignals: [
                    new Schema(
                        {
                            title: { type: String, required: true },
                            tag: String,
                            description: { type: String, required: true },
                            actions: { type: [String], default: [] },
                        },
                        { _id: false },
                    ),
                ],
                pests: [
                    new Schema(
                        {
                            name: { type: String, required: true },
                            tag: String,
                            signs: { type: String, required: true },
                            treatment: { type: String, required: true },
                            image: String,
                            pestSlug: String,
                        },
                        { _id: false },
                    ),
                ],
                stabilityChecklist: { type: [String], default: [] },
            },
            { _id: false },
        ),
    },
    { timestamps: true },
);

// One document per species/variety; genus+species+variety is the natural key
// used in routes ([genus]/[species] for the variety-less doc, plus
// [genus]/[species]/[variety] for each cultivar sharing that species' care).
PlantSchema.index({ genus: 1, species: 1, variety: 1 }, { unique: true });

// Glossary browsing / category filters.
PlantSchema.index({ tags: 1 });

// Name search. Swap for Atlas Search when fuzzy matching is needed.
PlantSchema.index(
    {
        commonNames: 'text',
        genus: 'text',
        species: 'text',
        description: 'text',
    },
    {
        weights: { commonNames: 10, genus: 8, species: 8, description: 2 },
        name: 'plant_text_search',
    },
);

export const PlantModel: Model<Plant> =
    models.Plant ?? model<Plant>('Plant', PlantSchema);
