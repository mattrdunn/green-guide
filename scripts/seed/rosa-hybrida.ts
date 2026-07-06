import type { Plant } from '../../lib/db/models/Plant';

export const rosaHybrida: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'rosa',
    species: 'hybrida',
    commonNames: ['Rose', 'Hybrid Tea Rose', 'Garden Rose'],
    description:
        'The classic flowering shrub prized for large, high-centered blooms on long, cuttable stems. Hybrid Tea Rose rewards full sun, rich soil, and a disciplined watering-and-feeding routine with repeat flushes of color from spring through fall.',
    images: [
        {
            url: 'plants/rosa/hybrida/img-1.png',
            alt: 'A Hybrid Tea Rose bush in full bloom, showcasing large, high-centered orange flowers on long stems.',
        },
        {
            url: 'plants/rosa/hybrida/img-2.png',
            alt: 'A close-up of a Hybrid Tea Rose flower, highlighting its layered petals and vibrant color.',
        },
    ],
    tags: ['flowering', 'shrub', 'full-sun', 'thorny', 'non-toxic'],
    highlights: [
        'Bred from crosses between European and Chinese rose species, starting with the first hybrid tea, "La France," in 1867.',
        'Repeat-blooms in flushes roughly every 6-8 weeks through the growing season, unlike most old garden roses.',
        'Non-toxic to pets and people — thorns are the main hazard, not the plant chemistry.',
    ],
    vitals: {
        hardinessZone: {
            value: '5-9',
            caption: 'Varies by cultivar; most hybrid teas need winter protection at the colder end of this range.',
            zoneMin: 5,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6+ hours of direct light daily for strong stems and reliable reblooming.',
        },
        watering: {
            score: 3,
            value: 'Moderate',
            caption: 'Deep water at the base 1-2 times weekly; avoid wetting the foliage.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Needs a consistent pruning, feeding, and disease-prevention routine to perform well.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Not toxic to pets or people — thorns can cause puncture wounds, but the plant itself carries no chemical toxicity.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '3-6 ft',
            detail: 'Upright shrub habit; height and vigor vary by cultivar and how hard it is pruned each year.',
            minFt: 3,
            maxFt: 6,
        },
        soil: {
            value: 'Rich, well-draining loam',
            detail: 'Slightly acidic pH 6.0-6.5, amended with compost — roses are heavy feeders that dislike compacted soil.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Grown as an outdoor shrub in soil; not suited to passive hydroponic culture.',
            compatible: false,
        },
        fertilizer: {
            value: 'Balanced rose fertilizer with micronutrients',
            detail: 'Formulated for roses, often with added magnesium and iron to support bloom color and foliage.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Every 4 weeks in season',
            detail: 'Feed from spring through late summer; stop 6-8 weeks before the first expected frost.',
        },
        nativeHabitat: {
            value: 'Hybrid origin (Europe and East Asia)',
            detail: 'Modern hybrid teas descend from crosses between European roses and China roses, bred for repeat blooming.',
        },
        humidity: {
            value: 'Average, with good airflow',
            detail: 'Not humidity-sensitive, but stagnant, humid air around dense foliage invites fungal disease.',
            minPct: 30,
        },
        temperature: {
            value: '60° – 75°F',
            detail: 'Ideal range for active growth and bloom; dormant in winter cold depending on the zone.',
            minF: 20,
            maxF: 90,
        },
        growSeason: {
            value: 'Spring–Fall, repeat blooming',
            detail: 'A strong spring flush followed by repeat flushes roughly every 6-8 weeks until frost.',
        },
        dailyRhythm: {
            heading: 'A repeat bloomer that thrives on a disciplined routine.',
            body: 'Hybrid Tea Rose wants full sun, water at the roots rather than the leaves, and spent blooms removed promptly. The daily job is a quick scan for black spot or mildew and a deadheading pass to keep the next flush coming.',
            highlights: [
                'Deadhead just above a five-leaflet leaf to encourage a strong next stem.',
                'Water at the base in the morning so foliage dries out during the day.',
                'Good airflow between plants is the best defense against fungal disease.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Deadhead spent blooms and inspect leaves for black spot or mildew.',
            },
            {
                interval: 'weekly',
                task: 'Water deeply at the base if the top few inches of soil are dry.',
            },
            {
                interval: 'monthly',
                task: 'Feed with a balanced rose fertilizer during the growing season.',
            },
            {
                interval: 'seasonal',
                task: 'Hard-prune in late winter or early spring and mulch to conserve moisture.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6+ hrs direct',
                detail: 'Full sun drives strong stems, healthy foliage, and repeat blooming.',
            },
            {
                label: 'Water at the base',
                stat: '1-2x weekly, deep',
                detail: 'Keeps roots consistently moist while keeping foliage dry to prevent fungal disease.',
            },
            {
                label: 'Feeding',
                stat: 'Every 4 wks in season',
                detail: 'Roses are heavy feeders — regular fertilizing supports both bloom size and repeat flushes.',
            },
            {
                label: 'Pruning & deadheading',
                stat: 'Weekly + annual hard prune',
                detail: 'Deadheading drives repeat blooms; a hard prune each late winter shapes the plant and removes old wood.',
            },
        ],
        wateringRhythm: {
            heading: 'Deep water at the roots, dry foliage always.',
            body: 'Water thoroughly at the base once or twice a week rather than lightly and often — deep roots make for a more drought-resilient plant. Avoid overhead watering or wetting the leaves, since damp foliage is the leading cause of black spot and powdery mildew.',
            tips: [
                'Water in the early morning so any incidental splash on leaves dries quickly.',
                'A soaker hose or drip line at the base is the most reliable way to keep foliage dry.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Weekly deep soak',
                tip: 'Establish a steady rhythm as new growth and the first bloom flush begin.',
            },
            {
                season: 'Summer',
                cadence: '2x weekly deep soak',
                tip: 'Heat and active reblooming increase water demand — mulch to reduce evaporation.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Every 2-3 weeks or as needed',
                tip: 'Taper off as the plant enters dormancy in cold-winter climates.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Deadhead spent blooms just above a five-leaflet leaf.',
                    'Inspect leaves for black spot, mildew, or pest activity.',
                    'Water deeply at the base if the topsoil is dry.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Hard-prune in late winter or early spring, removing dead and crossing canes.',
                    'Apply a fresh layer of mulch to conserve moisture and suppress weeds.',
                    'Apply a preventive fungicide treatment if black spot is a recurring issue.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Bypass pruning shears',
                note: 'For clean deadheading cuts and the annual hard prune.',
            },
            {
                item: 'Rose fertilizer with micronutrients',
                note: 'Supports heavy, repeat bloom production through the season.',
            },
            {
                item: 'Soaker hose or drip irrigation',
                note: 'Keeps water at the roots and foliage dry to prevent fungal disease.',
            },
            {
                item: 'Thick gardening gloves',
                note: 'Essential protection from thorns during pruning and deadheading.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Black Spots with Yellowing Leaves',
                description:
                    'The classic sign of black spot fungus, worsened by wet foliage and poor airflow.',
                actions: [
                    'Remove and discard affected leaves — do not compost them.',
                    'Switch to base watering only and improve spacing for airflow.',
                    'Apply a fungicide labeled for black spot if the problem persists.',
                ],
            },
            {
                title: 'Powdery White Coating on Leaves and Buds',
                description:
                    'Powdery mildew, common in humid conditions with poor air circulation.',
                actions: [
                    'Prune to open up the center of the plant for better airflow.',
                    'Apply a fungicide and avoid overhead watering.',
                ],
            },
            {
                title: 'Few or No Blooms',
                description:
                    'Usually insufficient sun, over-pruning, or a fertilizer too high in nitrogen.',
                actions: [
                    'Confirm the plant gets at least 6 hours of direct sun.',
                    'Switch to a balanced or bloom-focused rose fertilizer.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Clusters of small insects on buds and new growth, often with sticky honeydew.',
                treatment:
                    'Spray off with water and follow with insecticidal soap every 5-7 days until clear.',
            },
            {
                name: 'Japanese Beetles',
                signs: 'Skeletonized leaves and chewed blooms, most active in mid-summer.',
                treatment:
                    'Hand-pick into soapy water in the early morning and use targeted traps away from the plants.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine webbing and stippled, dull leaves, especially in hot, dry weather.',
                treatment:
                    'Rinse foliage regularly and apply insecticidal soap or a miticide if infestations persist.',
            },
        ],
        stabilityChecklist: [
            'Give it at least 6 hours of direct sun daily.',
            'Water deeply at the base and keep foliage dry.',
            'Deadhead weekly and hard-prune once a year in late winter.',
            'Feed on a monthly schedule through the growing season.',
        ],
    },
};
