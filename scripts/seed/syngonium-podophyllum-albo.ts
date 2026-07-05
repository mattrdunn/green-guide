import type { Plant } from '../../lib/db/models/Plant';

export const syngoniumPodophyllumAlbo: Omit<Plant, 'createdAt' | 'updatedAt'> =
    {
        genus: 'syngonium',
        species: 'podophyllum-albo',
        commonNames: [
            'Syngonium Albo',
            'Variegated Arrowhead Plant',
            "Syngonium podophyllum 'Albo Variegatum'",
        ],
        description:
            "Crisp white-and-green splash patterns make Syngonium podophyllum 'Albo Variegatum' one of the most sought-after arrowhead cultivars — the same easy climbing habit as the species, dressed in striking, unstable variegation.",
        images: [],
        tags: [
            'aroid',
            'vining',
            'variegated',
            'collector-favorite',
            'mildly-toxic',
        ],
        highlights: [
            'A variegated sport of the species Syngonium podophyllum, prized for unpredictable white splash patterns.',
            'Variegation is unstable — leaves can range from nearly all-white to mostly green on the same plant.',
            'Slower and fussier than plain-green arrowhead plants, since white tissue cannot photosynthesize.',
        ],
        vitals: {
            hardinessZone: {
                value: '10-12',
                caption: 'Frost-tender; keep above 60°F year-round.',
                zoneMin: 10,
                zoneMax: 12,
            },
            light: {
                score: 4,
                value: 'Bright, indirect',
                caption:
                    'Needs more light than the plain species — white patches scorch in direct sun but fade in low light.',
            },
            watering: {
                score: 3,
                value: 'Moderate — top 1-2" dry',
                caption:
                    'Water when the upper soil dries; high-white leaves use less water than green ones.',
            },
            difficulty: {
                score: 3,
                value: 'Moderate',
                caption:
                    'The variegation itself needs managing — reversion and scorch are ongoing concerns.',
                level: 'moderate',
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
                value: '3-6 ft vines',
                detail: 'Trails from shelves and baskets or climbs a pole; growth is slower than the plain species, especially on high-white leaves.',
                minFt: 3,
                maxFt: 6,
            },
            soil: {
                value: 'Light & airy mix',
                detail: 'A standard aroid blend of potting soil, perlite, and orchid bark drains fast while holding gentle moisture.',
            },
            semiHydro: {
                value: 'Yes',
                detail: 'Cuttings root in water or LECA, though high-white cuttings are slower and less reliable to establish.',
                compatible: true,
            },
            fertilizer: {
                value: 'Light & foliage-forward',
                detail: 'A dilute nitrogen-leaning feed supports what green tissue the plant has without pushing all-green reversion.',
                npk: '3-1-2',
            },
            fertilizerFrequency: {
                value: 'Monthly in season',
                detail: 'Feed at quarter-to-half strength monthly through spring and summer; pause over winter.',
            },
            nativeHabitat: {
                value: 'Central & South America (cultivated origin)',
                detail: 'A variegated selection of the species, which scrambles up rainforest trunks in warm, humid, dappled light.',
            },
            humidity: {
                value: '60%+ ideal',
                detail: 'White tissue is more prone to crisping than green — higher humidity than the plain species keeps margins intact.',
                minPct: 60,
            },
            temperature: {
                value: '65° – 80°F',
                detail: 'Steady warmth suits it; growth stalls and leaf edges brown below 55°F.',
                minF: 65,
                maxF: 80,
            },
            growSeason: {
                value: 'Spring–Fall',
                detail: 'Growth is steady but slower than plain arrowhead plant, particularly on stems carrying heavily white leaves.',
            },
            dailyRhythm: {
                heading: 'A patterned climber that needs its light dialed in.',
                body: "Albo's white splashes are dramatic but demanding — too little light and new leaves revert to plain green; too much direct sun and white tissue scorches. Most days are a quick check of light quality and soil moisture, with occasional pruning to manage variegation.",
                highlights: [
                    'Bright, indirect light — never direct sun on white leaf tissue.',
                    'Prune fully reverted (all-green) stems to keep the plant investing in variegated growth.',
                    'Rotate the pot regularly so light reaches all sides evenly.',
                ],
            },
            careCadence: [
                {
                    interval: 'weekly',
                    task: 'Check the top 1-2" of soil for dryness.',
                },
                {
                    interval: 'weekly',
                    task: 'Inspect new leaves for scorch, reversion, or pests.',
                },
                {
                    interval: 'weekly',
                    task: 'Redirect or tie in climbing vines.',
                },
                {
                    interval: 'as-needed',
                    task: 'Water once the top 1-2" are dry; err on the dry side.',
                },
                {
                    interval: 'monthly',
                    task: 'Prune reverted all-green stems and feed lightly in season.',
                },
            ],
        },
        care: {
            pillars: [
                {
                    label: 'Light Balance',
                    stat: 'Bright, no direct sun',
                    detail: 'The single most important factor — too dim and it reverts, too bright and white leaves scorch.',
                },
                {
                    label: 'Hydration',
                    stat: 'Weekly-ish',
                    detail: 'Water when the top 1-2" dries; go lighter on stems carrying mostly white leaves.',
                },
                {
                    label: 'Variegation Upkeep',
                    stat: 'Prune reversions',
                    detail: 'Removing all-green growth keeps the plant channeling energy into variegated leaves.',
                },
                {
                    label: 'Support',
                    stat: 'Climb or trail',
                    detail: 'Climbing produces larger leaves and often better-defined variegation patterns.',
                },
            ],
            wateringRhythm: {
                heading: 'Slightly drier than the plain species.',
                body: 'White tissue holds less chlorophyll and uses less water, so Albo dries out a touch slower than plain-green arrowhead plant. Let the top 1-2" dry, then water thoroughly and let it drain completely.',
                tips: [
                    'High-white leaves droop and stress faster from overwatering than from underwatering.',
                    'Water less on stems that are mostly white — they are doing less photosynthetic work.',
                ],
            },
            seasonalWatering: [
                {
                    season: 'Spring & Summer',
                    cadence: 'Every 6-8 days',
                    tip: 'Check the topsoil twice a week; adjust down for heavily variegated stems.',
                },
                {
                    season: 'Autumn',
                    cadence: 'Every 8-10 days',
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
                        'Rotate the pot so all sides get even light exposure.',
                        'Tie in or redirect new vine growth onto its support.',
                        'Check new leaves for scorch marks or signs of reversion.',
                    ],
                },
                {
                    interval: 'monthly',
                    steps: [
                        'Prune stems that have reverted fully to green.',
                        'Feed at quarter-to-half strength during the growing season.',
                        'Wipe leaves clean so variegated patterns stay visible.',
                    ],
                },
                {
                    interval: 'seasonal',
                    steps: [
                        'Root variegated cuttings in water, discarding weak all-green ones.',
                        'Repot in spring once roots crowd the nursery pot (every 1-2 years).',
                    ],
                },
            ],
            toolkit: [
                {
                    item: 'Sheer curtain or diffused window',
                    note: 'Filters harsh midday sun while keeping light levels high.',
                },
                {
                    item: 'Moss pole or small trellis',
                    note: 'Climbing support tends to produce cleaner variegation than trailing.',
                },
                {
                    item: 'Sharp micro-snips',
                    note: 'For pruning reverted growth and taking variegated cuttings.',
                },
                {
                    item: 'Propagation jars',
                    note: 'Root cuttings in water; expect slower rooting than the plain species.',
                },
            ],
        },
        issues: {
            stressSignals: [
                {
                    title: 'Reversion to Solid Green',
                    description:
                        'New leaves emerging fully green mean the plant is prioritizing chlorophyll-rich growth, often from insufficient light.',
                    actions: [
                        'Move to a brighter spot with strong indirect light.',
                        'Prune reverted stems back to the last well-variegated leaf.',
                        'Existing leaves will not regain variegation — judge progress by new growth.',
                    ],
                },
                {
                    title: 'Scorched White Patches',
                    description:
                        'Crispy, bleached patches on white leaf tissue mean direct sun reached the plant.',
                    actions: [
                        'Move out of direct sun into bright, filtered light.',
                        'Trim badly scorched leaves; damage will not reverse.',
                        'Introduce any brighter spot gradually to avoid repeat scorch.',
                    ],
                },
                {
                    title: 'Stalled or Slow Growth',
                    description:
                        'Heavily white stems naturally grow slower, but a full stop points to low light or a cold spot.',
                    actions: [
                        'Check that the plant is warm (above 65°F) and getting bright, indirect light.',
                        'Prune any dying stems to redirect energy to healthier growth.',
                        'Expect visibly slower pacing than plain-green arrowhead plant even when healthy.',
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
                    name: 'Mealybugs',
                    signs: 'Cottony white clusters tucked into leaf axils and along stems.',
                    treatment:
                        'Swab visible clusters with isopropyl alcohol and follow with neem oil sprays until clear.',
                },
                {
                    name: 'Fungus Gnats',
                    signs: 'Small flies hovering around consistently damp soil.',
                    treatment:
                        'Extend dry-downs, topdress with sand, and water in BTI to break the larval cycle.',
                },
            ],
            stabilityChecklist: [
                'Dial in bright, indirect light — it is the single biggest lever on variegation quality.',
                'Prune reverted all-green stems promptly to keep the plant balanced.',
                'Water slightly less than a plain-green arrowhead plant, especially on high-white stems.',
                'Expect slower growth than the species and judge health by new leaves, not pace.',
            ],
        },
    };
