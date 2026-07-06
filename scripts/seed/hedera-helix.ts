import type { Plant } from '../../lib/db/models/Plant';

export const hederaHelix: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'hedera',
    species: 'helix',
    commonNames: ['English Ivy', 'Common Ivy'],
    description:
        'Glossy, lobed leaves on fast-trailing or climbing stems make English Ivy a classic low-light houseplant and groundcover — tough and adaptable, though its vigor means it needs a firm hand to stay in bounds.',
    images: [],
    tags: [
        'vining',
        'low-light',
        'beginner-friendly',
        'mildly-toxic',
        'air-purifying',
    ],
    highlights: [
        'Native to woodland floors across Europe and western Asia, where it climbs trees and stone by clinging aerial roots.',
        'One of the plants tested in NASA’s Clean Air Study for filtering common indoor air pollutants.',
        'Considered invasive in parts of North America when grown outdoors — best kept contained as a houseplant in those regions.',
    ],
    vitals: {
        hardinessZone: {
            value: '4-9 (outdoors); houseplant everywhere',
            caption:
                'Hardy enough to grow outdoors as a groundcover in many climates, but check local invasive-species guidance first.',
            zoneMin: 4,
            zoneMax: 9,
        },
        light: {
            score: 2,
            value: 'Low to bright indirect',
            caption:
                'Tolerates low light well; variegated forms hold their pattern best with brighter indirect light.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Water when the top inch of soil dries; avoid letting it sit fully dry for extended stretches.',
        },
        difficulty: {
            score: 1,
            value: 'Very easy',
            caption:
                'Forgiving and fast-growing, tolerating a wide range of light and watering habits.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Leaves and berries contain saponins that can cause vomiting and skin irritation if ingested or handled roughly.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: 'Trails 6-10 ft+',
            detail: 'A vigorous climber or trailer with no fixed final size — length is really a function of pruning, not the plant’s limit.',
            minFt: 6,
            maxFt: 10,
        },
        soil: {
            value: 'Standard, well-draining potting mix',
            detail: 'Any decent all-purpose potting mix works; the plant is far more particular about light than soil composition.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Adapts readily to LECA or pon, rooting quickly in water or semi-hydro setups.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, light',
            detail: 'A diluted balanced feed during the growing season is plenty for this fast, undemanding grower.',
            npk: '20-20-20',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer; skip entirely in the low-light, slow-growth winter months.',
        },
        nativeHabitat: {
            value: 'European and West Asian woodlands',
            detail: 'Grows wild on forest floors and tree trunks across a broad swath of Europe and into western Asia.',
        },
        humidity: {
            value: 'Average household',
            detail: 'Tolerates typical indoor humidity well; higher humidity helps deter spider mites, its main pest issue.',
            minPct: 30,
        },
        temperature: {
            value: '50° – 80°F',
            detail: 'Comfortable across normal household temperatures; tolerates cooler spots better than most houseplants.',
            minF: 50,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Grows most vigorously in warm months; growth slows but rarely stops entirely over winter.',
        },
        dailyRhythm: {
            heading:
                'A fast, forgiving trailer that mostly needs restraint, not attention.',
            body: 'English Ivy tolerates a wide range of light and watering conditions, making it one of the easiest houseplants to keep alive. The real ongoing job is pruning — left unchecked, it will happily trail or climb well beyond its pot or shelf.',
            highlights: [
                'Regular trimming keeps growth dense and bushy instead of sparse and leggy.',
                'Dry indoor air invites spider mites — occasional misting or higher humidity helps.',
                'Cuttings root readily in water, making propagation nearly foolproof.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture; water once the top inch is dry.',
            },
            {
                interval: 'weekly',
                task: 'Inspect leaves for spider mites, especially in dry indoor air.',
            },
            {
                interval: 'monthly',
                task: 'Feed at diluted strength during active growth.',
            },
            {
                interval: 'as-needed',
                task: 'Trim trailing stems to control length and encourage denser growth.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Low to bright indirect',
                detail: 'One of the most light-flexible houseplants available, though brighter spots keep variegation crisp.',
            },
            {
                label: 'Pruning',
                stat: 'Regular trims',
                detail: 'Controls the plant’s vigorous trailing habit and encourages fuller, bushier growth.',
            },
            {
                label: 'Humidity',
                stat: '30%+ helps',
                detail: 'Higher humidity discourages spider mites, the plant’s most persistent pest problem.',
            },
            {
                label: 'Propagation',
                stat: 'Roots easily in water',
                detail: 'Stem cuttings with a node root reliably, making it simple to bulk up or share plants.',
            },
        ],
        wateringRhythm: {
            heading: 'Consistent moisture without waterlogging.',
            body: 'Water when the top inch of soil dries out, saturating thoroughly and letting excess drain away. English Ivy tolerates occasional missed waterings better than most houseplants, but performs best without long dry stretches.',
            tips: [
                'Drooping, dull leaves usually mean underwatering; check soil before assuming a pest issue.',
                'Yellowing lower leaves paired with wet soil signals overwatering — let it dry out further next time.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 6-8 days',
                tip: 'Active growth uses water steadily — check the topsoil weekly.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 8-10 days',
                tip: 'Growth slows as light and temperatures drop — ease back slightly.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Minimal growth means minimal water demand; prioritize checking before watering.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water once the top inch is dry.',
                    'Inspect leaves and stems for spider mites or scale.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed at diluted strength during spring and summer growth.',
                    'Trim leggy or overly long stems to maintain a full shape.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Repot in spring once roots fill the current pot.',
                    'Take stem cuttings to propagate or refresh an aging plant.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Clean, sharp snips',
                note: 'Keeps pruning cuts clean, encouraging denser regrowth at each cut point.',
            },
            {
                item: 'Standard all-purpose potting mix',
                note: 'No special soil blend needed — drainage and feeding matter more than composition.',
            },
            {
                item: 'Spray bottle or humidifier',
                note: 'Occasional misting or ambient humidity helps ward off spider mites in dry rooms.',
            },
            {
                item: 'Small propagation jars',
                note: 'Lets cuttings root in water before potting up, with near-guaranteed success.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Leggy, Sparse Stems',
                description:
                    'Long bare stretches of stem with few leaves usually mean the plant hasn’t been pruned in a while, or light is too low.',
                actions: [
                    'Trim stems back by a third to encourage fuller, bushier regrowth.',
                    'Move to a brighter indirect-light spot if growth stays thin after pruning.',
                    'Propagate healthy cuttings to fill in gaps or start a fuller new pot.',
                ],
            },
            {
                title: 'Yellowing Lower Leaves',
                description:
                    'Older leaves turning yellow and dropping, especially with consistently damp soil, usually points to overwatering.',
                actions: [
                    'Let the soil dry out further between waterings.',
                    'Check the pot has adequate drainage and isn’t sitting in standing water.',
                    'Remove yellowed leaves; new growth should come in green once watering is adjusted.',
                ],
            },
            {
                title: 'Dry, Curling Leaf Edges',
                description:
                    'Crispy or curled leaf margins usually trace back to low humidity or underwatering in a dry room.',
                actions: [
                    'Increase watering frequency slightly if soil is drying out too fast.',
                    'Raise humidity with a humidifier or by grouping with other plants.',
                    'Move away from direct heating or cooling vents.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine webbing and pale stippling on leaves, especially in dry indoor air.',
                treatment:
                    'Shower the foliage, raise humidity, and treat with insecticidal soap weekly until new growth is clean.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small, immobile brown bumps along stems and leaf undersides.',
                treatment:
                    'Scrape off visible scale and follow with insecticidal soap or neem oil to catch newly hatched crawlers.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white clusters at leaf joints and stem nodes.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol and follow with neem oil sprays until clear.',
            },
        ],
        stabilityChecklist: [
            'Water once the top inch of soil dries; avoid letting it sit fully dry for long stretches.',
            'Prune regularly to prevent legginess and keep growth dense.',
            'Raise humidity where possible to discourage spider mites.',
            'Keep out of reach of pets that chew on foliage — leaves and berries are mildly toxic.',
        ],
    },
};
