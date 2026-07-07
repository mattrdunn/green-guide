import type { Plant } from '../../lib/db/models/Plant';

export const alocasiaReginula: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'alocasia',
    species: 'reginula',
    commonNames: ['Alocasia Black Velvet', 'Little Queen'],
    description:
        'Small, heart-shaped leaves in a deep, almost black velvet finish with pale silvery veins make Alocasia Black Velvet one of the most striking compact aroids — a jewel plant that trades size for intense visual texture.',
    images: [
        { url: 'plants/alocasia/reginula/img-1.jpg', alt: '' },
        { url: 'plants/alocasia/reginula/img-2.jpg', alt: '' },
        { url: 'plants/alocasia/reginula/img-3.jpg', alt: '' },
        { url: 'plants/alocasia/reginula/img-4.jpg', alt: '' },
    ],
    tags: ['aroid', 'jewel-plant', 'high-humidity', 'toxic', 'low-maintenance'],
    highlights: [
        'Native to the humid limestone forests of Borneo, where it grows low to the ground in dappled shade.',
        'The velvety leaf texture comes from a layer of tiny epidermal cells that scatter light rather than reflect it.',
        'Stays compact compared to most Alocasia, making it well suited to terrariums and small spaces.',
    ],
    vitals: {
        hardinessZone: {
            value: '11-12',
            caption:
                'Strictly indoors below 65°F; grown as a houseplant or terrarium specimen nearly everywhere.',
            zoneMin: 11,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Medium, indirect',
            caption:
                'Prefers dappled or filtered light; direct sun quickly scorches the delicate velvet leaves.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Never soggy, never bone-dry — the small rhizome is sensitive to both extremes.',
        },
        difficulty: {
            score: 4,
            value: 'Advanced',
            caption:
                'Needs consistently high humidity and careful watering, with little tolerance for neglect.',
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
            value: '6-12 in',
            detail: 'A compact rosette of a few broad leaves at a time, staying much smaller than most other Alocasia species.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Chunky, fast-draining aroid mix',
            detail: 'Potting mix, perlite, and orchid bark in equal parts — the small rhizome rots quickly in dense or soggy soil.',
        },
        semiHydro: {
            value: 'Yes, with care',
            detail: 'LECA or pon can work well once established, though the transition period is risky for the sensitive roots.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, light',
            detail: 'A diluted balanced feed supports the small, slow-growing plant without overwhelming its modest root system.',
            npk: '20-20-20',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer at half strength; stop entirely at the first sign of dormancy.',
        },
        nativeHabitat: {
            value: 'Bornean limestone forests',
            detail: 'Grows low to the forest floor on humid, shaded limestone terrain in Borneo.',
        },
        humidity: {
            value: '70%+ ideal',
            detail: 'A genuine high-humidity specimen — below 60%, leaf edges crisp and new growth struggles to unfurl.',
            minPct: 70,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Keep consistently warm; temperatures near 60°F or lower often trigger dormancy or stress.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Pushes new leaves slowly and steadily in warm, humid conditions, often pausing over winter.',
        },
        dailyRhythm: {
            heading:
                'A small, jewel-toned aroid that demands humidity above all else.',
            body: 'Alocasia Black Velvet is far less forgiving of dry air than most houseplants — a closed terrarium, cabinet, or humidifier setup is often the difference between thriving and merely surviving. The daily job is maintaining that stable humid microclimate; growth itself is naturally slow and unhurried.',
            highlights: [
                'A closed or semi-closed growing space (terrarium, cabinet, greenhouse cabinet) makes care dramatically easier.',
                'The velvet leaf surface shows water spots easily — bottom-water or water carefully at the soil line.',
                'A dormant-looking rhizome with no leaves may still be alive; reduce water and wait rather than discarding it.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top inch of soil for dryness.',
            },
            {
                interval: 'weekly',
                task: 'Inspect leaf undersides and new growth for spider mites.',
            },
            {
                interval: 'as-needed',
                task: 'Water once the top inch is dry; keep the mix evenly moist, not wet.',
            },
            {
                interval: 'monthly',
                task: 'Feed at half strength during active growth.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Humidity',
                stat: '70%+ ideal',
                detail: 'The single most important factor for this species — dry air causes crisping and stalled growth fast.',
            },
            {
                label: 'Light',
                stat: 'Medium, indirect',
                detail: 'Filtered or dappled light keeps the dark velvet coloring rich without scorching the delicate leaves.',
            },
            {
                label: 'Watering Care',
                stat: 'Bottom-water when possible',
                detail: 'Water spots mar the velvet texture, so avoiding splashes on the leaves keeps them looking their best.',
            },
            {
                label: 'Patience',
                stat: 'Naturally slow grower',
                detail: 'New leaves take time even in ideal conditions — this is a plant to enjoy slowly, not rush.',
            },
        ],
        wateringRhythm: {
            heading: 'Steady moisture, delivered carefully.',
            body: 'Water when the top inch of mix dries, saturating thoroughly and letting excess drain completely. Bottom-watering or watering right at the soil line helps avoid leaving mineral spots on the velvet leaf surface, which show more visibly on this species than on glossier aroids.',
            tips: [
                'Drooping paired with dry soil means water now; drooping paired with wet soil means check the roots.',
                'Reduce watering significantly at the first sign of dormancy or leaf loss in cooler months.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 6-8 days',
                tip: 'Active growth drinks steadily — check the topsoil weekly.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 8-10 days',
                tip: 'Watch for slowing growth as light and warmth decrease.',
            },
            {
                season: 'Winter',
                cadence: 'Every 2-3 weeks, or less if dormant',
                tip: 'A resting rhizome needs only enough moisture to prevent total desiccation.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water once the top inch is dry.',
                    'Inspect leaf undersides and new growth for spider mites.',
                    'Mist or check the humidity source to keep levels above 60-70%.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe leaves gently with a soft, damp brush rather than a cloth to protect the velvet texture.',
                    'Feed at half strength only during active growth.',
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
                item: 'Closed terrarium or humidity cabinet',
                note: 'The most reliable way to keep humidity consistently high enough for this species to thrive.',
            },
            {
                item: 'Chunky aroid mix + extra perlite',
                note: 'Fast drainage is essential protection for the rot-prone rhizome.',
            },
            {
                item: 'Soft brush',
                note: 'Cleans the velvet leaf surface without flattening its texture the way a wet cloth can.',
            },
            {
                item: 'Neem oil or insecticidal soap',
                note: 'First-line defense against spider mites, which target this species readily in dry conditions.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Crispy Leaf Edges',
                description:
                    'Brown, dry margins are this species’ most common complaint, almost always tied to humidity that has dropped below its preferred range.',
                actions: [
                    'Move to a terrarium, cabinet, or add a humidifier nearby.',
                    'Group with other humidity-loving plants to raise the local microclimate.',
                    'Trim damaged edges; new leaves can come in clean once humidity improves.',
                ],
            },
            {
                title: 'Sudden Leaf Drop or Dormancy',
                description:
                    'Losing leaves, especially with shorter days or a temperature drop, is often the start of natural dormancy rather than a fatal problem.',
                actions: [
                    'Scale back watering significantly and stop fertilizing.',
                    'Keep the rhizome warm and let the soil dry further between checks.',
                    'Resume normal care once new growth appears, typically in spring.',
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
                pestSlug: 'spider-mites',
                signs: 'Fine webbing and pale stippling on leaf undersides, especially in dry air.',
                treatment:
                    'Shower the foliage, raise humidity, and spray weekly with insecticidal soap until new leaves emerge clean.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white clusters where leaves meet the petiole.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol and follow with neem oil sprays until clear.',
            },
            {
                name: 'Thrips',
                pestSlug: 'thrips',
                signs: 'Silvery streaks and distorted new leaves.',
                treatment:
                    'Isolate, prune the worst-affected leaves, and alternate systemic granules with contact sprays for 4-6 weeks.',
            },
        ],
        stabilityChecklist: [
            'Keep humidity above 60-70% to protect leaf edges and support new growth.',
            'Water on a check-first basis, never a fixed schedule — the rhizome punishes both extremes.',
            'Expect slow, patient growth even under ideal conditions.',
            "Inspect leaf undersides weekly; spider mites are this plant's most persistent threat.",
        ],
    },
};
