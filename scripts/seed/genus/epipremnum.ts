import type { Genus } from '../../../lib/db/models/Genus';

export const epipremnum: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'epipremnum',
    speciesEstimate: 15,
    description:
        'A small genus of roughly 15 climbing aroids native to the Solomon Islands and Southeast Asia — the pothos genus, whose glossy, variegated, nearly indestructible vines are among the most widely grown houseplants in the world.',
    images: [],
    highlights: [
        'Epipremnum aureum (Golden Pothos), one of just a handful of species, is grown far more widely worldwide than any other member of the genus.',
        'Vines climb tree trunks in the wild, with leaves growing dramatically larger once given something to climb.',
        'Any node cut into water roots within a couple of weeks, making the genus famously easy to propagate.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Frost-tender; keep above 50°F year-round.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Low to bright, indirect',
            caption:
                'Survives low light but variegation is boldest in brighter spots.',
        },
        watering: {
            score: 2,
            value: 'Dry-ish between drinks',
            caption:
                'Let the top 1-2" dry before watering; tolerant of missed waterings.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'About as forgiving a houseplant genus as they come.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Calcium oxalate crystals irritate mouths and stomachs — keep away from pets and kids.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Warm, humid tropical forest understory across the Solomon Islands and Southeast Asia, where vines climb tree trunks toward brighter canopy gaps.',
        regions: ['Solomon Islands', 'Southeast Asia', 'Western Pacific'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check the top 1-2" of soil for dryness.',
        },
        {
            interval: 'weekly',
            task: 'Scan leaves and new growth for pests.',
        },
        {
            interval: 'as-needed',
            task: 'Water once the top 1-2" are dry.',
        },
        {
            interval: 'monthly',
            task: 'Pinch leggy vines and wipe leaves clean of dust.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Alismatales',
        family: 'Araceae',
    },
    relatedGenera: ['philodendron', 'monstera', 'scindapsus', 'rhaphidophora'],
};
