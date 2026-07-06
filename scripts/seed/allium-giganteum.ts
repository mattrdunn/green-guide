import type { Plant } from '../../lib/db/models/Plant';

export const alliumGiganteum: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'allium',
    species: 'giganteum',
    commonNames: ['Giant Allium', 'Giant Onion', 'Ornamental Onion'],
    description:
        'Perfectly round, softball-sized lavender-purple flower globes float atop tall bare stems — a sculptural bulb that adds height and geometry to a border with almost no ongoing care once planted.',
    images: [],
    tags: [
        'bulb',
        'full-sun',
        'perennial',
        'deer-resistant',
        'pollinator-friendly',
        'mildly-toxic',
    ],
    highlights: [
        'Native to the mountains of Central Asia, where it grows in dry, rocky, sun-baked soil.',
        'The dense flower globes are made up of hundreds of tiny star-shaped florets, beloved by bees and butterflies.',
        'Related to onions and garlic — its oniony scent is what keeps deer and rabbits away.',
    ],
    vitals: {
        hardinessZone: {
            value: '4-8',
            caption:
                'Needs a cold winter dormancy to rebloom well; struggles in frost-free climates.',
            zoneMin: 4,
            zoneMax: 8,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption:
                '6+ hours of direct sun keeps stems sturdy and flower globes full-sized.',
        },
        watering: {
            score: 2,
            value: 'Dry to moderate',
            caption:
                'Water during active spring growth, then let bulbs rest dry through summer dormancy.',
        },
        difficulty: {
            score: 1,
            value: 'Very easy',
            caption:
                'Plant the bulb at the right depth in well-drained soil and it largely takes care of itself.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Contains the same sulfur compounds as culinary onions, which can upset pets in quantity.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '3-4 ft',
            detail: 'Basal strap-like leaves stay low while a single leafless stem rises well above them to the flower globe.',
            minFt: 3,
            maxFt: 4,
        },
        soil: {
            value: 'Well-drained, average to sandy',
            detail: 'Sharp drainage matters far more than fertility — bulbs rot quickly in heavy, waterlogged clay.',
        },
        semiHydro: {
            value: 'No',
            detail: 'A dry-summer dormant bulb grown in garden soil, not suited to constantly moist growing media.',
            compatible: false,
        },
        fertilizer: {
            value: 'Light, bulb-focused',
            detail: 'A phosphorus-forward feed at planting supports root and flower development without pushing weak growth.',
            npk: '5-10-10',
        },
        fertilizerFrequency: {
            value: 'Once yearly',
            detail: 'A single application at fall planting, or as new growth emerges, is usually enough.',
        },
        nativeHabitat: {
            value: 'Central Asian mountain slopes',
            detail: 'Grows wild in the dry, rocky foothills of Central Asia, where summers are hot and bone-dry.',
        },
        humidity: {
            value: 'Not a factor',
            detail: 'Grown outdoors in open air; ambient humidity has little bearing on its care.',
        },
        temperature: {
            value: '-30° – 90°F',
            detail: 'Needs winter chill below 40°F to flower reliably; tolerates significant summer heat once dormant.',
            minF: -30,
            maxF: 90,
        },
        growSeason: {
            value: 'Spring',
            detail: 'Foliage emerges in early spring, followed by the flower stalk; blooms peak in late spring to early summer.',
        },
        dailyRhythm: {
            heading: 'A tall, architectural bulb that mostly runs on its own.',
            body: 'Giant Allium asks for a sunny, well-drained spot at planting and then very little else. Basal leaves often yellow and look scruffy before or during bloom — that is normal, not a problem, and is best hidden with underplanting rather than cut back.',
            highlights: [
                'Foliage frequently fades before the flower globe even opens — plant lower companions to hide it.',
                'Dried seed heads hold their shape for months and are popular in cut arrangements.',
                'Bulbs planted deep (about three times their height) resist frost heave and rodent digging.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture during spring growth if rainfall is light.',
            },
            {
                interval: 'as-needed',
                task: 'Deadhead or leave seed heads for dried-flower interest, as preferred.',
            },
            {
                interval: 'seasonal',
                task: 'Feed lightly at fall planting or early spring emergence.',
            },
            {
                interval: 'seasonal',
                task: 'Lift and divide crowded clumps every several years once foliage dies back.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Drainage',
                stat: 'Sharp & well-drained',
                detail: 'The single most important factor — bulbs rot in soil that stays wet through summer dormancy.',
            },
            {
                label: 'Sun',
                stat: '6+ hrs direct',
                detail: 'Full sun produces the sturdiest stems and fullest, most colorful flower globes.',
            },
            {
                label: 'Companion Planting',
                stat: 'Hide fading foliage',
                detail: 'Low perennials planted around the base disguise the basal leaves that yellow before bloom.',
            },
            {
                label: 'Depth',
                stat: 'Plant deep',
                detail: 'Setting bulbs roughly three times their height deep protects against frost heave and digging pests.',
            },
        ],
        wateringRhythm: {
            heading: 'Moisture through spring growth, then a dry summer rest.',
            body: 'Water regularly as foliage and flower stalks develop in spring, especially in dry weather. Once blooming finishes and leaves begin to fade, taper off watering completely — the bulb wants a dry, resting summer underground much like its native mountain habitat.',
            tips: [
                'Avoid watering dormant bulbs in summer — this is the single most common cause of rot.',
                'Rainfall alone is usually sufficient through a typical spring in temperate climates.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Weekly if dry',
                tip: 'Support foliage and flower development with consistent moisture during active growth.',
            },
            {
                season: 'Summer',
                cadence: 'None needed',
                tip: 'Bulbs are dormant and prefer completely dry soil until fall.',
            },
            {
                season: 'Autumn',
                cadence: 'Water in at planting only',
                tip: 'A single deep watering after planting new bulbs helps establish roots before winter.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture during spring growth.',
                    'Stake tall stems in especially windy or exposed sites if needed.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Feed lightly with a phosphorus-forward fertilizer at planting or spring emergence.',
                    'Leave or remove seed heads after bloom, depending on whether dried-flower interest is wanted.',
                    'Lift and divide congested clumps every few years once foliage has died back completely.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Bulb planter or trowel',
                note: 'Plants bulbs at the correct depth with minimal soil disturbance.',
            },
            {
                item: 'Coarse sand or grit',
                note: 'Worked into heavy soil, it is the best insurance against summer bulb rot.',
            },
            {
                item: 'Low, spreading companion perennials',
                note: 'Disguises the yellowing basal foliage that fades before or during bloom.',
            },
            {
                item: 'Garden stakes',
                note: 'Useful support for the tall, leafless flower stems in windy sites.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Soft, Rotten Bulbs',
                description:
                    'Mushy, foul-smelling bulbs at planting or lifting time almost always trace back to waterlogged summer soil.',
                actions: [
                    'Discard any soft or discolored bulbs before planting.',
                    'Improve drainage with grit or a raised bed before replanting.',
                    'Avoid summer irrigation in the planting area.',
                ],
            },
            {
                title: 'Floppy or Toppled Stems',
                description:
                    'Tall flower stems bending or falling over usually means too little sun or an especially exposed, windy site.',
                actions: [
                    'Relocate future plantings to a spot with full, direct sun.',
                    'Stake existing stems discreetly among companion plants.',
                    'Plant in slightly sheltered groupings rather than fully exposed, open ground.',
                ],
            },
            {
                title: 'Yellowing Foliage Before Bloom',
                description:
                    'This is a normal part of the plant’s life cycle, not a sign of stress — basal leaves often fade as the flower stalk rises.',
                actions: [
                    'Underplant with low perennials to visually mask the fading leaves.',
                    'Avoid cutting foliage early; let it die back to feed the bulb.',
                    'Focus attention on the flower globe, which is unaffected by leaf die-back.',
                ],
            },
        ],
        pests: [
            {
                name: 'Onion Thrips',
                signs: 'Silvery streaks or stippling on leaves, mostly a cosmetic issue in dry weather.',
                treatment:
                    'Hose foliage periodically in dry spells; treatment is rarely warranted given minimal impact.',
            },
            {
                name: 'Bulb Mites',
                signs: 'Soft spots or brown lesions on stored or newly planted bulbs.',
                treatment:
                    'Discard affected bulbs; buy firm, healthy bulbs and ensure sharp drainage in the planting site.',
            },
            {
                name: 'Slugs and Snails',
                pestSlug: 'slugs-and-snails',
                signs: 'Occasional ragged holes in young emerging foliage.',
                treatment:
                    'Hand-pick or use iron phosphate bait; damage is typically minor and self-limiting.',
            },
        ],
        stabilityChecklist: [
            'Plant in full sun with sharp, well-drained soil to prevent summer rot.',
            'Let foliage die back naturally and avoid watering dormant bulbs in summer.',
            'Underplant with low companions to hide fading basal leaves.',
            'Divide crowded clumps every several years to keep flowering strong.',
        ],
    },
};
