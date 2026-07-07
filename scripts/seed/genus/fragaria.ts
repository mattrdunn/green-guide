import type { Genus } from '../../../lib/db/models/Genus';

export const fragaria: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'fragaria',
    speciesEstimate: 24,
    description:
        'A genus of roughly 24 low, spreading perennials native to the temperate Northern Hemisphere and parts of South America — the strawberries, prized for trifoliate leaves, white spring flowers, and sweet, seed-studded fruit.',
    images: [],
    highlights: [
        'The cultivated Garden Strawberry is itself a hybrid of two wild American species, first bred in 18th-century France.',
        'Nearly all species spread via runners, making the genus function as an edible groundcover as much as a fruit crop.',
        'Fruit, leaves, and runners across the genus are considered safe for pets and children.',
    ],
    vitals: {
        hardinessZone: {
            value: '3-9',
            caption:
                'Wild species are often hardier than cultivated hybrids; crowns go dormant and regrow each spring.',
            zoneMin: 3,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6-10 hours direct for the sweetest, most abundant fruit.',
        },
        watering: {
            score: 4,
            value: 'Consistent moisture',
            caption:
                'Shallow roots dry out fast — water regularly, especially while fruiting.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption:
                'Forgiving and productive once given sun and steady moisture.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Fruit, leaves, and runners are all safe around pets and kids.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Meadows, woodland edges, and coastal bluffs across temperate North America, Europe, and Asia, with a scattering of species reaching into the Andes of South America.',
        regions: ['North America', 'Europe', 'East Asia', 'South America'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water if the top inch has dried out.',
        },
        {
            interval: 'weekly',
            task: 'Harvest ripe berries promptly to discourage pests and rot.',
        },
        {
            interval: 'weekly',
            task: 'Trim or redirect runners depending on whether you want the bed to spread.',
        },
        {
            interval: 'seasonal',
            task: 'Renovate the bed after harvest — remove old leaves and thin crowded crowns.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Rosales',
        family: 'Rosaceae',
    },
    relatedGenera: ['rubus', 'potentilla', 'rosa'],
};
