import type { Plant } from '../../lib/db/models/Plant';

export const chlorophytumComosum: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'chlorophytum',
    species: 'comosum',
    commonNames: ['Spider Plant', 'Airplane Plant', 'Ribbon Plant'],
    description:
        'Arching, ribbon-like leaves striped in green and cream send out long stems tipped with baby plantlets — one of the most forgiving, fastest-propagating houseplants around, ideal for hanging baskets and first-time growers alike.',
    images: [],
    tags: [
        'beginner-friendly',
        'low-light',
        'hanging-plant',
        'non-toxic',
        'air-purifying',
    ],
    highlights: [
        'Native to the coastal forests and rocky areas of South Africa.',
        'Tested in NASA’s Clean Air Study as an effective filter for common indoor air pollutants.',
        'Produces dangling plantlets, or "pups," on long stolons that root readily to make new plants.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11 (outdoors); houseplant everywhere',
            caption:
                'Grown outdoors as a perennial only in frost-free climates; a houseplant almost everywhere else.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 2,
            value: 'Low to bright indirect',
            caption:
                'Tolerates low light well; brighter indirect light produces the fullest growth and strongest variegation.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Water when the top inch of soil dries; tolerates occasional missed waterings without real damage.',
        },
        difficulty: {
            score: 1,
            value: 'Very easy',
            caption:
                'One of the most forgiving houseplants available, tolerant of a wide range of light and water conditions.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Safe around pets and children, though the leaves can have a mild hallucinogenic effect on cats in large quantities.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '1-2 ft, trailing further',
            detail: 'Forms an arching clump of foliage with plantlet-tipped stems that can trail 2 ft or more.',
            minFt: 1,
            maxFt: 2,
        },
        soil: {
            value: 'Standard, well-draining potting mix',
            detail: 'Any decent all-purpose potting mix works well; the plant is undemanding about soil composition.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Adapts readily to LECA or pon, and plantlets root easily in plain water before transplanting.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, light',
            detail: 'A diluted balanced feed during the growing season supports foliage without causing leaf-tip burn.',
            npk: '20-20-20',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer; over-fertilizing is the main cause of brown leaf tips.',
        },
        nativeHabitat: {
            value: 'South African coastal forests',
            detail: 'Grows wild in rocky, semi-shaded coastal habitats across South Africa.',
        },
        humidity: {
            value: 'Average household',
            detail: 'Tolerates typical indoor humidity fine, though very dry air can contribute to brown leaf tips.',
            minPct: 30,
        },
        temperature: {
            value: '55° – 80°F',
            detail: 'Comfortable across normal household temperatures; dislikes prolonged exposure below 50°F.',
            minF: 55,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Grows most vigorously in warm months, when plantlet production also picks up noticeably.',
        },
        dailyRhythm: {
            heading:
                'A near-indestructible grower that multiplies itself for free.',
            body: 'Spider Plant tolerates inconsistent light and watering better than almost any other houseplant, making the daily care load genuinely light. The more interesting job is deciding what to do with the constant supply of baby plantlets it sends out on long stems.',
            highlights: [
                'Brown leaf tips are common and mostly cosmetic — usually tied to tap water minerals or over-fertilizing.',
                'Plantlets can be left attached for a fuller cascading look, or snipped and rooted to start new plants.',
                'Fluoride-sensitive — using filtered or distilled water reduces tip browning in sensitive specimens.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture; water once the top inch is dry.',
            },
            {
                interval: 'monthly',
                task: 'Feed at diluted strength during active growth.',
            },
            {
                interval: 'as-needed',
                task: 'Trim brown leaf tips and remove or root plantlets as desired.',
            },
            {
                interval: 'seasonal',
                task: 'Repot once roots fill the pot, usually every 1-2 years.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Low to bright indirect',
                detail: 'Extremely light-flexible, though brighter spots produce fuller growth and bolder variegation.',
            },
            {
                label: 'Water Quality',
                stat: 'Filtered helps',
                detail: 'Sensitive to fluoride and salts in tap water, which show up as brown leaf tips over time.',
            },
            {
                label: 'Propagation',
                stat: 'Plantlets root in days',
                detail: 'Baby plantlets on long stolons root quickly in water or soil, making this one of the easiest plants to multiply.',
            },
            {
                label: 'Feeding',
                stat: 'Light touch',
                detail: 'Over-fertilizing causes far more visible damage (leaf-tip burn) than under-fertilizing ever does.',
            },
        ],
        wateringRhythm: {
            heading: 'Even moisture, with real tolerance for lapses.',
            body: 'Water when the top inch of soil dries out, saturating thoroughly and letting excess drain away. Spider Plant handles occasional missed waterings better than most houseplants, storing some moisture in its fleshy, tuberous roots.',
            tips: [
                'Filtered, distilled, or rainwater reduces the tip-browning that fluoride and salts in tap water can cause.',
                'Root storage in the tubers means a skipped watering rarely causes lasting harm.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 6-8 days',
                tip: 'Active growth and plantlet production use water more steadily — check weekly.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 8-10 days',
                tip: 'Growth slows as light and temperatures drop — ease back slightly.',
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
                    'Trim any brown leaf tips for appearance.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed at diluted strength during spring and summer growth.',
                    'Remove or root plantlets, depending on the look you want.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Repot every 1-2 years once roots fill the pot, dividing congested clumps if desired.',
                    'Flush soil occasionally with plain water to clear mineral buildup from tap water.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Small scissors',
                note: 'For trimming brown tips and detaching plantlets cleanly for propagation.',
            },
            {
                item: 'Filtered or distilled water',
                note: 'Reduces the fluoride- and salt-related leaf-tip browning this species is prone to.',
            },
            {
                item: 'Small propagation jars',
                note: 'Lets plantlets root in water in days before potting up as new plants.',
            },
            {
                item: 'Standard all-purpose potting mix',
                note: 'No special soil blend needed — this is an undemanding grower in nearly any well-draining mix.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Brown Leaf Tips',
                description:
                    'The most common cosmetic issue with this species, usually tied to fluoride or salts in tap water, or over-fertilizing.',
                actions: [
                    'Switch to filtered, distilled, or rainwater if using treated tap water.',
                    'Reduce fertilizer frequency or dilute it further.',
                    'Trim damaged tips with scissors; new growth should come in cleaner.',
                ],
            },
            {
                title: 'Pale, Washed-Out Leaves',
                description:
                    'Fading variegation or overall pale color usually points to too much direct sun bleaching the foliage.',
                actions: [
                    'Move to a spot with bright, indirect light rather than direct sun.',
                    'Trim any severely scorched leaves; new growth should return to normal color.',
                ],
            },
            {
                title: 'Few or No Plantlets',
                description:
                    'A mature plant that isn’t producing baby plantlets usually just needs more light or is still too young.',
                actions: [
                    'Move to a brighter indirect-light location, which tends to trigger plantlet production.',
                    'Be patient — plantlets typically start once the plant is well-established and slightly root-bound.',
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
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white clusters at the base of leaves or along stolons.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol and follow with neem oil sprays until clear.',
            },
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small clustered insects on new growth and plantlets.',
                treatment:
                    'Hose off light infestations or treat with insecticidal soap every 5-7 days until clear.',
            },
        ],
        stabilityChecklist: [
            'Use filtered or distilled water if tap water causes persistent brown tips.',
            'Keep out of intense direct sun, which bleaches and scorches the foliage.',
            'Go light on fertilizer — over-feeding causes more visible damage than under-feeding.',
            'Repot every 1-2 years once roots fill the pot to keep growth vigorous.',
        ],
    },
};
