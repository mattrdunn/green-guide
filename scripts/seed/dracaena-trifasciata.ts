import type { Plant } from '../../lib/db/models/Plant';

export const dracaenaTrifasciata: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'dracaena',
    species: 'trifasciata',
    commonNames: [
        'Snake Plant',
        "Mother-in-Law's Tongue",
        "Saint George's Sword",
        'Sansevieria trifasciata',
    ],
    description:
        'Upright, sword-like leaves and near-indestructible drought tolerance make Dracaena trifasciata — the classic snake plant, formerly Sansevieria — the go-to choice for dim corners, busy schedules, and first-time plant parents.',
    images: [],
    tags: ['succulent-like', 'low-light', 'beginner-friendly', 'mildly-toxic'],
    highlights: [
        'Native to the dry, rocky tropics of West Africa.',
        'Reclassified from Sansevieria to Dracaena in 2017 based on DNA evidence.',
        'Uses CAM photosynthesis — it exchanges gases at night like a cactus.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Keep above 50°F; cold + wet soil is the fastest killer.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            value: 'Low to bright, indirect',
            caption: 'Survives dim corners; grows fastest in bright light.',
        },
        watering: {
            value: 'Sparse — soak & dry fully',
            caption: 'Let the mix dry completely; every 2-4 weeks is typical.',
        },
        difficulty: {
            value: 'Easy',
            caption: 'One of the most forgiving houseplants available.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Saponins cause nausea if chewed — keep away from pets that graze.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '1-4 ft indoors',
            detail: 'Leaves grow in slow, upright rosettes from underground rhizomes; mature clumps spread outward rather than up.',
            minFt: 1,
            maxFt: 4,
        },
        soil: {
            value: 'Gritty & fast-draining',
            detail: 'Use a cactus/succulent mix or cut standard potting soil with 30-50% perlite or pumice.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Adapts well to LECA — thick rhizomes appreciate the airflow, and the reservoir removes overwatering guesswork.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, diluted',
            detail: 'A half-strength balanced feed is plenty; snake plants are light feeders.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: '2-3x per growing season',
            detail: 'Feed lightly in spring and summer only; skip fertilizer entirely through fall and winter.',
        },
        nativeHabitat: {
            value: 'West Africa',
            detail: 'Dry, rocky grasslands from Nigeria to the Congo — mimic with gritty soil and long dry spells.',
        },
        humidity: {
            value: 'Any (30-50%)',
            detail: 'Completely unbothered by dry indoor air; no misting or humidifier needed.',
            minPct: 30,
        },
        temperature: {
            value: '60° – 85°F',
            detail: 'Tolerates warm rooms easily; avoid sustained cold below 50°F, especially with damp soil.',
            minF: 60,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Growth is slow and steady; expect a few new leaves per rosette each season.',
        },
        dailyRhythm: {
            heading: 'A plant that thrives on benign neglect.',
            body: 'Snake plants store water in thick leaves and rhizomes, opening their stomata at night to conserve moisture. Give them light, leave them alone, and they reward you with sculptural, air-purifying foliage.',
            highlights: [
                'Brighter light means faster growth and stronger leaf patterning.',
                'Err on the side of underwatering — drought is survivable, rot is not.',
                'Wipe leaves occasionally so the striped patterning stays vivid.',
            ],
        },
        weeklyChecklist: [
            'Glance at leaf bases for softness or wrinkling.',
            'Confirm the soil is fully dry before even considering water.',
            'Dust leaves with a dry or barely damp cloth.',
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 2-4 weeks',
                detail: 'Water thoroughly only when the mix is bone-dry all the way down, then drain completely.',
            },
            {
                label: 'Light',
                stat: 'Flexible',
                detail: 'Tolerates low light but grows noticeably faster and sturdier near a bright window.',
            },
            {
                label: 'Nutrition',
                stat: 'Minimal',
                detail: 'A couple of half-strength feedings across spring and summer covers a full year.',
            },
            {
                label: 'Drainage',
                stat: 'Non-negotiable',
                detail: 'Gritty mix and a drainage hole matter more than any other care decision.',
            },
        ],
        wateringRhythm: {
            heading: 'When in doubt, wait another week.',
            body: 'Nearly every snake plant casualty traces back to overwatering. Let the substrate dry completely between drinks, water deeply when you do, and stretch the interval even further in winter or low light.',
            tips: [
                'Lift the pot — a fully dry snake plant pot is noticeably light.',
                'In winter or dim rooms, monthly watering is often still too frequent; watch the leaves, not the calendar.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 2-3 weeks',
                tip: 'Water only after the entire pot has dried; brighter placements dry faster.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 3-4 weeks',
                tip: 'Taper off as light declines; the plant is winding down.',
            },
            {
                season: 'Winter',
                cadence: 'Every 4-6 weeks',
                tip: 'Barely water — slightly wrinkled leaves rebound; rotted rhizomes do not.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Rotate the pot a quarter turn for even, upright growth.',
                    'Check leaf bases and soil line for mushiness or pests.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe leaves clean so the banding stays crisp.',
                    'Remove any fully collapsed or yellowed leaves at the base.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Divide crowded clumps in spring — rhizome divisions root readily.',
                    'Repot only when rhizomes visibly bulge or crack the pot (every 3-5 years).',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Cactus/succulent potting mix',
                note: 'Fast drainage is the single biggest factor in long-term success.',
            },
            {
                item: 'Terracotta pot with drainage',
                note: 'Porous walls wick excess moisture away from the rhizomes.',
            },
            {
                item: 'Moisture meter or wooden chopstick',
                note: 'Confirms the deep soil is dry before every watering.',
            },
            {
                item: 'Clean, sharp knife',
                note: 'For dividing rhizomes or taking leaf cuttings for propagation.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Mushy, Yellowing Leaves',
                description:
                    'Soft, water-soaked leaves that yellow and collapse at the base are the signature of root and rhizome rot from overwatering.',
                actions: [
                    'Unpot immediately and trim away any brown, mushy roots or rhizome sections.',
                    'Repot into dry, gritty mix and withhold water for 1-2 weeks.',
                    'Salvage healthy leaves as cuttings if the rot has spread through the base.',
                ],
            },
            {
                title: 'Wrinkled, Curling Leaves',
                description:
                    'Vertical wrinkles and inward curling mean the water reserves in the leaves are depleted — genuine, prolonged drought.',
                actions: [
                    'Give a slow, thorough soak until water runs from the drainage hole.',
                    'Leaves should plump back up within a week or two.',
                    'Shorten the watering interval slightly if it recurs.',
                ],
            },
            {
                title: 'Leaves Falling Over or Splaying',
                description:
                    'Floppy leaves usually trace to insufficient light producing weak growth, or early rot at the base.',
                actions: [
                    'Move to a brighter window — etiolated leaves never firm up, but new growth will.',
                    'Check the leaf base: firm means a light problem, soft means a water problem.',
                    'Stake or trim splayed leaves for aesthetics; they will not re-straighten.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                signs: 'Fine stippling and faint webbing, usually in hot, dry placements.',
                treatment:
                    'Wipe leaves down with insecticidal soap weekly until stippling stops; the smooth foliage makes eradication easy.',
            },
            {
                name: 'Mealybugs',
                signs: 'White, cottony tufts tucked into the leaf bases and rosette centers.',
                treatment:
                    'Swab with isopropyl alcohol on a cotton bud, then follow with horticultural oil every 7-10 days.',
            },
            {
                name: 'Fungus Gnats',
                signs: 'Small flies around the soil — a red flag that the mix is staying too wet.',
                treatment:
                    'Let the pot dry out completely (the plant will not mind) and top-dress with sand or grit.',
            },
        ],
        stabilityChecklist: [
            'Confirm total soil dryness before every single watering — no exceptions.',
            'Keep the plant away from cold drafts and unheated rooms in winter.',
            'Inspect leaf bases monthly; rot always starts at the soil line.',
            'Repot infrequently — snake plants flower and grow best slightly root-bound.',
        ],
    },
};
