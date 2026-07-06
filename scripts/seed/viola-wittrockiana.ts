import type { Plant } from '../../lib/db/models/Plant';

export const violaWittrockiana: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'viola',
    species: 'wittrockiana',
    commonNames: ['Pansy', 'Garden Pansy'],
    description:
        'Cheerful, face-like blooms in nearly every color pack a punch of color in cool-season beds and containers — a fast, easy annual (or short-lived perennial) that thrives on chilly weather most flowers can’t tolerate.',
    images: [],
    tags: [
        'annual',
        'full-sun',
        'cool-season',
        'container-friendly',
        'non-toxic',
        'beginner-friendly',
    ],
    highlights: [
        'A hybrid developed from European wild violas, bred for larger flowers and a wider color range.',
        'One of the few bedding flowers that blooms through light frost and even light snow.',
        'Flowers are edible and often used as a garnish or in salads.',
    ],
    vitals: {
        hardinessZone: {
            value: '4-8',
            caption:
                'Grown as a cool-season annual almost everywhere; can behave as a short-lived perennial in mild-winter zones.',
            zoneMin: 4,
            zoneMax: 8,
        },
        light: {
            score: 4,
            value: 'Full sun to part shade',
            caption:
                'Full sun in cool weather; benefits from afternoon shade if temperatures climb toward summer heat.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Shallow roots dry out quickly — consistent moisture keeps blooms coming.',
        },
        difficulty: {
            score: 1,
            value: 'Very easy',
            caption:
                'One of the most forgiving bedding flowers, provided the season is cool.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Safe around pets and children; the flowers themselves are edible.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '6-9 in',
            detail: 'Low, mounding growth habit that spreads to fill beds, borders, and container edges.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Rich, well-drained',
            detail: 'Organic matter worked into the bed supports the shallow, fibrous root system and steady blooming.',
        },
        semiHydro: {
            value: 'No',
            detail: 'A short-lived bedding annual grown in soil; not suited to soilless growing setups.',
            compatible: false,
        },
        fertilizer: {
            value: 'Light, frequent',
            detail: 'Regular light feeding keeps up with the plant’s continuous, heavy bloom cycle.',
            npk: '15-30-15',
        },
        fertilizerFrequency: {
            value: 'Every 2-3 weeks',
            detail: 'Frequent light feeding fuels near-constant flowering through the cool season.',
        },
        nativeHabitat: {
            value: 'European garden hybrid',
            detail: 'Bred in the 19th century from wild European violas favoring cool, temperate climates.',
        },
        humidity: {
            value: 'Ambient outdoor',
            detail: 'Ordinary outdoor humidity is fine; good airflow helps prevent fungal issues in damp weather.',
        },
        temperature: {
            value: '25° – 75°F',
            detail: 'Thrives in cool weather and tolerates light frost; declines quickly once temperatures push past 80°F.',
            minF: 25,
            maxF: 75,
        },
        growSeason: {
            value: 'Fall–Spring (cool season)',
            detail: 'Blooms through fall and again in spring in most climates, often pausing during the coldest depths of winter.',
        },
        dailyRhythm: {
            heading:
                'A cool-weather bloomer that fades once summer heat arrives.',
            body: 'Pansies want consistent moisture and regular light feeding to keep their nonstop flower cycle going. The main seasonal job is accepting that they are a cool-weather plant — most gardeners replace them once summer heat sets in rather than trying to nurse them through it.',
            highlights: [
                'Deadheading spent blooms keeps plants flowering instead of setting seed.',
                'Leggy, stretched growth in late spring usually signals rising heat, not a care mistake.',
                'A light frost rarely damages pansies — they often bloom right through it.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture, especially for container plantings.',
            },
            {
                interval: 'weekly',
                task: 'Deadhead spent blooms and pinch leggy stems to encourage bushiness.',
            },
            {
                interval: 'as-needed',
                task: 'Water when the top inch of soil feels dry.',
            },
            {
                interval: 'seasonal',
                task: 'Feed lightly every 2-3 weeks through the cool-season bloom period.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Cool Weather',
                stat: '25° – 75°F',
                detail: 'The single biggest factor in performance — pansies decline fast once heat arrives.',
            },
            {
                label: 'Moisture',
                stat: 'Evenly moist',
                detail: 'Shallow roots dry out quickly, so consistent watering keeps blooms coming without interruption.',
            },
            {
                label: 'Feeding',
                stat: 'Light & frequent',
                detail: 'Regular light fertilizing supports the plant’s near-constant flower production.',
            },
            {
                label: 'Deadheading',
                stat: 'Weekly',
                detail: 'Removing spent blooms keeps energy going into new flowers rather than seed.',
            },
        ],
        wateringRhythm: {
            heading: 'Frequent, shallow watering for a shallow-rooted plant.',
            body: 'Pansies have a fibrous, shallow root system that dries out faster than deeper-rooted perennials, especially in containers. Water whenever the top inch of soil feels dry, keeping it consistently moist but never waterlogged.',
            tips: [
                'Container plantings often need water every couple of days in mild weather.',
                'Mulch garden beds lightly to slow moisture loss between waterings.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Fall & Spring',
                cadence: 'Every 3-5 days',
                tip: 'Peak bloom periods with active growth — keep soil consistently moist.',
            },
            {
                season: 'Winter',
                cadence: 'Every 7-10 days',
                tip: 'Growth slows in cold weather; reduce watering but never let soil fully dry.',
            },
            {
                season: 'Summer',
                cadence: 'Not applicable',
                tip: 'Plants typically decline and are replaced once sustained heat arrives.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Deadhead spent blooms just below the flower head.',
                    'Pinch back leggy stems to encourage bushier growth.',
                    'Check soil moisture, especially in containers.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Feed lightly every 2-3 weeks during the cool-season bloom period.',
                    'Refresh beds or containers with new plants once summer heat causes decline.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Small snips or fingertips',
                note: 'For quick, frequent deadheading and pinching back leggy growth.',
            },
            {
                item: 'Balanced liquid fertilizer',
                note: 'Diluted for frequent light feeding to sustain continuous blooming.',
            },
            {
                item: 'Mulch',
                note: 'A light layer helps shallow roots retain moisture between waterings.',
            },
            {
                item: 'Row cover (in hard freezes)',
                note: 'Light frost is no issue, but a cover offers insurance during unusually hard freezes.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Leggy, Stretched Growth',
                description:
                    'Stems stretching upward with fewer flowers usually signals rising temperatures as the cool season ends.',
                actions: [
                    'Pinch back leggy stems to encourage bushier growth if the season is expected to stay cool.',
                    'Accept decline as a normal end-of-season signal once real heat sets in.',
                    'Replace plants with heat-tolerant summer annuals when performance drops off.',
                ],
            },
            {
                title: 'Wilting Despite Moist Soil',
                description:
                    'Drooping foliage in soil that is already damp often points to root rot from poor drainage.',
                actions: [
                    'Check that beds or containers drain freely and are not sitting in water.',
                    'Ease back on watering frequency until the topsoil dries slightly between waterings.',
                    'Improve soil structure with compost if drainage is consistently poor.',
                ],
            },
            {
                title: 'Fewer, Smaller Blooms',
                description:
                    'A decline in flower size and number, without other stress signs, often means the plant needs feeding or deadheading.',
                actions: [
                    'Resume or increase a light, frequent feeding schedule.',
                    'Deadhead consistently to redirect energy into new buds.',
                    'Confirm the site still gets adequate sun as surrounding growth fills in.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small clustered insects on new growth and buds, often with sticky residue.',
                treatment:
                    'Hose off light infestations or treat with insecticidal soap every 5-7 days until clear.',
            },
            {
                name: 'Slugs and Snails',
                pestSlug: 'slugs-and-snails',
                signs: 'Ragged holes in leaves and flowers, especially in damp, cool weather.',
                treatment:
                    'Use iron phosphate bait or hand-pick in the evening; pansies are a favorite target in wet conditions.',
            },
            {
                name: 'Fungal Leaf Spot',
                signs: 'Dark, water-soaked spots on leaves during prolonged damp or humid weather.',
                treatment:
                    'Remove affected foliage, water at the soil line, and improve airflow between plants.',
            },
        ],
        stabilityChecklist: [
            'Plant in cool weather and expect decline once sustained heat arrives.',
            'Keep soil consistently moist — shallow roots dry out fast.',
            'Deadhead weekly and feed lightly every 2-3 weeks to keep blooms coming.',
            'Watch for slugs and snails in damp, cool conditions, when they are most active.',
        ],
    },
};
