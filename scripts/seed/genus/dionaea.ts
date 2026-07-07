import type { Genus } from '../../../lib/db/models/Genus';

export const dionaea: Omit<Genus, 'createdAt' | 'updatedAt'> = {
    genus: 'dionaea',
    speciesEstimate: 1,
    description:
        'A monotypic genus containing a single wild species, the Venus Flytrap, native to a small stretch of coastal bogs in North and South Carolina — famous for hinged, tooth-fringed lobes that snap shut on prey in a fraction of a second.',
    images: [],
    highlights: [
        'The entire genus is one species, restricted in the wild to a roughly 90-mile radius around Wilmington, North Carolina.',
        "Trap closure is nature's fastest plant movement, triggered when tiny hairs inside a lobe are touched twice in quick succession.",
        'Requires a genuine annual winter dormancy — skipping it repeatedly exhausts and eventually kills the plant.',
    ],
    vitals: {
        hardinessZone: {
            value: '8-10',
            caption:
                'Grows outdoors year-round in its native range; indoors elsewhere with an enforced cool winter rest.',
            zoneMin: 8,
            zoneMax: 10,
        },
        light: {
            score: 5,
            value: 'Full sun, 4+ hours direct',
            caption:
                'Needs the strongest light available — a bare windowsill is rarely enough.',
        },
        watering: {
            score: 5,
            value: 'Constantly moist, tray method',
            caption:
                'Sits in a shallow tray of distilled or rainwater year-round, drier during winter dormancy.',
        },
        difficulty: {
            score: 4,
            value: 'Advanced',
            caption:
                'Deceptively fussy — most struggling plants trace back to insufficient light or a skipped dormancy.',
            level: 'advanced',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                "Safe around pets and kids — the trap's digestive enzymes only affect the insects it catches.",
            level: 'non-toxic',
        },
    },
    nativeRange: {
        description:
            'Acidic, waterlogged, nutrient-poor sandy bogs and wet pine savannas along the coastal plain of the Carolinas, exposed to intense, unobstructed sun for most of the day.',
        regions: ['North Carolina', 'South Carolina'],
    },
    careCadence: [
        {
            interval: 'weekly',
            task: 'Refill the water tray with distilled or rainwater so it never runs dry (except during dormancy).',
        },
        {
            interval: 'monthly',
            task: 'Trim any fully blackened, spent traps at their base.',
        },
        {
            interval: 'seasonal',
            task: 'Move the plant into a cold, low-light rest for about three months in winter, then reintroduce bright light and normal watering in spring.',
        },
    ],
    taxonomy: {
        kingdom: 'Plantae',
        order: 'Caryophyllales',
        family: 'Droseraceae',
    },
    relatedGenera: ['drosera', 'nepenthes', 'sarracenia', 'pinguicula'],
};
