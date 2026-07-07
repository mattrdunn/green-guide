import type { Genus } from '../../../lib/db/models/Genus';

export const pelargonium: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'pelargonium',
    speciesEstimate: 280,
    description:
        'A genus of roughly 280 species, the great majority native to South Africa, ranging from trailing and upright bedding "geraniums" to scented-leaf types grown for fragrance — long confused with the true, cold-hardy Geranium genus in common usage.',
    images: [],
    highlights: [
        'Common "geraniums" sold at nurseries are almost always Pelargonium, not the true, hardy Geranium genus — the mix-up dates back to when botanists first split the two apart.',
        'Scented-leaf types release fragrance — rose, citrus, mint, and more — only when the leaf is brushed or crushed, not passively into the air.',
        'South Africa\'s Cape Floristic Region is the center of Pelargonium diversity, hosting the great majority of wild species found nowhere else.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption: 'Treated as a tender perennial or annual outside frost-free zones.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright light to full sun',
            caption: 'Needs strong light for compact growth and continuous bloom.',
        },
        watering: {
            score: 2,
            value: 'Dry between waterings',
            caption: 'Let the top of the soil dry out fully — overwatering causes rot and leaf drop.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'Undemanding and free-flowering once given enough light.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Geraniol and linalool in the foliage can cause GI upset and skin irritation in pets.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Predominantly the winter-rainfall Cape region of South Africa — rocky, well-drained slopes and scrubland — with additional species scattered across the rest of Africa, Australia, and the Middle East.',
        regions: ['South Africa', 'Cape Region', 'East Africa'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil dryness before watering.',
        },
        {
            interval: 'weekly',
            task: 'Deadhead spent blooms to keep flowers coming.',
        },
        {
            interval: 'monthly',
            task: 'Feed lightly during the growing season.',
        },
        {
            interval: 'seasonal',
            task: 'Pinch back leggy growth to keep the plant bushy and compact.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Geraniales',
        family: 'Geraniaceae',
    },
    relatedGenera: ['geranium', 'erodium', 'monsonia'],
};
