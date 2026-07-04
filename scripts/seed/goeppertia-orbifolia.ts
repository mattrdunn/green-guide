import type { Plant } from '../../lib/db/models/Plant';

export const goeppertiaOrbifolia: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'goeppertia',
    species: 'orbifolia',
    commonNames: [
        'Calathea orbifolia',
        'Round-Leaf Calathea',
        'Orbifolia Prayer Plant',
    ],
    description:
        'Huge, rounded leaves striped in silver and sea-green make Goeppertia orbifolia — still widely sold as Calathea orbifolia — one of the most striking foliage plants you can grow, provided you can meet its rainforest-floor demands for humidity and pure water.',
    images: [],
    tags: ['prayer-plant', 'high-humidity', 'pet-safe', 'non-toxic'],
    highlights: [
        'Native to the rainforest understory of Bolivia.',
        'Reclassified from Calathea to Goeppertia in 2012 — most shops still use the old name.',
        'Completely non-toxic to cats and dogs.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption:
                'Strictly indoors below 60°F; cold damage is fast and permanent.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            value: 'Medium, filtered',
            caption: 'Bright shade — direct sun bleaches the silver banding.',
        },
        watering: {
            value: 'Evenly moist',
            caption:
                'Never soggy, never dry; distilled or rainwater strongly preferred.',
        },
        difficulty: {
            value: 'Advanced',
            caption:
                'Beautiful but demanding — humidity and water quality are non-negotiable.',
            level: 'advanced',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe for cats, dogs, and curious kids.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '2-3 ft indoors',
            detail: 'Leaves can span a foot across on mature plants; the clump slowly widens from underground rhizomes.',
            minFt: 2,
            maxFt: 3,
        },
        soil: {
            value: 'Moisture-retentive & airy',
            detail: 'Blend coco coir or peat with perlite and a little orchid bark — it should hold moisture without ever going swampy.',
        },
        semiHydro: {
            value: 'Yes, with patience',
            detail: 'LECA or pon can actually stabilize the moisture swings this plant hates, but the transition period is rough — expect some leaf loss.',
            compatible: true,
        },
        fertilizer: {
            value: 'Gentle & dilute',
            detail: 'A balanced feed at quarter strength — this plant is highly sensitive to fertilizer salts.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed lightly from spring through summer only, and flush the pot regularly to prevent salt buildup.',
        },
        nativeHabitat: {
            value: 'Bolivia',
            detail: 'Shaded, humid rainforest understory — recreate with filtered light, warmth, and constant ambient moisture.',
        },
        humidity: {
            value: '60%+ required',
            detail: 'Below 50%, edges crisp within days; a humidifier is effectively part of the care routine.',
            minPct: 60,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Keep above 60°F at all times and away from vents, radiators, and drafty windows.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New leaves emerge rolled like scrolls and unfurl over a week or two.',
        },
        dailyRhythm: {
            heading: 'A prayer plant that lives by the clock.',
            body: 'Like all prayer plants, orbifolia moves its leaves through the day — raising them toward evening and relaxing them by morning. Steady warmth, high humidity, and mineral-free water keep the rhythm going and the silver stripes flawless.',
            highlights: [
                'Gentle nightly leaf movement is a sign of a healthy, hydrated plant.',
                'Water with distilled, rain, or filtered water — tap minerals scorch the leaf edges.',
                'Group with other plants or run a humidifier to hold 60%+ humidity.',
            ],
        },
        weeklyChecklist: [
            'Check the topsoil — water once the top inch begins to dry.',
            'Verify humidity is holding above 60% on a hygrometer.',
            'Inspect leaf undersides for the first signs of spider mites.',
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Evenly moist',
                detail: 'Small, frequent waterings with pure water beat the soak-and-dry cycle used for most houseplants.',
            },
            {
                label: 'Humidity',
                stat: '60%+ required',
                detail: 'A humidifier with a hygrometer is the single best investment for this plant.',
            },
            {
                label: 'Water Quality',
                stat: 'Distilled or rain',
                detail: 'Fluoride and dissolved minerals in tap water are the top cause of crispy edges.',
            },
            {
                label: 'Stability',
                stat: 'No surprises',
                detail: 'Consistent warmth, light, and moisture matter more than perfection in any single one.',
            },
        ],
        wateringRhythm: {
            heading: 'Consistently moist, never wet, always pure.',
            body: 'Water when the top inch of mix begins to dry — typically every 5-7 days in season. Use room-temperature distilled, rain, or filtered water, and pour slowly until a little escapes the drainage hole. The goal is a wrung-out-sponge moisture level at all times.',
            tips: [
                'Cold tap water shocks the roots and mottles the leaves — always room temperature.',
                'If you must use tap water, let it sit out 24 hours; it helps with chlorine, though not with fluoride or hardness.',
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
                tip: 'Heated air drops humidity fast — watch the hygrometer as closely as the soil.',
            },
        ],
        routines: [
            {
                interval: 'daily',
                steps: [
                    'Glance at the hygrometer — humidity dips are the earliest warning sign.',
                    'Enjoy the leaf movement; stalled leaves are an early stress signal.',
                ],
            },
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water with pure water as needed.',
                    'Inspect leaf undersides with a flashlight for spider mites.',
                    'Rotate the pot a quarter turn for an even crown.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe the broad leaves with a damp cloth — dust dulls the silver banding.',
                    'Flush the pot thoroughly with pure water to clear mineral and fertilizer salts.',
                    'Trim crisped edges with clean scissors, following the natural leaf curve.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Humidifier with built-in hygrometer',
                note: 'Non-negotiable in most homes — keeps the microclimate above 60%.',
            },
            {
                item: 'Distilled or rainwater supply',
                note: 'The single biggest lever against browning leaf edges.',
            },
            {
                item: 'Moisture meter',
                note: 'Helps hold the narrow band between moist and soggy.',
            },
            {
                item: 'Sharp scissors',
                note: 'For cosmetic trims of crisped margins along the leaf contour.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Crispy Brown Edges',
                description:
                    'The classic orbifolia complaint — almost always low humidity, tap water minerals, or both.',
                actions: [
                    'Raise humidity above 60% with a humidifier; misting alone is not enough.',
                    'Switch to distilled, rain, or filtered water immediately.',
                    'Flush the pot to clear accumulated salts, and trim damage cosmetically.',
                ],
            },
            {
                title: 'Curling Leaves',
                description:
                    'Leaves rolling inward lengthwise are conserving moisture — a drought or humidity emergency in progress.',
                actions: [
                    'Check the soil first: if dry, water thoroughly with room-temperature pure water.',
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
                signs: 'Fine webbing and pale speckling — orbifolia is a mite magnet whenever humidity drops.',
                treatment:
                    'Shower both leaf surfaces, raise humidity, and spray weekly with insecticidal soap until no new stippling appears.',
            },
            {
                name: 'Fungus Gnats',
                signs: 'Small flies over the constantly moist soil this plant requires.',
                treatment:
                    'Water in BTI (mosquito bits) and topdress with sand — you cannot dry this plant out to break the cycle.',
            },
            {
                name: 'Thrips',
                signs: 'Silvery smears and black specks on the broad leaf faces.',
                treatment:
                    'Isolate, remove heavily damaged leaves, and treat with systemic granules plus weekly contact sprays.',
            },
        ],
        stabilityChecklist: [
            'Run a humidifier and verify 60%+ humidity daily — this is the plant’s lifeline.',
            'Use only distilled, rain, or filtered water, every single time.',
            'Keep it away from vents, radiators, and cold windows year-round.',
            'Check for spider mites weekly; they exploit any humidity lapse within days.',
        ],
    },
};
