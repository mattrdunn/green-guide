import type { Genus } from '../../../lib/db/models/Genus';

export const dracaena: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'dracaena',
    speciesEstimate: 120,
    description:
        'A genus of roughly 120 shrubs and trees native to Africa, Asia, and Central America, ranging from sculptural dragon trees to the near-indestructible snake plants — folded into Dracaena from Sansevieria in 2017 based on DNA evidence.',
    images: [],
    highlights: [
        'DNA studies led botanists to merge Sansevieria (snake plants) into Dracaena in 2017, uniting two genera long grown side by side as houseplants.',
        "Dracaena cinnabari, the Dragon's Blood Tree of Socotra, bleeds a deep red resin once used as dye and varnish.",
        'Many species use CAM photosynthesis, exchanging gases at night like a cactus to conserve water.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Keep above 50°F; cold, wet soil is the fastest killer.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Low to bright, indirect',
            caption: 'Survives dim corners; grows fastest in bright light.',
        },
        watering: {
            score: 1,
            value: 'Sparse — soak & dry fully',
            caption: 'Let the mix dry completely between waterings.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'One of the most forgiving houseplant genera available.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Saponins cause nausea if chewed — keep away from pets that graze.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Dry rocky grasslands and tropical forests across sub-Saharan Africa, with outlying species in Asia, Central America, and the isolated island of Socotra.',
        regions: ['West Africa', 'East Africa', 'Socotra', 'Southeast Asia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Glance at leaf bases and stems for softness or wrinkling.',
        },
        {
            interval: 'weekly',
            task: 'Confirm the soil is fully dry before even considering water.',
        },
        {
            interval: 'as-needed',
            task: 'Water thoroughly only once the mix is bone-dry, then let it drain completely.',
        },
        {
            interval: 'monthly',
            task: 'Wipe leaves clean and remove any fully yellowed foliage at the base.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Asparagales',
        family: 'Asparagaceae',
    },
    relatedGenera: ['chlorophytum', 'yucca', 'agave', 'beaucarnea'],
};
