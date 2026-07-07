import type { Genus } from '../../../lib/db/models/Genus';

export const phalaenopsis: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'phalaenopsis',
    speciesEstimate: 70,
    description:
        'A genus of roughly 70 epiphytic orchids native to Southeast Asia and northern Australia — the "moth orchid," among the most widely sold flowering houseplants in the world thanks to long-lasting blooms and tolerance of typical indoor conditions.',
    images: [],
    highlights: [
        'A single flower spike can stay in bloom for two to three months, and re-blooms from the same spike are common with the right care.',
        'The genus name comes from Greek for "moth-like," describing the broad, wing-shaped petals of its flowers.',
        'Roots are photosynthetic and adapted to cling to bark rather than sit in soil — the reason moth orchids are potted in bark chips or sphagnum rather than potting mix.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Keep above 60°F; grown as an indoor plant outside the tropics.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Bright, indirect',
            caption: 'An east-facing window suits it well; direct sun scorches the leaves.',
        },
        watering: {
            score: 2,
            value: 'Soak & dry out',
            caption: 'Water thoroughly, then let roots dry out — soggy bark is the top cause of rot.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Easy to keep alive, but rebloom takes attention to light and a winter temperature drop.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around pets and kids.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Warm, humid, shaded understory of tropical rainforest across Southeast Asia, the Philippines, and northern Australia, clinging epiphytically to tree bark rather than rooting in soil.',
        regions: ['Southeast Asia', 'Philippines', 'Northern Australia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check root color — silvery-green roots need water, plump green ones don\'t.',
        },
        {
            interval: 'as-needed',
            task: 'Water thoroughly at the sink, then let all excess drain away.',
        },
        {
            interval: 'monthly',
            task: 'Feed with a diluted orchid fertilizer during active growth.',
        },
        {
            interval: 'seasonal',
            task: 'Cut spent flower spikes back to a node to encourage a rebloom.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Asparagales',
        family: 'Orchidaceae',
    },
    relatedGenera: ['vanda', 'cattleya', 'dendrobium', 'oncidium'],
};
