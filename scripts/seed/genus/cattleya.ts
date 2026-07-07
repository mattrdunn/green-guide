import type { Genus } from '../../../lib/db/models/Genus';

export const cattleya: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'cattleya',
    speciesEstimate: 100,
    description:
        'A genus of roughly 100 epiphytic orchids native to the forest canopies of Central and South America — the source of the classic large, ruffled "corsage orchid" bloom, grown on plump water-storing pseudobulbs.',
    images: [],
    highlights: [
        'Blooms emerge from a papery sheath atop a mature pseudobulb, which typically flowers once before storing energy for the next.',
        'Wants far more direct light than shade-tolerant houseplant orchids like Phalaenopsis to bloom reliably.',
        'Prized in the cut-flower trade for over a century — many modern hybrid orchids trace their corsage looks back to this genus.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption:
                'A warm epiphyte from subtropical/tropical America — houseplant elsewhere.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright, with some direct sun',
            caption: 'A south or west window, or gentle morning direct sun.',
        },
        watering: {
            score: 2,
            value: 'Deep soak, then dry out fully',
            caption:
                'Let pseudobulbs and mix approach bone-dry before the next soak — overwatering is the top killer.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Needs more light and a stricter dry-down than a Phalaenopsis to bloom reliably.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around pets and kids.',
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Exposed tree branches high in the canopy of tropical and subtropical forests, from Central America through Brazil and the Andes, where a distinct wet-dry seasonal rhythm shapes their bloom cycle.',
        regions: ['Central America', 'Brazil', 'Andes', 'Caribbean'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check pseudobulb firmness and water deeply only once the mix has dried through.',
        },
        {
            interval: 'weekly',
            task: 'Feed at quarter-strength during active growth; skip while resting.',
        },
        {
            interval: 'monthly',
            task: 'Rotate for even light and inspect new pseudobulbs for sheaths.',
        },
        {
            interval: 'seasonal',
            task: 'Reduce watering frequency once a pseudobulb matures to encourage bloom initiation.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Asparagales',
        family: 'Orchidaceae',
    },
    relatedGenera: ['phalaenopsis', 'vanda', 'dendrobium', 'laelia'],
};
