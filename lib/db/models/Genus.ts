import { Schema, model, models, type Model } from 'mongoose';
import type { PlantImage, VitalScore } from './Plant';

export interface GenusVitalFact {
    value: string;
    caption?: string;
}

/**
 * Genus-level vitals — same 1–5 scale convention as PlantVitals, but
 * representative of the genus as a whole rather than one species. Difficulty
 * only surfaces in the hero quick-facts row (species/light/water/difficulty);
 * the Overview tab's vital grid shows zone/light/watering/toxicity.
 */
export interface GenusVitals {
    hardinessZone: GenusVitalFact & { zoneMin?: number; zoneMax?: number };
    light: GenusVitalFact & { score: VitalScore };
    watering: GenusVitalFact & { score: VitalScore };
    difficulty: GenusVitalFact & {
        score: VitalScore;
        level: 'easy' | 'moderate' | 'advanced';
    };
    toxicity: GenusVitalFact & { level: 'non-toxic' | 'mildly-toxic' | 'toxic' };
}

export interface GenusNativeRange {
    description: string;
    regions: string[];
}

export interface GenusCareCadenceItem {
    interval: 'weekly' | 'monthly' | 'seasonal' | 'as-needed';
    task: string;
}

export interface GenusTaxonomy {
    kingdom: string;
    order: string;
    family: string;
}

export interface Genus {
    /** Natural key, lowercase — matches Plant.genus and the [genus] route param. */
    genus: string;
    /** Real-world documented species count for the genus (not this library's coverage). */
    speciesEstimate: number;
    description: string;
    images: PlantImage[];
    highlights: string[];
    vitals: GenusVitals;
    nativeRange: GenusNativeRange;
    careCadence: GenusCareCadenceItem[];
    taxonomy: GenusTaxonomy;
    /** Genus slugs for the "Related genera" panel — linked even if unseeded. */
    relatedGenera: string[];
    createdAt: Date;
    updatedAt: Date;
}

const vitalFact = (extra: Record<string, unknown> = {}) =>
    new Schema(
        {
            value: { type: String, required: true },
            caption: String,
            ...extra,
        },
        { _id: false },
    );

const vitalScore = {
    type: Number,
    required: true,
    min: 1,
    max: 5,
};

const GenusSchema = new Schema<Genus>(
    {
        genus: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        speciesEstimate: { type: Number, required: true },
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
        highlights: { type: [String], default: [] },
        vitals: new Schema<GenusVitals>(
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
        nativeRange: new Schema<GenusNativeRange>(
            {
                description: { type: String, required: true },
                regions: { type: [String], default: [] },
            },
            { _id: false },
        ),
        careCadence: {
            type: [
                new Schema<GenusCareCadenceItem>(
                    {
                        interval: {
                            type: String,
                            enum: ['weekly', 'monthly', 'seasonal', 'as-needed'],
                            required: true,
                        },
                        task: { type: String, required: true },
                    },
                    { _id: false },
                ),
            ],
            default: [],
        },
        taxonomy: new Schema<GenusTaxonomy>(
            {
                kingdom: { type: String, required: true },
                order: { type: String, required: true },
                family: { type: String, required: true },
            },
            { _id: false },
        ),
        relatedGenera: { type: [String], default: [], lowercase: true, trim: true },
    },
    { timestamps: true },
);

// One document per genus; genus is the natural key used in the [genus] route.
GenusSchema.index({ genus: 1 }, { unique: true });

export const GenusModel: Model<Genus> =
    models.Genus ?? model<Genus>('Genus', GenusSchema);
