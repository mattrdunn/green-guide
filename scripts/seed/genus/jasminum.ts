import type { Genus } from '../../../lib/db/models/Genus';

export const jasminum: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'jasminum',
    speciesEstimate: 200,
    description:
        'A genus of roughly 200 climbing, scrambling, or shrubby species native to the warm regions of Eurasia, Africa, and Oceania — grown almost universally for the intensely fragrant white or yellow flowers behind the word "jasmine."',
    images: [],
    highlights: [
        'Jasmine flowers are typically most fragrant at dusk and through the night, when they attract moths as pollinators.',
        'True jasmine (Jasminum spp.) is unrelated to "star jasmine" (Trachelospermum) and several other unrelated plants that borrow the common name for their scent.',
        'Jasmine flowers and buds are harvested for jasmine tea and, in the perfume industry, for absolute oil extraction.',
    ],
    vitals: {
        hardinessZone: {
            value: '7-10',
            caption: 'Varies by species; many tolerate light frost once established outdoors.',
            zoneMin: 7,
            zoneMax: 10,
        },
        light: {
            score: 4,
            value: 'Bright light to full sun',
            caption: 'Needs strong light to flower well, indoors or out.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Water when the top inch of soil dries; keep more consistently moist while budding.',
        },
        difficulty: {
            score: 2,
            value: 'Easy–moderate',
            caption: 'Vigorous and forgiving, though it needs a trellis or support to look its best.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'The ASPCA lists true jasmine as non-toxic to cats and dogs.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Warm-temperate to tropical scrub, forest margins, and rocky hillsides across Eurasia, Africa, and Oceania, with the greatest species diversity in South and Southeast Asia.',
        regions: ['South Asia', 'Southeast Asia', 'East Asia', 'Africa'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water if the top inch has dried out.',
        },
        {
            interval: 'weekly',
            task: 'Guide new vining growth onto its trellis or support.',
        },
        {
            interval: 'monthly',
            task: 'Feed with a bloom-boosting fertilizer during active growth.',
        },
        {
            interval: 'seasonal',
            task: 'Prune back after flowering to control size and encourage branching.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Lamiales',
        family: 'Oleaceae',
    },
    relatedGenera: ['syringa', 'ligustrum', 'osmanthus', 'forsythia'],
};
