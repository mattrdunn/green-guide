import type { Genus } from '../../../lib/db/models/Genus';

export const begonia: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'begonia',
    speciesEstimate: 2000,
    description:
        'One of the largest flowering plant genera in the world, with roughly 2,000 species of perennial herbs spanning fibrous, rhizomatous, and tuberous growth habits — grown alternately for painted, asymmetric foliage or nearly nonstop clusters of small flowers.',
    images: [],
    highlights: [
        'Every leaf is asymmetric at the base (obliquus), a family-wide trait that helps identify a begonia even in an unfamiliar species.',
        'Flowers are unisexual, with separate male and female blooms opening on the same plant rather than a single perfect flower.',
        'Growth habit varies dramatically by group — creeping rhizomes, upright bamboo-like canes, and swollen tubers all show up under the same genus name.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption:
                'Frost-tender; grown as a houseplant or seasonal annual outside the tropics and subtropics.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Medium to bright, indirect',
            caption:
                'Most species scorch in direct sun but fade and stop blooming or patterning in deep shade.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Consistent moisture without sogginess — both rhizomes and fibrous roots rot quickly in waterlogged mix.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Fussier than average about humidity, drafts, and watering consistency, though a few groups are quite forgiving.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'Soluble calcium oxalates are concentrated most heavily in the tubers and roots; ingestion by cats and dogs can cause serious kidney irritation.',
            level: 'toxic',
        },
    },
    nativeRange: {
        description:
            'Humid, shaded forest floors and rocky slopes across the tropics and subtropics of Central and South America, Africa, and Southeast Asia — Begonia is absent only from Australia among the continents where its family could plausibly grow.',
        regions: ['South America', 'Central America', 'Africa', 'Southeast Asia'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water before it dries out completely.',
        },
        {
            interval: 'weekly',
            task: 'Scan leaf undersides and stem joints for early pest activity.',
        },
        {
            interval: 'as-needed',
            task: 'Water thoroughly once the surface starts to feel dry, then let it drain fully.',
        },
        {
            interval: 'monthly',
            task: 'Increase airflow around the foliage to head off powdery mildew.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Cucurbitales',
        family: 'Begoniaceae',
    },
    relatedGenera: ['hillebrandia'],
};
