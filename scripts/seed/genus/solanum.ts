import type { Genus } from '../../../lib/db/models/Genus';

export const solanum: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'solanum',
    speciesEstimate: 1500,
    description:
        'One of the largest genera of flowering plants, with roughly 1,500 species distributed worldwide and centered in the Americas — including staple food crops like the tomato and potato alongside many toxic ornamental and wild relatives.',
    images: [],
    highlights: [
        'Tomatoes were long classified in the separate genus Lycopersicon before genetic studies folded them back into Solanum, where they had originally been placed by Linnaeus.',
        'Nearly every part of the tomato plant except the ripe fruit — leaves, stems, and unripe green fruit — contains solanine, a mildly toxic alkaloid.',
        'The genus also includes the potato, eggplant, and numerous wild "nightshades," making Solanum one of agriculture\'s most economically important plant groups.',
    ],
    vitals: {
        hardinessZone: {
            value: '2-11',
            caption: 'Grown as a warm-season annual in most climates; perennial only in frost-free zones.',
            zoneMin: 2,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6-8 hours of direct sun for the strongest yields.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Consistent watering prevents blossom-end rot and fruit cracking.',
        },
        difficulty: {
            score: 2,
            value: 'Easy–moderate',
            caption: 'Rewarding for beginners, though it benefits from staking and pest vigilance.',
            level: 'easy',
        },
        toxicity: {
            value: 'Toxic (foliage & stems)',
            caption: 'Leaves and stems contain solanine, toxic to pets and people — ripe fruit is safe and edible.',
            level: 'toxic',
        },
    },
    nativeRange: {
        description:
            'Enormously wide-ranging genus centered in Central and South America, with the tomato\'s wild ancestors found along the Andean foothills of Peru and Ecuador before domestication in Mesoamerica.',
        regions: ['Andes', 'Central America', 'Worldwide (cultivated)'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water deeply at the base.',
        },
        {
            interval: 'weekly',
            task: 'Tie or clip new growth to a stake or cage as it climbs.',
        },
        {
            interval: 'monthly',
            task: 'Feed with a balanced or fruiting-plant fertilizer during the growing season.',
        },
        {
            interval: 'as-needed',
            task: 'Pinch off suckers and harvest ripe fruit to keep production going.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Solanales',
        family: 'Solanaceae',
    },
    relatedGenera: ['capsicum', 'physalis', 'nicotiana', 'petunia'],
};
