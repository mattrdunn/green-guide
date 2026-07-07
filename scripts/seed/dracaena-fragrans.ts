import type { Plant } from '../../lib/db/models/Plant';

export const dracaenaFragrans: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'dracaena',
    species: 'fragrans',
    commonNames: ['Corn Plant', 'Cornstalk Dracaena', 'Fragrant Dracaena'],
    description:
        'Broad, arching leaves striped in yellow-green rise from thick, corn-stalk-like canes, making Dracaena fragrans one of the most recognizable low-maintenance floor plants for offices, lobbies, and dim living rooms alike.',
    images: [],
    tags: ['low-light', 'beginner-friendly', 'toxic', 'statement-plant'],
    highlights: [
        'Native to tropical Central and West Africa, where it grows as a woody shrub or small tree.',
        'Included in the NASA Clean Air Study for its ability to filter common indoor air pollutants.',
        'Mature plants occasionally produce intensely fragrant, night-blooming flower clusters indoors — the source of its species name.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Grown as a houseplant outside its tropical native range.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Low to bright, indirect',
            caption:
                'Tolerates dim corners well; variegated stripes stay boldest with more indirect light.',
        },
        watering: {
            score: 2,
            value: 'Let the top 1-2 in dry',
            caption:
                'Prefers slightly dry over soggy; consistent overwatering is the most common cause of decline.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption:
                'Forgiving and slow-growing, with water quality as its main sensitivity.',
            level: 'easy',
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
            value: '3-8 ft indoors',
            detail: 'Grows slowly from one or more thick canes; taller specimens are often multiple staggered-height canes in one pot.',
            minFt: 3,
            maxFt: 8,
        },
        soil: {
            value: 'Standard, well-draining mix',
            detail: 'A regular potting mix with a bit of added perlite keeps the canes from sitting in wet soil.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Transitions well to LECA once established; the steady moisture suits its rhizome-fed canes.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, diluted',
            detail: 'A general houseplant fertilizer at half strength is plenty for its slow growth rate.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer; skip entirely in fall and winter.',
        },
        nativeHabitat: {
            value: 'Tropical Africa',
            detail: 'Understory forests of Central and West Africa, where filtered light and steady warmth are constant.',
        },
        humidity: {
            value: 'Moderate (40%+)',
            detail: 'Average indoor humidity is fine; very dry air can brown leaf tips over time.',
            minPct: 40,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges; keep away from cold drafts and single-digit dips below 50°F.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New leaves emerge from the crown of each cane during the warm months; growth is minimal in winter.',
        },
        dailyRhythm: {
            heading: 'A slow, steady grower that punishes only inconsistency.',
            body: 'Corn plant asks for very little: modest light, water once the top of the soil dries, and a fertilizer break in winter. Most of the visible stress it shows traces back to tap water quality rather than light or watering habits.',
            highlights: [
                'Brown, crispy leaf tips are almost always fluoride or chlorine sensitivity, not underwatering.',
                'Lower leaves yellow and drop naturally with age as the cane grows taller.',
                'Wipe broad leaves occasionally to keep them dust-free and photosynthesizing well.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top 1-2 inches of soil before watering.',
            },
            {
                interval: 'weekly',
                task: 'Glance over leaves for dust buildup or early pest activity.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly once the topsoil is dry, then let it drain fully.',
            },
            {
                interval: 'monthly',
                task: 'Wipe down broad leaves with a damp cloth.',
            },
            {
                interval: 'monthly',
                task: 'Remove any fully yellowed lower leaves at the cane.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 1-2 weeks',
                detail: 'Water once the top couple of inches of soil dry out, then let excess water drain away completely.',
            },
            {
                label: 'Light',
                stat: 'Flexible',
                detail: 'Handles low light well but keeps its stripe variegation more vivid in brighter, indirect spots.',
            },
            {
                label: 'Water quality',
                stat: 'Filtered or distilled',
                detail: 'Fluoride and chlorine in tap water are the leading cause of brown, crispy leaf tips.',
            },
            {
                label: 'Nutrition',
                stat: 'Minimal',
                detail: 'Light monthly feeding in the growing season is enough for its slow, steady pace.',
            },
        ],
        wateringRhythm: {
            heading: 'Consistency matters more than volume.',
            body: 'Let the top couple of inches of soil dry before watering again, then soak thoroughly and let the pot drain. Corn plant tolerates missed waterings far better than it tolerates staying wet, so err toward waiting an extra few days.',
            tips: [
                'Use filtered, distilled, or rainwater when possible — sensitive plants show fluoride damage as brown tip burn within weeks.',
                'A cane that feels soft or spongy near the soil line signals rot; check roots immediately.',
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
                tip: 'Ease off gradually as new growth slows with shorter days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 3-4 weeks',
                tip: 'Water sparingly; a cool, low-light winter rest needs very little moisture.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture before considering a drink.',
                    'Look over leaves and cane joints for early pest activity.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe down leaves to remove dust and keep them glossy.',
                    'Trim any fully yellowed lower leaves at the cane.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Repot every 2-3 years once roots fill the container.',
                    'Cut back an overly tall cane in spring — it will resprout new growth below the cut.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Standard potting mix with perlite',
                note: 'Balances moisture retention with the drainage canes need to avoid rot.',
            },
            {
                item: 'Filtered or distilled water',
                note: 'Avoids the fluoride and chlorine sensitivity behind most leaf tip browning.',
            },
            {
                item: 'Moisture meter or finger test',
                note: 'Confirms the top few inches are dry before every watering.',
            },
            {
                item: 'Clean pruning shears',
                note: 'For removing spent leaves or cutting back an overly tall cane.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Brown, Crispy Leaf Tips',
                tag: 'Water Quality',
                description:
                    'Fluoride and chlorine buildup from tap water is the classic cause of tip and margin browning in corn plant.',
                actions: [
                    'Switch to filtered, distilled, or rainwater going forward.',
                    'Trim damaged tips with clean scissors, following the natural leaf shape.',
                    'Flush the soil with distilled water to help clear existing mineral buildup.',
                ],
            },
            {
                title: 'Yellowing, Mushy Lower Leaves',
                tag: 'Overwatering',
                description:
                    'Soft, yellow leaves near the soil line paired with a sour smell point to waterlogged roots.',
                actions: [
                    'Let the soil dry out fully before watering again.',
                    'Unpot and trim any dark, mushy roots if the smell persists.',
                    'Repot into fresh, well-draining mix if root rot is confirmed.',
                ],
            },
            {
                title: 'Leggy, Bare Canes',
                tag: 'Low Light',
                description:
                    'Canes that grow tall with sparse leaves clustered only at the top are stretching for more light.',
                actions: [
                    'Move to a brighter spot with filtered, indirect light.',
                    'Cut the cane back partway in spring to force fuller regrowth lower down.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and faint webbing on leaf undersides, most common in dry, warm rooms.',
                treatment:
                    'Rinse foliage, raise humidity slightly, then treat with insecticidal soap weekly until clear.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White, cottony tufts hiding in leaf axils and along the cane.',
                treatment:
                    'Dab visible clusters with rubbing alcohol, then follow with horticultural oil every 7-10 days.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small, brown, dome-shaped bumps along stems and leaf midribs that do not scrape off easily.',
                treatment:
                    'Scrape off light infestations by hand, then apply horticultural oil to smother remaining crawlers.',
            },
        ],
        stabilityChecklist: [
            'Use filtered or distilled water to prevent fluoride-related tip burn.',
            'Let the top couple of inches of soil dry before every watering.',
            'Keep in bright, indirect light for the boldest leaf striping.',
            'Wipe leaves periodically to keep dust from dulling their color.',
        ],
    },
};
