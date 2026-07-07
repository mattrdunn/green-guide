import type { Plant } from '../../lib/db/models/Plant';

export const tradescantiaFluminensis: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'tradescantia',
    species: 'fluminensis',
    commonNames: ['Wandering Jew', 'Small-Leaf Spiderwort', 'Inch Plant'],
    description:
        'Glossy, oval green leaves trail from fast-growing stems that root wherever they touch soil, making Tradescantia fluminensis one of the quickest houseplants to fill a hanging basket — and one of the easiest to propagate back into more.',
    images: [],
    tags: ['vining', 'beginner-friendly', 'fast-growing', 'mildly-toxic'],
    highlights: [
        'Native to the forest floor of Brazil, Argentina, and Uruguay, where it spreads as a low, shaded groundcover.',
        'Grows so readily from stem cuttings that a single healthy vine can restock an entire pot in a few weeks.',
        'Naturalized as an aggressive weed in parts of Australia and New Zealand — never discard cuttings outdoors in a mild climate.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Frost-tender; grown as a groundcover outdoors only in mild climates.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Tolerates some direct morning sun; low light slows growth and thins out the trailing stems.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Prefers consistent moisture and wilts noticeably when it dries out fully.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Vigorous and forgiving, with propagation as close to foolproof as houseplants get.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Sap can irritate skin and cause contact dermatitis in pets, especially light-coated dogs.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '1-2 ft trailing vines',
            detail: 'Stems trail and spread quickly rather than growing upright; pinching keeps growth full instead of stringy.',
            minFt: 1,
            maxFt: 2,
        },
        soil: {
            value: 'Standard, moisture-retentive mix',
            detail: 'A regular potting mix holds enough moisture between waterings; add a little perlite for drainage.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Roots readily in plain water and converts to LECA with almost no transition stress.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, diluted',
            detail: 'A general houseplant fertilizer at half strength supports its fast growth without pushing legginess.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer; skip in autumn and winter while growth slows.',
        },
        nativeHabitat: {
            value: 'South American rainforest floor',
            detail: 'Shaded, humid understory of Brazil, Argentina, and Uruguay, where it forms a dense, low mat.',
        },
        humidity: {
            value: 'Moderate to high (45%+)',
            detail: 'Average indoor humidity is fine; higher humidity keeps leaf edges from crisping.',
            minPct: 45,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges; cold drafts slow growth and can blacken stem tips.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Autumn',
            detail: 'Grows nearly continuously in warm months, with only a brief slowdown in winter.',
        },
        dailyRhythm: {
            heading: 'A fast grower that rewards regular pinching.',
            body: 'Left alone, Wandering Jew stretches into long, sparse strands. A few minutes of pinching every couple of weeks keeps it dense, and every pinched tip roots easily as a new cutting.',
            highlights: [
                'Wilting is usually the first, most reliable sign it needs water — it perks back up quickly once watered.',
                'Bare, leggy stems near the base are normal with age; refresh the pot with rooted cuttings rather than fighting it.',
                'Handle cuttings with care — the sap is a known skin and eye irritant for some people and pets.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture and water if the top inch has dried.',
            },
            {
                interval: 'weekly',
                task: 'Pinch a few leggy stem tips to keep growth full.',
            },
            {
                interval: 'monthly',
                task: 'Root pinched cuttings in water to refresh or bulk up the pot.',
            },
            {
                interval: 'monthly',
                task: 'Feed with a diluted balanced fertilizer during the growing season.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Weekly, or when topsoil dries',
                detail: 'Keep the soil evenly moist through the growing season; wilting leaves are the clearest cue it is thirsty.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Some direct morning sun is welcome, but harsh afternoon sun can scorch the glossy leaves.',
            },
            {
                label: 'Pruning',
                stat: 'Every 2-3 weeks',
                detail: 'Regular pinching prevents the bare, stringy growth this plant is prone to when left untrimmed.',
            },
            {
                label: 'Propagation',
                stat: 'Nearly instant',
                detail: 'Stem cuttings root in water within a week or two, making it one of the easiest plants to multiply.',
            },
        ],
        wateringRhythm: {
            heading: 'Keep it consistently on the moist side.',
            body: 'Unlike drought-tolerant houseplants, Wandering Jew prefers the soil to stay lightly moist rather than drying out fully between waterings. Let the top inch dry, then water thoroughly and let excess drain away.',
            tips: [
                'A fully wilted plant usually recovers within hours of a good soak — but repeated wilting stresses the stems.',
                'Avoid letting the pot sit in standing water, which leads to root rot despite the plant\'s thirst.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 5-7 days',
                tip: 'Water as soon as the top inch of soil dries during active growth.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Ease off gradually as growth slows with cooler, shorter days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Water sparingly; the soil can stay slightly drier during its winter rest.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water if the top inch is dry.',
                    'Pinch a few stem tips to keep growth bushy.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed with a half-strength balanced fertilizer during the growing season.',
                    'Root any accumulated cuttings in water to propagate or refresh the pot.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Repot annually — it grows quickly enough to outpace a small container within a year.',
                    'Cut leggy stems back hard in spring to encourage denser new growth.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Moisture-retentive potting mix',
                note: 'Holds consistent moisture between waterings without staying waterlogged.',
            },
            {
                item: 'Clean pruning snips',
                note: 'For regular pinching and generating fresh propagation cuttings.',
            },
            {
                item: 'Small propagation vessel',
                note: 'Cuttings root in plain water within one to two weeks.',
            },
            {
                item: 'Gloves for handling cuttings',
                note: 'The sap can irritate skin and eyes during pruning or propagation.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Wilting, Limp Leaves',
                tag: 'Underwatering',
                description:
                    'This plant wilts quickly and visibly once the soil dries out fully, well before other houseplants show stress.',
                actions: [
                    'Water thoroughly and check that the plant recovers within a few hours.',
                    'Move to a spot where soil moisture is easier to monitor and maintain.',
                ],
            },
            {
                title: 'Leggy, Bare Stems',
                tag: 'Needs Pruning',
                description:
                    'Long, sparsely leaved stems develop naturally with age or when light is too low, and pinching alone will not reverse older growth.',
                actions: [
                    'Pinch stem tips every couple of weeks to encourage fuller branching.',
                    'Cut leggy stems back hard and root the cuttings to replace bare growth.',
                ],
            },
            {
                title: 'Mushy Stems Near the Soil',
                tag: 'Overwatering',
                description:
                    'Despite liking consistent moisture, standing water at the roots leads to soft, blackened stem bases.',
                actions: [
                    'Let the soil dry slightly before watering again and ensure the pot drains fully.',
                    'Trim away any mushy stem sections and repot into fresh mix if rot has set in.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small, soft-bodied insects clustering on new growth and stem tips, often with sticky residue.',
                treatment:
                    'Rinse foliage under running water and follow with insecticidal soap every 5-7 days until clear.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and faint webbing on leaves, most common in warm, dry rooms.',
                treatment:
                    'Rinse foliage, raise humidity, and treat with insecticidal soap weekly until stippling stops.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White, cottony tufts hiding along stems and where leaves meet the vine.',
                treatment:
                    'Dab visible clusters with rubbing alcohol, then follow with horticultural oil every 7-10 days.',
            },
        ],
        stabilityChecklist: [
            'Keep soil consistently moist rather than letting it fully dry.',
            'Pinch stem tips every couple of weeks to prevent legginess.',
            'Provide bright, indirect light with a little tolerated morning sun.',
            'Keep cuttings and sap away from pets prone to skin sensitivity.',
        ],
    },
};
