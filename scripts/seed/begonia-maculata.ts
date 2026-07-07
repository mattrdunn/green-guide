import type { Plant } from '../../lib/db/models/Plant';

export const begoniaMaculata: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'begonia',
    species: 'maculata',
    commonNames: ['Polka Dot Begonia', 'Angel Wing Begonia', 'Spotted Begonia'],
    description:
        'Silver polka-dotted, wing-shaped leaves with deep maroon undersides sit on tall, bamboo-like canes, making polka dot begonia one of the most photographed houseplants around — a statement plant that trades some fuss for a genuinely striking look.',
    images: [],
    tags: [
        'statement-plant',
        'cane-type',
        'toxic',
        'trending',
        'humidity-loving',
    ],
    highlights: [
        'Native to the coastal rainforests of Brazil, where it grows in dappled shade beneath the forest canopy.',
        'Cane-like stems can reach 3-5 ft indoors, giving it a shrubby, architectural presence unusual among houseplants.',
        'Produces clusters of small white flowers periodically, though the spotted foliage is the main draw.',
    ],
    vitals: {
        hardinessZone: {
            value: '10b-11',
            caption: 'Frost-tender; grown as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Strong filtered light keeps the silver spotting crisp; direct sun scorches the leaves.',
        },
        watering: {
            score: 3,
            value: 'Let the top inch dry',
            caption:
                'Sensitive to both extremes — soggy soil rots the canes, while prolonged dryness triggers leaf drop.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Reacts visibly to cold drafts and inconsistent watering, but is not otherwise demanding.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'Calcium oxalates make all parts irritating if chewed, with the highest concentration in the roots.',
            level: 'toxic',
        },
    },
    overview: {
        height: {
            value: '2-5 ft indoors',
            detail: 'Upright, cane-like stems grow tall and can benefit from staking or occasional pruning to control height.',
            minFt: 2,
            maxFt: 5,
        },
        soil: {
            value: 'Chunky, well-draining mix',
            detail: 'A potting mix amended with perlite and orchid bark keeps the canes from sitting in wet soil.',
        },
        semiHydro: {
            value: 'Yes, with care',
            detail: 'Established canes adapt to semi-hydro, but transition gradually and watch closely for rot at first.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced liquid feed',
            detail: 'A balanced fertilizer at half strength supports steady cane growth and flowering.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly spring through early fall; skip entirely in winter.',
        },
        nativeHabitat: {
            value: 'Brazil',
            detail: 'Grows in the dappled shade of coastal rainforest understory, often near streams.',
        },
        humidity: {
            value: '50%+ preferred',
            detail: 'Higher humidity keeps leaf edges from browning, though good airflow matters just as much to avoid mildew.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges; sudden cold drafts cause fast leaf drop.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Puts on the most cane height and new leaves during the warm months.',
        },
        dailyRhythm: {
            heading: 'A tall, showy plant that wants consistency more than complexity.',
            body: 'Polka dot begonia does best with a steady routine: check the soil before watering, keep it away from cold drafts, and give it good airflow alongside humidity. Most problems trace back to inconsistency rather than any single mistake.',
            highlights: [
                'Check soil moisture every few days; water once the top inch is dry.',
                'Keep away from cold drafts and sudden temperature swings.',
                'Prune leggy canes back to encourage bushier, fuller growth.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top inch of soil before considering a drink.',
            },
            {
                interval: 'weekly',
                task: 'Scan cane joints and leaf undersides for early pest activity.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly once the top inch is dry, then let it drain fully.',
            },
            {
                interval: 'monthly',
                task: 'Prune tall or leggy canes just above a node to encourage branching.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 7-10 days',
                detail: 'Let the top inch of soil dry before watering again, then soak thoroughly.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Strong filtered light keeps the silver leaf spotting bold and distinct.',
            },
            {
                label: 'Humidity & airflow',
                stat: '50%+, well-ventilated',
                detail: 'The combination of humidity and gentle air movement keeps leaves healthy and mildew-free.',
            },
            {
                label: 'Pruning',
                stat: 'Prune leggy canes',
                detail: 'Cutting back tall canes encourages branching instead of a single bare stalk.',
            },
        ],
        wateringRhythm: {
            heading: 'Steady moisture, never extremes.',
            body: 'Water thoroughly once the top inch of soil has dried, then let the pot drain completely. Polka dot begonia telegraphs both over- and underwatering quickly through its leaves, making it a good plant for learning to read those signals.',
            tips: [
                'Sudden, widespread leaf drop is usually a temperature shock or a big swing in watering, not disease.',
                'Yellowing lower leaves with soft stems point to overwatering; crisp brown edges point to low humidity.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 6-9 days',
                tip: 'Water as soon as the top inch of mix dries during active growth.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 9-12 days',
                tip: 'Stretch the interval slightly as growth slows with shorter days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 12-16 days',
                tip: 'Water sparingly and keep away from cold windows and drafts.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture before doing anything else.',
                    'Inspect cane joints and leaf undersides for pests.',
                    'Rotate the pot a quarter turn for even, upright growth.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Prune leggy or overly tall canes just above a node.',
                    'Feed with a diluted balanced fertilizer during the growing season.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Chunky, well-draining mix',
                note: 'Perlite and bark keep the canes from sitting in excess moisture.',
            },
            {
                item: 'Sharp pruning snips',
                note: 'Clean cuts above a node encourage bushier branching instead of a single tall cane.',
            },
            {
                item: 'Stake or support (optional)',
                note: 'Helps tall, top-heavy canes stay upright as the plant matures.',
            },
            {
                item: 'Small fan or good airflow',
                note: 'Gentle air movement paired with humidity helps prevent powdery mildew.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Sudden Leaf Drop',
                tag: 'Temperature Shock',
                description:
                    'Multiple leaves dropping at once usually follows a cold draft, a big temperature swing, or a major change in watering.',
                actions: [
                    'Move away from drafty windows, doors, and air conditioning vents.',
                    'Stabilize the watering routine and avoid letting the pot fully dry out.',
                ],
            },
            {
                title: 'White, Powdery Patches on Leaves',
                tag: 'Fungal',
                description:
                    'Powdery mildew develops when high humidity is paired with poor air circulation around the foliage.',
                actions: [
                    'Improve airflow with a small fan or by spacing plants further apart.',
                    'Remove affected leaves and avoid wetting foliage when watering.',
                ],
            },
            {
                title: 'Tall, Bare Canes',
                tag: 'Low Light',
                description:
                    'Long stretches of bare cane with leaves only near the top point to insufficient light.',
                actions: [
                    'Move to a brighter spot with strong, indirect light.',
                    'Prune back hard to encourage branching lower on the stem.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and faint webbing on leaf undersides, especially in dry indoor air.',
                treatment:
                    'Shower the foliage, raise humidity, then apply insecticidal soap weekly until clear.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White, cottony clusters tucked into cane joints and leaf axils.',
                treatment:
                    'Swab visible clusters with rubbing alcohol, then follow up with horticultural oil every 7-10 days.',
            },
            {
                name: 'Thrips',
                pestSlug: 'thrips',
                signs: 'Silvery streaks on leaf surfaces and tiny black specks of frass.',
                treatment:
                    'Isolate the plant and treat with insecticidal soap or neem oil weekly until signs stop.',
            },
        ],
        stabilityChecklist: [
            'Water once the top inch of soil dries, then let it drain fully.',
            'Give bright, indirect light to keep the silver spotting bold.',
            'Pair humidity with good airflow to prevent powdery mildew.',
            'Prune leggy canes back to a node to keep growth full rather than top-heavy.',
        ],
    },
};
