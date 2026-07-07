import type { Genus } from '../../../lib/db/models/Genus';

export const echinocactus: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'echinocactus',
    speciesEstimate: 6,
    description:
        'A small genus of just a handful of barrel-shaped cacti native to Mexico and the southwestern United States — slow-growing, heavily ribbed spheres bristling with stout spines, best known through the iconic Golden Barrel Cactus.',
    images: [],
    highlights: [
        'One of the smallest well-known cactus genera, yet home to some of the most recognizable cacti in cultivation.',
        'Golden Barrel Cactus (Echinocactus grusonii) is now rare in the wild but common in gardens and collections worldwide.',
        'Grows extremely slowly — a specimen several feet across can be a century old.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Tolerates brief light frost once mature and kept dry.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption:
                '6-8 hours direct — the sunniest windowsill or patio spot available.',
        },
        watering: {
            score: 1,
            value: 'Very sparse',
            caption: 'Every 3-4 weeks in summer; monthly or less in winter.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Extremely low-maintenance once given enough sun.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Not poisonous, but the stiff spines are a real puncture hazard for pets and people alike.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Rocky, sun-baked semi-desert hillsides across central and northern Mexico, extending into the southwestern United States.',
        regions: ['Central Mexico', 'Northern Mexico', 'Southwestern US'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Confirm the mix has fully dried since the last watering.',
        },
        {
            interval: 'weekly',
            task: 'Glance over the body for soft spots, discoloration, or pest webbing near spine clusters.',
        },
        {
            interval: 'as-needed',
            task: 'Give a deep, sparse soak only once the mix has been dry for several days.',
        },
        {
            interval: 'seasonal',
            task: 'Rotate the pot a quarter turn to keep growth symmetrical.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Caryophyllales',
        family: 'Cactaceae',
    },
    relatedGenera: ['ferocactus', 'echinopsis', 'mammillaria', 'opuntia'],
};
