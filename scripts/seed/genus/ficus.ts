import type { Genus } from '../../../lib/db/models/Genus';

export const ficus: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'ficus',
    speciesEstimate: 850,
    description:
        'A pantropical genus of roughly 850 trees, shrubs, and vines — including the edible fig, sprawling banyans, and the glossy-leaved indoor trees like Rubber Plant and Fiddle-Leaf Fig that anchor countless living rooms.',
    images: [],
    highlights: [
        'Many species rely on a tightly co-evolved relationship with fig wasps for pollination, unique among flowering plants.',
        'Banyan-type species send down aerial roots that thicken into trunks, eventually forming vast multi-trunked groves.',
        'Nearly every member shares a milky latex sap, historically tapped for early rubber production in Ficus elastica.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption:
                'Most popular houseplant species are frost-tender; a few figs tolerate much colder climates.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Most species tolerate some direct sun; variegated forms need the extra light.',
        },
        watering: {
            score: 2,
            value: 'Soak & dry out',
            caption:
                'Water deeply when the top 2" dries — thick leaves and stems buffer missed waterings.',
        },
        difficulty: {
            score: 2,
            value: 'Easy to moderate',
            caption:
                'Generally forgiving, though some species are famously sensitive to relocation and drafts.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Milky latex sap irritates skin, mouths, and stomachs — mind pets and wash up after pruning.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Tropical and subtropical forests across Asia, Africa, the Americas, and Australia, with the greatest species diversity in Southeast Asian rainforests.',
        regions: [
            'Southeast Asia',
            'India',
            'West Africa',
            'Tropical Americas',
        ],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check the top 2" of soil; skip watering if any moisture remains.',
        },
        {
            interval: 'weekly',
            task: 'Wipe a few leaves with a damp cloth to clear dust.',
        },
        {
            interval: 'weekly',
            task: 'Glance at stems and leaf undersides for scale and mealybugs.',
        },
        {
            interval: 'monthly',
            task: 'Wipe every leaf with a damp cloth to restore the gloss.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Rosales',
        family: 'Moraceae',
    },
    relatedGenera: ['morus', 'artocarpus', 'dorstenia', 'maclura'],
};
