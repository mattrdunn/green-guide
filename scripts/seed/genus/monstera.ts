import type { Genus } from '../../../lib/db/models/Genus';

export const monstera: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'monstera',
    speciesEstimate: 45,
    description:
        'A genus of roughly 45 evergreen, hemiepiphytic climbers native to tropical forests from southern Mexico through Central America into northern South America — known for the fenestrated leaves it develops while climbing toward the canopy.',
    images: [],
    highlights: [
        'Seedlings germinate on the forest floor and climb toward the canopy via aerial roots, developing signature fenestrations as they mature.',
        'Fenestration is thought to reduce wind resistance and dapple light onto lower leaves in dense canopy.',
        'Widely naturalized outside its native range in Hawaii, Southeast Asia, and the Caribbean.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Keep above 60°F year-round.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption: 'Morning sun, filtered afternoons.',
        },
        watering: {
            score: 2,
            value: 'Soak & dry out',
            caption: 'Water until runoff, then wait for the top 2" to dry.',
        },
        difficulty: {
            score: 2,
            value: 'Easy–moderate',
            caption: 'Most species tolerate beginner mistakes; variegated cultivars need brighter light.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Calcium oxalate crystals — keep away from pets and curious kids.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Understory to mid-canopy of lowland and montane tropical rainforest, from southern Mexico and Central America into Colombia and northern South America.',
        regions: ['Mexico', 'Central America', 'Colombia', 'N. South America'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Rotate the pot a quarter turn for even light exposure.',
        },
        {
            interval: 'weekly',
            task: 'Check moisture halfway down the planter.',
        },
        {
            interval: 'as-needed',
            task: 'Water thoroughly, then let the top 2" of soil dry out.',
        },
        {
            interval: 'monthly',
            task: 'Inspect aerial roots and tuck into the moss pole.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Alismatales',
        family: 'Araceae',
    },
    relatedGenera: ['philodendron', 'epipremnum', 'rhaphidophora', 'scindapsus'],
};
