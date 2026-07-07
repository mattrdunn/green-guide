import type { Plant } from '../../lib/db/models/Plant';

export const dracaenaDeremensis: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'dracaena',
    species: 'deremensis',
    commonNames: ['Janet Craig', 'Janet Craig Dracaena'],
    description:
        'Dense rosettes of solid, glossy dark-green, strap-like leaves make Dracaena deremensis "Janet Craig" one of the most shade-tolerant and dependable interior plants around — a longtime favorite for dim offices, lobbies, and windowless corners.',
    images: [],
    tags: ['low-light', 'beginner-friendly', 'toxic'],
    highlights: [
        'Named after Janet Craig, an early 20th-century plant collector credited with popularizing the cultivar.',
        'One of the most shade-tolerant dracaenas available, thriving in interiorscapes with minimal natural light.',
        'Some botanists now classify it as a cultivar of Dracaena fragrans rather than a distinct species, though it is still widely sold and grown under its own name.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Grown as a houseplant outside its tropical native range.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 1,
            value: 'Low to bright, indirect',
            caption:
                'One of the most shade-tolerant houseplants available; avoid direct sun, which scorches its solid dark leaves.',
        },
        watering: {
            score: 2,
            value: 'Let the top 1-2 in dry',
            caption:
                'Prefers slightly dry over soggy; consistent overwatering is the most common cause of decline.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption:
                'Slow-growing and forgiving, with water quality as its main sensitivity.',
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
            value: '2-6 ft indoors',
            detail: 'Grows slowly into a dense, upright clump of canes topped with rosettes of solid green leaves.',
            minFt: 2,
            maxFt: 6,
        },
        soil: {
            value: 'Standard, well-draining mix',
            detail: 'A regular potting mix with a bit of added perlite keeps the canes from sitting in wet soil.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Transitions well to LECA once established; steady moisture suits its rhizome-fed canes.',
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
            detail: 'Understory forests, where deep shade beneath a full canopy is the norm.',
        },
        humidity: {
            value: 'Any (30-50%)',
            detail: 'Unbothered by average indoor humidity; no misting or humidifier required.',
            minPct: 30,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges; keep away from cold drafts and sudden chills.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New leaves emerge from the crown of each cane during the warm months; growth is minimal in winter.',
        },
        dailyRhythm: {
            heading: 'The classic low-light plant that asks for almost nothing.',
            body: 'Janet Craig is built for exactly the spots other plants struggle in — dim corners, north-facing rooms, interior offices. Keep watering light and consistent, use clean water, and it will hold its dark, glossy color for years with minimal attention.',
            highlights: [
                'Thrives in light too low for most other houseplants.',
                'Brown, crispy leaf tips are almost always fluoride or chlorine sensitivity, not underwatering.',
                'Wipe broad leaves occasionally to keep them glossy and photosynthesizing well.',
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
                task: 'Wipe down leaves with a damp cloth to keep them glossy.',
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
                stat: 'Low tolerance',
                detail: 'Handles dim interiors better than almost any other common houseplant.',
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
            heading: 'Consistency over frequency.',
            body: 'Let the top couple of inches of soil dry before watering again, then soak thoroughly and let the pot drain. Janet Craig tolerates missed waterings far better than it tolerates staying wet.',
            tips: [
                'Use filtered, distilled, or rainwater when possible — sensitive plants show fluoride damage as brown tip burn within weeks.',
                'Lower light placements need noticeably less frequent watering than bright ones — adjust by feel, not a fixed schedule.',
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
                tip: 'Ease off gradually as growth slows with shorter days.',
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
                    'Divide crowded clumps in spring if the pot has multiple canes.',
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
                item: 'Soft cloth',
                note: 'For wiping dust off broad leaves to keep them glossy.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Brown, Crispy Leaf Tips',
                tag: 'Water Quality',
                description:
                    'Fluoride and chlorine buildup from tap water is the classic cause of tip and margin browning.',
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
                title: 'Pale or Bleached Patches',
                tag: 'Direct Sun',
                description:
                    'Faded or scorched patches on otherwise dark green leaves point to accidental direct sun exposure.',
                actions: [
                    'Move to a spot with indirect or filtered light.',
                    'Trim visibly scorched leaves; new growth will not show the same damage once relocated.',
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
            'Keep out of direct sun — bright, indirect, or even low light is preferred.',
            'Wipe leaves periodically to keep dust from dulling their glossy color.',
        ],
    },
};
