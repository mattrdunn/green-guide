import type { Genus } from '../../../lib/db/models/Genus';

export const allium: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'allium',
    speciesEstimate: 700,
    description:
        'A genus of roughly 700 bulbous perennials spanning the Northern Hemisphere, including culinary staples like onion and garlic alongside sculptural ornamentals grown for their globe-shaped flower heads.',
    images: [],
    highlights: [
        'The genus that gives us onion, garlic, leek, chive, and shallot, alongside dozens of purely ornamental species.',
        'Sulfur compounds responsible for the oniony scent double as natural deer and rabbit deterrents in the garden.',
        'Ornamental species often flower in dense, perfectly round globes made up of hundreds of tiny star-shaped florets.',
    ],
    vitals: {
        hardinessZone: {
            value: '3-9',
            caption:
                'Most ornamental species need a cold winter dormancy to rebloom well.',
            zoneMin: 3,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption:
                '6+ hours of direct sun keeps stems sturdy and flowers full-sized.',
        },
        watering: {
            score: 2,
            value: 'Dry to moderate',
            caption:
                'Water during active spring growth, then let bulbs rest dry through summer dormancy.',
        },
        difficulty: {
            score: 1,
            value: 'Very easy',
            caption:
                'Plant at the right depth in well-drained soil and it largely takes care of itself.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Sulfur compounds shared with culinary onions can upset pets in quantity.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Dry, rocky slopes and mountain foothills across the temperate Northern Hemisphere, with the greatest diversity in Central Asia and the Mediterranean.',
        regions: ['Central Asia', 'Mediterranean', 'Europe', 'North America'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture during spring growth if rainfall is light.',
        },
        {
            interval: 'as-needed',
            task: 'Deadhead or leave seed heads for dried-flower interest, as preferred.',
        },
        {
            interval: 'seasonal',
            task: 'Feed lightly at fall planting or early spring emergence.',
        },
        {
            interval: 'seasonal',
            task: 'Lift and divide crowded clumps every several years once foliage dies back.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Asparagales',
        family: 'Amaryllidaceae',
    },
    relatedGenera: ['tulipa', 'narcissus', 'crocus', 'hyacinthus'],
};
