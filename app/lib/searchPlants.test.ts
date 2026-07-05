import { describe, expect, it } from 'vitest';

import type { PlantCardData } from '@/app/components/home/types';
import { plantMatchesQuery } from '@/app/lib/searchPlants';

const plant = (overrides: Partial<PlantCardData> = {}): PlantCardData => ({
    genus: 'monstera',
    species: 'deliciosa',
    commonNames: ['Swiss Cheese Plant', 'Split-Leaf Philodendron'],
    imageKey: null,
    imageAlt: null,
    tags: [],
    light: '—',
    care: '—',
    ...overrides,
});

describe('plantMatchesQuery', () => {
    it('matches every plant when the query is empty or whitespace', () => {
        expect(plantMatchesQuery(plant(), '')).toBe(true);
        expect(plantMatchesQuery(plant(), '   ')).toBe(true);
    });

    it('matches the botanical name case-insensitively', () => {
        expect(plantMatchesQuery(plant(), 'Monstera')).toBe(true);
        expect(plantMatchesQuery(plant(), 'DELICIOSA')).toBe(true);
        expect(plantMatchesQuery(plant(), 'monstera deliciosa')).toBe(true);
    });

    it('matches any common name case-insensitively', () => {
        expect(plantMatchesQuery(plant(), 'swiss cheese')).toBe(true);
        expect(plantMatchesQuery(plant(), 'split-leaf')).toBe(true);
    });

    it('treats species slug hyphens as spaces', () => {
        const albo = plant({
            genus: 'syngonium',
            species: 'podophyllum-albo',
            commonNames: [],
        });
        expect(plantMatchesQuery(albo, 'podophyllum albo')).toBe(true);
    });

    it('ignores surrounding whitespace in the query', () => {
        expect(plantMatchesQuery(plant(), '  monstera  ')).toBe(true);
    });

    it('does not match across the boundary between two names', () => {
        expect(plantMatchesQuery(plant(), 'plant split')).toBe(false);
        expect(plantMatchesQuery(plant(), 'deliciosa swiss')).toBe(false);
    });

    it('rejects queries that match nothing', () => {
        expect(plantMatchesQuery(plant(), 'ficus')).toBe(false);
    });
});
