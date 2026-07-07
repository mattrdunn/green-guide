import type { Genus } from '../../../lib/db/models/Genus';

export const musa: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'musa',
    speciesEstimate: 70,
    description:
        'A genus of roughly 70 giant, fast-growing herbaceous perennials native to tropical and subtropical Asia and northern Australia — best known for the towering paddle-shaped leaves and edible fruit of the banana.',
    images: [],
    highlights: [
        'What looks like a tree trunk is actually a "pseudostem" — tightly overlapping leaf bases with no true woody tissue.',
        'Nearly all commercially grown bananas are sterile, seedless hybrids propagated by dividing suckers rather than by seed.',
        'A single pseudostem flowers and fruits only once, then dies back as new suckers rise to take its place.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Foliage dies back below 32°F; roots survive light frost with heavy mulch.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6+ hours of direct sun for vigorous growth and fruiting.',
        },
        watering: {
            score: 4,
            value: 'Consistently moist',
            caption: 'Heavy drinker — water often enough that soil never fully dries in the growing season.',
        },
        difficulty: {
            score: 2,
            value: 'Easy, given space and warmth',
            caption: 'Fast and forgiving where it has room to spread and enough heat.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around cats and dogs, though large leaves can cause mild GI upset if chewed in quantity.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Tropical rainforest understory and forest clearings across Southeast Asia, the Indian subcontinent, and northern Australia, with warmth, high humidity, and abundant year-round rainfall.',
        regions: ['Southeast Asia', 'South Asia', 'Northern Australia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Water deeply enough to keep the root zone consistently moist.',
        },
        {
            interval: 'weekly',
            task: 'Remove any yellowing or wind-torn leaves at the base.',
        },
        {
            interval: 'monthly',
            task: 'Feed with a high-potassium fertilizer during active growth.',
        },
        {
            interval: 'seasonal',
            task: 'Divide and remove excess suckers to control clump size.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Zingiberales',
        family: 'Musaceae',
    },
    relatedGenera: ['ensete', 'strelitzia', 'heliconia', 'ravenala'],
};
