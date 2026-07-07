import type { Genus } from '../../../lib/db/models/Genus';

export const heptapleurum: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'heptapleurum',
    speciesEstimate: 150,
    description:
        'A genus of roughly 150 evergreen shrubs and trees native to tropical and subtropical Asia, the Pacific, and Australia — split from Schefflera in molecular studies, and grown widely as the umbrella-leafed dwarf schefflera houseplant.',
    images: [],
    highlights: [
        'Long sold and grown as "Schefflera," this genus was split out from Schefflera sensu lato after DNA studies showed the Asian-Pacific species formed a separate lineage.',
        'Leaves are palmately compound, radiating from a central point like the spokes of an umbrella — the source of the common name.',
        'Often starts life as an epiphyte, germinating in the canopy before sending roots down to the forest floor.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Keep above 55°F; grown as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption: 'Tolerates lower light but grows fuller and faster with more brightness.',
        },
        watering: {
            score: 2,
            value: 'Let dry between waterings',
            caption: 'Allow the top half of the soil to dry out before watering again.',
        },
        difficulty: {
            score: 2,
            value: 'Easy–moderate',
            caption: 'Forgiving overall, but sensitive to overwatering and sudden light changes.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Calcium oxalate crystals cause mouth and GI irritation if chewed by pets or children.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Tropical and subtropical rainforest from Taiwan and Hainan through Southeast Asia, New Guinea, and into northern Australia, often starting as a canopy epiphyte.',
        regions: ['Taiwan', 'Southeast Asia', 'New Guinea', 'Northern Australia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check the top few inches of soil before watering.',
        },
        {
            interval: 'weekly',
            task: 'Rotate the pot toward the light source for even, upright growth.',
        },
        {
            interval: 'monthly',
            task: 'Wipe down leaves and check leaf axils for scale or spider mites.',
        },
        {
            interval: 'seasonal',
            task: 'Prune leggy stems back to encourage bushier branching.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Apiales',
        family: 'Araliaceae',
    },
    relatedGenera: ['schefflera', 'hedera', 'fatsia', 'polyscias'],
};
