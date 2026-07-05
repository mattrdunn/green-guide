import type { Plant } from '../../lib/db/models/Plant';

export const musaAcuminata: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'musa',
    species: 'acuminata',
    commonNames: ['Banana Plant', 'Dwarf Cavendish Banana', 'Dwarf Banana'],
    description:
        'Broad, glossy paddle leaves unfurl rapidly from a soft, water-filled pseudostem, giving Banana Plant an instant jungle look. Grown at houseplant or patio scale, fruit is a rare bonus rather than the main draw.',
    images: [],
    tags: ['tropical', 'statement-plant', 'non-toxic', 'fruiting', 'full-sun'],
    highlights: [
        'Native to the tropical rainforests of Southeast Asia, the wild ancestor of most edible bananas.',
        'What looks like a trunk is actually a pseudostem — tightly rolled leaf sheaths, not true wood.',
        'Non-toxic to cats and dogs, unusual among fast-growing statement plants of this scale.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption:
                'Dies back to the roots below zone 9; grown as a container or houseplant everywhere colder.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption:
                'Wants as much direct light as it can get — the top driver of leaf size and growth rate.',
        },
        watering: {
            score: 4,
            value: 'Consistently moist',
            caption:
                'A thirsty plant with a large leaf surface — soil should rarely be allowed to dry out fully.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Forgiving of most care mistakes, but demands a lot of light, water, and eventually space.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Safe around cats and dogs, though large leaves can still cause mild GI upset if chewed in quantity.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '6-10 ft indoors (up to 15+ ft outdoors)',
            detail: 'Fast-growing given enough light, warmth, and root room — ceiling height is usually the limiting factor indoors.',
            minFt: 4,
            maxFt: 15,
        },
        soil: {
            value: 'Rich, moisture-retentive, well-draining mix',
            detail: 'A heavy feeder that wants organic matter and consistent moisture without ever sitting in stagnant water.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Prefers a heavily fed, organic-rich soil medium over the leaner nutrient profile of semi-hydro setups.',
            compatible: false,
        },
        fertilizer: {
            value: 'High-potassium with balanced nitrogen',
            detail: 'A potassium-forward feed supports strong pseudostem and leaf growth; look for banana- or fruit-tree-specific blends.',
            npk: '8-3-9',
        },
        fertilizerFrequency: {
            value: 'Every 2-4 weeks in season',
            detail: 'A heavy feeder during active growth; scale back to none in winter as growth slows.',
        },
        nativeHabitat: {
            value: 'Southeast Asia',
            detail: 'Tropical rainforest understory and clearings with warmth, high humidity, and abundant rainfall year-round.',
        },
        humidity: {
            value: '60%+ ideal',
            detail: 'Dry indoor air quickly shows up as browning leaf edges on the large, thin leaves.',
            minPct: 60,
        },
        temperature: {
            value: '65° – 95°F',
            detail: 'Thrives in heat and stalls below 50°F; protect from any frost, which kills the pseudostem outright.',
            minF: 65,
            maxF: 95,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'Can grow nearly year-round in warm, bright conditions, unfurling a new leaf every 1-2 weeks at peak growth.',
        },
        dailyRhythm: {
            heading: 'A fast, hungry grower built for heat, light, and water.',
            body: 'Banana Plant wants full sun, steadily moist soil, and regular feeding to keep pace with its own growth rate. The daily job is keeping up with its water needs; the seasonal job is protecting it from cold and giving it room as leaves get larger.',
            highlights: [
                'New leaves emerge tightly rolled from the center and unfurl within a day or two.',
                'Torn or shredded leaf blades from wind or handling are cosmetic, not a health problem.',
                'A stalled growth rate is often simply a light or feeding issue rather than disease.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture and water thoroughly if the top inch is dry.',
            },
            {
                interval: 'weekly',
                task: 'Inspect leaf undersides for spider mites or aphids.',
            },
            {
                interval: 'monthly',
                task: 'Feed with a potassium-rich fertilizer during active growth.',
            },
            {
                interval: 'seasonal',
                task: 'Repot or divide offsets (pups) once the root ball fills its container.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Full sun',
                detail: 'The single biggest factor in growth rate, leaf size, and overall vigor.',
            },
            {
                label: 'Water',
                stat: 'Consistently moist',
                detail: 'Large leaves transpire quickly — this plant rarely wants to dry out completely.',
            },
            {
                label: 'Feeding',
                stat: 'Every 2-4 weeks',
                detail: 'A heavy feeder that needs regular potassium and nitrogen to sustain its growth rate.',
            },
            {
                label: 'Warmth',
                stat: '65°F+',
                detail: 'Growth stalls in cool conditions and the pseudostem is killed outright by frost.',
            },
        ],
        wateringRhythm: {
            heading:
                'Keep it steadily moist — this is not a drought-tolerant plant.',
            body: 'Water thoroughly whenever the top inch of soil starts to dry, letting excess drain away fully rather than sitting in a saucer. The large leaf surface area means this species uses water quickly, especially in bright light and warm temperatures.',
            tips: [
                'Wilting or drooping leaves with dry soil mean water immediately — recovery is usually fast once watered.',
                'Reduce frequency in winter when lower light and cooler temperatures slow water use.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 3-5 days',
                tip: 'Peak growth and heat mean high water demand — check soil moisture often.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 6-8 days',
                tip: 'Ease back as growth and light levels drop.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Keep just barely moist and away from cold drafts while growth is mostly dormant.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water deeply if the top inch is dry.',
                    'Inspect leaf undersides for early signs of spider mites or aphids.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed with a potassium-rich fertilizer during active growth.',
                    'Wipe down leaves to clear dust and support light uptake.',
                    'Trim any fully browned leaves at the base of the pseudostem.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Repot into a larger container once roots fill the current pot.',
                    'Divide and pot up offsets (pups) to propagate or share.',
                    'Move container plants indoors or shelter in place before the first frost.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Large container with drainage',
                note: 'Fast root growth means this plant outgrows pots quickly at full vigor.',
            },
            {
                item: 'Potassium-rich fertilizer',
                note: 'Matches the heavy feeding this species needs to sustain rapid leaf production.',
            },
            {
                item: 'Humidifier or pebble tray',
                note: 'Helps prevent the crispy leaf edges that show up first in dry indoor air.',
            },
            {
                item: 'Frost cloth or grow light',
                note: 'Protects against cold snaps outdoors or supplements light indoors during winter.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Brown, Crispy Leaf Edges',
                description:
                    'The most common complaint — usually low humidity, underwatering, or fertilizer salt buildup.',
                actions: [
                    'Water more consistently and confirm the pot drains fully.',
                    'Raise humidity with a humidifier or pebble tray, especially in winter.',
                    'Flush the pot occasionally to clear excess fertilizer salts.',
                ],
            },
            {
                title: 'Slow or Stalled Growth',
                description:
                    'Usually insufficient light or feeding rather than disease — this species is a fast grower when conditions are right.',
                actions: [
                    'Move to the brightest available spot, ideally with several hours of direct sun.',
                    'Resume or increase feeding during the active growing season.',
                ],
            },
            {
                title: 'Cold Damage or Frost Blackening',
                description:
                    'Leaves and pseudostem tissue blacken and collapse quickly after exposure to frost or prolonged cold below 50°F.',
                actions: [
                    'Move container plants indoors or to a sheltered spot before cold weather arrives.',
                    'Cut back blackened growth in spring — the roots often survive even when top growth is lost.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                signs: 'Fine stippling and faint webbing on leaf undersides, worse in dry indoor air.',
                treatment:
                    'Raise humidity, rinse leaves regularly, and treat with insecticidal soap or neem oil weekly until clear.',
            },
            {
                name: 'Aphids',
                signs: 'Small clusters of soft-bodied insects on new growth, often with sticky honeydew residue.',
                treatment:
                    'Rinse off with water and follow with insecticidal soap applications until the colony is gone.',
            },
            {
                name: 'Mealybugs',
                signs: 'Cottony white clusters where leaves meet the pseudostem.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol, then treat with neem oil until no new clusters appear.',
            },
        ],
        stabilityChecklist: [
            'Give it the brightest, sunniest spot available — light is the top driver of growth.',
            'Keep soil consistently moist; this species is not drought-tolerant.',
            'Feed heavily during the growing season to match its fast growth rate.',
            'Protect from frost and cold drafts, which can kill the pseudostem outright.',
        ],
    },
};
