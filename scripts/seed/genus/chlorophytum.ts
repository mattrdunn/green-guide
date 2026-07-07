import type { Genus } from '../../../lib/db/models/Genus';

export const chlorophytum: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'chlorophytum',
    speciesEstimate: 200,
    description:
        'A genus of roughly 200 perennials native to tropical and southern Africa, best known through the ubiquitous Spider Plant — forgiving, fast-propagating houseplants with arching, often variegated ribbon-like leaves.',
    images: [],
    highlights: [
        "Chlorophytum comosum was tested in NASA's Clean Air Study as an effective filter for common indoor air pollutants.",
        'Many species send out long stolons tipped with baby plantlets that root readily, making the genus famously easy to propagate.',
        'Tolerant of low light and irregular watering, making it a frequent first houseplant recommendation.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption:
                'Perennial outdoors only in frost-free climates; a houseplant almost everywhere else.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 2,
            value: 'Low to bright indirect',
            caption:
                'Tolerates low light well; brighter indirect light produces fuller growth and stronger variegation.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Water when the top inch of soil dries; tolerates occasional missed waterings.',
        },
        difficulty: {
            score: 1,
            value: 'Very easy',
            caption:
                'Among the most forgiving houseplant genera, tolerant of a wide range of conditions.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Safe around pets and children, though leaves can mildly affect cats in large quantities.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Rocky, semi-shaded coastal forests and grasslands across tropical and southern Africa, with a smaller number of species extending into Asia and Australia.',
        regions: ['South Africa', 'Tropical Africa', 'Madagascar', 'Asia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture; water once the top inch is dry.',
        },
        {
            interval: 'monthly',
            task: 'Feed at diluted strength during active growth.',
        },
        {
            interval: 'as-needed',
            task: 'Trim brown leaf tips and remove or root plantlets as desired.',
        },
        {
            interval: 'seasonal',
            task: 'Repot once roots fill the pot, usually every 1-2 years.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Asparagales',
        family: 'Asparagaceae',
    },
    relatedGenera: ['dracaena', 'agave', 'hosta', 'liriope'],
};
