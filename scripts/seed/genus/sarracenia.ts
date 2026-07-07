import type { Genus } from '../../../lib/db/models/Genus';

export const sarracenia: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'sarracenia',
    speciesEstimate: 11,
    description:
        'A genus of roughly 11 carnivorous perennials native to eastern North America — the North American pitcher plants, whose tall, tubular leaves lure, trap, and digest insects in acidic, nutrient-poor bogs.',
    images: [],
    highlights: [
        'Unlike Nepenthes, each Sarracenia pitcher is an upright, single modified leaf rather than a hanging pouch on a tendril.',
        'Downward-pointing hairs and a slick, waxy interior keep insects from climbing back out once they slip past the hooded rim.',
        'Several species are federally or state-protected in the wild, threatened by wetland drainage and poaching for the houseplant trade.',
    ],
    vitals: {
        hardinessZone: {
            value: '6-9',
            caption: 'Most species tolerate winter dormancy and light freezes outdoors.',
            zoneMin: 6,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6+ hours of direct sun for strong pitcher color and size.',
        },
        watering: {
            score: 5,
            value: 'Constantly wet',
            caption: 'Stand the pot in a tray of distilled or rainwater — never let it dry out.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Straightforward outdoors in the right bog setup, but needs mineral-free water and a winter rest.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: "Safe around pets and kids — its nectar and digestive fluid are only a hazard to insects.",
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Acidic, nutrient-poor wetlands, bogs, and wet pine savannas across the southeastern United States, with outlying species reaching into subarctic Canadian peat bogs.',
        regions: ['Southeastern US', 'Gulf Coast', 'Eastern Canada'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Top up the water tray with distilled or rainwater.',
        },
        {
            interval: 'weekly',
            task: 'Check pitchers for insect catch and overall color.',
        },
        {
            interval: 'seasonal',
            task: 'Trim back dead pitchers as new growth emerges in spring.',
        },
        {
            interval: 'seasonal',
            task: 'Allow a cool, dormant winter rest outdoors or in an unheated space.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Ericales',
        family: 'Sarraceniaceae',
    },
    relatedGenera: ['nepenthes', 'dionaea', 'drosera', 'darlingtonia'],
};
