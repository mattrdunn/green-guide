import type { Plant } from '../../lib/db/models/Plant';

export const epipremnumAureumNeon: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'epipremnum',
    species: 'aureum',
    variety: 'neon',
    commonNames: ['Neon Pothos'],
    description:
        "A chartreuse-to-lime sport of Golden Pothos, Neon Pothos trades variegation for one electric, solid-color leaf — the same forgiving Epipremnum aureum growth habit, dialed up in color.",
    images: [
        {
            url: 'plants/epipremnum/aureum/neon/img-1.png',
            alt: 'Neon Pothos trailing vine with glowing chartreuse leaves.',
        },
    ],
    tags: ['aroid', 'vining', 'beginner-friendly', 'mildly-toxic'],
    highlights: [
        'A solid-color sport of Golden Pothos — leaves emerge lime green rather than variegated.',
        'Color is brightest in strong indirect light; dim spots fade new leaves toward dull green.',
        'Cuttings root just as readily as the plain species, in water or LECA.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Frost-tender; keep above 50°F year-round.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Needs more light than plain Golden Pothos to keep new leaves vividly colored.',
        },
        watering: {
            score: 2,
            value: 'Dry-ish between drinks',
            caption:
                'Let the top 1-2" dry before watering; tolerant of missed waterings.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Just as forgiving as the plain species, given enough light.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Calcium oxalate crystals irritate mouths and stomachs — keep away from pets and kids.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '6-10 ft vines',
            detail: 'Trails from shelves and hanging baskets or climbs a pole; leaves grow noticeably larger when allowed to climb.',
            minFt: 6,
            maxFt: 10,
        },
        soil: {
            value: 'Standard, well-draining potting mix',
            detail: 'A basic potting mix with added perlite drains well and suits its unfussy roots.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'One of the easiest plants to grow in water alone or transition to LECA.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced liquid feed',
            detail: 'A gentle, balanced fertilizer supports steady growth without forcing it.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly spring through early fall; skip winter entirely.',
        },
        nativeHabitat: {
            value: "Mo'orea & the Solomon Islands (cultivated origin)",
            detail: 'A color sport of the species, which climbs tree trunks in warm, humid tropical forest understories.',
        },
        humidity: {
            value: '40%+ tolerated',
            detail: 'Adapts to average home humidity; higher humidity produces slightly larger leaves but is not required.',
            minPct: 40,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Comfortable across typical indoor ranges; protect from cold drafts below 50°F.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'Vines lengthen steadily in warm months and can add a foot or more per month in bright light.',
        },
        dailyRhythm: {
            heading: 'The same easy vine, turned up in color.',
            body: "Neon Pothos asks for the same light glance-and-water routine as plain Golden Pothos, with one difference: it wants a noticeably brighter spot to keep new leaves glowing lime instead of settling into dull green.",
            highlights: [
                'Bright, indirect light keeps new leaves vividly chartreuse.',
                'Pinch trailing vines to keep growth full instead of stringy.',
                'Any node cut into water roots within a couple of weeks.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top 1-2" of soil for dryness.',
            },
            {
                interval: 'weekly',
                task: 'Scan leaves and new growth for pests.',
            },
            {
                interval: 'as-needed',
                task: 'Water once the top 1-2" are dry.',
            },
            {
                interval: 'monthly',
                task: 'Pinch leggy vines and wipe leaves clean of dust.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 7-10 days',
                detail: 'Water when the top 1-2" dries; it tolerates the occasional missed watering without complaint.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Needs more brightness than plain Golden Pothos to hold its neon color in new growth.',
            },
            {
                label: 'Nutrition',
                stat: 'Monthly, diluted',
                detail: 'Light, regular feeding in the growing season is plenty — it does not need heavy fertilizing.',
            },
            {
                label: 'Pruning',
                stat: 'Pinch as needed',
                detail: 'Regular tip-pruning keeps vines branching and full rather than long and sparse.',
            },
        ],
        wateringRhythm: {
            heading: 'Dry-ish and forgiving.',
            body: 'Let the top 1-2" of soil dry before watering thoroughly and letting it drain. Neon Pothos tolerates drying out more than staying soggy — when in doubt, wait an extra day rather than watering early.',
            tips: [
                'Slightly droopy, dull leaves are the honest thirst signal — water and expect recovery within a day.',
                'Persistent yellowing points to overwatering far more often than underwatering.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 6-8 days',
                tip: 'Check the topsoil weekly; water when it has dried through the top couple inches.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 8-12 days',
                tip: 'Ease off as growth slows and light softens.',
            },
            {
                season: 'Winter',
                cadence: 'Every 2-3 weeks',
                tip: 'Let the mix dry deeper between drinks and hold fertilizer.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Rotate the pot so all vines get their share of light.',
                    'Check new growth tips for early pest activity.',
                    'Untangle and arrange trailing vines to prevent shading.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe leaves clean to keep them photosynthesizing well.',
                    'Pinch leggy vines just above a node to encourage branching.',
                    'Feed with a diluted balanced fertilizer during the growing season.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Root pruned cuttings in water and replant into the pot to thicken growth.',
                    'Repot every 1-2 years once roots crowd the nursery pot.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Sharp micro-snips',
                note: 'Clean cuts above nodes for pruning and propagation.',
            },
            {
                item: 'Propagation jars',
                note: 'Cuttings root in water within 1-2 weeks.',
            },
            {
                item: 'Hanging basket or small trellis',
                note: 'Choose trailing or climbing — it thrives either way.',
            },
            {
                item: 'Soft cloth for leaves',
                note: 'Dust buildup on the glossy leaves cuts down on light absorption.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Fading to Dull Green',
                description:
                    'New leaves emerging duller and darker than older growth mean the plant is not getting enough light to hold its neon color.',
                actions: [
                    'Move to a brighter spot with strong indirect light.',
                    'Be patient — existing leaves keep their color; only new growth reflects the change.',
                    'Avoid direct midday sun, which scorches rather than brightens the foliage.',
                ],
            },
            {
                title: 'Yellow Leaves',
                description:
                    'Widespread yellowing, especially with soft stems, almost always points to overwatering.',
                actions: [
                    'Let the soil dry out fully before watering again.',
                    'Ensure the pot drains freely and the cache pot is emptied after watering.',
                    'Remove fully yellowed leaves at the stem.',
                ],
            },
            {
                title: 'Small, Sparse Leaves',
                description:
                    'Long, thin vines with tiny, widely spaced leaves signal the plant is stretching for light.',
                actions: [
                    'Relocate closer to a window with brighter indirect light.',
                    'Pinch back leggy vines to force fuller, denser growth.',
                    'Consider a moss pole — climbing vines produce larger leaves than trailing ones.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White cottony clusters at nodes and along stems.',
                treatment:
                    'Swab with alcohol, then follow up with horticultural oil every 7-10 days.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine webbing and pale stippling, especially in dry winter air.',
                treatment:
                    'Shower the foliage, then apply insecticidal soap weekly until new leaves emerge clean.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small, hard brown bumps along stems and leaf undersides.',
                treatment:
                    'Scrape off light infestations, then follow with horticultural oil applications every 1-2 weeks.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Small flies around consistently damp soil.',
                treatment:
                    'Extend dry-downs, topdress with sand, and water in BTI to break the larval cycle.',
            },
        ],
        stabilityChecklist: [
            'Give it bright, indirect light — the biggest lever on how neon new growth turns out.',
            'Let the soil dry between waterings; err on the side of underwatering.',
            'Pinch regularly to keep vines full instead of sparse and stringy.',
            'Refresh the mix every 1-2 years to keep drainage sharp.',
        ],
    },
};
