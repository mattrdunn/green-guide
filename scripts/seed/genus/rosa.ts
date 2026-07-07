import type { Genus } from '../../../lib/db/models/Genus';

export const rosa: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'rosa',
    speciesEstimate: 150,
    description:
        'A genus of roughly 150 wild species of thorny shrubs and climbers native to the temperate Northern Hemisphere, the ancestors of thousands of cultivated hybrids grown worldwide for fragrant, layered blooms.',
    images: [],
    highlights: [
        'Nearly every modern garden rose — hybrid teas, floribundas, climbers — descends from a small handful of wild species crossed and re-crossed over centuries of breeding.',
        'The rose hip left behind after a spent bloom is the plant\'s fruit, rich in vitamin C and used in teas, jams, and syrups.',
        'Fossil evidence places roses in the Northern Hemisphere for over 30 million years, making them one of the older flowering plant lineages still widely cultivated.',
    ],
    vitals: {
        hardinessZone: {
            value: '3-9',
            caption: 'Hardiness varies widely by cultivar and species parentage.',
            zoneMin: 3,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6+ hours of direct sun for strong growth and the most blooms.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Deep, regular watering at the base — wet foliage invites fungal disease.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Rewarding but demands regular feeding, pruning, and disease watchfulness.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Not toxic to pets or people — thorns cause puncture wounds, but the plant carries no chemical toxicity.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Temperate woodland edges, hedgerows, and scrubland across the Northern Hemisphere, with major centers of wild diversity in East Asia, Europe, and North America.',
        regions: ['East Asia', 'Europe', 'North America', 'Middle East'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water deeply at the base if dry.',
        },
        {
            interval: 'weekly',
            task: 'Inspect leaves for black spot, powdery mildew, or aphids.',
        },
        {
            interval: 'monthly',
            task: 'Feed with a rose-specific fertilizer through the growing season.',
        },
        {
            interval: 'seasonal',
            task: 'Prune hard in late winter to remove dead wood and shape new growth.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Rosales',
        family: 'Rosaceae',
    },
    relatedGenera: ['rubus', 'fragaria', 'prunus', 'malus'],
};
