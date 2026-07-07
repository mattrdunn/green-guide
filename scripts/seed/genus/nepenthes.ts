import type { Genus } from '../../../lib/db/models/Genus';

export const nepenthes: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'nepenthes',
    speciesEstimate: 170,
    description:
        'A genus of roughly 170 carnivorous vines native to Southeast Asia, Madagascar, the Seychelles, and northern Australia — famous for the elaborate, fluid-filled "pitchers" that dangle from leaf tips and trap insects for nutrition.',
    images: [],
    highlights: [
        'Each pitcher is a modified leaf tip; a slippery rim and waxy inner wall send insects sliding into digestive fluid below.',
        'Nepenthes rajah, one of the largest species, occasionally traps small vertebrates and has even been recorded catching tree shrews for their droppings.',
        'Many species grow as climbing vines, using tendrils extending from the pitcher stalk to scramble over surrounding vegetation toward the light.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Keep above 60°F; most species need greenhouse-like warmth and humidity year-round.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 4,
            value: 'Bright, indirect to filtered sun',
            caption: 'Strong, filtered light produces the most vivid pitcher coloration.',
        },
        watering: {
            score: 4,
            value: 'Consistently moist',
            caption: 'Use distilled or rainwater — tap water minerals build up and damage roots.',
        },
        difficulty: {
            score: 4,
            value: 'Advanced',
            caption: 'Needs steady humidity and mineral-free water to thrive long-term.',
            level: 'advanced',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: "Safe around pets and kids — the plant's digestive enzymes are only a hazard to trapped insects.",
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Humid, misty tropical forests and mountain ridges across Borneo, Sumatra, and the Philippines, extending west to Madagascar and east to northern Australia — often in nutrient-poor soils that favor carnivory.',
        regions: ['Borneo', 'Sumatra', 'Philippines', 'Madagascar'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Top up water in each pitcher if it has evaporated below a third full.',
        },
        {
            interval: 'weekly',
            task: 'Mist or check the humidity tray to keep moisture levels high.',
        },
        {
            interval: 'as-needed',
            task: 'Water the growing medium with distilled or rainwater only.',
        },
        {
            interval: 'monthly',
            task: 'Trim off any fully browned, spent pitchers.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Caryophyllales',
        family: 'Nepenthaceae',
    },
    relatedGenera: ['sarracenia', 'dionaea', 'drosera', 'cephalotus'],
};
