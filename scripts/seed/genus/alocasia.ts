import type { Genus } from '../../../lib/db/models/Genus';

export const alocasia: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'alocasia',
    speciesEstimate: 90,
    description:
        'A genus of roughly 90 tropical aroids native to Southeast Asia and the western Pacific — grown for dramatic arrow- or heart-shaped leaves that range from house-sized "elephant ears" to compact jewel-toned dwarfs.',
    images: [],
    highlights: [
        'Ranges from towering garden species to compact, velvet-leaved dwarfs suited to terrariums and shelves alike.',
        'Grows from a central rhizome that regularly cycles through dormancy — leafless spells are often normal, not fatal.',
        'Several popular houseplant forms, like Alocasia Amazonica, are garden hybrids rather than wild species.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption:
                'Strictly indoors below 60°F; grown as a houseplant nearly everywhere.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Bright light keeps leaf patterning crisp; direct sun scorches leaves.',
        },
        watering: {
            score: 4,
            value: 'Evenly moist',
            caption:
                'Never soggy, never bone-dry — the rhizome rots quickly in waterlogged soil.',
        },
        difficulty: {
            score: 4,
            value: 'Advanced',
            caption:
                'Sensitive to both under- and overwatering, with a strong dormancy phase to manage.',
            level: 'advanced',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'High calcium oxalate content causes significant mouth and throat irritation.',
            level: 'toxic',
        },
    },
    nativeRange: {
        description:
            'Warm, humid understory of tropical rainforests across Southeast Asia, from Borneo and the Philippines to New Guinea and northern Australia.',
        regions: ['Borneo', 'Philippines', 'New Guinea', 'Southeast Asia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check the top 1" of soil for dryness.',
        },
        {
            interval: 'weekly',
            task: 'Inspect leaf undersides and new growth for spider mites.',
        },
        {
            interval: 'as-needed',
            task: 'Water once the top inch is dry; keep the mix evenly moist, not wet.',
        },
        {
            interval: 'monthly',
            task: 'Wipe leaves clean and feed at half strength during active growth.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Alismatales',
        family: 'Araceae',
    },
    relatedGenera: ['colocasia', 'philodendron', 'anthurium', 'caladium'],
};
