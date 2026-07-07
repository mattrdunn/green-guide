import type { Genus } from '../../../lib/db/models/Genus';

export const citrus: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'citrus',
    speciesEstimate: 30,
    description:
        'A genus of roughly 30 true species (with countless hybrids) native to South and Southeast Asia — evergreen trees and shrubs grown worldwide for fragrant blossoms and tart-to-sweet fruit.',
    images: [],
    highlights: [
        'Almost all commercially grown citrus — oranges, lemons, limes, grapefruit — descend from just a handful of true wild species crossed over centuries.',
        'Can flower and fruit nearly year-round in warm climates, often with blossoms and ripening fruit on the tree at once.',
        'Grafted dwarf varieties keep container-friendly size, letting growers well outside the natural hardy range grow fruiting trees indoors.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption:
                'Grows outdoors year-round in frost-free zones; container culture with winter protection elsewhere.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption:
                '8+ hours of direct light outdoors, or the brightest possible window/grow light indoors.',
        },
        watering: {
            score: 3,
            value: 'Moderate',
            caption:
                'Deep water when the top 2 inches of soil dry; avoid letting it sit in water.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Needs consistent light, feeding, and humidity to stay healthy and productive, especially indoors.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Psoralens and essential oils in leaves and rind can cause GI upset and skin photosensitivity in pets.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Believed to have originated in the foothills of the eastern Himalayas and adjacent Southeast Asia, in the border region spanning Northeast India, Myanmar, and southern China.',
        regions: [
            'Northeast India',
            'Southern China',
            'Myanmar',
            'Southeast Asia',
        ],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check topsoil moisture and water deeply if the top 2 inches are dry.',
        },
        {
            interval: 'weekly',
            task: 'Inspect leaves and stems for pests like scale or leafminers.',
        },
        {
            interval: 'monthly',
            task: 'Feed with a citrus-specific fertilizer during the growing season.',
        },
        {
            interval: 'seasonal',
            task: 'Prune for airflow and shape; bring potted trees indoors before frost.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Sapindales',
        family: 'Rutaceae',
    },
    relatedGenera: ['fortunella', 'poncirus', 'murraya'],
};
