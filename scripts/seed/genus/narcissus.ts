import type { Genus } from '../../../lib/db/models/Genus';

export const narcissus: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'narcissus',
    speciesEstimate: 50,
    description:
        'A genus of roughly 50 bulbous perennials native to Europe and North Africa, spanning the classic trumpet daffodil to miniature species types — one of the first flowers to bloom each spring, often pushing up through late snow.',
    images: [],
    highlights: [
        'The name comes from Greek mythology\'s Narcissus, though the flower\'s nodding, mirror-averse posture is more folklore than botany.',
        'Daffodil bulbs contain calcium oxalate crystals and lycorine, a defense so effective that deer, rabbits, and rodents reliably leave them alone.',
        'Naturalizes readily — a single planting can multiply into sweeping drifts over just a few years without any replanting.',
    ],
    vitals: {
        hardinessZone: {
            value: '3-8',
            caption: 'Needs a cold winter chill period to bloom reliably.',
            zoneMin: 3,
            zoneMax: 8,
        },
        light: {
            score: 4,
            value: 'Full sun to light shade',
            caption: 'Best flowering in full sun, though it tolerates the dappled shade of deciduous trees.',
        },
        watering: {
            score: 2,
            value: 'Moist in growth, dry in dormancy',
            caption: 'Water through spring growth; let bulbs stay dry once foliage yellows.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Plant once and largely forget — reliably perennial with minimal care.',
            level: 'easy',
        },
        toxicity: {
            value: 'Toxic',
            caption: 'All parts, especially the bulb, contain lycorine and can cause serious vomiting if ingested.',
            level: 'toxic',
        },
    },
    nativeRange: {
        description:
            'Meadows, woodlands, and rocky hillsides across the Iberian Peninsula and western Mediterranean, flowering early in the season before summer heat and tree canopy shade set in.',
        regions: ['Iberian Peninsula', 'Western Mediterranean', 'North Africa'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check soil moisture while foliage is actively growing.',
        },
        {
            interval: 'as-needed',
            task: 'Deadhead spent flowers, but leave foliage in place to die back naturally.',
        },
        {
            interval: 'seasonal',
            task: 'Plant new bulbs in fall, 2-3 times as deep as the bulb is tall.',
        },
        {
            interval: 'seasonal',
            task: 'Divide congested clumps every few years once foliage has yellowed.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Asparagales',
        family: 'Amaryllidaceae',
    },
    relatedGenera: ['amaryllis', 'hippeastrum', 'galanthus', 'allium'],
};
