import type { Genus } from '../../../lib/db/models/Genus';

export const crassula: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'crassula',
    speciesEstimate: 200,
    description:
        'A genus of roughly 200 succulents concentrated in southern Africa, ranging from the ubiquitous tree-like Jade Plant to tiny mat-forming groundcovers — nearly all built around thick, water-storing leaves and a strong tolerance for neglect.',
    images: [],
    highlights: [
        'Jade Plant (Crassula ovata) is one of the most widely grown houseplants in the world and can live for decades.',
        'Most species store enough water in their leaves and stems to shrug off weeks of missed watering.',
        'Many species flush red or orange at the leaf margins under strong direct sun.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Frost-tender; grown as a houseplant almost everywhere.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright, some direct sun',
            caption:
                'A few hours of direct sun daily keeps growth compact and can flush red at the edges.',
        },
        watering: {
            score: 1,
            value: 'Sparse & deep',
            caption:
                'Every 2-3 weeks; let the mix dry out fully between drinks.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'One of the most forgiving succulent genera there is.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Can cause vomiting, incoordination, or a slowed heart rate in pets if chewed.',
            level: 'mildly-toxic',
        },
    },
    nativeRange: {
        description:
            'Dry, rocky hillsides and grasslands across southern Africa, with the greatest diversity in South Africa and Namibia, and a few species reaching Madagascar and the Arabian Peninsula.',
        regions: ['South Africa', 'Namibia', 'Madagascar', 'Arabian Peninsula'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Check leaf firmness before deciding whether to water.',
        },
        {
            interval: 'weekly',
            task: 'Rotate the pot a quarter turn for even, upright growth.',
        },
        {
            interval: 'as-needed',
            task: 'Water thoroughly only once the mix has dried out completely.',
        },
        {
            interval: 'seasonal',
            task: 'Prune and shape after a season of strong growth to encourage a tree-like form.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Saxifragales',
        family: 'Crassulaceae',
    },
    relatedGenera: ['aeonium', 'echeveria', 'sedum', 'kalanchoe'],
};
