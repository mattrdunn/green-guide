import type { Genus } from '../../../lib/db/models/Genus';

export const rhaphidophora: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'rhaphidophora',
    speciesEstimate: 100,
    description:
        'A genus of roughly 100 climbing aroids native to Southeast Asia, tropical Africa, Australia, and the Pacific islands — closely related to Monstera, and known for developing similar leaf fenestrations as vines mature and climb.',
    images: [],
    highlights: [
        'Rhaphidophora tetrasperma is frequently sold as a "Mini Monstera," though it belongs to an entirely different genus that just happens to develop similar splits.',
        'Like Monstera, mature leaves fenestrate only once the vine finds a support to climb — plants left to trail rarely split as dramatically.',
        'Some species grow enormous in the wild, with mature leaves reaching several feet across high in the rainforest canopy.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Keep above 60°F; grown as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption: 'Bright light produces larger, more fenestrated leaves.',
        },
        watering: {
            score: 2,
            value: 'Let dry between waterings',
            caption: 'Water once the top inch or two of soil has dried out.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Fast-growing and forgiving, especially given something to climb.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Calcium oxalate crystals in the sap cause mouth and skin irritation if chewed or handled carelessly.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Humid tropical forest understory across Southeast Asia, especially Thailand and Malaysia, climbing tree trunks in dappled light; related species range into Africa, Australia, and the Pacific.',
        regions: ['Southeast Asia', 'Malaysia', 'Thailand'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water once the top layer has dried.',
        },
        {
            interval: 'weekly',
            task: 'Guide climbing stems onto a moss pole or trellis for larger leaves.',
        },
        {
            interval: 'monthly',
            task: 'Wipe leaves clean and inspect the undersides for pests.',
        },
        {
            interval: 'seasonal',
            task: 'Propagate leggy stems by cutting and rooting in water.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Alismatales',
        family: 'Araceae',
    },
    relatedGenera: ['monstera', 'epipremnum', 'philodendron', 'scindapsus'],
};
