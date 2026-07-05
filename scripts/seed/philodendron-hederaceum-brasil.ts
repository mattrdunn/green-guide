import type { Plant } from '../../lib/db/models/Plant';

export const philodendronHederaceumBrasil: Omit<
    Plant,
    'createdAt' | 'updatedAt'
> = {
    genus: 'philodendron',
    species: 'hederaceum-brasil',
    commonNames: [
        'Philodendron Brasil',
        'Variegated Heartleaf Philodendron',
        "Philodendron hederaceum 'Brasil'",
    ],
    description:
        "Heart-shaped leaves painted with a bold lime-and-green stripe make Philodendron hederaceum 'Brasil' the flashiest easy-care vine around — all the resilience of the classic heartleaf philodendron with flag-of-Brazil color on every leaf.",
    images: [],
    tags: [
        'aroid',
        'vining',
        'variegated',
        'beginner-friendly',
        'mildly-toxic',
    ],
    highlights: [
        'A variegated cultivar of the heartleaf philodendron, native to Central America and the Caribbean.',
        'The lime stripe is stable but fades to plain green in low light.',
        'Vines trail or climb 3-10+ ft and root readily from cuttings in water.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Keep above 55°F year-round.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption: 'The brighter the spot, the bolder the variegation.',
        },
        watering: {
            score: 3,
            value: 'Moderate — top 1-2" dry',
            caption:
                'Water when the upper soil dries; roughly weekly in season.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Forgiving of the occasional missed watering.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Contains calcium oxalate crystals — keep vines out of reach of pets.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '3-10 ft vines',
            detail: 'Trails from shelves and hanging baskets or climbs a pole; pinch back long runners to keep the plant full at the crown.',
            minFt: 3,
            maxFt: 10,
        },
        soil: {
            value: 'Light & airy mix',
            detail: 'A standard aroid blend of potting soil, perlite, and orchid bark drains fast while holding gentle moisture.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Cuttings root directly in water or LECA, making the transition to passive hydro nearly effortless.',
            compatible: true,
        },
        fertilizer: {
            value: 'Foliage-forward',
            detail: 'A gentle nitrogen-leaning feed keeps new leaves large and the variegation vivid.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed at half strength monthly through spring and summer; pause over winter.',
        },
        nativeHabitat: {
            value: 'Central America & Caribbean',
            detail: 'The parent species scrambles up rainforest trunks in dappled light — the cultivar keeps the same climbing instincts.',
        },
        humidity: {
            value: '40%+ (50-60% ideal)',
            detail: 'Tolerates average rooms, but higher humidity produces larger, faster leaves.',
            minPct: 40,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Steady warmth suits it; avoid drafts and anything below 55°F.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'A fast grower in warm months — vines can add several feet in a single season.',
        },
        dailyRhythm: {
            heading: 'A quick vine that shows you its mood in color.',
            body: 'Brasil grows fast and communicates faster: rich two-tone leaves mean the light is right, while all-green growth says it wants a brighter spot. Regular pinching keeps the vines branching and dense.',
            highlights: [
                'Place within a few feet of an east or bright north window for peak variegation.',
                'Pinch just above a node to trigger fuller, bushier growth.',
                'Every pruned cutting is a free new plant — root it in water.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top 1-2" of soil for dryness.',
            },
            {
                interval: 'weekly',
                task: 'Scan leaf undersides and new tips for pests.',
            },
            { interval: 'weekly', task: 'Redirect or trim wandering runners.' },
            {
                interval: 'as-needed',
                task: 'Water once the top 1-2" are dry; err on the dry side.',
            },
            {
                interval: 'monthly',
                task: 'Wipe leaves clean so the variegation shines.',
            },
            {
                interval: 'monthly',
                task: 'Pinch leggy runners just above a node to encourage branching.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Weekly-ish',
                detail: 'Water when the top 1-2" dries; slight drooping is an honest thirst signal.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Enough light to hold the lime stripe, but no harsh midday sun on the leaves.',
            },
            {
                label: 'Nutrition',
                stat: 'Light & regular',
                detail: 'Half-strength monthly feedings match its quick growing pace.',
            },
            {
                label: 'Pruning',
                stat: 'Pinch often',
                detail: 'Regular tip-pruning turns a stringy vine into a full, cascading plant.',
            },
        ],
        wateringRhythm: {
            heading: 'Even moisture, honest signals.',
            body: 'Brasil likes its mix to dry partway between drinks — never soggy, never bone-dry for long. It telegraphs thirst with a gentle all-over droop and perks up within hours of watering, making the rhythm easy to learn.',
            tips: [
                'Droopy leaves plus dry soil means water now; droopy leaves plus wet soil means check the roots.',
                'Water less in low light — the variegated leaves photosynthesize a little slower than plain green ones.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 5-7 days',
                tip: 'Fast growth means fast drinking; check the topsoil twice a week.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Ease off as growth slows and light softens.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Let the mix dry deeper between drinks and hold fertilizer.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Rotate the pot so all vines get their share of light.',
                    'Inspect new growth tips — pests always hit the soft tissue first.',
                    'Untangle and arrange trailing vines to prevent shading.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe leaves clean so the variegation shines.',
                    'Pinch leggy runners just above a node to encourage branching.',
                    'Feed at half strength during the growing season.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Root pruned cuttings in water and replant into the pot to thicken the crown.',
                    'Repot in spring when roots circle the nursery pot (every 1-2 years).',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Sharp micro-snips',
                note: 'Clean cuts above nodes for pruning and propagation.',
            },
            {
                item: 'Propagation jars or a cutting station',
                note: 'Brasil cuttings root in water within 2-3 weeks.',
            },
            {
                item: 'Hanging basket or small trellis',
                note: 'Choose trailing or climbing — it excels at both.',
            },
            {
                item: 'Neem + insecticidal soap duo',
                note: 'First-line defense against mites and thrips on soft new growth.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Variegation Fading to Green',
                description:
                    'New leaves emerging solid green mean the plant is compensating for insufficient light by maximizing chlorophyll.',
                actions: [
                    'Move to a brighter spot with indirect light.',
                    'Prune reverted all-green vines back to the last well-striped leaf.',
                    'Existing leaves will not restripe — judge progress by new growth.',
                ],
            },
            {
                title: 'Yellow Leaves',
                description:
                    'Scattered yellowing of older leaves is normal turnover, but widespread yellowing points to overwatering.',
                actions: [
                    'Check soil moisture before anything else — soggy mix means longer dry-downs.',
                    'Ensure the pot drains freely and the cache pot is emptied after watering.',
                    'Remove fully yellowed leaves at the stem.',
                ],
            },
            {
                title: 'Leggy Vines with Small Leaves',
                description:
                    'Long bare stretches between little leaves signal the vine is hunting for light.',
                actions: [
                    'Relocate closer to a window.',
                    'Pinch back the leggy runners to force branching at the crown.',
                    'Consider a moss pole — climbing vines produce larger leaves than trailing ones.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                signs: 'Fine webbing and pale stippling, especially in dry winter air.',
                treatment:
                    'Shower the foliage, then spray weekly with insecticidal soap until new leaves emerge clean.',
            },
            {
                name: 'Thrips',
                signs: 'Silvery patches and warped new leaves on the growth tips.',
                treatment:
                    'Isolate, prune the worst vines, and alternate systemic granules with contact sprays for 4-6 weeks.',
            },
            {
                name: 'Mealybugs',
                signs: 'White cottony clusters at nodes and along stems.',
                treatment:
                    'Swab with alcohol, then follow up with horticultural oil every 7-10 days.',
            },
            {
                name: 'Fungus Gnats',
                signs: 'Small flies around consistently damp soil.',
                treatment:
                    'Extend dry-downs, topdress with sand, and water in BTI to break the larval cycle.',
            },
        ],
        stabilityChecklist: [
            'Keep it bright — light is what maintains the signature stripe.',
            'Pinch regularly; density is built, not automatic.',
            'Check growth tips weekly, since pests target the newest leaves.',
            'Refresh the mix every 1-2 years to keep drainage sharp.',
        ],
    },
};
