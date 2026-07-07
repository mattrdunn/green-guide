import type { Plant } from '../../lib/db/models/Plant';

export const citrusLimon: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'citrus',
    species: 'limon',
    commonNames: ['Lemon Tree', 'Lemon'],
    description:
        'An evergreen citrus tree grown for its fragrant white blossoms and tart yellow fruit. Lemon Tree thrives in full sun and warmth, and adapts well to large containers for growers in cooler climates who bring it in over winter.',
    images: [
        {
            url: 'plants/citrus/limon/img-1.png',
            alt: 'A potted Lemon Tree with glossy green leaves, white blossoms, and small yellow lemons, placed in a bright indoor setting.',
        },
        {
            url: 'plants/citrus/limon/img-2.png',
            alt: 'A close-up of a Lemon Tree branch showing glossy green leaves, white blossoms, and a cluster of small yellow lemons.',
        },
    ],
    tags: ['fruiting', 'full-sun', 'tropical', 'container-friendly', 'mildly-toxic'],
    highlights: [
        'Can flower and fruit year-round in warm climates, often with blossoms and ripe lemons on the tree at once.',
        'Fragrant blooms perfume the air and attract pollinators outdoors.',
        'Grafted dwarf varieties stay container-sized, making it viable well outside its hardy range.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Grows outdoors year-round in frost-free zones; needs container culture and winter protection elsewhere.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '8+ hours of direct light outdoors, or the brightest possible window/grow light indoors.',
        },
        watering: {
            score: 3,
            value: 'Moderate',
            caption: 'Deep water when the top 2 inches of soil dry; avoid letting it sit in water.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Needs consistent light, feeding, and humidity to stay healthy and productive, especially indoors.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Psoralens and essential oils in the leaves and rind can cause GI upset and skin photosensitivity in pets.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '8-15 ft (3-6 ft potted/dwarf)',
            detail: 'In-ground trees grow into small trees; grafted dwarf varieties stay compact enough for containers.',
            minFt: 3,
            maxFt: 15,
        },
        soil: {
            value: 'Well-draining, slightly acidic loam',
            detail: 'A citrus-specific or amended potting mix with pH 5.5-6.5; poor drainage is the top cause of decline.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Citrus roots need real dry-down between waterings — constant moisture invites root rot.',
            compatible: false,
        },
        fertilizer: {
            value: 'Citrus-specific with micronutrients',
            detail: 'Formulated for iron, zinc, and manganese needs that citrus is prone to lacking.',
            npk: '2-1-1',
        },
        fertilizerFrequency: {
            value: 'Every 4-6 weeks in season',
            detail: 'Feed through spring and summer growth; reduce or stop feeding in winter dormancy.',
        },
        nativeHabitat: {
            value: 'Northeast India / Myanmar / China border region',
            detail: 'Believed to originate as a natural hybrid in the foothills of the eastern Himalayas.',
        },
        humidity: {
            value: 'Moderate',
            detail: 'Appreciates 40-50% humidity; dry indoor winter air can invite spider mites.',
            minPct: 40,
        },
        temperature: {
            value: '55° – 85°F',
            detail: 'Ideal growing range; sustained temperatures below 32°F cause frost damage to foliage and fruit.',
            minF: 32,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring bloom, year-round growth in warmth',
            detail: 'Flowers appear in flushes (often spring-heaviest); fruit can take 6-9 months to mature and ripen.',
        },
        dailyRhythm: {
            heading: 'A sun-hungry fruit tree that rewards steady conditions.',
            body: 'Lemon Tree wants maximum light, a consistent watering rhythm, and regular feeding to support both foliage and fruit. The daily job is checking the topsoil and watching leaves for curling or yellowing that signal a change is needed.',
            highlights: [
                'Full sun keeps foliage dense and supports reliable flowering and fruiting.',
                'Yellow leaves with green veins often signal an iron or micronutrient deficiency.',
                'Rotate potted trees occasionally for even light exposure and growth.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check topsoil moisture and water deeply if the top 2 inches are dry.',
            },
            {
                interval: 'weekly',
                task: 'Inspect leaves and stems for pests like scale or leafminers.',
            },
            {
                interval: 'monthly',
                task: 'Feed with a citrus-specific fertilizer during the growing season.',
            },
            {
                interval: 'seasonal',
                task: 'Prune for airflow and shape; bring potted trees indoors before frost.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '8+ hrs direct',
                detail: 'The single biggest driver of healthy growth, flowering, and fruit set.',
            },
            {
                label: 'Water',
                stat: 'Deep, when top 2 in dry',
                detail: 'Consistent moisture without waterlogging — citrus dislikes both drought and soggy roots.',
            },
            {
                label: 'Feeding',
                stat: 'Every 4-6 wks in season',
                detail: 'Citrus-specific fertilizer supplies the iron, zinc, and manganese it commonly runs short on.',
            },
            {
                label: 'Winter protection',
                stat: 'Bring in below 30°F',
                detail: 'Container-grown trees in marginal zones need to move indoors or under cover before hard frost.',
            },
        ],
        wateringRhythm: {
            heading: 'Deep soaks on a steady rhythm, never standing water.',
            body: 'Water thoroughly until it drains from the pot, then let the top 2 inches dry before the next soak. Inconsistent watering — swinging between drought and overwatering — is a common cause of fruit and leaf drop. Reduce frequency in winter, especially for trees moved indoors.',
            tips: [
                'Use rainwater or filtered water where possible — citrus can be sensitive to salt buildup from tap water.',
                'Mulch outdoor trees to buffer soil moisture swings in hot weather.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Every 5-7 days',
                tip: 'Resume regular deep watering as new growth and blossoms emerge.',
            },
            {
                season: 'Summer',
                cadence: 'Every 3-5 days',
                tip: 'Heat and fruit development increase water demand — check potted trees most often.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Every 10-14 days',
                tip: 'Taper off as growth slows, especially for trees brought indoors for winter.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water deeply if the top 2 inches are dry.',
                    'Inspect new growth and leaf undersides for scale, aphids, or leafminer trails.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed with a citrus-specific fertilizer during spring and summer.',
                    'Wipe dust from leaves to keep them photosynthesizing efficiently.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Prune out crossing or crowded branches to improve airflow.',
                    'Repot young trees as they outgrow their containers.',
                    'Move potted trees indoors or under cover before the first frost.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Citrus-specific fertilizer with micronutrients',
                note: 'Prevents the iron and zinc deficiencies citrus commonly shows.',
            },
            {
                item: 'Moisture meter or wooden skewer',
                note: 'Confirms the root zone has dried enough before the next watering.',
            },
            {
                item: 'Bypass pruning shears',
                note: 'For shaping and removing crossing or diseased branches.',
            },
            {
                item: 'Frost cloth or a bright indoor spot',
                note: 'Protects container trees during cold snaps in marginal climates.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Sudden Leaf Drop',
                description:
                    'Citrus commonly drops leaves in response to a recent change in light, temperature, or watering.',
                actions: [
                    'Keep conditions stable for a few weeks and avoid further changes.',
                    'Confirm watering is consistent — neither bone dry nor waterlogged.',
                ],
            },
            {
                title: 'Yellow Leaves with Green Veins',
                description:
                    'Classic sign of iron or micronutrient chlorosis, often from poor soil pH or root stress.',
                actions: [
                    'Apply a citrus fertilizer formulated with chelated micronutrients.',
                    'Check that soil pH is in the 5.5-6.5 range and drainage is adequate.',
                ],
            },
            {
                title: 'Curling or Cupping Leaves',
                description:
                    'Often heat or pest stress, especially from spider mites or aphids feeding on new growth.',
                actions: [
                    'Inspect leaf undersides closely for pests and treat if found.',
                    'Increase humidity and avoid placing the tree near heat vents or hot glass.',
                ],
            },
        ],
        pests: [
            {
                name: 'Citrus Leafminer',
                pestSlug: 'leafminers',
                signs: 'Silvery, winding trails tunneled through new leaves.',
                treatment:
                    'Remove and destroy affected leaves; apply horticultural oil to protect new flush growth.',
            },
            {
                name: 'Scale Insects',
                pestSlug: 'scale',
                signs: 'Small, waxy brown or white bumps along stems and leaf undersides.',
                treatment:
                    'Scrape off light infestations and follow with horticultural oil every 1-2 weeks.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine webbing and stippled, dull leaves, especially in dry indoor air.',
                treatment:
                    'Raise humidity, rinse foliage, and treat with insecticidal soap or miticide as needed.',
            },
        ],
        stabilityChecklist: [
            'Give it as much direct sun as possible, outdoors or in the brightest window.',
            'Water deeply and consistently — avoid swinging between drought and sogginess.',
            'Feed with a citrus-specific fertilizer every 4-6 weeks in the growing season.',
            'Protect from frost and sudden temperature swings.',
        ],
    },
};
