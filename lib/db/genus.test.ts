import { describe, expect, it } from 'vitest';

import { toGenusSpeciesItems, type GenusSpeciesPlantDoc } from '@/lib/db/genus';

const doc = (
    overrides: Partial<GenusSpeciesPlantDoc> = {},
): GenusSpeciesPlantDoc => ({
    species: 'deliciosa',
    commonNames: ['Swiss Cheese Plant'],
    description: 'Architectural leaves and forgiving care.',
    images: [{ url: 'plants/monstera/deliciosa/img-1.jpeg', alt: 'Leaf' }],
    vitals: {
        light: { value: 'Bright, indirect' },
        watering: { value: 'Soak & dry out' },
        hardinessZone: { value: '9-11' },
    },
    overview: {
        humidity: { value: '60%+ ideal' },
        nativeHabitat: { value: 'Southern Mexico' },
    },
    ...overrides,
});

describe('toGenusSpeciesItems', () => {
    it('projects a variety-less document as a species card', () => {
        expect(toGenusSpeciesItems('monstera', [doc()])).toEqual([
            {
                genus: 'monstera',
                species: 'deliciosa',
                variety: null,
                type: 'species',
                commonName: 'Swiss Cheese Plant',
                description: 'Architectural leaves and forgiving care.',
                imageKey: 'plants/monstera/deliciosa/img-1.jpeg',
                imageAlt: 'Leaf',
                light: 'Bright, indirect',
                watering: 'Soak & dry out',
                humidity: '60%+ ideal',
                zone: '9-11',
                origin: 'Southern Mexico',
            },
        ]);
    });

    it('projects a document with a variety as a cultivar card', () => {
        const [item] = toGenusSpeciesItems('monstera', [
            doc({ variety: 'thai-constellation', species: 'deliciosa' }),
        ]);
        expect(item.type).toBe('cultivar');
        expect(item.variety).toBe('thai-constellation');
    });

    it('fills sparse documents with safe defaults', () => {
        const [item] = toGenusSpeciesItems('monstera', [
            { species: 'adansonii' },
        ]);
        expect(item).toEqual({
            genus: 'monstera',
            species: 'adansonii',
            variety: null,
            type: 'species',
            commonName: null,
            description: '',
            imageKey: null,
            imageAlt: null,
            light: '—',
            watering: '—',
            humidity: '—',
            zone: '—',
            origin: '—',
        });
    });
});
