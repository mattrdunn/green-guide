import type { Genus } from '../../../lib/db/models/Genus';

export const aeonium: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'aeonium',
    speciesEstimate: 35,
    description:
        'A genus of roughly 35 rosette-forming succulents native to the Canary Islands, Madeira, and Morocco, with a few outliers in East Africa — prized for their tidy, symmetrical rosettes and an unusual winter-growing calendar.',
    images: [],
    highlights: [
        'Runs on a reversed Mediterranean calendar — active and thirstiest in the cool, wet months, semi-dormant through summer heat.',
        'Rosettes sit atop bare, branching stems, giving mature plants a small, sculptural, tree-like silhouette.',
        'The near-black "Zwartkop" cultivar of Aeonium arboreum is the genus’s best-known face in cultivation.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption:
                'Tolerates a light touch of frost; container culture elsewhere.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Sun to bright shade',
            caption:
                'Full sun in mild weather; light shade helps through scorching summers.',
        },
        watering: {
            score: 3,
            value: 'Moderate, in season',
            caption:
                'More frequent than most succulents while growing, minimal when dormant.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Easy once you learn its upside-down growing calendar.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around cats, dogs, and curious kids.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Rocky, sun-baked slopes across the Canary Islands and Madeira, with a Mediterranean climate of wet winters and dry summers that shapes the genus’s reversed growing season.',
        regions: ['Canary Islands', 'Madeira', 'Morocco', 'East Africa'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check the top inch of soil during the cool growing season and water once it dries.',
        },
        {
            interval: 'weekly',
            task: 'Pick fallen leaves off the soil surface to deny pests a hiding place.',
        },
        {
            interval: 'as-needed',
            task: 'In summer dormancy, water lightly every few weeks at most.',
        },
        {
            interval: 'seasonal',
            task: 'Resume regular watering and feeding as cooler autumn weather wakes rosettes back up.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Saxifragales',
        family: 'Crassulaceae',
    },
    relatedGenera: ['crassula', 'echeveria', 'sedum', 'sempervivum'],
};
