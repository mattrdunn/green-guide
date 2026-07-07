import type { Genus } from '../../../lib/db/models/Genus';

export const maranta: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'maranta',
    speciesEstimate: 50,
    description:
        'A genus of roughly 50 low-growing rhizomatous perennials native to tropical Brazil and neighboring South America — best known for the strikingly patterned "prayer plant," named for the way its leaves fold upright each night.',
    images: [],
    highlights: [
        'Leaves fold up like praying hands at night and flatten out again in the morning — a light-driven movement called nyctinasty, powered by a hinge-like pulvinus at the base of each leaf.',
        'Foliage patterning mimics the dappled light gaps of the rainforest floor, which is thought to help camouflage the leaves from herbivores.',
        'Closely related in appearance and care to Calathea and Goeppertia, with which it is often grouped under the informal name "prayer plants."',
    ],
    vitals: {
        hardinessZone: {
            value: '11-12',
            caption: 'Keep above 60°F year-round; grown as a houseplant outside the tropics.',
            zoneMin: 11,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Medium, indirect',
            caption: 'Bright, filtered light preserves leaf color without scorching the pattern.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Keep soil consistently damp; avoid letting it fully dry out or stay soggy.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Fussy about humidity and water quality — crisp leaf edges signal dry air.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe for cats, dogs, and curious kids.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Shaded, humid rainforest floor of Brazil and neighboring South American countries, where it grows as a low groundcover beneath the forest canopy.',
        regions: ['Brazil', 'Tropical South America'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check moisture with a finger and water before the mix fully dries.',
        },
        {
            interval: 'weekly',
            task: 'Mist or run a humidifier nearby to counter dry indoor air.',
        },
        {
            interval: 'monthly',
            task: 'Wipe down leaves and rotate the pot for even growth.',
        },
        {
            interval: 'seasonal',
            task: 'Divide crowded rhizomes when repotting in spring.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Zingiberales',
        family: 'Marantaceae',
    },
    relatedGenera: ['goeppertia', 'ctenanthe', 'stromanthe', 'calathea'],
};
