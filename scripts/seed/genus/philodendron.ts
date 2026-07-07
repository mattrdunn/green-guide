import type { Genus } from '../../../lib/db/models/Genus';

export const philodendron: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'philodendron',
    speciesEstimate: 500,
    description:
        'A genus of roughly 500 climbing, trailing, and self-heading species native to the American tropics — among the largest and most popular groups of houseplants, prized for glossy foliage and a famously easygoing nature.',
    images: [],
    highlights: [
        'The name comes from Greek for "tree-loving," describing how many species climb host trees toward the canopy using aerial roots.',
        'Leaf shape often changes dramatically between juvenile and mature growth on the same plant, a trait called leaf dimorphism.',
        'One of the most reliable houseplant genera for propagation — nearly every trailing species roots readily from a stem cutting in water.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Keep above 55°F; grown as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption: 'Tolerates lower light but grows faster and fuller in brighter conditions.',
        },
        watering: {
            score: 2,
            value: 'Let dry between waterings',
            caption: 'Water once the top inch or two of soil has dried out.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'One of the most forgiving and beginner-friendly houseplant genera.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Calcium oxalate crystals irritate mouths and stomachs — keep away from pets and kids.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Understory to mid-canopy of tropical rainforest across Central America, the Caribbean, and South America, climbing tree trunks in warm, humid, dappled light.',
        regions: ['Central America', 'Caribbean', 'South America'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water once the top layer has dried.',
        },
        {
            interval: 'weekly',
            task: 'Guide or tuck climbing stems onto a pole or trellis.',
        },
        {
            interval: 'monthly',
            task: 'Wipe leaves clean and check for pests hiding along stems.',
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
    relatedGenera: ['monstera', 'epipremnum', 'rhaphidophora', 'syngonium'],
};
