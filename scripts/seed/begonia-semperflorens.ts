import type { Plant } from '../../lib/db/models/Plant';

export const begoniaSemperflorens: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'begonia',
    species: 'semperflorens',
    commonNames: ['Wax Begonia', 'Bedding Begonia', 'Fibrous Begonia'],
    description:
        'Glossy, waxy leaves and small flowers that bloom continuously from spring through frost make wax begonia the most widely planted begonia in the world — a compact, low-fuss staple of garden borders, window boxes, and sunny windowsills alike.',
    images: [
        { url: 'plants/begonia/semperflorens/img-1.jpg', alt: '' },
        { url: 'plants/begonia/semperflorens/img-2.jpg', alt: '' },
        { url: 'plants/begonia/semperflorens/img-3.jpg', alt: '' },
        { url: 'plants/begonia/semperflorens/img-4.jpg', alt: '' },
    ],
    tags: [
        'flowering',
        'compact',
        'beginner-friendly',
        'bedding-plant',
        'mildly-toxic',
    ],
    highlights: [
        'Native to Brazil, where it grows along shaded forest margins rather than open ground.',
        'Blooms nearly year-round in the right conditions, unlike most flowering houseplants that cycle through a dormant season.',
        'Tolerates more direct sun than other begonia groups, especially bronze-leaved cultivars.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption:
                'Grown as a perennial in the tropics, but treated as an annual almost everywhere else.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright, indirect to filtered sun',
            caption:
                'Tolerates a few hours of gentle direct sun better than most begonias; deep shade slows flowering.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Fibrous roots want consistent moisture but rot quickly if the soil stays waterlogged.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption:
                'Forgiving and fast-growing — a common first flowering plant for new gardeners.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Contains soluble calcium oxalates; mild irritation if chewed by pets or curious kids.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '6-12 in',
            detail: 'Stays low and mounded, making it a reliable border or container filler.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Well-draining potting mix',
            detail: 'A standard peat- or coir-based mix with added perlite keeps the fibrous roots from sitting wet.',
        },
        semiHydro: {
            value: 'Not recommended',
            detail: 'Fine fibrous roots and constant flowering make it better suited to soil, where moisture is easier to buffer.',
            compatible: false,
        },
        fertilizer: {
            value: 'Balanced liquid feed',
            detail: 'A diluted balanced fertilizer supports continuous blooming without pushing weak, leggy growth.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Every 2 weeks in season',
            detail: 'Feed biweekly spring through fall; skip or cut back in winter if grown indoors as a houseplant.',
        },
        nativeHabitat: {
            value: 'Brazil',
            detail: 'Grows along shaded forest edges and clearings in humid, subtropical lowlands.',
        },
        humidity: {
            value: '40%+ tolerated',
            detail: 'Adapts well to average outdoor and indoor humidity without special measures.',
            minPct: 40,
        },
        temperature: {
            value: '65° – 75°F',
            detail: 'Thrives in typical growing-season temperatures; damaged by any frost.',
            minF: 65,
            maxF: 75,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'Blooms continuously through the growing season rather than in a single flush.',
        },
        dailyRhythm: {
            heading:
                'A continuous bloomer that just wants steady moisture and light.',
            body: 'Wax begonia rewards a simple routine: check the soil, deadhead spent blooms occasionally, and keep it out of harsh midday sun in hot climates. It rarely goes fully dormant, so care stays consistent through most of the year.',
            highlights: [
                'Check soil moisture every few days during active growth.',
                'Pinch spent flowers and leggy stems to keep growth full.',
                'Move containers out of harsh afternoon sun in peak summer heat.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture and water before it dries out completely.',
            },
            {
                interval: 'weekly',
                task: 'Deadhead spent flowers to encourage continuous blooming.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly once the surface starts to dry, then let it drain.',
            },
            {
                interval: 'monthly',
                task: 'Pinch back leggy stems to keep the mound full and compact.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 4-7 days',
                detail: 'Keep soil evenly moist through the growing season without letting it turn soggy.',
            },
            {
                label: 'Light',
                stat: 'Bright, filtered sun',
                detail: 'More light than most begonias tolerate means more flowers, up to a point.',
            },
            {
                label: 'Nutrition',
                stat: 'Biweekly, diluted',
                detail: 'Regular light feeding fuels its near-constant flower production.',
            },
            {
                label: 'Pruning',
                stat: 'Deadhead & pinch',
                detail: 'Removing spent blooms and leggy stems keeps the mound dense and floriferous.',
            },
        ],
        wateringRhythm: {
            heading: 'Consistent, not constant.',
            body: 'Water when the top inch of soil starts to dry, soaking thoroughly and letting excess drain away. Because it flowers continuously, wax begonia has little tolerance for long dry spells, but it dislikes standing water just as much.',
            tips: [
                'Wilting that recovers quickly after watering is normal; wilting that persists points to root rot.',
                'Water at the base rather than overhead to keep flowers and foliage dry and reduce fungal issues.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 4-6 days',
                tip: 'Hot, dry stretches may call for watering every other day in containers.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Ease off gradually as growth and flowering slow with cooler temperatures.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Indoors, let the surface dry more between waterings while light and growth are lower.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water at the base if dry.',
                    'Deadhead spent blooms and yellowing leaves.',
                    'Inspect stem joints and leaf undersides for pests.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Pinch back leggy stems to encourage bushier growth.',
                    'Feed with a diluted balanced fertilizer during the growing season.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Well-draining potting mix',
                note: 'A peat- or coir-based mix with perlite suits the fine fibrous roots.',
            },
            {
                item: 'Sharp micro-snips',
                note: 'Clean deadheading and pinching keeps new blooms coming.',
            },
            {
                item: 'Watering can with a narrow spout',
                note: 'Targets water at the soil, keeping flowers and foliage dry.',
            },
            {
                item: 'Balanced liquid fertilizer',
                note: 'Diluted to half strength for regular feeding without burning roots.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Leggy, Sparse Stems',
                tag: 'Low Light',
                description:
                    'Stretched stems with fewer flowers and larger gaps between leaves point to insufficient light.',
                actions: [
                    'Move to a brighter spot with filtered or morning direct sun.',
                    'Pinch back leggy stems to encourage denser, bushier regrowth.',
                ],
            },
            {
                title: 'Mushy Stems & Yellowing Leaves',
                tag: 'Overwatering',
                description:
                    'Soft, discolored stems near the soil line usually mean the roots are sitting in water that never gets to dry out.',
                actions: [
                    'Let the soil dry further between waterings.',
                    'Improve drainage or repot into a fresh, well-draining mix.',
                ],
            },
            {
                title: 'Fuzzy Gray Mold on Flowers',
                tag: 'Fungal',
                description:
                    'Gray, fuzzy patches on spent blooms or damp foliage indicate botrytis, favored by still, humid air.',
                actions: [
                    'Remove and discard affected flowers and leaves promptly.',
                    'Increase airflow around the plant and avoid wetting foliage when watering.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Clusters of small, soft-bodied insects on new growth and flower buds.',
                treatment:
                    'Spray off with water, then apply insecticidal soap weekly until clear.',
            },
            {
                name: 'Whiteflies',
                pestSlug: 'whiteflies',
                signs: 'Tiny white flies that scatter when the plant is disturbed, clustering on leaf undersides.',
                treatment:
                    'Use yellow sticky traps and treat with insecticidal soap or horticultural oil weekly.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White, cottony clusters tucked into stem joints and leaf axils.',
                treatment:
                    'Swab visible clusters with rubbing alcohol, then follow up with horticultural oil every 7-10 days.',
            },
        ],
        stabilityChecklist: [
            'Keep soil evenly moist but never waterlogged.',
            'Give bright, filtered light for the most continuous flowering.',
            'Improve airflow and avoid wetting foliage to prevent gray mold.',
            'Deadhead and pinch regularly to keep growth full and blooms coming.',
        ],
    },
};
