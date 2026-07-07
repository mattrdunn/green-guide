import type { Genus } from '../../../lib/db/models/Genus';

export const viola: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'viola',
    speciesEstimate: 500,
    description:
        'A genus of roughly 500 species native to temperate regions worldwide, from small woodland violets to the large-flowered garden pansy — grown for cheerful, often bicolor blooms that thrive in cool weather.',
    images: [],
    highlights: [
        'Garden pansies (Viola × wittrockiana) are complex hybrids bred in the 19th century from several wild European viola species, not a naturally occurring species themselves.',
        'The "face" pattern seen on many pansy flowers comes from dark nectar guides that direct pollinating insects toward the center of the bloom.',
        'Both pansy and viola flowers are edible and are used to garnish cakes, salads, and drinks.',
    ],
    vitals: {
        hardinessZone: {
            value: '4-8',
            caption: 'Grown as a cool-season annual or short-lived perennial in most climates.',
            zoneMin: 4,
            zoneMax: 8,
        },
        light: {
            score: 4,
            value: 'Full sun to partial shade',
            caption: 'Best bloom in full sun during cool weather; appreciates afternoon shade as it warms.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Keep soil consistently moist; avoid letting it dry out fully or stay waterlogged.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Reliable and low-maintenance for a full cool season of bloom.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around pets and children; the flowers themselves are edible.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Temperate meadows, woodlands, and mountain slopes across the Northern Hemisphere, with the greatest species diversity in Europe, Asia, and the Andes.',
        regions: ['Europe', 'Temperate Asia', 'North America', 'Andes'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water if the surface has dried.',
        },
        {
            interval: 'weekly',
            task: 'Deadhead spent blooms to encourage continued flowering.',
        },
        {
            interval: 'monthly',
            task: 'Feed lightly through the cool growing season.',
        },
        {
            interval: 'seasonal',
            task: 'Replace or refresh plantings as heat causes summer decline.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Malpighiales',
        family: 'Violaceae',
    },
    relatedGenera: ['primula', 'dianthus', 'bellis', 'myosotis'],
};
