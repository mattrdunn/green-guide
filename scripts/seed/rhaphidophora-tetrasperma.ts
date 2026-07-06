import type { Plant } from '../../lib/db/models/Plant';

export const rhaphidophoraTetrasperma: Omit<Plant, 'createdAt' | 'updatedAt'> =
    {
        genus: 'rhaphidophora',
        species: 'tetrasperma',
        commonNames: ['Mini Monstera', 'Monstera Minima', 'Ginny Philodendron'],
        description:
            'Deeply split, glossy leaves on a fast, wiry climber give this aroid the split-leaf look of Monstera deliciosa at a fraction of the size — an unrelated species that just happens to share the same dramatic fenestration trick.',
        images: [],
        tags: ['aroid', 'vining', 'climbing', 'mildly-toxic', 'fast-growing'],
        highlights: [
            'Native to the tropical forests of Thailand and Malaysia, where it climbs tree trunks using aerial roots.',
            'Despite the common name, it isn’t a true Monstera — it belongs to its own genus, Rhaphidophora.',
            'Leaf splits (fenestrations) appear only once the plant is climbing and maturing, not on young cuttings.',
        ],
        vitals: {
            hardinessZone: {
                value: '10-12',
                caption:
                    'Strictly indoors below 60°F; grown as a houseplant nearly everywhere.',
                zoneMin: 10,
                zoneMax: 12,
            },
            light: {
                score: 3,
                value: 'Bright, indirect',
                caption:
                    'Bright indirect light produces the most fenestrated leaves; low light yields smaller, solid ones.',
            },
            watering: {
                score: 3,
                value: 'Evenly moist',
                caption:
                    'Water once the top inch of soil is dry; dislikes both drought stress and soggy roots.',
            },
            difficulty: {
                score: 2,
                value: 'Easy',
                caption:
                    'Fast, vigorous, and forgiving once given something to climb.',
                level: 'easy',
            },
            toxicity: {
                value: 'Mildly toxic',
                caption:
                    'Calcium oxalate crystals in the sap cause mouth and skin irritation if chewed or handled carelessly.',
                level: 'mildly-toxic',
            },
        },
        overview: {
            height: {
                value: 'Climbs 6-10 ft indoors',
                detail: 'A vigorous vining aroid that climbs readily on a pole or trellis, or trails if left unsupported.',
                minFt: 6,
                maxFt: 10,
            },
            soil: {
                value: 'Chunky, well-draining aroid mix',
                detail: 'Potting mix, perlite, and orchid bark in roughly equal parts supports the aerial-rooting climbing habit.',
            },
            semiHydro: {
                value: 'Yes',
                detail: 'Takes well to LECA or pon, and cuttings root readily in water before transitioning.',
                compatible: true,
            },
            fertilizer: {
                value: 'Balanced, moderate',
                detail: 'A balanced liquid feed at full or half strength supports this species’ naturally fast growth rate.',
                npk: '20-20-20',
            },
            fertilizerFrequency: {
                value: 'Every 2-4 weeks in season',
                detail: 'Feed regularly through spring and summer to keep pace with vigorous new growth; skip in winter.',
            },
            nativeHabitat: {
                value: 'Southeast Asian rainforests',
                detail: 'Climbs tree trunks in the humid, dappled-light understory of forests in Thailand and Malaysia.',
            },
            humidity: {
                value: '50%+ ideal',
                detail: 'Tolerates average household humidity but produces larger, more fenestrated leaves above 50%.',
                minPct: 50,
            },
            temperature: {
                value: '65° – 85°F',
                detail: 'Prefers warm, stable temperatures; growth slows noticeably below 60°F.',
                minF: 65,
                maxF: 85,
            },
            growSeason: {
                value: 'Spring–Summer',
                detail: 'Puts out new leaves rapidly in warm months, often producing a new leaf every couple of weeks when happy.',
            },
            dailyRhythm: {
                heading:
                    'A fast climber that rewards a moss pole and steady care.',
                body: 'Mini Monstera grows quickly once it has something to climb, pushing out new fenestrated leaves in rapid succession during the warm season. The main ongoing job is training the vining stems onto support and keeping pace with its appetite for water and light.',
                highlights: [
                    'Attach stems to a moss pole or trellis early — climbing triggers larger, more split leaves than trailing does.',
                    'New leaves emerge rolled and pale before unfurling and darkening over a few days.',
                    'Aerial roots along the stem are normal; tuck them into the growing medium or a moss pole for extra support.',
                ],
            },
            careCadence: [
                {
                    interval: 'weekly',
                    task: 'Check the top inch of soil for dryness.',
                },
                {
                    interval: 'weekly',
                    task: 'Guide new climbing stems onto a pole or trellis.',
                },
                {
                    interval: 'as-needed',
                    task: 'Water once the top inch is dry; keep the mix evenly moist, not wet.',
                },
                {
                    interval: 'monthly',
                    task: 'Feed at full or half strength during active growth.',
                },
            ],
        },
        care: {
            pillars: [
                {
                    label: 'Climbing Support',
                    stat: 'Moss pole or trellis',
                    detail: 'Climbing triggers larger, more deeply fenestrated leaves than letting the vine trail unsupported.',
                },
                {
                    label: 'Light',
                    stat: 'Bright, indirect',
                    detail: 'Strong indirect light drives both growth rate and the size of leaf splits.',
                },
                {
                    label: 'Humidity',
                    stat: '50%+ ideal',
                    detail: 'Higher humidity supports larger, glossier leaves, though the plant tolerates average household air.',
                },
                {
                    label: 'Growth Rate',
                    stat: 'Fast in season',
                    detail: 'One of the quicker-growing aroids — regular feeding and training keep up with its pace.',
                },
            ],
            wateringRhythm: {
                heading:
                    'Even moisture, with drainage that keeps roots from sitting wet.',
                body: 'Water once the top inch of soil dries, saturating thoroughly and letting excess drain completely. This species grows fast enough that consistent moisture noticeably speeds up new leaf production, but standing water around the roots invites rot just as it would in any aroid.',
                tips: [
                    'A dry, curling top leaf often means it’s time to water; a mushy stem base means check for overwatering instead.',
                    'Mist aerial roots occasionally to encourage them to grip a moss pole.',
                ],
            },
            seasonalWatering: [
                {
                    season: 'Spring & Summer',
                    cadence: 'Every 5-7 days',
                    tip: 'Fast active growth drinks steadily — check the topsoil twice a week.',
                },
                {
                    season: 'Autumn',
                    cadence: 'Every 7-9 days',
                    tip: 'Growth slows as light drops — ease back gradually.',
                },
                {
                    season: 'Winter',
                    cadence: 'Every 10-14 days',
                    tip: 'Minimal growth means minimal water demand; check soil before watering.',
                },
            ],
            routines: [
                {
                    interval: 'weekly',
                    steps: [
                        'Check soil moisture and water once the top inch is dry.',
                        'Guide and loosely tie new stems to their climbing support.',
                        'Wipe leaves to keep them dust-free and glossy.',
                    ],
                },
                {
                    interval: 'monthly',
                    steps: [
                        'Feed at full or half strength during active growth.',
                        'Check for rootbound conditions as the plant grows quickly.',
                    ],
                },
                {
                    interval: 'seasonal',
                    steps: [
                        'Repot in spring once roots fill the pot.',
                        'Take stem cuttings to propagate or control size.',
                    ],
                },
            ],
            toolkit: [
                {
                    item: 'Moss pole or trellis',
                    note: 'Gives the vine something to climb, encouraging larger, more fenestrated mature leaves.',
                },
                {
                    item: 'Chunky aroid mix',
                    note: 'Potting mix with perlite and orchid bark keeps drainage sharp for the aerial-rooting stems.',
                },
                {
                    item: 'Soft plant ties or twine',
                    note: 'Loosely secures new growth to its support without damaging the stem.',
                },
                {
                    item: 'Clean, sharp snips',
                    note: 'For taking cuttings to propagate or to keep a vigorous vine in check.',
                },
            ],
        },
        issues: {
            stressSignals: [
                {
                    title: 'Small, Unfenestrated Leaves',
                    description:
                        'New leaves coming in small and solid, without splits, usually means the plant is immature, in low light, or lacks something to climb.',
                    actions: [
                        'Move to a brighter, indirect-light location.',
                        'Provide a moss pole or trellis if the plant is currently trailing unsupported.',
                        'Be patient — fenestration typically improves as the plant matures and climbs.',
                    ],
                },
                {
                    title: 'Yellowing Lower Leaves',
                    description:
                        'Older leaves turning yellow, especially with consistently damp soil, usually points to overwatering.',
                    actions: [
                        'Let the soil dry out further between waterings.',
                        'Check the pot drains freely and isn’t sitting in standing water.',
                        'Remove yellowed leaves; new growth should return to green once watering is adjusted.',
                    ],
                },
                {
                    title: 'Leggy Growth with Long Bare Stem Sections',
                    description:
                        'Long stretches of stem between leaves usually signal insufficient light or a lack of climbing support.',
                    actions: [
                        'Increase light exposure to encourage tighter, more compact growth.',
                        'Add a moss pole or trellis to redirect growth upward.',
                        'Prune leggy stems back to a node to encourage bushier branching.',
                    ],
                },
            ],
            pests: [
                {
                    name: 'Spider Mites',
                    signs: 'Fine webbing and pale stippling on leaf undersides, especially in dry air.',
                    treatment:
                        'Shower the foliage, raise humidity, and treat weekly with insecticidal soap until new growth is clean.',
                },
                {
                    name: 'Mealybugs',
                    signs: 'Cottony white clusters at leaf joints and along the stem.',
                    treatment:
                        'Swab visible clusters with isopropyl alcohol and follow with neem oil sprays until clear.',
                },
                {
                    name: 'Thrips',
                    signs: 'Silvery streaks and distorted new leaves.',
                    treatment:
                        'Isolate the plant, prune the worst-affected leaves, and treat with insecticidal soap for several weeks.',
                },
            ],
            stabilityChecklist: [
                'Provide a moss pole or trellis for the fullest, most fenestrated leaves.',
                'Water once the top inch of soil dries; never let it sit soggy.',
                'Keep humidity above 50% where possible for the best leaf size and gloss.',
                'Feed regularly in the growing season to keep up with this species’ fast pace.',
            ],
        },
    };
