import type { Plant } from '../../lib/db/models/Plant';

export const tradescantiaFluminensisNanouk: Omit<
    Plant,
    'createdAt' | 'updatedAt'
> = {
    genus: 'tradescantia',
    species: 'fluminensis',
    variety: 'nanouk',
    commonNames: ['Tradescantia Nanouk', 'Fluminensis Tricolor'],
    description:
        'A patented sport of Wandering Jew, Tradescantia \'Nanouk\' swaps plain green for thick, succulent-like leaves striped in pink, cream, and green — the same fast, trailing growth habit dialed up with far bolder color.',
    images: [],
    tags: ['vining', 'beginner-friendly', 'variegated', 'mildly-toxic'],
    highlights: [
        'Bred by Costa Farms and introduced in 2018, it quickly became one of the most sought-after variegated trailers.',
        'Leaves are noticeably thicker and more succulent than plain Tradescantia fluminensis, storing a bit more water.',
        'Pink coloration intensifies with brighter light and can fade toward green in dim spots.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Frost-tender; grown as a houseplant outside mild, frost-free climates.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright, indirect to some direct',
            caption:
                'Needs more light than the plain species to hold its pink and cream striping; low light fades color and encourages legginess.',
        },
        watering: {
            score: 2,
            value: 'Let the top inch dry',
            caption:
                'Thicker, succulent leaves hold more moisture than plain fluminensis, so it tolerates drying out a bit more between waterings.',
        },
        difficulty: {
            score: 2,
            value: 'Easy to moderate',
            caption:
                'Just as forgiving as the species, but light levels need attention to keep variegation from reverting.',
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
            detail: 'Stems trail and spread quickly, staying more compact and dense than plain fluminensis.',
            minFt: 1,
            maxFt: 2,
        },
        soil: {
            value: 'Standard, well-draining mix',
            detail: 'A regular potting mix with a little added perlite balances moisture retention with drainage for the thicker roots.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Roots readily in water and adapts to LECA with minimal transition stress.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, diluted',
            detail: 'A general houseplant fertilizer at half strength supports steady growth without pushing weak, leggy stems.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer; skip in autumn and winter while growth slows.',
        },
        nativeHabitat: {
            value: 'Cultivated hybrid, South American parentage',
            detail: 'A bred cultivar rather than a wild species; its Tradescantia parentage traces to South American rainforest floors.',
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
            heading: 'Give it the brightest spot you can, then let it trail.',
            body: 'Nanouk\'s signature pink striping is entirely light-driven — the single biggest lever for keeping it vivid is placement. Beyond that, its care mirrors plain Wandering Jew: regular pinching, consistent moisture, and easy propagation from cuttings.',
            highlights: [
                'New growth in low light emerges greener and less pink — move to a brighter spot to bring color back on future leaves.',
                'Thicker leaves mean it forgives a missed watering better than plain fluminensis.',
                'Handle cuttings with care — the sap is a known skin and eye irritant for some people and pets.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture and water once the top inch has dried.',
            },
            {
                interval: 'weekly',
                task: 'Confirm the plant is getting bright enough light to hold its color.',
            },
            {
                interval: 'monthly',
                task: 'Pinch a few stem tips to keep growth full and root the cuttings.',
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
                detail: 'The single biggest factor in keeping pink and cream striping vivid rather than fading to green.',
            },
            {
                label: 'Hydration',
                stat: 'Weekly, once topsoil dries',
                detail: 'Let the top inch dry before watering — its succulent leaves tolerate more leeway than plain fluminensis.',
            },
            {
                label: 'Pruning',
                stat: 'Every 3-4 weeks',
                detail: 'Pinching keeps growth compact and encourages new, well-colored leaves rather than long bare runners.',
            },
            {
                label: 'Propagation',
                stat: 'Easy',
                detail: 'Stem cuttings root readily in water, though rooted cuttings need bright light to keep their pink coloring.',
            },
        ],
        wateringRhythm: {
            heading: 'A little drier than plain Wandering Jew.',
            body: 'Nanouk\'s thicker, more succulent leaves hold moisture better than the plain species, so let the top inch of soil dry before watering again. Soak thoroughly and let the pot drain fully.',
            tips: [
                'Slightly shriveled or thinner-looking leaves are an early underwatering cue — water before full wilting sets in.',
                'Avoid letting the pot sit in standing water, which leads to root and stem rot.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 7-10 days',
                tip: 'Water once the top inch of soil dries during active growth.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 10-12 days',
                tip: 'Ease off gradually as growth slows with cooler, shorter days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 2-3 weeks',
                tip: 'Water sparingly; the soil can stay slightly drier during its winter rest.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water if the top inch is dry.',
                    'Confirm placement is bright enough to keep new leaves colorful.',
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
                    'Cut back leggy or reverted-green stems in spring to encourage denser, brighter regrowth.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Well-draining potting mix',
                note: 'Balances moisture retention with drainage for the thicker root system.',
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
                title: 'Leaves Fading Toward Green',
                tag: 'Low Light',
                description:
                    'New leaves emerging mostly green with little pink or cream striping signal insufficient light, not a disease.',
                actions: [
                    'Move to a brighter spot with more indirect or gentle direct light.',
                    'Prune back reverted growth once brighter placement produces well-colored new leaves.',
                ],
            },
            {
                title: 'Leggy, Sparse Stems',
                tag: 'Needs Pruning',
                description:
                    'Long stems with leaves spaced far apart develop when the plant is stretching for light or has gone too long without pinching.',
                actions: [
                    'Increase light levels to encourage more compact growth.',
                    'Pinch stem tips regularly and cut back leggy stems to root as fresh cuttings.',
                ],
            },
            {
                title: 'Shriveled, Thin Leaves',
                tag: 'Underwatering',
                description:
                    'Leaves that look deflated or papery indicate the succulent-like foliage has gone too long without water.',
                actions: [
                    'Water thoroughly and check that leaves plump back up within a day.',
                    'Water slightly more often if this recurs between the usual watering interval.',
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
            'Give it bright, indirect light — the main driver of vivid pink and cream color.',
            'Let the top inch of soil dry before watering again.',
            'Pinch stem tips regularly to keep growth compact rather than leggy.',
            'Keep cuttings and sap away from pets prone to skin sensitivity.',
        ],
    },
};
