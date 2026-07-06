import type { Plant } from '../../lib/db/models/Plant';

export const alocasiaAmazonica: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'alocasia',
    species: 'amazonica',
    commonNames: [
        'Alocasia Amazonica',
        'African Mask Plant',
        'Alocasia x amazonica',
    ],
    description:
        'Arrow-shaped, dark green leaves veined in bright white and edged with sharp scallops give Alocasia Amazonica its dramatic, almost sculptural look — a striking hybrid aroid that trades easy-care flexibility for serious visual payoff.',
    images: [
        {
            url: 'plants/alocasia/amazonica/img-1.png',
            alt: 'Alocasia Amazonica in a white pot on a wooden table, with bright indirect light.',
        },
        {
            url: 'plants/alocasia/amazonica/img-2.png',
            alt: 'Close-up of Alocasia Amazonica leaves, showing the white veining and scalloped edges.',
        },
    ],
    tags: ['aroid', 'statement-plant', 'high-humidity', 'toxic'],
    highlights: [
        'A hybrid of garden origin, not found in the wild — bred from Southeast Asian Alocasia species.',
        'Leaves fold into a natural rest position at night, similar to prayer plants.',
        'Goes dormant in low light or cool temperatures — losing leaves is often normal, not fatal.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption:
                'Strictly indoors below 60°F; grown as a houseplant nearly everywhere.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Bright light keeps the white veining crisp; direct sun scorches leaves.',
        },
        watering: {
            score: 4,
            value: 'Evenly moist',
            caption:
                'Never soggy, never bone-dry; the rhizome rots quickly in waterlogged soil.',
        },
        difficulty: {
            score: 4,
            value: 'Advanced',
            caption:
                'Sensitive to both under- and overwatering, with a strong dormancy phase to manage.',
            level: 'advanced',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'High calcium oxalate content causes significant mouth and throat irritation — keep well away from pets and kids.',
            level: 'toxic',
        },
    },
    overview: {
        height: {
            value: '1-2 ft',
            detail: 'Stays compact for an Alocasia, with each leaf held upright on a tall petiole above a central rhizome.',
            minFt: 1,
            maxFt: 2,
        },
        soil: {
            value: 'Chunky, fast-draining aroid mix',
            detail: 'Potting mix, perlite, and orchid bark in equal parts — the tuberous rhizome rots fast in dense or soggy soil.',
        },
        semiHydro: {
            value: 'Yes, with care',
            detail: 'LECA or pon can work well once established, but the transition period is risky for the sensitive rhizome.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, moderate',
            detail: 'A balanced liquid feed at half strength supports the large leaves without overwhelming the roots.',
            npk: '20-20-20',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer; stop entirely once dormancy signs appear.',
        },
        nativeHabitat: {
            value: 'Garden hybrid (Southeast Asian parentage)',
            detail: 'Bred from Alocasia species native to tropical Southeast Asia — it expects warm, humid, sheltered conditions year-round.',
        },
        humidity: {
            value: '60%+ ideal',
            detail: 'Below 50%, leaf edges brown and new growth struggles to unfurl cleanly.',
            minPct: 60,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Keep consistently warm; temperatures near 60°F or lower often trigger dormancy.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Pushes new leaves steadily in warm months, then frequently pauses or drops leaves over winter.',
        },
        dailyRhythm: {
            heading: 'A striking aroid that runs on its own seasonal clock.',
            body: 'Alocasia Amazonica alternates active growth with rest — new leaves unfurl quickly in warm, humid, bright conditions, then the plant may shed leaves and pause entirely when light or temperature drops. The daily job is steady moisture and humidity; the seasonal job is not panicking during dormancy.',
            highlights: [
                'Bright, indirect light keeps the white venation vivid.',
                'A dormant-looking rhizome with no leaves is often still alive underground.',
                'Wipe the large leaves regularly — dust dulls both their look and their light uptake.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top 1" of soil for dryness.',
            },
            {
                interval: 'weekly',
                task: 'Inspect leaf undersides and new growth for spider mites.',
            },
            {
                interval: 'as-needed',
                task: 'Water once the top 1" is dry; keep the mix evenly moist, not wet.',
            },
            {
                interval: 'monthly',
                task: 'Wipe leaves clean and feed at half strength during active growth.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Evenly moist',
                detail: 'Water when the top inch dries; the rhizome rots fast if left sitting wet.',
            },
            {
                label: 'Humidity',
                stat: '60%+ ideal',
                detail: 'A humidifier keeps leaf edges from browning and helps new leaves unfurl fully.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Strong indirect light keeps the white venation bold without scorching leaves.',
            },
            {
                label: 'Dormancy',
                stat: 'Expect a pause',
                detail: 'Cooler months often bring leaf drop — reduce water and wait rather than assume the plant has died.',
            },
        ],
        wateringRhythm: {
            heading: 'Steady moisture, careful drainage.',
            body: 'Water when the top inch of mix dries, saturating thoroughly and letting excess drain completely. This species dislikes both prolonged dryness and standing water, so a fast-draining mix paired with a consistent check-in schedule matters more than the amount used per watering.',
            tips: [
                'Drooping paired with dry soil means water now; drooping paired with wet soil means check the roots.',
                'Reduce watering significantly at the first sign of dormancy — a resting rhizome needs far less moisture.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 5-7 days',
                tip: 'Active growth drinks steadily — check the topsoil twice a week.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Watch for slowing growth or leaf drop as dormancy approaches.',
            },
            {
                season: 'Winter',
                cadence: 'Every 2-3 weeks, or less if dormant',
                tip: 'A leafless rhizome needs only enough moisture to prevent total desiccation.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water once the top inch is dry.',
                    'Inspect leaf undersides and new growth for spider mites.',
                    'Rotate the pot slightly for even light exposure.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe leaves clean with a damp cloth.',
                    'Feed at half strength only during active growth.',
                    'Watch for early dormancy signs and scale back watering accordingly.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Repot in spring once the rhizome has clearly outgrown its pot.',
                    'Divide offsets from the rhizome to propagate, ideally at the start of the growing season.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Humidifier with hygrometer',
                note: 'Keeps humidity above 60% so leaf edges stay clean and new growth unfurls fully.',
            },
            {
                item: 'Chunky aroid mix + extra perlite',
                note: 'Fast drainage is essential protection for the rot-prone rhizome.',
            },
            {
                item: 'Moisture meter',
                note: 'Helps hold the line between evenly moist and waterlogged.',
            },
            {
                item: 'Neem oil or insecticidal soap',
                note: 'First-line defense against spider mites, which target this species readily.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Sudden Leaf Drop',
                description:
                    'Losing several leaves at once, especially with shorter days or cooler temperatures, is often the start of natural dormancy rather than a fatal problem.',
                actions: [
                    'Scale back watering significantly and stop fertilizing.',
                    'Keep the rhizome warm and let the soil dry further between checks.',
                    'Resume normal care once new growth appears, typically in spring.',
                ],
            },
            {
                title: 'Crispy Leaf Edges',
                description:
                    'Brown, dry margins usually point to low humidity or a buildup of fertilizer salts.',
                actions: [
                    'Raise humidity with a humidifier or pebble tray.',
                    'Flush the soil with plain water to clear excess salts.',
                    'Trim damaged edges; new leaves can come in clean once conditions improve.',
                ],
            },
            {
                title: 'Mushy Base or Rhizome',
                description:
                    'A soft, discolored base signals rot from waterlogged, poorly draining soil.',
                actions: [
                    'Stop watering immediately and check the roots and rhizome for firmness.',
                    'Trim away any soft, mushy tissue with a clean, sharp blade.',
                    'Repot into fresh, fast-draining mix, sizing the pot to the remaining healthy rhizome.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                signs: 'Fine webbing and pale stippling on leaf undersides, especially in dry air.',
                treatment:
                    'Shower the foliage, raise humidity, and spray weekly with insecticidal soap until new leaves emerge clean.',
            },
            {
                name: 'Mealybugs',
                signs: 'Cottony white clusters where leaves meet the petiole.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol and follow with neem oil sprays until clear.',
            },
            {
                name: 'Thrips',
                signs: 'Silvery streaks and distorted new leaves.',
                treatment:
                    'Isolate, prune the worst-affected leaves, and alternate systemic granules with contact sprays for 4-6 weeks.',
            },
        ],
        stabilityChecklist: [
            'Keep humidity above 60% to protect leaf edges and support new growth.',
            'Water on a check-first basis, never a fixed schedule — the rhizome punishes both extremes.',
            'Expect a dormant phase in cooler months and reduce water rather than panicking.',
            "Inspect leaf undersides weekly; spider mites are this plant's most persistent threat.",
        ],
    },
};
