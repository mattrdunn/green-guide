import type { Plant } from '../../lib/db/models/Plant';

export const dypsisLutescens: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'dypsis',
    species: 'lutescens',
    commonNames: ['Areca Palm', 'Butterfly Palm', 'Golden Cane Palm'],
    description:
        'Feathery, arching fronds on slender golden canes give Areca Palm its airy, tropical look — a fast-growing, pet-safe statement palm for bright indoor corners.',
    images: [
        {
            url: 'plants/dypsis/lutescens/img-1.png',
            alt: 'A potted Areca Palm with feathery fronds and golden canes, placed in a bright indoor setting.',
        },
        {
            url: 'plants/dypsis/lutescens/img-2.png',
            alt: 'A close-up of the feathery fronds and golden canes of an Areca Palm, showing its tropical texture.',
        },
        {
            url: 'plants/dypsis/lutescens/img-3.png',
            alt: 'A large, established Areca Palm in a bright outdoor space.',
        }
    ],
    tags: ['palm', 'tropical', 'non-toxic', 'air-purifying', 'beginner-friendly'],
    highlights: [
        'Native to the humid understories of Madagascar.',
        'One of the few fully pet-safe palms — ASPCA lists it as non-toxic to cats and dogs.',
        'Clumping canes and feathery fronds make it a favorite for filling floor space with texture.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption: 'Houseplant everywhere colder than USDA zone 10.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption: 'Tolerates some gentle morning sun but scorches in harsh afternoon rays.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Water when the top inch dries; avoid both soggy and bone-dry extremes.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Sensitive to tap water minerals and prone to spider mites in dry air.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around cats, dogs, and curious kids — a rare fully pet-safe palm.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '6-7 ft indoors',
            detail: 'Outdoors in the tropics it can reach 20+ ft, but container culture and pruning keep indoor specimens well within reach.',
            minFt: 4,
            maxFt: 8,
        },
        soil: {
            value: 'Rich, well-draining mix',
            detail: 'A peat- or coco-based potting mix with perlite for drainage; palms dislike both compacted soil and standing water.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Transitions well to LECA or pon once acclimated, which also sidesteps mineral buildup from tap water.',
            compatible: true,
        },
        fertilizer: {
            value: 'Palm-specific with micronutrients',
            detail: 'Look for a formula including magnesium, manganese, and iron — deficiencies show up as frond discoloration.',
            npk: '3-1-3',
        },
        fertilizerFrequency: {
            value: 'Monthly, spring through summer',
            detail: 'Pause feeding in winter when growth naturally slows.',
        },
        nativeHabitat: {
            value: 'Madagascar',
            detail: 'Humid coastal forests and understories with filtered light and steady moisture.',
        },
        humidity: {
            value: '50%+ ideal',
            detail: 'Dry indoor air is the top cause of brown, crispy frond tips.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Sensitive to cold drafts and sudden dips below 50°F — keep away from winter windowsills and AC vents.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New fronds unfurl fastest with warmth, humidity, and bright indirect light.',
        },
        dailyRhythm: {
            heading: 'A humidity-loving palm that resents mineral buildup.',
            body: 'Areca Palm wants bright, filtered light and consistently moist — never soggy — soil. The main ongoing task is managing water quality and humidity, since tap water salts and dry indoor air are behind most of its problems.',
            highlights: [
                'Filtered, distilled, or rainwater prevents the tip burn tap water often causes.',
                'A humidifier or pebble tray keeps fronds lush and reduces spider mite pressure.',
                'Rotate the pot occasionally so canes fill out evenly toward the light.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture and water with filtered or rested water if dry.',
            },
            {
                interval: 'weekly',
                task: 'Inspect frond undersides for spider mite webbing or stippling.',
            },
            {
                interval: 'monthly',
                task: 'Flush the pot with plenty of water to rinse mineral buildup.',
            },
            {
                interval: 'monthly',
                task: 'Wipe down fronds to keep dust off and stomata clear.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Enough light to keep canes upright and fronds a rich green without scorching them.',
            },
            {
                label: 'Moisture',
                stat: 'Evenly moist soil',
                detail: 'Consistency matters more than volume — avoid the extremes of soggy or bone dry.',
            },
            {
                label: 'Humidity',
                stat: '50%+ ideal',
                detail: 'The single biggest factor in preventing crispy, browning frond tips.',
            },
            {
                label: 'Water Quality',
                stat: 'Filtered or rested',
                detail: 'Areca Palms are notably sensitive to the fluoride, chlorine, and salts in tap water.',
            },
        ],
        wateringRhythm: {
            heading: 'Keep it evenly moist with clean, filtered water.',
            body: 'Water thoroughly once the top inch of soil has dried, letting excess drain away completely rather than sitting in a saucer. Use distilled water, rainwater, or tap water rested 24 hours to reduce the mineral salts that cause tip burn over time.',
            tips: [
                'A consistent watering rhythm beats a heavier, less frequent one — palms dislike swinging between extremes.',
                'Flush the pot monthly with a generous volume of water to leach out accumulated salts.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 5-7 days',
                tip: 'Active growth means higher water and humidity demand — check more often in heat.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Ease back slightly as growth slows with shorter days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Reduce watering and keep away from cold drafts and heating vents.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check the undersides of fronds for early signs of spider mites.',
                    'Rotate the pot slightly for even light exposure across all canes.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Flush the pot thoroughly to clear salt and mineral buildup.',
                    'Wipe fronds with a damp cloth to remove dust and support photosynthesis.',
                    'Trim any fully browned fronds at the base of the cane.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Distilled water or rain barrel',
                note: 'Avoids the fluoride and salt buildup that causes classic Areca tip burn.',
            },
            {
                item: 'Humidifier with hygrometer',
                note: 'Keeps the microclimate above 50%, especially during dry winter heating season.',
            },
            {
                item: 'Moisture meter',
                note: 'Helps hit the evenly-moist target without guessing.',
            },
            {
                item: 'Neem oil or insecticidal soap',
                note: 'First line of defense against the spider mites this palm is prone to in dry air.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Brown, Crispy Leaf Tips',
                description:
                    'The single most common Areca Palm complaint — usually low humidity or mineral buildup from tap water.',
                actions: [
                    'Switch to filtered, distilled, or rested tap water.',
                    'Raise ambient humidity with a humidifier or pebble tray.',
                    'Flush the pot to clear existing salt buildup from the soil.',
                ],
            },
            {
                title: 'Yellowing Fronds',
                description:
                    'Overwatering or magnesium/manganese deficiency are the two most common causes.',
                actions: [
                    'Check that the pot drains fully and the base is never sitting in water.',
                    'Switch to a palm-specific fertilizer containing micronutrients if drainage is already fine.',
                ],
            },
            {
                title: 'Drooping or Folding Fronds',
                description:
                    'Sudden droop points to underwatering, root stress, or a cold draft rather than a pest problem.',
                actions: [
                    'Check soil moisture and water thoroughly if dry.',
                    'Relocate away from AC vents, drafty windows, or exterior doors.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                signs: 'Fine stippling on fronds and delicate webbing between leaflets, worse in dry indoor air.',
                treatment:
                    'Raise humidity, rinse fronds regularly, and treat with insecticidal soap or neem oil weekly until clear.',
            },
            {
                name: 'Scale',
                signs: 'Small brown, dome-shaped bumps along stems and frond midribs.',
                treatment:
                    'Scrape off light infestations and follow with horticultural oil applications every 1-2 weeks.',
            },
            {
                name: 'Mealybugs',
                signs: 'Cottony white clusters at frond bases and along canes.',
                treatment:
                    'Swab with isopropyl alcohol, then treat with neem oil until no new clusters appear.',
            },
        ],
        stabilityChecklist: [
            'Use filtered, distilled, or rested water to prevent the classic brown-tip complaint.',
            'Keep humidity above 50% with a humidifier or grouped plants, especially in winter.',
            'Flush the pot monthly to clear mineral buildup before it shows up on the fronds.',
            'Check frond undersides regularly — dry indoor air makes spider mites the top pest risk.',
        ],
    },
};
