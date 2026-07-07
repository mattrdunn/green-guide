import type { Genus } from '../../../lib/db/models/Genus';

export const hibiscus: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'hibiscus',
    speciesEstimate: 300,
    description:
        'A genus of roughly 300 shrubs, trees, and herbaceous perennials found throughout the tropics and warm temperate regions worldwide — grown for large, showy, funnel-shaped flowers that typically last only a single day.',
    images: [],
    highlights: [
        'Most hibiscus flowers open in the morning and wilt by evening, but established plants push out a steady daily supply through the growing season.',
        'Hibiscus rosa-sinensis is the national flower of Malaysia and South Korea, and features on Hawaiian leis and shirts as a symbol of the tropics.',
        'Several species are grown for more than ornament — Hibiscus sabdariffa (roselle) sepals flavor teas and jams, and okra is a close relative in the same family.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Tropical species need warmth above 50°F; hardy hibiscus tolerates cooler zones.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6+ hours of direct sun for the strongest bloom production.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Water regularly through the growing season; never let it dry out completely.',
        },
        difficulty: {
            score: 2,
            value: 'Easy–moderate',
            caption: 'Vigorous once its light and water needs are met; heavy feeder for continuous bloom.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Considered safe around pets and children; flowers are even used in teas and garnishes.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Warm coastal and lowland habitats across the tropics and subtropics, with especially high diversity in East Asia, the Pacific Islands, and parts of Africa.',
        regions: ['Tropical Asia', 'Pacific Islands', 'Africa', 'Tropical Americas'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water thoroughly if the surface has dried.',
        },
        {
            interval: 'weekly',
            task: 'Deadhead spent blooms to keep new flowers coming.',
        },
        {
            interval: 'monthly',
            task: 'Feed with a bloom-boosting fertilizer during active growth.',
        },
        {
            interval: 'seasonal',
            task: 'Prune back hard in late winter to shape and encourage fresh flowering wood.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Malvales',
        family: 'Malvaceae',
    },
    relatedGenera: ['alcea', 'malva', 'abutilon', 'gossypium'],
};
