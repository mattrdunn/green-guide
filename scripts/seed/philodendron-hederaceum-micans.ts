import type { Plant } from '../../lib/db/models/Plant';

export const philodendronHederaceumMicans: Omit<
    Plant,
    'createdAt' | 'updatedAt'
> = {
    genus: 'philodendron',
    species: 'hederaceum-micans',
    commonNames: ['Philodendron Micans', 'Velvet-Leaf Philodendron'],
    description:
        'Heart-shaped leaves with an iridescent, velvety sheen shift between deep bronze and green depending on the light — a fast, trailing philodendron variety prized for texture as much as color.',
    images: [],
    tags: ['aroid', 'vining', 'low-light', 'mildly-toxic', 'beginner-friendly'],
    highlights: [
        'A velvety-leaved form of Philodendron hederaceum, the same species behind the common Heartleaf Philodendron.',
        'Native to the tropical forests of the Caribbean and Central America, where it climbs as an epiphyte.',
        'The iridescent sheen comes from a layer of specialized epidermal cells that scatter light across the leaf surface.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption:
                'Strictly indoors below 60°F; grown as a houseplant nearly everywhere.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Low to bright indirect',
            caption:
                'Tolerates low light well; brighter indirect light intensifies the velvety, iridescent leaf sheen.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Water when the top inch of soil dries; dislikes both prolonged drought and soggy roots.',
        },
        difficulty: {
            score: 1,
            value: 'Very easy',
            caption:
                'Fast, forgiving, and adaptable — one of the easier trailing aroids to keep thriving.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Calcium oxalate crystals in the sap cause mouth and skin irritation if chewed or handled carelessly.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: 'Trails 4-8 ft+',
            detail: 'A vigorous trailing or climbing vine with no fixed final length — mostly governed by pruning and support.',
            minFt: 4,
            maxFt: 8,
        },
        soil: {
            value: 'Standard, well-draining potting mix',
            detail: 'A regular potting mix with some perlite added supports healthy roots without staying too wet.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Adapts well to LECA or pon, and cuttings root readily in water before transitioning.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, moderate',
            detail: 'A balanced liquid feed supports steady growth and helps maintain vivid leaf coloring.',
            npk: '20-20-20',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer; reduce or skip during slower winter growth.',
        },
        nativeHabitat: {
            value: 'Caribbean and Central American rainforests',
            detail: 'Grows as a climbing epiphyte in warm, humid forests across the Caribbean and Central America.',
        },
        humidity: {
            value: '40%+ preferred',
            detail: 'Tolerates average household humidity but produces a glossier, more vivid sheen above 40%.',
            minPct: 40,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Comfortable across typical indoor temperatures; growth slows noticeably below 60°F.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Grows fastest in warm months, often producing a new leaf every couple of weeks when well cared for.',
        },
        dailyRhythm: {
            heading: 'A fast, low-fuss trailer that just needs consistency.',
            body: 'Philodendron Micans tolerates a wide range of light and watering conditions, making the daily care load light. Its main preference is stability — steady moisture and consistent indirect light produce the fullest growth and richest velvet coloring over time.',
            highlights: [
                'Leaves shift between bronze and green depending on light exposure and leaf age.',
                'Trailing or climbing on a moss pole both work well; climbing tends to produce slightly larger leaves.',
                'Leggy growth with long gaps between leaves usually means it’s time for more light or a trim.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture; water once the top inch is dry.',
            },
            {
                interval: 'weekly',
                task: 'Inspect leaves and stems for pests.',
            },
            {
                interval: 'monthly',
                task: 'Feed at diluted strength during active growth.',
            },
            {
                interval: 'as-needed',
                task: 'Trim leggy stems and guide new growth onto support if climbing.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Low to bright indirect',
                detail: 'Flexible with light, though brighter indirect exposure intensifies the signature velvet sheen.',
            },
            {
                label: 'Moisture',
                stat: 'Evenly moist',
                detail: 'Consistent watering supports the fastest, fullest growth without risking root rot.',
            },
            {
                label: 'Support',
                stat: 'Optional moss pole',
                detail: 'Climbing on a pole encourages slightly larger leaves compared to trailing unsupported.',
            },
            {
                label: 'Propagation',
                stat: 'Roots easily in water',
                detail: 'Stem cuttings with a node root reliably, making this one of the simplest philodendrons to multiply.',
            },
        ],
        wateringRhythm: {
            heading: 'Consistent moisture without waterlogging.',
            body: 'Water when the top inch of soil dries out, saturating thoroughly and letting excess drain away. Philodendron Micans tolerates occasional missed waterings but grows fullest and fastest with a reliable, consistent schedule.',
            tips: [
                'Drooping paired with dry soil means water now; drooping paired with wet soil means check for root rot.',
                'Yellowing lower leaves usually signal overwatering rather than a nutrient issue.',
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
                cadence: 'Every 7-9 days',
                tip: 'Growth slows as light drops — ease back gradually.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Minimal growth means minimal water demand; check soil before watering.',
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
                    'Trim leggy stems to maintain a fuller, bushier shape.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Repot in spring once roots fill the pot.',
                    'Take stem cuttings to propagate or refresh an aging plant.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Clean, sharp snips',
                note: 'Keeps pruning and propagation cuts clean, encouraging denser regrowth.',
            },
            {
                item: 'Small moss pole or trellis (optional)',
                note: 'Encourages a climbing habit and slightly larger leaves compared to trailing alone.',
            },
            {
                item: 'Standard potting mix with perlite',
                note: 'Balances moisture retention with the drainage this aroid needs to avoid root rot.',
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
                title: 'Faded or Washed-Out Leaves',
                description:
                    'Leaves losing their velvety sheen or turning pale often point to too much direct sun bleaching the foliage.',
                actions: [
                    'Move to a spot with bright, indirect light rather than direct sun.',
                    'Trim any severely bleached leaves; new growth should come in with normal color.',
                ],
            },
            {
                title: 'Yellowing Lower Leaves',
                description:
                    'Older leaves turning yellow and dropping, especially with consistently damp soil, usually points to overwatering.',
                actions: [
                    'Let the soil dry out further between waterings.',
                    'Check the pot drains well and isn’t sitting in standing water.',
                    'Remove yellowed leaves; new growth should return to green once watering is adjusted.',
                ],
            },
            {
                title: 'Long, Leggy Stems',
                description:
                    'Wide gaps between leaves and thin stems usually signal insufficient light.',
                actions: [
                    'Move to a brighter indirect-light spot.',
                    'Prune leggy stems back to a node to encourage bushier, fuller growth.',
                    'Propagate healthy cuttings to fill in a sparse pot.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine webbing and pale stippling on leaf undersides, especially in dry air.',
                treatment:
                    'Shower the foliage, raise humidity, and treat weekly with insecticidal soap until new growth is clean.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white clusters at leaf joints and stem nodes.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol and follow with neem oil sprays until clear.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small, immobile brown bumps along stems and leaf undersides.',
                treatment:
                    'Scrape off visible scale and follow with insecticidal soap or neem oil to catch newly hatched crawlers.',
            },
        ],
        stabilityChecklist: [
            'Keep in bright, indirect light for the richest velvet sheen.',
            'Water once the top inch of soil dries; avoid letting roots sit wet.',
            'Prune leggy growth to keep the trailing habit full and dense.',
            'Keep out of reach of pets that chew on foliage — the sap is mildly toxic.',
        ],
    },
};
