import type { Genus } from '../../../lib/db/models/Genus';

export const syngonium: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'syngonium',
    speciesEstimate: 35,
    description:
        'A genus of roughly 35 climbing and trailing aroids native to tropical Central and South America — the "arrowhead plant," named for its distinctive juvenile leaf shape, which becomes deeply lobed as the vine matures and climbs.',
    images: [],
    highlights: [
        'Leaf shape changes dramatically with age — young plants show simple arrow-shaped leaves, while mature climbing growth develops deeply divided, multi-lobed leaves.',
        'Widely bred for leaf variegation, with pink, cream, and white patterned cultivars among the most popular houseplants in the aroid family.',
        'Like many climbing aroids, it grows more vigorously and develops larger, more mature-shaped leaves when given a pole or support to climb rather than left to trail.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Keep above 60°F; grown as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption: 'Variegated cultivars need brighter light to hold their pattern.',
        },
        watering: {
            score: 2,
            value: 'Let dry between waterings',
            caption: 'Water once the top inch or two of soil has dried out.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Fast, forgiving, and easy to propagate from stem cuttings.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Calcium oxalate crystals irritate mouths and stomachs — keep away from pets and kids.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Warm, humid rainforest from Mexico through Central America and into South America, scrambling up tree trunks in dappled light.',
        regions: ['Mexico', 'Central America', 'South America'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water once the top layer has dried.',
        },
        {
            interval: 'weekly',
            task: 'Guide or tuck climbing stems onto a pole or trellis.',
        },
        {
            interval: 'monthly',
            task: 'Wipe leaves clean and check for pests along the stems.',
        },
        {
            interval: 'seasonal',
            task: 'Prune leggy growth and propagate cuttings in water.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Alismatales',
        family: 'Araceae',
    },
    relatedGenera: ['philodendron', 'epipremnum', 'monstera', 'rhaphidophora'],
};
