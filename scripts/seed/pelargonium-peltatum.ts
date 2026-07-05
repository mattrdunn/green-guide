import type { Plant } from '../../lib/db/models/Plant';

export const pelargoniumPeltatum: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'pelargonium',
    species: 'peltatum',
    commonNames: ['Ivy Geranium', 'Ivy-Leaved Geranium', 'Cascading Geranium'],
    description:
        'A trailing, waxy-leaved geranium bred for hanging baskets and window boxes. Ivy Geranium spills long stems of glossy, ivy-shaped foliage and clusters of pink, red, purple, or white blooms all summer with steady sun and deadheading.',
    images: [],
    tags: [
        'flowering',
        'trailing',
        'full-sun',
        'container-friendly',
        'mildly-toxic',
    ],
    highlights: [
        'Trailing stems can reach 2-3 ft, making it a hanging-basket and window-box staple.',
        'Thicker, waxier leaves than zonal geraniums shrug off heat and light drought better.',
        'Regular deadheading keeps the plant reblooming from spring through the first frost.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption: 'Grown as a perennial in frost-free zones; elsewhere as an annual or overwintered container plant.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Full sun to bright light',
            caption: '6+ hours of sun for the best bloom; tolerates light afternoon shade in hot climates.',
        },
        watering: {
            score: 3,
            value: 'Moderate',
            caption: 'Water when the top 1-2 inches of soil dry out; avoid soggy or constantly wet mix.',
        },
        difficulty: {
            score: 2,
            value: 'Easy to moderate',
            caption: 'Forgiving and fast-growing, but wants regular deadheading and feeding to keep blooming.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Geraniol and linalool in the foliage can cause GI upset and skin irritation in pets and people.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '6-8 in tall, 2-3 ft trailing',
            detail: 'Stays low and mounding at the crown while trailing stems cascade well past the pot rim.',
            minFt: 1,
            maxFt: 3,
        },
        soil: {
            value: 'Rich, well-draining potting mix',
            detail: 'A standard potting mix amended with perlite; slightly acidic to neutral pH suits it best.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Prefers a real dry-down between waterings — constant moisture invites stem and root rot.',
            compatible: false,
        },
        fertilizer: {
            value: 'Bloom-booster, phosphorus-rich',
            detail: 'A higher-phosphorus feed encourages flower production over leafy growth.',
            npk: '15-30-15',
        },
        fertilizerFrequency: {
            value: 'Every 2 weeks in season',
            detail: 'Feed regularly through spring and summer; taper off as light and growth slow in fall.',
        },
        nativeHabitat: {
            value: 'South Africa',
            detail: 'Cape Province cliffs and rocky slopes — bright light, good drainage, and a trailing growth habit.',
        },
        humidity: {
            value: 'Average room humidity',
            detail: 'Not fussy about humidity, but good airflow around the foliage helps prevent fungal issues.',
            minPct: 30,
        },
        temperature: {
            value: '60° – 80°F',
            detail: 'Thrives in mild-to-warm conditions; stops blooming and can suffer damage below 40°F.',
            minF: 40,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'Continuous flushes of bloom from spring through the first frost, given enough sun and deadheading.',
        },
        dailyRhythm: {
            heading: 'A trailing bloomer that rewards a light daily touch.',
            body: 'Ivy Geranium wants full sun, a quick check of the soil, and spent blooms pinched off before they set seed. The payoff is a steady cascade of color with very little else required.',
            highlights: [
                'Deadhead spent flower clusters to keep new buds coming.',
                'Water at the soil line — wet foliage invites fungal leaf spot.',
                'Rotate the pot occasionally so trailing stems fill in evenly.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Pinch off spent blooms and any yellowing leaves.',
            },
            {
                interval: 'weekly',
                task: 'Check soil moisture and water at the base if the top inch is dry.',
            },
            {
                interval: 'as-needed',
                task: 'Feed with a bloom-booster fertilizer through the growing season.',
            },
            {
                interval: 'seasonal',
                task: 'Cut back leggy stems to encourage bushier regrowth.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6+ hrs direct',
                detail: 'Full sun drives the heaviest bloom; too much shade produces stretchy stems and fewer flowers.',
            },
            {
                label: 'Water',
                stat: 'When top 1-2 in dry',
                detail: 'Consistent but not constant moisture — err dry between waterings.',
            },
            {
                label: 'Deadheading',
                stat: 'Weekly',
                detail: 'Removing spent blooms redirects energy into new buds instead of seed production.',
            },
            {
                label: 'Feeding',
                stat: 'Every 2 wks in season',
                detail: 'A bloom-booster formula keeps flower production high across the summer.',
            },
        ],
        wateringRhythm: {
            heading: 'Water the soil, not the leaves.',
            body: 'Let the top inch or two of the mix dry before watering thoroughly at the base. Wetting the foliage — especially in humid or still air — invites fungal leaf spot and botrytis. Reduce frequency in cooler months or if the plant is overwintered indoors.',
            tips: [
                'Water in the morning so any splashed foliage dries out during the day.',
                'Containers dry faster than in-ground beds — check hanging baskets most often.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Every 4-6 days',
                tip: 'Ramp up watering as new growth and bud set accelerate.',
            },
            {
                season: 'Summer',
                cadence: 'Every 3-5 days',
                tip: 'Hot, windy conditions dry hanging baskets fast — check daily in heat waves.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Every 10-14 days',
                tip: 'Cut back sharply as growth slows; overwintered plants need very little water.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Deadhead spent flower clusters at the base of the stem.',
                    'Scan leaves for aphids, whiteflies, or early leaf spot.',
                    'Water at the soil line if the top inch has dried.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Cut back leggy or bare stems by up to a third to encourage bushiness.',
                    'Repot into fresh mix if roots have filled the container.',
                    'Bring indoors or take cuttings before the first frost in cold climates.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Bloom-booster fertilizer (high phosphorus)',
                note: 'Supports heavy, continuous flowering through the season.',
            },
            {
                item: 'Snips or pinching shears',
                note: 'For quick, frequent deadheading and shaping.',
            },
            {
                item: 'Well-draining potting mix with perlite',
                note: 'Keeps roots from sitting wet between waterings.',
            },
            {
                item: 'Hanging basket or window box with drainage',
                note: 'Shows off the trailing habit while preventing waterlogged roots.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Yellowing Lower Leaves',
                description:
                    'Often a sign of overwatering or a pot without adequate drainage.',
                actions: [
                    'Let the soil dry out fully before the next watering.',
                    'Check the container has a drainage hole and free-draining mix.',
                    'Remove yellowed leaves to redirect energy to healthy growth.',
                ],
            },
            {
                title: 'Leggy, Sparse Stems',
                description:
                    'Long, thin stems with few leaves or blooms usually point to insufficient light.',
                actions: [
                    'Move to a sunnier spot with at least 6 hours of direct light.',
                    'Cut back leggy stems to encourage denser, bushier regrowth.',
                ],
            },
            {
                title: 'No Blooms Despite Healthy Growth',
                description:
                    'Lush green growth without flowers usually means too much nitrogen or not enough light.',
                actions: [
                    'Switch to a bloom-booster (high-phosphorus) fertilizer.',
                    'Confirm the plant gets full sun for most of the day.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                signs: 'Clusters of small green or black insects on new growth and buds.',
                treatment:
                    'Spray off with water and follow with insecticidal soap every 5-7 days until clear.',
            },
            {
                name: 'Whiteflies',
                signs: 'Tiny white insects that flutter up when the plant is disturbed.',
                treatment:
                    'Use yellow sticky traps and treat with insecticidal soap or horticultural oil.',
            },
            {
                name: 'Geranium Budworm',
                signs: 'Small holes chewed in flower buds; buds fail to open.',
                treatment:
                    'Hand-pick visible larvae and apply a Bt-based (Bacillus thuringiensis) spray.',
            },
        ],
        stabilityChecklist: [
            'Give it full sun for at least 6 hours a day.',
            'Water at the soil line and let the top inch dry between waterings.',
            'Deadhead spent blooms weekly to keep new flowers coming.',
            'Feed with a bloom-booster fertilizer every 2 weeks during the growing season.',
        ],
    },
};
