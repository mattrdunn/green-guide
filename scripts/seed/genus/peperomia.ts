import type { Genus } from '../../../lib/db/models/Genus';

export const peperomia: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'peperomia',
    speciesEstimate: 1600,
    description:
        'A genus of over 1,000 compact, semi-succulent epiphytes and terrestrial perennials in the pepper family, native mostly to tropical Central and South America with pockets in Africa and Asia — grown for an unusually wide range of leaf textures, from glossy and thick to deeply corrugated.',
    images: [],
    highlights: [
        'Thick, water-storing leaves and petioles let most species shrug off missed waterings — a rare succulent-adjacent habit in a genus of shade-lovers.',
        'One of the few large houseplant genera considered non-toxic to cats and dogs, making it a common recommendation for pet owners.',
        'Tiny, tightly packed flowers form thin, upright "rat-tail" spikes rather than showy blooms — the foliage is always the draw.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Frost-tender; grown as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Medium to bright, indirect',
            caption:
                'Understory plants that adapt to average room light but color and pattern sharpen with more brightness.',
        },
        watering: {
            score: 2,
            value: 'Let dry between drinks',
            caption:
                'Succulent-ish leaves and stems store water — overwatering is by far the most common way to lose one.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption:
                'Compact, slow-growing, and forgiving of an inconsistent watering schedule.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Considered safe for cats, dogs, and curious kids — a rare trait at this genus size.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Shaded rainforest floors and tree crotches across Central and South America, with smaller pockets of species native to tropical Africa and Asia — most grow as epiphytes or lithophytes in leaf litter and moss rather than open soil.',
        regions: [
            'Central America',
            'South America',
            'Tropical Africa',
            'Tropical Asia',
        ],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check the top inch or two of soil before considering a drink.',
        },
        {
            interval: 'weekly',
            task: 'Scan leaf undersides and petiole joints for early pest activity.',
        },
        {
            interval: 'as-needed',
            task: 'Water thoroughly only once the mix has dried out, then let it drain fully.',
        },
        {
            interval: 'monthly',
            task: 'Wipe glossy-leaved species clean of dust to keep them photosynthesizing well.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Piperales',
        family: 'Piperaceae',
    },
    relatedGenera: ['piper'],
};
