import type { Genus } from '../../../lib/db/models/Genus';

export const pilea: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'pilea',
    speciesEstimate: 700,
    description:
        'A genus of roughly 700 low-growing, often creeping perennials and subshrubs in the nettle family, found on moist forest floors and rock crevices throughout the tropics and subtropics — grown as houseplants for fast-filling, textured foliage rather than flowers.',
    images: [],
    highlights: [
        'Several species carry the "artillery plant" nickname for their explosive pollen or seed release, audible as a faint popping sound.',
        'Thin, tender leaves wilt dramatically the moment the soil dries, then bounce back fully within hours of a thorough watering.',
        'Fast, bushy growth means most species need regular pinching to stay full instead of leggy and sparse.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption: 'Frost-tender; grown as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Variegated and metallic-patterned leaves hold their color best with strong, filtered light.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Thin leaves have little water storage — let the surface dry slightly but never the whole pot.',
        },
        difficulty: {
            score: 2,
            value: 'Easy–moderate',
            caption:
                'Forgiving of most mistakes but needs consistent moisture and regular pinching to look its best.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Generally considered safe for cats and dogs.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Humid forest floors, streambanks, and limestone rock crevices across the tropics and subtropics, with particular diversity in Central and South America and Southeast Asia.',
        regions: ['Central America', 'South America', 'Southeast Asia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water before it dries out completely.',
        },
        {
            interval: 'weekly',
            task: 'Pinch leggy stem tips to keep growth bushy and full.',
        },
        {
            interval: 'as-needed',
            task: 'Water thoroughly once the surface starts to feel dry, and drain fully.',
        },
        {
            interval: 'monthly',
            task: 'Rotate the pot toward the light source to keep growth even.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Rosales',
        family: 'Urticaceae',
    },
    relatedGenera: ['soleirolia', 'urtica', 'boehmeria'],
};
