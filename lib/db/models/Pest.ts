import { Schema, model, models, type Model } from 'mongoose';

/**
 * 1–5 intensity used to render the severity meter, same scale convention as
 * PlantVitals scores.
 */
export type PestSeverity = 1 | 2 | 3 | 4 | 5;

export interface PestAffected {
    genus: string;
    species: string;
    variety?: string;
}

export interface Pest {
    slug: string;
    name: string;
    category: string;
    categoryLabel: string;
    tag: string;
    severity: PestSeverity;
    signs: string;
    identification: string;
    lifeCycle: string;
    treatmentOrganic: string[];
    treatmentChemical: string[];
    prevention: string[];
    /**
     * Which species this pest is known to affect — computed at seed time
     * from each Plant's `issues.pests[].pestSlug` back-reference rather than
     * hand-maintained here, so it can't drift from the actual seed content.
     */
    affects: PestAffected[];
    createdAt: Date;
    updatedAt: Date;
}

const PestSchema = new Schema<Pest>(
    {
        slug: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        name: { type: String, required: true },
        category: { type: String, required: true, lowercase: true, trim: true },
        categoryLabel: { type: String, required: true },
        tag: { type: String, required: true },
        severity: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        signs: { type: String, required: true },
        identification: { type: String, required: true },
        lifeCycle: { type: String, required: true },
        treatmentOrganic: { type: [String], default: [] },
        treatmentChemical: { type: [String], default: [] },
        prevention: { type: [String], default: [] },
        affects: {
            type: [
                new Schema<PestAffected>(
                    {
                        genus: { type: String, required: true },
                        species: { type: String, required: true },
                        variety: String,
                    },
                    { _id: false },
                ),
            ],
            default: [],
        },
    },
    { timestamps: true },
);

// One document per pest; slug is the natural key used in routes.
PestSchema.index({ slug: 1 }, { unique: true });

export const PestModel: Model<Pest> =
    models.Pest ?? model<Pest>('Pest', PestSchema);
