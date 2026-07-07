import type { Genus } from '../../../lib/db/models/Genus';

export const drosera: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'drosera',
    speciesEstimate: 250,
    description:
        'A genus of roughly 250 carnivorous sundews found on every continent except Antarctica, with the greatest diversity in Australia — leaves covered in sticky, glistening tentacles that curl around trapped insects.',
    images: [],
    highlights: [
        'The largest genus of carnivorous plants, ranging from tiny pygmy rosettes to sprawling, vining species.',
        'Leaves visibly curl around trapped prey within minutes, digesting it with enzyme-laced mucilage.',
        'Many species self-sow readily and produce offshoots, quickly turning one plant into a colony.',
    ],
    vitals: {
        hardinessZone: {
            value: '8-11',
            caption:
                'Hardiness varies widely by species — most are grown as houseplants or in greenhouses.',
            zoneMin: 8,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun to very bright light',
            caption:
                'The sticky dew that defines this genus only forms under strong light.',
        },
        watering: {
            score: 5,
            value: 'Constantly moist, tray method',
            caption:
                'Sits in a shallow tray of distilled or rainwater at all times.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Easier species tolerate average conditions; others need specific dormancy or humidity.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                "Safe around pets and kids — the sticky mucilage only troubles the insects it's built to catch.",
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Nutrient-poor, permanently damp bogs, seeps, and sandy soils worldwide, with the richest diversity of species found across Australia.',
        regions: [
            'Australia',
            'South Africa',
            'Southeast Asia',
            'North America',
        ],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Refill the water tray with distilled or rainwater so it never runs dry.',
        },
        {
            interval: 'weekly',
            task: 'Check that leaves are glistening with dew; move to brighter light if they look dry or dull.',
        },
        {
            interval: 'monthly',
            task: 'Snip spent flower stalks and remove any fully browned lower leaves.',
        },
        {
            interval: 'seasonal',
            task: 'Divide and repot pups or offshoots once they crowd the pot.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Caryophyllales',
        family: 'Droseraceae',
    },
    relatedGenera: ['dionaea', 'nepenthes', 'sarracenia', 'pinguicula'],
};
