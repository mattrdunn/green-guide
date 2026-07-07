import type { Genus } from '../../../lib/db/models/Genus';

export const echinopsis: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'echinopsis',
    speciesEstimate: 128,
    description:
        'A genus of roughly 128 columnar and globular cacti native to the Andes of South America — fast growers by cactus standards, prized for huge, often night-blooming flowers and, in a few species, a long history of ceremonial use.',
    images: [],
    highlights: [
        'Absorbed many former genera (Trichocereus, Lobivia, Helianthocereus) as DNA evidence reshaped cactus taxonomy.',
        'Mountain origins make many species notably more cold- and water-tolerant than desert cacti.',
        'Several columnar species, including San Pedro Cactus, contain psychoactive alkaloids and are grown strictly as ornamentals.',
    ],
    vitals: {
        hardinessZone: {
            value: '8-10',
            caption:
                'Many species handle brief dips into the teens (°F) when kept dry.',
            zoneMin: 8,
            zoneMax: 10,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6+ hours direct; acclimate young plants gradually.',
        },
        watering: {
            score: 2,
            value: 'Deep soak, full dry',
            caption:
                'Generous in summer for a cactus genus; nearly none in winter.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'Vigorous and forgiving as long as drainage is sharp.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'A few species contain psychoactive alkaloids — grow as ornamentals only, away from pets and kids.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'High-altitude Andean slopes and adjacent lowlands across Argentina, Bolivia, Peru, Chile, and Uruguay, where intense sun, cool nights, and seasonal rain shape their unusual tolerance for both water and chill.',
        regions: ['Argentina', 'Bolivia', 'Peru', 'Chile'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check pot weight or probe the mix — water only when fully dry.',
        },
        {
            interval: 'weekly',
            task: 'Look over ribs and the growth tip for scale or orange spotting.',
        },
        {
            interval: 'weekly',
            task: 'Rotate a quarter turn so columns grow straight, not leaning.',
        },
        {
            interval: 'as-needed',
            task: 'Drench thoroughly once the pot is bone-dry; in winter, barely water at all.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Caryophyllales',
        family: 'Cactaceae',
    },
    relatedGenera: ['echinocactus', 'mammillaria', 'cereus', 'cleistocactus'],
};
