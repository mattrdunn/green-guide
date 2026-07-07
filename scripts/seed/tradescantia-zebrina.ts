import type { Plant } from '../../lib/db/models/Plant';

export const tradescantiaZebrina: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'tradescantia',
    species: 'zebrina',
    commonNames: ['Wandering Dude', 'Silver Inch Plant', 'Zebrina'],
    description:
        'Iridescent, silver-striped leaves with deep purple undersides trail from fast-growing stems, giving Tradescantia zebrina one of the most vividly colored, low-effort hanging displays a windowsill can offer.',
    images: [],
    tags: ['vining', 'beginner-friendly', 'fast-growing', 'mildly-toxic'],
    highlights: [
        'Formerly classified in its own genus as Zebrina pendula before being folded into Tradescantia.',
        'Leaf color shifts with light intensity — brighter spots deepen the purple and sharpen the silver stripes.',
        'Roots so readily from cuttings that a single stem can restock an entire hanging basket in weeks.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Frost-tender; grown as a groundcover outdoors only in mild, frost-free climates.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright, indirect to some direct',
            caption:
                'Needs strong light to keep its silver-and-purple striping bold; low light causes fading and legginess.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Prefers consistent moisture and wilts noticeably once the soil dries out fully.',
        },
        difficulty: {
            score: 2,
            value: 'Easy to moderate',
            caption:
                'Fast and forgiving overall, but keeping its color vivid takes more attentive light placement than most trailers.',
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
            value: 'Standard, well-draining mix',
            detail: 'A regular potting mix with a little added perlite balances moisture retention with drainage.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Roots readily in plain water and converts to LECA with almost no transition stress.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, diluted',
            detail: 'A general houseplant fertilizer at half strength supports its fast growth without pushing weak, leggy stems.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer; skip in autumn and winter while growth slows.',
        },
        nativeHabitat: {
            value: 'Mexico & Central America',
            detail: 'Warm, humid understory and disturbed ground, where bright dappled light keeps its foliage vividly colored.',
        },
        humidity: {
            value: 'Moderate to high (45%+)',
            detail: 'Average indoor humidity is fine; higher humidity keeps leaf edges from crisping.',
            minPct: 45,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges; cold drafts slow growth and can dull leaf color.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Autumn',
            detail: 'Grows nearly continuously in warm months, with only a brief slowdown in winter.',
        },
        dailyRhythm: {
            heading: 'Color is a direct readout of light.',
            body: 'Wandering Dude tells you almost everything through its leaves — dull, faded, or greening stripes mean move it somewhere brighter. Beyond light, its needs are simple: steady moisture, regular pinching, and easy propagation from cuttings.',
            highlights: [
                'New growth in low light emerges duller and greener — reposition toward brighter light to bring the silver and purple back.',
                'Wilting is a fast, reliable thirst signal that reverses within hours of watering.',
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
                task: 'Confirm the plant is getting bright enough light to hold its color.',
            },
            {
                interval: 'monthly',
                task: 'Pinch a few leggy stem tips and root the cuttings.',
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
                label: 'Light',
                stat: 'Bright, indirect+',
                detail: 'The main driver of bold silver striping and deep purple undersides; too little light fades both.',
            },
            {
                label: 'Hydration',
                stat: 'Weekly, or when topsoil dries',
                detail: 'Keep soil evenly moist through the growing season; wilting leaves are the clearest cue it is thirsty.',
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
            body: 'Wandering Dude prefers the soil to stay lightly moist rather than drying out fully between waterings. Let the top inch dry, then water thoroughly and let excess drain away.',
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
                    'Confirm placement is bright enough to keep colors vivid.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed with a half-strength balanced fertilizer during the growing season.',
                    'Pinch a few stem tips and root the cuttings to keep the pot full.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Repot annually into fresh mix as roots fill the container.',
                    'Cut back leggy or faded stems in spring to encourage denser, brighter regrowth.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Well-draining potting mix',
                note: 'Balances moisture retention with drainage for steady root health.',
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
                title: 'Fading, Dull, or Greening Stripes',
                tag: 'Low Light',
                description:
                    'New leaves emerging duller or more solid green than silver-and-purple striped signal insufficient light, not a disease.',
                actions: [
                    'Move to a brighter spot with more indirect or gentle direct light.',
                    'Prune back faded growth once brighter placement produces well-colored new leaves.',
                ],
            },
            {
                title: 'Leggy, Bare Stems',
                tag: 'Needs Pruning',
                description:
                    'Long stems with leaves spaced far apart develop when the plant is stretching for light or has gone too long without pinching.',
                actions: [
                    'Increase light levels to encourage more compact growth.',
                    'Pinch stem tips regularly and cut back leggy stems to root as fresh cuttings.',
                ],
            },
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
            'Give it bright, indirect light — the main driver of vivid silver and purple color.',
            'Keep soil consistently moist rather than letting it fully dry.',
            'Pinch stem tips every couple of weeks to prevent legginess.',
            'Keep cuttings and sap away from pets prone to skin sensitivity.',
        ],
    },
};
