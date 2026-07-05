import type { Plant } from '../../lib/db/models/Plant';

export const marantaLeuconeura: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'maranta',
    species: 'leuconeura',
    commonNames: [
        'Green Prayer Plant',
        "Rabbit's Foot Prayer Plant",
        'Maranta leuconeura var. kerchoveana',
    ],
    description:
        'Oval green leaves stamped with rows of dark blotches fold upward each evening like hands in prayer — Maranta leuconeura is a compact, easygoing member of the prayer plant family that puts on a daily show without the fussiest demands of its Calathea cousins.',
    images: [],
    tags: ['prayer-plant', 'high-humidity', 'pet-safe', 'non-toxic'],
    highlights: [
        'Native to the rainforest floor of Brazil.',
        'Named for its nightly "prayer" movement — leaves rise and fold together after dark, then relax open by morning.',
        'Spreads by shallow rhizomes, making it easy to divide into new pots.',
    ],
    vitals: {
        hardinessZone: {
            value: '11-12',
            caption:
                'Strictly indoors below 60°F; grown as a houseplant nearly everywhere.',
            zoneMin: 11,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Medium, filtered',
            caption:
                'Bright shade — direct sun fades and scorches the leaf pattern.',
        },
        watering: {
            score: 4,
            value: 'Evenly moist',
            caption:
                'Never soggy, never dry; distilled or filtered water reduces leaf-edge browning.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'More forgiving than most prayer plants, but still wants consistent humidity and moisture.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe for cats, dogs, and curious kids.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '1 ft, spreading',
            detail: 'Stays low and mounding, spreading wider over time via shallow rhizomes rather than growing tall.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Moisture-retentive & airy',
            detail: 'Blend coco coir or peat with perlite and a little orchid bark — it should hold moisture without ever going swampy.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Adapts well to LECA or pon, which help maintain the steady moisture this plant prefers.',
            compatible: true,
        },
        fertilizer: {
            value: 'Gentle & dilute',
            detail: 'A balanced feed at half strength — this plant is sensitive to fertilizer salt buildup.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed lightly from spring through summer only, and flush the pot occasionally to prevent salt buildup.',
        },
        nativeHabitat: {
            value: 'Brazil',
            detail: 'Shaded, humid rainforest floor — recreate with filtered light, warmth, and steady ambient moisture.',
        },
        humidity: {
            value: '50%+ ideal',
            detail: 'More tolerant of average room humidity than other prayer plants, though edges crisp below 40%.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Keep above 60°F at all times and away from vents, radiators, and drafty windows.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New leaves unfurl from tight rolls and the rhizome spreads to fill the pot.',
        },
        dailyRhythm: {
            heading: 'A prayer plant that lives by the clock.',
            body: 'Like all marantas, leuconeura moves its leaves through the day — folding upward toward evening and relaxing flat again by morning. Steady warmth, decent humidity, and even moisture keep the rhythm going and the leaf pattern crisp.',
            highlights: [
                'Gentle nightly leaf movement is a sign of a healthy, hydrated plant.',
                'Water with distilled, rain, or filtered water where possible to limit leaf-edge browning.',
                'Group with other plants or run a humidifier if the air runs drier than 40%.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the topsoil — water once the top inch begins to dry.',
            },
            {
                interval: 'weekly',
                task: 'Inspect leaf undersides for the first signs of spider mites.',
            },
            {
                interval: 'as-needed',
                task: 'Water with room-temperature, ideally filtered water whenever the top inch starts to dry.',
            },
            {
                interval: 'monthly',
                task: 'Wipe leaves clean and flush the pot to clear mineral and fertilizer salts.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Evenly moist',
                detail: 'Small, frequent waterings beat the soak-and-dry cycle used for most houseplants.',
            },
            {
                label: 'Humidity',
                stat: '50%+ ideal',
                detail: 'Tolerates average rooms better than Calathea, but a humidifier keeps edges from crisping.',
            },
            {
                label: 'Water Quality',
                stat: 'Filtered preferred',
                detail: 'Fluoride and dissolved minerals in tap water are a common cause of crispy edges.',
            },
            {
                label: 'Light',
                stat: 'Medium, filtered',
                detail: 'Bright shade keeps the leaf pattern bold without the scorch risk of direct sun.',
            },
        ],
        wateringRhythm: {
            heading: 'Consistently moist, never wet.',
            body: 'Water when the top inch of mix begins to dry — typically every 5-7 days in season. Use room-temperature water, ideally distilled, rain, or filtered, and pour slowly until a little escapes the drainage hole. The goal is a wrung-out-sponge moisture level at all times.',
            tips: [
                'Cold tap water shocks the roots and can mottle the leaves — always room temperature.',
                'If you must use tap water, let it sit out 24 hours to help with chlorine, though not fluoride or hardness.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 5-7 days',
                tip: 'Check the top inch twice a week; warm rooms dry the mix quickly.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Ease the frequency down with the light, but never let the mix fully dry.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-12 days',
                tip: 'Heated air drops humidity fast — watch for curling leaves as an early signal.',
            },
        ],
        routines: [
            {
                interval: 'daily',
                steps: [
                    'Enjoy the leaf movement; stalled leaves are an early stress signal.',
                ],
            },
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water as needed.',
                    'Inspect leaf undersides with a flashlight for spider mites.',
                    'Rotate the pot a quarter turn for even growth.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe the leaves with a damp cloth to keep the pattern visible and dust-free.',
                    'Flush the pot with plain water to clear mineral and fertilizer salts.',
                    'Divide congested rhizome clumps into fresh pots if desired.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Humidifier or pebble tray',
                note: 'Helps hold humidity above 40-50% in drier homes.',
            },
            {
                item: 'Distilled or filtered water supply',
                note: 'Reduces the leaf-edge browning tap water minerals can cause.',
            },
            {
                item: 'Moisture meter',
                note: 'Helps hold the narrow band between moist and soggy.',
            },
            {
                item: 'Sharp scissors',
                note: 'For cosmetic trims of crisped margins and dividing rhizomes.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Crispy Brown Edges',
                description:
                    'A common maranta complaint — usually low humidity, tap water minerals, or both.',
                actions: [
                    'Raise humidity toward 50%+ with a humidifier or pebble tray.',
                    'Switch to distilled, rain, or filtered water where possible.',
                    'Flush the pot to clear accumulated salts, and trim damage cosmetically.',
                ],
            },
            {
                title: 'Curling Leaves',
                description:
                    'Leaves rolling inward are conserving moisture — a drought or humidity issue in progress.',
                actions: [
                    'Check the soil first: if dry, water thoroughly with room-temperature water.',
                    'If soil is moist, the air is too dry or too hot — check humidity and nearby vents.',
                    'Leaves typically unroll within a day or two once conditions correct.',
                ],
            },
            {
                title: 'Yellowing Leaves',
                description:
                    'Widespread yellowing usually means the mix has crossed from moist into soggy and roots are suffering.',
                actions: [
                    'Lengthen the watering interval slightly and confirm the pot drains freely.',
                    'Check roots if yellowing continues — healthy roots are pale and firm.',
                    'Repot into fresh airy mix if you find brown, mushy roots.',
                ],
            },
            {
                title: 'Stopped Leaf Movement',
                description:
                    'When the day/night leaf motion stalls, the plant is diverting energy away from non-essentials — an early general stress flag.',
                actions: [
                    'Audit the basics: soil moisture, humidity, temperature, and light.',
                    'Rule out root problems and pests before assuming it is cosmetic.',
                    'Movement resumes once the underlying stressor is fixed.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                signs: 'Fine webbing and pale speckling, especially whenever humidity drops.',
                treatment:
                    'Shower both leaf surfaces, raise humidity, and spray weekly with insecticidal soap until no new stippling appears.',
            },
            {
                name: 'Fungus Gnats',
                signs: 'Small flies over the consistently moist soil this plant prefers.',
                treatment:
                    'Water in BTI (mosquito bits) and topdress with sand to break the larval cycle without letting the plant dry out.',
            },
            {
                name: 'Mealybugs',
                signs: 'Cottony white clusters tucked where leaves meet the stem.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol and follow with neem oil sprays until clear.',
            },
        ],
        stabilityChecklist: [
            'Keep humidity above 40-50% where possible — the biggest lever against crispy edges.',
            'Use distilled, rain, or filtered water when you can.',
            'Keep it away from vents, radiators, and cold windows year-round.',
            'Check for spider mites weekly; they exploit any humidity lapse within days.',
        ],
    },
};
