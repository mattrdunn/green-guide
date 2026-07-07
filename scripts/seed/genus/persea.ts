import type { Genus } from '../../../lib/db/models/Genus';

export const persea: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'persea',
    speciesEstimate: 150,
    description:
        'A genus of roughly 150 evergreen trees native to Central America, the Caribbean, and parts of Macaronesia and East Asia — cultivated worldwide chiefly for the avocado, one of the few fruit trees whose leaves and pit are toxic to pets.',
    images: [],
    highlights: [
        'The avocado (Persea americana) is a fruit botanically, though it\'s used as a vegetable in most cuisines — one of the few fruits with more fat than sugar.',
        'Persin, the toxin responsible for avocado\'s pet danger, is concentrated in the leaves, bark, and pit, and can be fatal to birds and some livestock even though the flesh is safe for people.',
        'Commercial avocado orchards rely almost entirely on grafted cultivars, since seedling trees are highly variable and slow to bear fruit.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Cold-sensitive; young trees need protection below 30°F.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6+ hours of direct sun for healthy fruiting trees.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Deep, regular watering with sharp drainage — roots are sensitive to waterlogging.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Straightforward as foliage, but reliable fruiting takes patience, space, and often a second tree.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Toxic',
            caption: 'Persin in leaves, bark, and the pit causes vomiting and diarrhea in pets, and can be fatal to birds.',
            level: 'toxic',
        },
    },
    nativeRange: {
        description:
            'Highland cloud forests and mid-elevation slopes of Central Mexico and Central America, with rich soil, warmth, and reliable rainfall; related species extend into the Caribbean and East Asia.',
        regions: ['Central Mexico', 'Central America', 'Caribbean'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture, especially for potted or young trees.',
        },
        {
            interval: 'monthly',
            task: 'Feed with a citrus or fruit-tree fertilizer during active growth.',
        },
        {
            interval: 'seasonal',
            task: 'Prune to shape and remove crossing or storm-damaged branches.',
        },
        {
            interval: 'seasonal',
            task: 'Protect young trees from frost with covers or mulch in cooler zones.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Laurales',
        family: 'Lauraceae',
    },
    relatedGenera: ['cinnamomum', 'laurus', 'ocotea'],
};
