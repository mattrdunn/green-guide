import type { Plant } from '../../lib/db/models/Plant';

export const euphorbiaTrigona: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'euphorbia',
    species: 'trigona',
    commonNames: ['African Milk Tree', 'Cathedral Cactus', 'Candelabra Cactus'],
    description:
        'Upright, three-sided stems branch into a living candelabra — Euphorbia trigona delivers big architectural presence on a strict low-water budget, growing feet per year in a bright window.',
    images: [],
    tags: ['euphorbia', 'succulent', 'columnar', 'fast-growing', 'toxic'],
    highlights: [
        'Native to Central Africa; a spurge, not a true cactus.',
        'Can climb 1-2 ft per year indoors, reaching ceiling height in time.',
        'The red-flushed cultivar "Rubra" is the most common form in shops.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption: 'No frost tolerance — indoors below 50°F.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            value: 'Bright + some sun',
            caption:
                'Several hours of direct sun keeps stems stout and colorful.',
        },
        watering: {
            value: 'Soak when fully dry',
            caption: 'Roughly every 2 weeks in summer, monthly in winter.',
        },
        difficulty: {
            value: 'Easy',
            caption:
                'Thrives on neglect; overwatering is the only real hazard.',
            level: 'easy',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'The milky latex sap burns skin and eyes and is toxic if ingested — gloves and eye protection for any cut.',
            level: 'toxic',
        },
    },
    overview: {
        height: {
            value: '3-8 ft indoors',
            detail: 'Fast vertical growth; top the main stem in spring to trigger branching and keep it below the ceiling.',
            minFt: 3,
            maxFt: 8,
        },
        soil: {
            value: 'Sandy cactus mix',
            detail: 'Cactus soil amended with extra perlite or pumice; it tolerates poor soil far better than rich, moisture-holding mixes.',
        },
        semiHydro: {
            value: 'Not recommended',
            detail: 'Rot-prone roots need a dry cycle that passive hydro cannot provide.',
            compatible: false,
        },
        fertilizer: {
            value: 'Dilute balanced feed',
            detail: 'A quarter-strength balanced fertilizer is plenty — overfeeding produces weak, floppy stems.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Spring through summer only; none during the winter rest.',
        },
        nativeHabitat: {
            value: 'Central Africa',
            detail: 'Hot, semi-arid scrubland — intense sun, sandy soil, and long dry spells between rains.',
        },
        humidity: {
            value: 'Low is fine',
            detail: 'Average to dry indoor air is ideal; avoid misting and damp, stagnant corners.',
            minPct: 20,
        },
        temperature: {
            value: '65° – 90°F',
            detail: 'Loves heat; keep above 50°F and away from cold drafts.',
            minF: 55,
            maxF: 95,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Small teardrop leaves flush along the stem edges in active growth and drop naturally in winter.',
        },
        dailyRhythm: {
            heading: 'Sun-fed architecture on autopilot.',
            body: 'Give the African milk tree a bright window and it largely runs itself, stacking vertical growth all season. Its dry-country roots mean your main job is restraint: water deeply but rarely, and let winter be a genuine rest.',
            highlights: [
                'Direct morning or afternoon sun keeps the "Rubra" blush vivid.',
                'Let the pot dry out completely — then wait a few more days.',
                'Winter leaf drop along the stems is normal, not a cry for water.',
            ],
        },
        weeklyChecklist: [
            'Lift the pot — water only when it feels feather-light.',
            'Check stems are firm and upright; softness means too much water.',
            'Scan stem grooves for mealybug fluff or spider mite dust.',
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '4+ hrs direct',
                detail: 'Strong light keeps the fast growth compact and sturdy instead of stretched and lean.',
            },
            {
                label: 'Restraint',
                stat: 'Dry between soaks',
                detail: 'Every common problem with this plant traces back to water given too often.',
            },
            {
                label: 'Safety',
                stat: 'Gloves for the sap',
                detail: 'Latex drips from any wound — protect skin and eyes, and keep pets and kids clear.',
            },
            {
                label: 'Support',
                stat: 'Stake tall stems',
                detail: 'Root systems stay small relative to height; a stake or heavy pot prevents topple.',
            },
        ],
        wateringRhythm: {
            heading: 'Deep drinks on a drought schedule.',
            body: 'Water thoroughly until it drains, then leave the plant alone until the mix has been fully dry for several days. In a warm bright spot that is every 2-3 weeks in summer; in winter a monthly sip is ample. Firm stems are the live gauge — a well-watered trigona feels rigid.',
            tips: [
                'Slight vertical wrinkling on the stem faces is the plant asking for a drink.',
                'Always water at soil level; wet stem grooves in cool weather invite rot.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 2-3 weeks',
                tip: 'Soak deeply once fully dry; growth is fastest with this feast-then-drought cycle.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 3-4 weeks',
                tip: 'Stretch the interval as light drops and growth slows.',
            },
            {
                season: 'Winter',
                cadence: 'Monthly at most',
                tip: 'Barely moisten the mix; cold wet soil is the plant’s one true enemy.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Judge the pot’s weight rather than watering by date.',
                    'Rotate a quarter turn so all three stem faces get sun.',
                    'Confirm the stake and ties still support the tallest stems.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Prune for height or shape in late spring wearing gloves and eye protection; stop sap flow with cold water.',
                    'Repot every 2-3 years into a heavy pot one size up.',
                    'Move away from cold windowpanes before winter sets in.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Nitrile gloves + safety glasses',
                note: 'Non-negotiable for pruning — latex sap burns on contact.',
            },
            {
                item: 'Heavy terracotta pot',
                note: 'Ballast against toppling and breathability for fast dry-down.',
            },
            {
                item: 'Pumice or coarse sand',
                note: 'Cuts standard cactus mix into something that drains instantly.',
            },
            {
                item: 'Bamboo stake and soft ties',
                note: 'Keeps top-heavy columns vertical as they pass 4 ft.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Soft, Yellowing Stems',
                description:
                    'Stems that yellow from the base and feel squishy signal root rot from overwatering — it moves fast in euphorbias.',
                actions: [
                    'Stop watering and unpot immediately to inspect the roots.',
                    'Cut away rotted roots and stem tissue to clean flesh with a sterile blade, gloves on.',
                    'If the base is lost, take healthy top cuttings, callus for 1-2 weeks, and re-root in dry grit.',
                ],
            },
            {
                title: 'Winter Leaf Drop',
                description:
                    'The small leaves along stem edges yellow and shed as light fades — an annual rhythm, not an emergency.',
                actions: [
                    'No treatment needed; fresh leaves flush along new growth in spring.',
                    'Resist the urge to water more — the plant needs less in winter, not more.',
                ],
            },
            {
                title: 'Stretched, Skinny Growth',
                description:
                    'New sections noticeably thinner than older growth mean the light is too weak for its fast metabolism.',
                actions: [
                    'Move to a sunnier window or add a grow light.',
                    'Prune lanky sections in spring; the cut point will branch into fuller growth.',
                ],
            },
            {
                title: 'Brown Corky Patches',
                description:
                    'Dry, tan, bark-like scarring on older stems is cosmetic corking or healed sunburn, not spreading disease.',
                actions: [
                    'Confirm patches are dry and firm; only soft or weeping spots need investigation.',
                    'Introduce any move to stronger sun gradually to avoid fresh scald.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                signs: 'Cottony white clusters tucked into the stem grooves and around spines.',
                treatment:
                    'Dab with isopropyl alcohol on a swab, then spray insecticidal soap weekly until clear.',
            },
            {
                name: 'Spider Mites',
                signs: 'Faded, dusty stem surfaces with fine webbing in dry heat.',
                treatment:
                    'Rinse stems in the shower and treat weekly with neem or a miticide; improve airflow.',
            },
            {
                name: 'Scale',
                signs: 'Small hard brown discs fixed along stem ridges.',
                treatment:
                    'Scrape off what you can reach and follow with horticultural oil every 7-10 days.',
            },
        ],
        stabilityChecklist: [
            'When unsure whether to water, wait a week — drought is survivable, rot is not.',
            'Wear gloves and eye protection for every cut; wash sap off skin immediately.',
            'Weigh down or stake plants past 4 ft — a full pot topple can shatter stems.',
            'Give it the sunniest spot you can spare and rotate weekly for even growth.',
        ],
    },
};
