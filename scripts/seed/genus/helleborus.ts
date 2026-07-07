import type { Genus } from '../../../lib/db/models/Genus';

export const helleborus: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'helleborus',
    speciesEstimate: 20,
    description:
        'A genus of roughly 20 evergreen or semi-evergreen perennials native to Europe and western Asia, prized for nodding, saucer-shaped winter and early-spring blooms held above leathery, deeply divided foliage.',
    images: [],
    highlights: [
        'Hellebores flower in the depths of winter and earliest spring, often pushing blooms up through snow before most other perennials break dormancy.',
        'Despite the common name "Christmas rose" and "Lenten rose," hellebores are unrelated to true roses — they belong to the buttercup family.',
        'Every part of the plant is toxic, which makes it one of the few reliably deer- and rabbit-proof flowering perennials.',
    ],
    vitals: {
        hardinessZone: {
            value: '4-9',
            caption: 'Fully hardy in temperate winters; foliage stays evergreen in milder zones.',
            zoneMin: 4,
            zoneMax: 9,
        },
        light: {
            score: 2,
            value: 'Partial to full shade',
            caption: 'Dappled woodland light suits it best; too much sun scorches the leaves.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Keep soil consistently moist but never waterlogged, especially through bloom.',
        },
        difficulty: {
            score: 2,
            value: 'Easy, once established',
            caption: 'Slow to settle in but reliably low-maintenance for years afterward.',
            level: 'easy',
        },
        toxicity: {
            value: 'Toxic',
            caption: 'All parts contain cardiac glycosides — dangerous if ingested by pets or people.',
            level: 'toxic',
        },
    },
    nativeRange: {
        description:
            'Deciduous woodland floors and rocky, humus-rich slopes across Europe and western Asia, from the Balkans and the Alps into Turkey and the Caucasus.',
        regions: ['Southern Europe', 'Balkans', 'Western Asia', 'Caucasus'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture beneath the canopy of surrounding plants.',
        },
        {
            interval: 'seasonal',
            task: 'Cut back old, tattered leaves in late winter just as new flower stalks emerge.',
        },
        {
            interval: 'seasonal',
            task: 'Top-dress with compost after flowering to feed the coming year’s growth.',
        },
        {
            interval: 'as-needed',
            task: 'Deadhead spent blooms unless letting seed pods self-sow.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Ranunculales',
        family: 'Ranunculaceae',
    },
    relatedGenera: ['aquilegia', 'anemone', 'ranunculus', 'delphinium'],
};
