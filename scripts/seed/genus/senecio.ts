import type { Genus } from '../../../lib/db/models/Genus';

export const senecio: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'senecio',
    speciesEstimate: 1000,
    description:
        'One of the largest genera of flowering plants, with over 1,000 species found on every continent except Antarctica — spanning weedy annuals to the trailing, bead-like succulents (String of Pearls, String of Bananas) grown as houseplants.',
    images: [],
    highlights: [
        'Senecio is one of the largest genera of flowering plants in the world, though the trailing succulent species sold as houseplants are a tiny slice of its full diversity.',
        'Some botanists have moved the succulent trailing species into a separate genus, Curio, though "Senecio" remains the far more familiar name in cultivation.',
        'The bead- and banana-shaped leaves of the trailing species are swollen to store water, with a translucent stripe that lets light reach internal photosynthetic tissue.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Keep above 40°F; grown as a houseplant outside frost-free climates.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright light',
            caption: 'Needs strong, direct-adjacent light to keep trailing growth compact.',
        },
        watering: {
            score: 1,
            value: 'Sparse — soak & dry out',
            caption: 'Let the mix dry out fully between waterings; beads deflate visibly when thirsty.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'Undemanding once given bright light and sharp drainage.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Sap irritates skin and ingestion upsets stomachs — keep strands out of reach of pets.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Extraordinarily wide-ranging genus found on every continent but Antarctica; the trailing succulent species popular as houseplants hail from the dry, rocky terrain of South Africa.',
        regions: ['South Africa', 'Worldwide (genus-wide)'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check the trailing strands for firmness before considering water.',
        },
        {
            interval: 'as-needed',
            task: 'Water thoroughly only once beads or leaves feel noticeably soft.',
        },
        {
            interval: 'monthly',
            task: 'Rotate the pot for even light exposure and trailing growth.',
        },
        {
            interval: 'seasonal',
            task: 'Trim and propagate leggy strands to keep the plant full.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Asterales',
        family: 'Asteraceae',
    },
    relatedGenera: ['curio', 'crassula', 'echeveria', 'kalanchoe'],
};
