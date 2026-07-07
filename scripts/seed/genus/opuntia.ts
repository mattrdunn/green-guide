import type { Genus } from '../../../lib/db/models/Genus';

export const opuntia: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'opuntia',
    speciesEstimate: 150,
    description:
        'A genus of roughly 150 cacti native to the Americas, instantly recognizable by their flattened, jointed pads (cladodes) — ranging from ground-hugging groundcovers to tree-sized specimens, and cultivated worldwide as food, forage, and ornament.',
    images: [],
    highlights: [
        'The flattened pads are actually modified stems; true leaves are reduced to tiny, short-lived spines and glochids.',
        'Opuntia ficus-indica has been cultivated for millennia in Mexico for its edible pads (nopales) and fruit (tuna), and now grows wild across the Mediterranean and parts of Africa.',
        'Glochids — the fine, barbed hairs clustered at each areole — detach on contact and are a far more persistent irritant than the plant\'s larger spines.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Some species tolerate hard freezes; most prefer frost-free warmth.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6-8 hours direct — the sunniest spot available, indoors or out.',
        },
        watering: {
            score: 1,
            value: 'Very sparse',
            caption: 'Deep, infrequent soaks; let the mix dry completely between waterings.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Extremely low-maintenance once given enough sun and drainage.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Edible, not poisonous — but glochids are a mechanical hazard for pets and fingers alike.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Arid and semi-arid habitats from southern Canada through the United States, Mexico, and into South America, with Central Mexico as the center of species diversity.',
        regions: ['Central Mexico', 'Southwestern US', 'South America'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Confirm the mix has fully dried since the last watering.',
        },
        {
            interval: 'weekly',
            task: 'Inspect pads for soft spots or discoloration.',
        },
        {
            interval: 'as-needed',
            task: 'Water deeply only once the mix has been dry for several days.',
        },
        {
            interval: 'seasonal',
            task: 'Handle with thick gloves or tongs when repotting or removing pups.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Caryophyllales',
        family: 'Cactaceae',
    },
    relatedGenera: ['echinocactus', 'echinopsis', 'cylindropuntia', 'mammillaria'],
};
