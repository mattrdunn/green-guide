import type { Genus } from '../../../lib/db/models/Genus';

export const goeppertia: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'goeppertia',
    speciesEstimate: 250,
    description:
        'A genus of roughly 250 prayer plants native to the tropical rainforest understory of Central and South America — grown for boldly patterned, often silver-striped leaves that rise and fold with the daily light cycle.',
    images: [],
    highlights: [
        'Reclassified from Calathea to Goeppertia in 2012 based on genetic evidence, though most shops and growers still use the older name.',
        'Leaves move visibly through the day, raising toward evening and relaxing by morning — the origin of the "prayer plant" name.',
        'Nearly the entire genus is non-toxic, making it a popular pick for pet-owning plant parents.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption:
                'Strictly indoors below 60°F; cold damage is fast and permanent.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 2,
            value: 'Medium, filtered',
            caption: 'Bright shade — direct sun bleaches leaf patterning.',
        },
        watering: {
            score: 4,
            value: 'Evenly moist',
            caption:
                'Never soggy, never dry; distilled or rainwater strongly preferred.',
        },
        difficulty: {
            score: 4,
            value: 'Advanced',
            caption:
                'Beautiful but demanding — humidity and water quality are non-negotiable.',
            level: 'advanced',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe for cats, dogs, and curious kids.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Shaded, humid rainforest understory across Central and South America, from southern Mexico through the Amazon basin and Bolivia.',
        regions: ['Amazon Basin', 'Bolivia', 'Central America', 'Brazil'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check the topsoil — water once the top inch begins to dry.',
        },
        {
            interval: 'weekly',
            task: 'Verify humidity is holding above 60% on a hygrometer.',
        },
        {
            interval: 'weekly',
            task: 'Inspect leaf undersides for the first signs of spider mites or thrips.',
        },
        {
            interval: 'monthly',
            task: 'Flush the pot thoroughly with pure water to clear mineral and fertilizer salts.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Zingiberales',
        family: 'Marantaceae',
    },
    relatedGenera: ['calathea', 'maranta', 'ctenanthe', 'stromanthe'],
};
