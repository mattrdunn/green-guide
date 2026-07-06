import { describe, expect, it } from 'vitest';

import {
    toPlantSummaries,
    type PlantSummaryDoc,
} from '@/lib/db/plantSummaries';

const doc = (overrides: Partial<PlantSummaryDoc> = {}): PlantSummaryDoc => ({
    genus: 'monstera',
    species: 'deliciosa',
    commonNames: ['Swiss Cheese Plant'],
    images: [{ url: 'plants/monstera/deliciosa/img-1.jpeg', alt: 'A leaf' }],
    tags: ['aroid'],
    vitals: {
        light: { value: 'Bright indirect' },
        difficulty: { value: 'Easy' },
    },
    ...overrides,
});

describe('toPlantSummaries', () => {
    it('projects a full document onto card data', () => {
        expect(toPlantSummaries([doc()])).toEqual([
            {
                genus: 'monstera',
                species: 'deliciosa',
                variety: null,
                commonNames: ['Swiss Cheese Plant'],
                imageKey: 'plants/monstera/deliciosa/img-1.jpeg',
                imageAlt: 'A leaf',
                tags: ['aroid'],
                light: 'Bright indirect',
                care: 'Easy',
            },
        ]);
    });

    it('fills sparse documents with safe defaults', () => {
        const [summary] = toPlantSummaries([
            { genus: 'ficus', species: 'lyrata' },
        ]);
        expect(summary).toEqual({
            genus: 'ficus',
            species: 'lyrata',
            variety: null,
            commonNames: [],
            imageKey: null,
            imageAlt: null,
            tags: [],
            light: '—',
            care: '—',
        });
    });

    it('passes through a variety slug when present', () => {
        const [summary] = toPlantSummaries([doc({ variety: 'neon' })]);
        expect(summary.variety).toBe('neon');
    });

    it('uses only the first image for the card', () => {
        const [summary] = toPlantSummaries([
            {
                ...doc(),
                images: [
                    { url: 'plants/a/b/img-1.jpeg', alt: 'first' },
                    { url: 'plants/a/b/img-2.jpeg', alt: 'second' },
                ],
            },
        ]);
        expect(summary.imageKey).toBe('plants/a/b/img-1.jpeg');
        expect(summary.imageAlt).toBe('first');
    });

    it('sorts plants with photos ahead of plants without', () => {
        const summaries = toPlantSummaries([
            doc({ genus: 'aloe', species: 'vera', images: [] }),
            doc({ genus: 'monstera', species: 'deliciosa' }),
            doc({ genus: 'ficus', species: 'lyrata', images: undefined }),
        ]);
        expect(summaries.map((s) => s.genus)).toEqual([
            'monstera',
            'aloe',
            'ficus',
        ]);
    });
});
