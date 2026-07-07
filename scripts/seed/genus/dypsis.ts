import type { Genus } from '../../../lib/db/models/Genus';

export const dypsis: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'dypsis',
    speciesEstimate: 160,
    description:
        'A genus of roughly 160 feather-leaved palms, almost entirely endemic to Madagascar — clustering, cane-like trunks topped with airy, arching fronds make this the go-to genus for a tropical indoor statement.',
    images: [],
    highlights: [
        'The vast majority of species are found nowhere outside Madagascar, many in threatened forest habitat.',
        'Clumping canes send up new shoots from the base, forming dense, multi-stemmed clusters over time.',
        'Dypsis lutescens (Areca Palm) is one of the few widely grown palms considered fully pet-safe.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption: 'Houseplant everywhere colder than USDA zone 10.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Tolerates some gentle morning sun but scorches in harsh afternoon rays.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Water when the top inch dries; avoid both soggy and bone-dry extremes.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Sensitive to tap water minerals and prone to spider mites in dry air.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Most species are safe around cats, dogs, and curious kids.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Humid coastal and highland forests across Madagascar, with a small number of species extending to the Comoros and mainland East Africa.',
        regions: ['Madagascar', 'Comoros', 'East Africa'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water with filtered or rested water if dry.',
        },
        {
            interval: 'weekly',
            task: 'Inspect frond undersides for spider mite webbing or stippling.',
        },
        {
            interval: 'monthly',
            task: 'Flush the pot with plenty of water to rinse mineral buildup.',
        },
        {
            interval: 'monthly',
            task: 'Wipe down fronds to keep dust off and stomata clear.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Arecales',
        family: 'Arecaceae',
    },
    relatedGenera: ['chamaedorea', 'howea', 'rhapis', 'phoenix'],
};
