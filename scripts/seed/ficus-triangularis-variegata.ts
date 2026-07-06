import type { Plant } from '../../lib/db/models/Plant';

export const ficusTriangularisVariegata: Omit<
    Plant,
    'createdAt' | 'updatedAt'
> = {
    genus: 'ficus',
    species: 'triangularis-variegata',
    commonNames: ['Variegated Triangle Fig', 'Sweetheart Tree'],
    description:
        'Perfectly triangular leaves splashed with cream make Ficus triangularis Variegata a collector favorite — a fig that trades the drama of leaf-dropping cousins for slow, steady, sculptural growth.',
    images: [],
    tags: ['ficus', 'tree', 'variegated', 'mildly-toxic'],
    highlights: [
        'Native to the tropical forests of West and Central Africa.',
        'Variegation is stable but needs bright light to stay crisp.',
        'More forgiving of watering wobbles than Ficus lyrata or benjamina.',
    ],
    vitals: {
        hardinessZone: {
            value: '11-12',
            caption: 'Strictly a houseplant outside the tropics.',
            zoneMin: 11,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'A couple hours of gentle morning sun keeps variegation bold.',
        },
        watering: {
            score: 4,
            value: 'Evenly moist',
            caption: 'Water when the top 1-2" dry; never let it go bone dry.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Easygoing once settled, but sulks after moves and drafts.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Milky latex sap irritates skin and stomachs — keep from pets and wash hands after pruning.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '2-4 ft indoors',
            detail: 'A naturally slow, bushy grower; occasional tip pruning keeps it dense rather than leggy.',
            minFt: 2,
            maxFt: 4,
        },
        soil: {
            value: 'Rich but draining',
            detail: 'Standard potting mix cut with 25% perlite and a handful of bark drains fast while holding steady moisture.',
        },
        semiHydro: {
            value: 'Yes, with patience',
            detail: 'Transitions to LECA or pon well from cuttings; mature soil plants need a slow acclimation to avoid leaf drop.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced 3-1-2',
            detail: 'A gentle, foliage-forward liquid feed at half strength supports the slower variegated growth.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed spring through early autumn; skip winter entirely while growth pauses.',
        },
        nativeHabitat: {
            value: 'West & Central Africa',
            detail: 'Understory tree in humid tropical forest — filtered light, warmth, and steady moisture year-round.',
        },
        humidity: {
            value: '50%+ ideal',
            detail: 'Tolerates average rooms, but leaf edges stay cleaner and growth faster above 50%.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Keep above 60°F and away from AC vents, radiators, and cold windowpanes.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New triangular leaves emerge in flushes when days lengthen and temperatures hold steady.',
        },
        dailyRhythm: {
            heading: 'A slow builder that rewards consistency.',
            body: 'Ficus triangularis wants the same thing every day: bright filtered light, steady warmth, and soil that never swings between soggy and parched. Give it a permanent spot and it repays you with dense, cream-splashed growth.',
            highlights: [
                'Pick one bright spot and leave it there — figs resent relocation.',
                'Keep soil lightly moist; dryness stress shows as sudden leaf drop.',
                'Wipe leaves monthly so the variegated surfaces catch every photon.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top 2" of soil and water if dry.',
            },
            {
                interval: 'weekly',
                task: 'Rotate a quarter turn for even, balanced growth.',
            },
            {
                interval: 'weekly',
                task: 'Scan stems and leaf undersides for scale and mites.',
            },
            {
                interval: 'as-needed',
                task: 'Top up water so the mix stays evenly moist, never soggy.',
            },
            {
                interval: 'monthly',
                task: 'Wipe both leaf surfaces with a damp cloth to clear dust.',
            },
            {
                interval: 'monthly',
                task: 'Prune any all-green reverted shoots to preserve variegation.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright & filtered',
                detail: 'Variegated tissue has less chlorophyll — this cultivar needs noticeably more light than the all-green form.',
            },
            {
                label: 'Hydration',
                stat: 'Steady moisture',
                detail: 'Water when the top inch or two dries; unlike succulents, it should never fully dry out.',
            },
            {
                label: 'Stability',
                stat: 'No sudden moves',
                detail: 'Drafts, relocation, and repotting all trigger leaf drop — change one thing at a time.',
            },
            {
                label: 'Grooming',
                stat: 'Prune in spring',
                detail: 'Tip-prune above a node to encourage branching; wear gloves for the latex sap.',
            },
        ],
        wateringRhythm: {
            heading: 'Consistent sips, never feast or famine.',
            body: 'This fig holds its leaves best on an even moisture cycle. Water thoroughly when the top 1-2 inches of mix are dry, let the pot drain fully, and never leave it standing in a saucer of water. In practice that is roughly weekly in summer and every 10-14 days in winter.',
            tips: [
                'Sudden leaf drop after a dry spell is recoverable — resume even watering and new growth follows.',
                'Use room-temperature water; cold water shocks the roots and spots the leaves.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 5-7 days',
                tip: 'Active growth drinks fast — check moisture twice a week in warm spells.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Taper gradually as light fades; abrupt changes cost leaves.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Keep barely moist, and boost humidity to offset dry indoor heat.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Probe soil moisture before watering rather than watering by calendar.',
                    'Rotate the pot a quarter turn toward the light source.',
                    'Inspect new growth for pests hiding in unfurling leaves.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe both leaf surfaces with a damp cloth to clear dust.',
                    'Feed at half strength during the growing season.',
                    'Prune any all-green reverted shoots to preserve variegation.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Moisture meter or chopstick',
                note: 'Takes the guesswork out of the "top two inches" rule.',
            },
            {
                item: 'Sharp pruners + gloves',
                note: 'Latex sap is a skin irritant — glove up for every cut.',
            },
            {
                item: 'Humidifier or pebble tray',
                note: 'Keeps edges crisp-free through dry winter months.',
            },
            {
                item: 'Neem oil spray',
                note: 'First response for the scale and mites figs attract.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Sudden Leaf Drop',
                description:
                    'The classic ficus protest — triggered by relocation, cold drafts, or a swing from moist to bone-dry soil.',
                actions: [
                    'Identify what changed in the last two weeks and revert it.',
                    'Re-establish an even watering rhythm; do not compensate by overwatering.',
                    'Be patient — a stable fig releafs within a few weeks.',
                ],
            },
            {
                title: 'Browning Variegation',
                description:
                    'The cream sections burn or brown first — they are the most fragile tissue and react earliest to low humidity, sunburn, or salt buildup.',
                actions: [
                    'Diffuse any direct midday sun with a sheer curtain.',
                    'Raise humidity above 50% with a humidifier or grouping.',
                    'Flush the pot every couple of months to rinse fertilizer salts.',
                ],
            },
            {
                title: 'Reverting to Green',
                description:
                    'Shoots emerging solid green mean the plant is compensating for insufficient light by making more chlorophyll.',
                actions: [
                    'Move to a brighter position with gentle direct morning sun.',
                    'Prune fully green stems back to a variegated node.',
                ],
            },
        ],
        pests: [
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Brown bumps along stems and midribs with sticky honeydew below.',
                treatment:
                    'Scrape off adults with a fingernail or alcohol swab, then apply horticultural oil every 7-10 days for a month.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine webbing and pale stippling, worst in dry winter air.',
                treatment:
                    'Shower the foliage, raise humidity, and spray weekly with insecticidal soap until stippling stops spreading.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White cottony tufts in leaf axils and along new growth.',
                treatment:
                    'Dab each cluster with isopropyl alcohol, then follow with neem oil coverage weekly until clear.',
            },
        ],
        stabilityChecklist: [
            'Choose a permanent bright spot before the plant settles — relocation is its top stressor.',
            'Keep it clear of heat vents, AC drafts, and cold glass in winter.',
            'Water by soil check, not calendar, to hold the even-moisture rhythm.',
            'Repot only when clearly root-bound, in spring, sizing up a single inch.',
        ],
    },
};
