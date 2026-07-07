import type { Genus } from '../../../lib/db/models/Genus';

export const hedera: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'hedera',
    speciesEstimate: 15,
    description:
        'A genus of roughly 15 woody, evergreen climbing and trailing vines native to Europe, western Asia, and North Africa — clinging to bark and stone via aerial rootlets, and grown worldwide as groundcover, houseplants, and living wall cover.',
    images: [],
    highlights: [
        'Juvenile ivy has lobed leaves and climbs via clinging aerial rootlets; mature, flowering growth higher up the support switches to unlobed leaves and a shrubby, non-clinging habit.',
        'Widely naturalized well beyond its native range, to the point that several species (English and Algerian ivy especially) are considered invasive in parts of North America.',
        'Flowers are a rare late-season nectar source, blooming in autumn when little else is in bloom.',
    ],
    vitals: {
        hardinessZone: {
            value: '4-9',
            caption: 'Hardy outdoors in temperate climates; grown as a houseplant elsewhere.',
            zoneMin: 4,
            zoneMax: 9,
        },
        light: {
            score: 3,
            value: 'Bright, indirect to partial shade',
            caption: 'Tolerates low light but variegated types need brighter conditions to hold their pattern.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Water when the top inch of soil dries; avoid soggy, waterlogged pots.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Tolerant of neglect and a wide range of indoor conditions.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Saponins in leaves and berries can cause vomiting and skin irritation — keep away from pets.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Woodlands, hedgerows, and rocky outcrops across Europe and western Asia, climbing tree trunks and stone walls in cool, humid, often shaded settings.',
        regions: ['Europe', 'North Africa', 'Western Asia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water if the top inch has dried out.',
        },
        {
            interval: 'weekly',
            task: 'Mist or wipe leaves to discourage spider mites, which favor dry indoor air.',
        },
        {
            interval: 'monthly',
            task: 'Trim leggy trailing stems to encourage bushier new growth.',
        },
        {
            interval: 'seasonal',
            task: 'Repot or refresh topsoil every spring as roots fill the container.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Apiales',
        family: 'Araliaceae',
    },
    relatedGenera: ['heptapleurum', 'fatsia', 'schefflera', 'x fatshedera'],
};
