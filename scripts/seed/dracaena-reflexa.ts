import type { Plant } from '../../lib/db/models/Plant';

export const dracaenaReflexa: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'dracaena',
    species: 'reflexa',
    commonNames: ['Song of India', 'Pleomele', 'Malaysian Dracaena'],
    description:
        'Densely whorled leaves edged in creamy yellow spiral tightly around slender canes, giving Dracaena reflexa — commonly sold as Song of India — a bushier, more compact look than most dracaenas along with a bit more sensitivity to overwatering.',
    images: [],
    tags: ['variegated', 'beginner-friendly', 'toxic', 'statement-plant'],
    highlights: [
        'Native to Madagascar and the Mascarene Islands, where it grows as a branching shrub or small tree.',
        'The all-green form is sometimes sold separately as "Song of Jamaica," though both are the same species.',
        'Denser and bushier than most dracaenas since it branches more readily without pruning.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Frost-tender; grown as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Needs more light than other dracaenas to keep its cream variegation from fading to green.',
        },
        watering: {
            score: 2,
            value: 'Let the top 1-2 in dry',
            caption:
                'More sensitive to soggy soil than other dracaenas — err on the drier side.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'A touch fussier than its relatives — prone to leaf spot if kept too wet or too humid without airflow.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Saponins can cause vomiting or drooling in cats and dogs if chewed.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '3-6 ft indoors',
            detail: 'Naturally bushier and more branched than other dracaenas, forming a fuller shrub shape without much pruning.',
            minFt: 3,
            maxFt: 6,
        },
        soil: {
            value: 'Well-draining, standard mix',
            detail: 'A regular potting mix cut with perlite prevents the moisture-sensitive roots from sitting wet.',
        },
        semiHydro: {
            value: 'Yes, with care',
            detail: 'Adapts to LECA once established, but transition gradually and watch closely for the first signs of rot.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, diluted',
            detail: 'A half-strength balanced feed supports steady, bushy growth without pushing weak new leaves.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer; skip entirely in fall and winter.',
        },
        nativeHabitat: {
            value: 'Madagascar & Mascarene Islands',
            detail: 'Understory shrub layers of tropical forests, with filtered light and steady humidity.',
        },
        humidity: {
            value: '40%+ preferred',
            detail: 'Appreciates a bit more humidity than other dracaenas, but needs airflow alongside it to avoid leaf spot.',
            minPct: 40,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges; keep away from cold drafts and sudden chills.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Puts on the most new growth and branching during the warm months.',
        },
        dailyRhythm: {
            heading: 'A bushier dracaena that wants a bit more light and a bit less water.',
            body: 'Song of India rewards a slightly different balance than its relatives: brighter light to hold its variegation, and drier soil to avoid the leaf spot it is more prone to. Good airflow paired with humidity keeps its dense foliage healthy.',
            highlights: [
                'Fading variegation to solid green usually means too little light.',
                'Water only once the topsoil has dried — this species is quicker to develop leaf spot than other dracaenas.',
                'Good air circulation matters as much as humidity for keeping foliage disease-free.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top 1-2 inches of soil before watering.',
            },
            {
                interval: 'weekly',
                task: 'Scan dense foliage for early signs of leaf spot or pests.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly once the topsoil is dry, then let it drain fully.',
            },
            {
                interval: 'monthly',
                task: 'Wipe leaves clean and prune any spotted or yellowed foliage.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 1-2 weeks',
                detail: 'Water once the top couple of inches of soil dry out; this species is quicker to develop root and leaf issues if kept too wet.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Needs more light than other dracaenas to hold its cream-yellow variegation.',
            },
            {
                label: 'Airflow',
                stat: 'Good ventilation',
                detail: 'Dense, whorled foliage benefits from gentle air movement to prevent fungal leaf spot.',
            },
            {
                label: 'Nutrition',
                stat: 'Minimal',
                detail: 'Light monthly feeding in the growing season supports its bushier growth habit.',
            },
        ],
        wateringRhythm: {
            heading: 'Err toward dry, more than with other dracaenas.',
            body: 'Song of India is more sensitive to soggy soil than most of its relatives. Let the top couple of inches dry before watering again, and always make sure the pot drains fully rather than sitting in a saucer of water.',
            tips: [
                'Brown or black spots on leaves with yellow halos usually mean too much moisture combined with poor airflow.',
                'A slight dip in variegation intensity during winter is normal as light levels drop.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 7-10 days',
                tip: 'Water as soon as the top couple of inches dry during active growth.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 10-14 days',
                tip: 'Ease off as growth slows with shorter days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 3-4 weeks',
                tip: 'Water sparingly and avoid cold, damp soil.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture before considering a drink.',
                    'Inspect dense foliage clusters for early leaf spot or pests.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe down leaves to keep them dust-free.',
                    'Prune any spotted or yellowed leaves to improve airflow.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Repot every 2-3 years, or once roots crowd the pot.',
                    'Thin dense growth occasionally to keep air moving through the canopy.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Well-draining potting mix',
                note: 'Perlite added to standard mix helps offset this species\' sensitivity to soggy soil.',
            },
            {
                item: 'Small fan or good airflow',
                note: 'Reduces the risk of fungal leaf spot in its dense, whorled foliage.',
            },
            {
                item: 'Moisture meter or finger test',
                note: 'Confirms the topsoil is dry before every watering.',
            },
            {
                item: 'Clean pruning shears',
                note: 'For removing spotted leaves or thinning crowded growth.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Brown or Black Spots with Yellow Halos',
                tag: 'Fungal Leaf Spot',
                description:
                    'This species is more prone to fungal leaf spot than other dracaenas, especially when kept too wet with poor air circulation.',
                actions: [
                    'Remove affected leaves promptly to slow spread.',
                    'Improve airflow around the plant and let soil dry more between waterings.',
                    'Avoid wetting foliage when watering; direct water at the soil instead.',
                ],
            },
            {
                title: 'Fading Variegation',
                tag: 'Low Light',
                description:
                    'New leaves emerging mostly green with less of the characteristic cream edging point to insufficient light.',
                actions: [
                    'Move to a brighter spot with strong, indirect light.',
                    'Be patient — variegation on new growth improves gradually, not on existing leaves.',
                ],
            },
            {
                title: 'Brown, Crispy Leaf Tips',
                tag: 'Water Quality',
                description:
                    'Like other dracaenas, this species is sensitive to fluoride and chlorine buildup from tap water.',
                actions: [
                    'Switch to filtered, distilled, or rainwater.',
                    'Trim damaged tips with clean scissors, following the natural leaf shape.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White, cottony clusters tucked into the dense whorls of leaves.',
                treatment:
                    'Dab visible clusters with rubbing alcohol, then follow with horticultural oil every 7-10 days.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small, brown, dome-shaped bumps along stems that do not scrape off easily.',
                treatment:
                    'Scrape off light infestations by hand and treat with horticultural oil for remaining crawlers.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and faint webbing, most common in warm, dry conditions.',
                treatment:
                    'Rinse foliage and apply insecticidal soap weekly until stippling stops.',
            },
        ],
        stabilityChecklist: [
            'Let the top couple of inches of soil dry before every watering — this species is quicker to develop rot and leaf spot than other dracaenas.',
            'Keep in bright, indirect light to preserve its cream-yellow variegation.',
            'Pair humidity with good airflow to prevent fungal leaf spot.',
            'Use filtered or distilled water to avoid fluoride-related tip burn.',
        ],
    },
};
