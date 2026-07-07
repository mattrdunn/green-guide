import type { Genus } from '../../../lib/db/models/Genus';

export const dianthus: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'dianthus',
    speciesEstimate: 340,
    description:
        'A genus of roughly 340 species native to Europe and Asia, spanning alpine mat-forming pinks to the classic florist carnation — grown for spice-scented, ruffled blooms atop slim, often silvery-blue foliage.',
    images: [],
    highlights: [
        'Dianthus caryophyllus, the Carnation, is the parent species behind most cultivated florist carnations grown for the cut-flower trade.',
        'The clove-like fragrance many species share comes from eugenol, the same compound found in actual cloves.',
        'Ranges from low alpine groundcovers to upright, garden-border perennials, unified by narrow blue-green leaves and fringed petals.',
    ],
    vitals: {
        hardinessZone: {
            value: '3-9',
            caption:
                'Varies widely by species — alpine pinks are far hardier than garden carnations.',
            zoneMin: 3,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption:
                '6+ hours of direct sun keeps stems compact and produces the most and best-scented blooms.',
        },
        watering: {
            score: 2,
            value: 'Dry to moderate',
            caption:
                'Water deeply but infrequently — constantly damp soil invites fungal rot.',
        },
        difficulty: {
            score: 2,
            value: 'Easy, in the right soil',
            caption:
                'Undemanding once sited well; drainage is the one requirement worth getting right.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Generally considered safe around pets and children in normal garden quantities.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Rocky, sun-baked slopes and coastal cliffs across Europe and Asia, with the greatest species diversity in the Mediterranean region and the mountains of Central Asia.',
        regions: ['Mediterranean', 'Europe', 'Central Asia', 'East Asia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil dryness before watering, especially in containers.',
        },
        {
            interval: 'weekly',
            task: 'Deadhead spent blooms to encourage continued flowering.',
        },
        {
            interval: 'as-needed',
            task: 'Water deeply only once the top few inches of soil are dry.',
        },
        {
            interval: 'seasonal',
            task: 'Feed lightly through the growing season; divide crowded clumps in early spring or fall.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Caryophyllales',
        family: 'Caryophyllaceae',
    },
    relatedGenera: ['saponaria', 'silene', 'gypsophila', 'lychnis'],
};
