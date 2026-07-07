import type { Genus } from '../../../lib/db/models/Genus';

export const lavandula: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'lavandula',
    speciesEstimate: 45,
    description:
        'A genus of roughly 45 aromatic shrubs and subshrubs native to the Mediterranean basin, the Middle East, and India — grown worldwide for its silvery, camphor-scented foliage and spikes of purple flowers.',
    images: [],
    highlights: [
        'The essential oils responsible for lavender\'s scent — linalool and linalyl acetate — have been used in perfumery and traditional remedies for thousands of years.',
        'Lavender fields in Provence, France are among the most photographed agricultural landscapes in the world, grown commercially for oil distillation.',
        'A magnet for bees and butterflies, lavender is one of the most reliable pollinator plants for a sunny border.',
    ],
    vitals: {
        hardinessZone: {
            value: '5-9',
            caption: 'Hardiness varies by species; English lavender is the most cold-tolerant.',
            zoneMin: 5,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6+ hours of direct sun is essential for compact growth and strong bloom.',
        },
        watering: {
            score: 1,
            value: 'Dry, drought-tolerant',
            caption: 'Water sparingly — overly damp soil is the fastest way to lose it to root rot.',
        },
        difficulty: {
            score: 2,
            value: 'Easy, in the right soil',
            caption: 'Thrives on neglect once established, provided drainage is sharp.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Linalool and linalyl acetate can upset pets in quantity; occasional sniffing is harmless.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Dry, rocky, sun-baked hillsides and scrubland around the Mediterranean basin, extending east through the Middle East and into the mountains of India.',
        regions: ['Mediterranean', 'Middle East', 'North Africa', 'South Asia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Confirm the soil has dried before considering water.',
        },
        {
            interval: 'seasonal',
            task: 'Prune back by about a third after flowering to keep growth compact.',
        },
        {
            interval: 'as-needed',
            task: 'Harvest flower spikes just as buds begin to open for the strongest fragrance.',
        },
        {
            interval: 'seasonal',
            task: 'Avoid heavy feeding — lean soil produces the most fragrant oils.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Lamiales',
        family: 'Lamiaceae',
    },
    relatedGenera: ['rosmarinus', 'salvia', 'thymus', 'mentha'],
};
