import type { Genus } from '../../../lib/db/models/Genus';

export const zamioculcas: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'zamioculcas',
    speciesEstimate: 1,
    description:
        'A monotypic genus containing a single species, Zamioculcas zamiifolia, native to dry grasslands and forest floors of East Africa — known as the ZZ plant for its glossy, waxy foliage and near-indestructible tolerance of neglect.',
    images: [],
    highlights: [
        'The genus contains only one known species, making the ZZ plant one of the few widely sold houseplants without close cultivated relatives in its own genus.',
        'Thick, potato-like rhizomes beneath the soil store water and energy, letting the plant shrug off months of drought and low light.',
        'Glossy leaflets are so uniformly waxy that ZZ plants are sometimes mistaken for artificial plants at a glance.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Keep above 45°F; grown as a houseplant outside frost-free zones.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 1,
            value: 'Low to bright, indirect',
            caption: 'Tolerates dim corners well; grows fastest with more light.',
        },
        watering: {
            score: 1,
            value: 'Very sparse',
            caption: 'Let the mix dry out completely — rhizomes store plenty of reserve water.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'One of the most forgiving houseplants available, tolerant of low light and irregular watering.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Contains calcium oxalate crystals — irritating if chewed by pets or kids.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Seasonally dry grasslands and forest floors from Kenya to northeastern South Africa, built to withstand long stretches without rain.',
        regions: ['East Africa', 'Southern Africa'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Confirm the soil has fully dried before even considering water.',
        },
        {
            interval: 'monthly',
            task: 'Wipe leaves clean to keep their natural gloss dust-free.',
        },
        {
            interval: 'as-needed',
            task: 'Water thoroughly only once the mix is bone-dry, then let it drain completely.',
        },
        {
            interval: 'seasonal',
            task: 'Divide crowded rhizomes when repotting to propagate or manage size.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Alismatales',
        family: 'Araceae',
    },
    relatedGenera: ['dracaena', 'philodendron', 'epipremnum', 'monstera'],
};
