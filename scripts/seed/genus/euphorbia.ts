import type { Genus } from '../../../lib/db/models/Genus';

export const euphorbia: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'euphorbia',
    speciesEstimate: 2000,
    description:
        'One of the largest genera of flowering plants, with roughly 2,000 species spanning nearly every continent — from tiny groundcover weeds to towering candelabra succulents that convincingly mimic cacti, all unified by a caustic milky latex.',
    images: [],
    highlights: [
        'Includes cactus-like succulents, leafy tropical shrubs, and familiar holiday poinsettias, all in the same genus.',
        'Many succulent species evolved cactus-like forms independently through convergent evolution, despite no close relation to true cacti.',
        'The milky latex sap shared across the genus ranges from mildly irritating to genuinely caustic, burning skin and eyes on contact.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption:
                'Most popular succulent species are frost-tender; a few leafy species are far hardier.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright, some direct sun',
            caption:
                'Succulent species want several hours of direct sun for dense, colorful growth.',
        },
        watering: {
            score: 1,
            value: 'Rare, deep soaks',
            caption:
                'Succulent members need a hard dry-out between waterings; constant moisture invites rot.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption:
                'Most cultivated species are tough and forgiving — the care warnings are mainly for handlers.',
            level: 'easy',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'Milky sap across the genus causes skin and eye burns and is dangerous if ingested.',
            level: 'toxic',
        },
    },
    nativeRange: {
        description:
            'Found on nearly every continent, with the greatest diversity of succulent forms concentrated in the arid regions of Africa and Madagascar.',
        regions: [
            'Sub-Saharan Africa',
            'Madagascar',
            'Mediterranean',
            'Americas',
        ],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Lift the pot — water succulent species only at genuine featherweight dryness.',
        },
        {
            interval: 'weekly',
            task: 'Check stems stay firm; wrinkling means thirst, mush means rot.',
        },
        {
            interval: 'weekly',
            task: 'Confirm it is out of traffic paths where snapped stems could drip sap.',
        },
        {
            interval: 'as-needed',
            task: 'Give a rare, deep soak, then let the pot dry out completely again.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Malpighiales',
        family: 'Euphorbiaceae',
    },
    relatedGenera: ['pedilanthus', 'monadenium', 'synadenium', 'jatropha'],
};
