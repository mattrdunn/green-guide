import type { Genus } from '../../../lib/db/models/Genus';

export const agave: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'agave',
    speciesEstimate: 250,
    description:
        "A genus of roughly 250 rosette-forming succulents native to the arid Americas — from Mexico's highlands through the southwestern United States and Caribbean — built to thrive on minimal water and maximum sun.",
    images: [],
    highlights: [
        'Most species are monocarpic: a rosette blooms once on a towering flower spike, then declines while offsetting pups carry the plant on.',
        'Thick, waxy leaves store water for months, letting agaves shrug off drought that would kill most other plants.',
        'Long cultivated for fiber, food, and spirits (including tequila and mezcal) across their native range.',
    ],
    vitals: {
        hardinessZone: {
            value: '8-11',
            caption:
                'Most species are frost-tender; a few hardy types tolerate colder zones.',
            zoneMin: 8,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption:
                '6+ hours of direct light outdoors, or the brightest window if potted.',
        },
        watering: {
            score: 1,
            value: 'Drought-tolerant',
            caption:
                'Deep soak every 2-4 weeks; let the mix dry fully between waterings.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption:
                'Nearly indestructible once sited in sun with sharp drainage.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Sap saponins irritate skin, mouths, and stomachs — keep pets from chewing leaves.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Rocky, arid slopes and deserts from the southwestern United States through Mexico and Central America into the Caribbean, with the greatest diversity in Mexico.',
        regions: ['Mexico', 'Southwestern US', 'Central America', 'Caribbean'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check the rosette center and base for soft, discolored tissue.',
        },
        {
            interval: 'weekly',
            task: 'Confirm the soil has dried fully since the last watering.',
        },
        {
            interval: 'as-needed',
            task: 'Give a deep, sparse soak only after the mix is completely dry.',
        },
        {
            interval: 'seasonal',
            task: 'Separate rooted pups from the base once they have roots of their own.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Asparagales',
        family: 'Asparagaceae',
    },
    relatedGenera: ['yucca', 'manfreda', 'furcraea', 'dasylirion'],
};
