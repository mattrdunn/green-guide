import type { Plant } from '../../lib/db/models/Plant';

export const perseaAmericana: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'persea',
    species: 'americana',
    commonNames: ['Avocado Tree', 'Avocado', 'Alligator Pear'],
    description:
        'A broad evergreen tree grown for its buttery, nutrient-dense fruit. Avocado Tree is often started at home from a pit, though full sun, patient years of growth, and usually a grafted cultivar are what it takes to actually see fruit.',
    images: [
        {
            url: 'plants/persea/americana/img-1.png',
            alt: 'A close-up of an Avocado Tree fruit, showing the smooth, dark green skin and creamy interior.',
        },
        {
            url: 'plants/persea/americana/img-2.png',
            alt: 'A close-up of an Avocado Tree branch showing glossy green leaves and a cluster of small yellow avocados.',
        },
        {
            url: 'plants/persea/americana/img-3.png',
            alt: 'A mature Avocado Tree with glossy green leaves and small yellow fruits, placed in a sunny outdoor setting.',
        }
    ],
    tags: ['fruiting', 'full-sun', 'tropical', 'toxic'],
    highlights: [
        'Pit-grown seedlings can take 5-13 years to fruit, if they fruit at all — grafted trees fruit far sooner and more reliably.',
        'Highly sensitive to overwatering; root rot from poor drainage is the most common cause of decline.',
        'Leaves, bark, and pit contain persin, which is toxic to pets and especially dangerous to birds.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Hardy varieties stretch to zone 8; most need frost-free conditions or container culture.',
            zoneMin: 8,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '8+ hours of direct light outdoors for healthy growth and any chance of fruit.',
        },
        watering: {
            score: 3,
            value: 'Moderate',
            caption: 'Deep, infrequent watering — roots are highly sensitive to staying wet.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Easy to grow as a houseplant from a pit; fruiting reliably takes a grafted tree and years of care.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'Persin in leaves, bark, and the pit causes vomiting and diarrhea in pets, and can be fatal to birds and some livestock.',
            level: 'toxic',
        },
    },
    overview: {
        height: {
            value: '30-60 ft in-ground (8-15 ft grafted dwarf)',
            detail: 'Standard trees grow large; grafted dwarf cultivars stay manageable in a backyard or large container.',
            minFt: 8,
            maxFt: 60,
        },
        soil: {
            value: 'Well-draining, slightly acidic loam',
            detail: 'pH 6-6.5 with excellent drainage; avocados are notoriously intolerant of wet feet.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Roots are extremely prone to Phytophthora root rot in constantly moist conditions.',
            compatible: false,
        },
        fertilizer: {
            value: 'Balanced with zinc and micronutrients',
            detail: 'Avocado- or citrus-formulated fertilizer addresses the zinc deficiency the species is prone to.',
            npk: '2-1-1',
        },
        fertilizerFrequency: {
            value: 'Every 4-6 weeks in season',
            detail: 'Feed through spring and summer growth; withhold fertilizer entirely in winter dormancy.',
        },
        nativeHabitat: {
            value: 'Central Mexico and Central America',
            detail: 'Highland cloud forests and mid-elevation slopes with rich soil, warmth, and reliable rainfall.',
        },
        humidity: {
            value: 'Moderate',
            detail: 'Prefers 40-60% humidity; dry air and low humidity can cause leaf tip browning.',
            minPct: 40,
        },
        temperature: {
            value: '60° – 85°F',
            detail: 'Ideal range for active growth; damage begins below 30°F depending on variety.',
            minF: 30,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring flush; fruit matures over 6-18 months',
            detail: 'New leaf growth surges in spring; depending on cultivar, fruit can take well over a year to ripen.',
        },
        dailyRhythm: {
            heading: 'A sun-loving tree that punishes both drought and overwatering.',
            body: 'Avocado Tree wants strong light, deep but infrequent water, and soil that never stays soggy. The daily job is checking that the topsoil has actually dried before the next watering and watching for scorched or browning leaf tips.',
            highlights: [
                'Brown, crispy leaf tips often signal salt or fluoride sensitivity from tap water.',
                'Young trees moved outdoors need gradual sun acclimation to avoid bark sunburn.',
                'Full sun and excellent drainage matter more than any other single factor.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check that the top few inches of soil have dried before watering again.',
            },
            {
                interval: 'weekly',
                task: 'Inspect leaves for browning tips, mites, or lace bug damage.',
            },
            {
                interval: 'monthly',
                task: 'Feed with a zinc-rich fertilizer during the growing season.',
            },
            {
                interval: 'seasonal',
                task: 'Prune to shape, protect from frost, and repot young trees as needed.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '8+ hrs direct',
                detail: 'Full sun is essential for healthy growth and is a prerequisite for any fruit production.',
            },
            {
                label: 'Water',
                stat: 'Deep, infrequent',
                detail: 'Let soil dry meaningfully between waterings — this is the single biggest failure point.',
            },
            {
                label: 'Drainage',
                stat: 'Fast-draining mix only',
                detail: 'Heavy or compacted soil quickly leads to root rot in this species.',
            },
            {
                label: 'Patience',
                stat: 'Years to fruit',
                detail: 'Grafted trees fruit sooner; pit-grown seedlings may take over a decade, if ever.',
            },
        ],
        wateringRhythm: {
            heading: 'Deep soaks, then a real dry-down — never standing water.',
            body: 'Water thoroughly until it drains freely, then wait until the top few inches of soil have dried before watering again. Avocado roots are shallow and oxygen-hungry, so waterlogged soil suffocates them quickly. Err toward underwatering rather than over.',
            tips: [
                'Use filtered or rainwater where possible — tap water salts and fluoride can cause leaf tip burn.',
                'Mulch outdoor trees to buffer soil moisture and moderate root-zone temperature.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Every 5-7 days',
                tip: 'Resume regular deep watering as the spring growth flush begins.',
            },
            {
                season: 'Summer',
                cadence: 'Every 4-6 days',
                tip: 'Heat increases demand, but always confirm the soil has dried before the next soak.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Every 10-14 days',
                tip: 'Cut back significantly as growth slows, especially for potted trees kept indoors.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Confirm the topsoil has dried before the next watering.',
                    'Check leaves for tip burn, mite stippling, or lace bug damage.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed with a zinc-rich, avocado- or citrus-formulated fertilizer in season.',
                    'Rinse dust from foliage to support healthy photosynthesis.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Prune to encourage a strong branch structure and remove crossing growth.',
                    'Acclimate any indoor-grown tree to outdoor sun gradually to prevent bark scorch.',
                    'Protect from frost with cover or by moving containers indoors.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Fast-draining potting mix (amended with bark or perlite)',
                note: 'The single most important defense against root rot.',
            },
            {
                item: 'Avocado or citrus fertilizer with zinc',
                note: 'Addresses the zinc deficiency this species is commonly prone to.',
            },
            {
                item: 'Moisture meter or wooden skewer',
                note: 'Confirms real dry-down before the next watering.',
            },
            {
                item: 'Frost cloth',
                note: 'Protects young or container trees during unexpected cold snaps.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Brown, Crispy Leaf Tips',
                description:
                    'Usually salt or fluoride sensitivity from tap water, or inconsistent watering.',
                actions: [
                    'Switch to filtered or rainwater where possible.',
                    'Water deeply and consistently rather than in small, frequent sips.',
                ],
            },
            {
                title: 'Wilting Despite Moist Soil',
                description:
                    'A sign of root rot from Phytophthora, usually caused by prolonged overwatering or poor drainage.',
                actions: [
                    'Stop watering immediately and check roots for brown, mushy tissue.',
                    'Repot into fresh, fast-draining mix, trimming away any rotted roots.',
                ],
            },
            {
                title: 'Bleached or Scorched Bark and Leaves',
                description:
                    'Sunburn from moving a shade-grown or indoor tree into full sun too quickly.',
                actions: [
                    'Move to filtered light and reintroduce full sun gradually over 2-3 weeks.',
                    'Shield exposed trunk bark on young trees during the transition.',
                ],
            },
        ],
        pests: [
            {
                name: 'Persea Mite',
                signs: 'Small brown spots on leaf undersides that expand and cause premature leaf drop.',
                treatment:
                    'Rinse foliage regularly and apply horticultural oil or a labeled miticide if infestations persist.',
            },
            {
                name: 'Avocado Lace Bug',
                signs: 'Stippled, bleached patches on leaves with dark excrement spots underneath.',
                treatment:
                    'Apply insecticidal soap or horticultural oil, focusing on leaf undersides.',
            },
            {
                name: 'Scale Insects',
                signs: 'Small, hard bumps on stems and leaf undersides, often with sticky honeydew nearby.',
                treatment:
                    'Scrape off light infestations and follow with horticultural oil every 1-2 weeks.',
            },
        ],
        stabilityChecklist: [
            'Give it as much direct sun as possible.',
            'Water deeply but infrequently, letting the soil dry meaningfully between waterings.',
            'Plant or pot in fast-draining soil to prevent root rot.',
            'Feed with a zinc-rich fertilizer during the growing season and protect from frost.',
        ],
    },
};
