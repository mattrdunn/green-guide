import type { Plant } from '../../lib/db/models/Plant';

export const heptapleurumActinophyllum: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'heptapleurum',
    species: 'actinophyllum',
    commonNames: ['Australian Umbrella Tree', 'Octopus Tree', 'Amate'],
    description:
        'Glossy compound leaves radiate out from a central point like the ribs of an umbrella, stacking into a bold, fast-growing tree indoors or a towering canopy outdoors in warm climates.',
    images: [],
    tags: ['statement-plant', 'tree', 'mildly-toxic', 'low-maintenance'],
    highlights: [
        'Native to tropical rainforests of Australia, New Guinea, and Java, often starting life as an epiphyte before rooting into the ground.',
        'Formerly classified as Schefflera actinophylla — the genus was reclassified to Heptapleurum, though the old name is still common in nurseries.',
        'Mature outdoor specimens produce striking red, umbrella-spoke flower clusters that are rare on indoor plants.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption:
                'Grown outdoors only in frost-free climates; everywhere else it is a houseplant or patio specimen brought in for winter.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 4,
            value: 'Bright, indirect to some direct',
            caption:
                'Tolerates lower light but grows leggy — dense, compact growth needs bright light with a few hours of gentle direct sun.',
        },
        watering: {
            score: 2,
            value: 'Let dry between waterings',
            caption:
                'Prefers the top half of the soil to dry out before the next watering — more tolerant of neglect than overwatering.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption:
                'A fast, forgiving grower once given enough light; the main risk is overwatering rather than underwatering.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Contains calcium oxalate crystals — causes mouth and GI irritation if chewed by pets or children.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '6-10 ft indoors (up to 40+ ft outdoors)',
            detail: 'A fast grower that can reach the ceiling indoors within a few years; prune to maintain size or let it climb where headroom allows.',
            minFt: 6,
            maxFt: 40,
        },
        soil: {
            value: 'Well-draining, general-purpose potting mix',
            detail: 'A standard peat- or coco-based mix with perlite added for drainage works well — not fussy about soil composition.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Adapts readily to LECA or pon once roots acclimate, thanks to its tolerance for consistent moisture without waterlogging.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, foliage-forward',
            detail: 'A balanced houseplant fertilizer supports steady leaf production without pushing excessive legginess.',
            npk: '10-5-5',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly during spring and summer growth; pause entirely once light and temperatures drop in winter.',
        },
        nativeHabitat: {
            value: 'Australia, New Guinea, Java',
            detail: 'Tropical and subtropical rainforest, frequently starting as an epiphyte on host trees before sending roots to the ground.',
        },
        humidity: {
            value: '40%+ tolerated',
            detail: 'Adapts well to average home humidity, though higher humidity encourages larger, glossier leaves.',
            minPct: 40,
        },
        temperature: {
            value: '60° – 85°F',
            detail: 'Comfortable in typical indoor ranges; protect from cold drafts and temperatures below 50°F.',
            minF: 60,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'Puts out new compound leaves rapidly in warm, bright conditions; growth slows noticeably over winter.',
        },
        dailyRhythm: {
            heading: 'A fast, sturdy grower that rewards bright light.',
            body: 'Australian Umbrella Tree wants bright, indirect light and a soak-and-dry watering rhythm. The main daily consideration is light placement — dim corners quickly produce sparse, stretched growth instead of the full umbrella canopy this plant is known for.',
            highlights: [
                'New leaflets emerge folded and open into the signature umbrella-spoke arrangement within days.',
                'A leggy, sparse habit is almost always a light problem, not a disease.',
                'Pruning back hard is well tolerated and encourages fuller, bushier regrowth.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check topsoil moisture and water once the top half is dry.',
            },
            {
                interval: 'weekly',
                task: 'Wipe down large leaves to clear dust and support light uptake.',
            },
            {
                interval: 'monthly',
                task: 'Feed with a balanced fertilizer during active growth.',
            },
            {
                interval: 'seasonal',
                task: 'Prune to control height and encourage bushier branching.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright, indirect+',
                detail: 'Determines whether growth stays full and compact or stretches out thin and sparse.',
            },
            {
                label: 'Water',
                stat: 'Soak & dry',
                detail: 'Water thoroughly, then let the top half of the soil dry before watering again.',
            },
            {
                label: 'Feeding',
                stat: 'Monthly in season',
                detail: 'A balanced feed supports steady leaf production without encouraging weak, leggy growth.',
            },
            {
                label: 'Pruning',
                stat: 'As needed',
                detail: 'Tolerates hard pruning well, making it easy to manage size and shape indoors.',
            },
        ],
        wateringRhythm: {
            heading: 'Water deeply, then let it dry back before the next round.',
            body: 'Saturate the soil fully and let excess drain away, then wait until the top half of the pot has dried before watering again. This species is considerably more tolerant of a missed watering than of soil that stays wet, so err on the side of underwatering.',
            tips: [
                'Yellowing lower leaves are the clearest early sign of overwatering — check drainage first.',
                'Reduce frequency further in winter when growth slows and light levels drop.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 7-10 days',
                tip: 'Active growth uses more water — check the top half of the soil before each watering.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 10-14 days',
                tip: 'Ease back as light and growth taper off.',
            },
            {
                season: 'Winter',
                cadence: 'Every 14-21 days',
                tip: 'Let the soil dry out more fully between waterings while growth is mostly dormant.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water once the top half is dry.',
                    'Inspect leaf undersides and stems for early signs of scale or spider mites.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed with a balanced fertilizer during active growth.',
                    'Wipe down leaves to clear dust and support light uptake.',
                    'Rotate the pot for even growth on all sides.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Prune to control height and encourage bushier branching.',
                    'Repot into a larger container once roots fill the current pot.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Sharp bypass pruners',
                note: 'Keeps this fast grower shaped and prevents it from outgrowing its space.',
            },
            {
                item: 'Well-draining potting mix',
                note: 'Supports the soak-and-dry cycle this species prefers over constant moisture.',
            },
            {
                item: 'Grow light',
                note: 'Prevents legginess in lower-light rooms during shorter winter days.',
            },
            {
                item: 'Neem oil or insecticidal soap',
                note: 'On hand for the scale and spider mite issues this species is prone to.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Yellowing Lower Leaves',
                description:
                    'The most common complaint, usually caused by soil staying wet too long between waterings.',
                actions: [
                    'Let the soil dry out further before the next watering and confirm the pot drains fully.',
                    'Move to a pot with drainage holes if none currently exist.',
                    'Trim fully yellowed leaves once they stop improving.',
                ],
            },
            {
                title: 'Leggy, Sparse Growth',
                description:
                    'New leaflets come in small and widely spaced, and the plant leans toward the light source — almost always a light issue.',
                actions: [
                    'Move to the brightest available spot, ideally with a few hours of gentle direct sun.',
                    'Prune back leggy stems to encourage fuller, bushier regrowth.',
                ],
            },
            {
                title: 'Leaf Drop After Relocation',
                description:
                    'Dropping several leaves after a move or repotting is a normal stress response rather than a sign of lasting damage.',
                actions: [
                    'Keep care consistent and avoid further changes in light or watering while it settles.',
                    'Resume normal watering and feeding once new growth appears.',
                ],
            },
        ],
        pests: [
            {
                name: 'Scale',
                signs: 'Small, dome-shaped brown bumps along stems and leaf undersides, often with sticky honeydew residue.',
                treatment:
                    'Scrape off visible scale and follow with horticultural oil applications every 7-10 days until clear.',
            },
            {
                name: 'Spider Mites',
                signs: 'Fine stippling and faint webbing on leaf undersides, worse in dry indoor air.',
                treatment:
                    'Rinse foliage and treat weekly with insecticidal soap or neem oil until no new damage appears.',
            },
            {
                name: 'Mealybugs',
                signs: 'Cottony white clusters in leaf joints and along stems.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol, then treat with neem oil until no new clusters appear.',
            },
        ],
        stabilityChecklist: [
            'Give it bright, indirect light with some gentle direct sun to keep growth full and compact.',
            'Let the soil dry out through the top half before watering again — resist the urge to water on a fixed schedule.',
            'Feed monthly during the growing season and pause over winter.',
            'Prune back leggy growth to keep the canopy dense rather than sparse.',
        ],
    },
};
