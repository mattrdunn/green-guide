import type { Genus } from '../../../lib/db/models/Genus';

export const vanda: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'vanda',
    speciesEstimate: 80,
    description:
        'A genus of roughly 80 epiphytic orchids native to the Himalayan foothills, Southeast Asia, and Australia — grown for vivid, long-lasting flowers and a distinctive, thick aerial root system often displayed bare-root in hanging baskets.',
    images: [],
    highlights: [
        'Many Vanda orchids are grown "bare-root," suspended in an open basket or glass vessel with no potting medium at all — the thick aerial roots absorb moisture directly from humid air.',
        'Vanda coerulea was one of the first orchids to produce a true blue flower pigment, making it historically important in orchid breeding for blue-toned hybrids.',
        'Roots turn bright green when hydrated and silvery-white as they dry, giving growers an easy visual cue for watering.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Keep above 60°F; grown as an indoor or greenhouse plant outside the tropics.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 4,
            value: 'Bright light',
            caption: 'Needs more direct light than most orchids to bloom reliably.',
        },
        watering: {
            score: 4,
            value: 'Frequent — daily misting or soaking',
            caption: 'Bare-root types dry out fast and often need daily watering or misting.',
        },
        difficulty: {
            score: 4,
            value: 'Advanced',
            caption: 'Rewarding but needs consistent humidity and near-daily watering attention.',
            level: 'advanced',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around pets and kids.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'High on tree branches in monsoon forests across the Himalayan foothills, Southeast Asia, and northern Australia, with an intense wet season followed by a cooler, drier rest.',
        regions: ['Himalayan Foothills', 'Southeast Asia', 'Northern Australia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check root color for hydration — green means moist, silver means it needs water.',
        },
        {
            interval: 'as-needed',
            task: 'Soak or mist roots thoroughly, then let them dry before the next watering.',
        },
        {
            interval: 'monthly',
            task: 'Feed with a diluted orchid fertilizer during active growth.',
        },
        {
            interval: 'seasonal',
            task: 'Cut spent flower spikes back once blooms have fully faded.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Asparagales',
        family: 'Orchidaceae',
    },
    relatedGenera: ['phalaenopsis', 'cattleya', 'dendrobium', 'ascocentrum'],
};
