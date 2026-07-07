import type { Genus } from '../../../lib/db/models/Genus';

export const strelitzia: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'strelitzia',
    speciesEstimate: 5,
    description:
        'A small genus of just five species of large, paddle-leafed evergreen perennials and trees native to coastal South Africa — grown worldwide for bold, banana-like foliage and, in flowering specimens, striking crane- or bird-shaped blooms.',
    images: [],
    highlights: [
        'The common name "bird of paradise" comes from the flower\'s resemblance to a brightly plumed bird\'s head and crest.',
        'Strelitzia reginae is the official flower of Los Angeles, and Strelitzia nicolai can grow into a multi-trunked tree over 20 feet tall.',
        'Flowers are pollinated in the wild by sunbirds, which land on the flower\'s perch-like bract to reach the nectar, dusting their feet with pollen.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Keep above 50°F; foliage damages below freezing.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright light to full sun',
            caption: 'Needs strong light to grow well and to flower.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Water when the top few inches of soil dry; reduce slightly in winter.',
        },
        difficulty: {
            score: 2,
            value: 'Easy–moderate',
            caption: 'Sturdy and forgiving as foliage, though flowering takes maturity and strong light.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption: 'Can cause vomiting or diarrhea if chewed by cats or dogs — keep out of reach of curious pets.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Subtropical coastal forests and forest margins of eastern South Africa, with warm temperatures and steady rainfall year-round.',
        regions: ['Coastal South Africa'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture and water if the top few inches have dried.',
        },
        {
            interval: 'weekly',
            task: 'Wipe down large leaves to keep dust from blocking light.',
        },
        {
            interval: 'monthly',
            task: 'Feed during the growing season to support new leaf and flower stalks.',
        },
        {
            interval: 'seasonal',
            task: 'Remove any split, browned, or storm-damaged leaves at the base.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Zingiberales',
        family: 'Strelitziaceae',
    },
    relatedGenera: ['musa', 'ravenala', 'heliconia', 'phenakospermum'],
};
