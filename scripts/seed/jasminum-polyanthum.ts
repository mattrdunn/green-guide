import type { Plant } from '../../lib/db/models/Plant';

export const jasminumPolyanthum: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'jasminum',
    species: 'polyanthum',
    commonNames: ['Pink Jasmine', 'Jasmine', 'White Jasmine'],
    description:
        'A vigorous twining vine from the Yunnan hills, Pink Jasmine bursts into hundreds of intensely fragrant white star-flowers each spring, opening from rosy pink buds — one of the most floriferous houseplant vines there is.',
    images: [],
    tags: ['vine', 'flowering', 'fragrant', 'non-toxic'],
    highlights: [
        'Native to Yunnan and neighboring parts of southwestern China.',
        'A single mature vine can carry hundreds of blooms at once in spring.',
        'Needs a genuinely cool, bright winter rest to flower well the following season.',
    ],
    vitals: {
        hardinessZone: {
            value: '8-10',
            caption:
                'Hardy outdoors in mild climates; grown as a houseplant or patio vine elsewhere.',
            zoneMin: 8,
            zoneMax: 10,
        },
        light: {
            score: 4,
            value: 'Bright, some direct sun',
            caption:
                'A few hours of direct sun, especially in winter, drives the spring flower show.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption: 'Water when the top inch dries; never let it fully dry out for long.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Easy to keep alive, but needs a deliberate cool winter rest to bloom well.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Safe around pets and kids — the ASPCA lists true jasmine (Jasminum spp.) as non-toxic.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '6-15 ft vines',
            detail: 'A fast, twining climber — trains onto a trellis, hoop, or arch, or trails from a hanging basket if left unsupported.',
            minFt: 6,
            maxFt: 15,
        },
        soil: {
            value: 'Rich, well-draining potting mix',
            detail: 'A standard potting mix amended with compost holds enough moisture for steady growth without staying soggy.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Woody, fibrous roots and a strong preference for evenly moist (not wet) soil make it a poor fit for passive hydro.',
            compatible: false,
        },
        fertilizer: {
            value: 'Balanced, bloom-boosting',
            detail: 'A phosphorus-leaning feed through the growing season supports the following spring’s flower count.',
            npk: '5-10-5',
        },
        fertilizerFrequency: {
            value: 'Every 4-6 weeks in season',
            detail: 'Feed through spring and summer, then stop entirely once the plant enters its cool winter rest.',
        },
        nativeHabitat: {
            value: 'Yunnan, China',
            detail: 'Scrambles over shrubs and rock outcrops in hilly, subtropical terrain with cool, bright winters and warm, humid summers.',
        },
        humidity: {
            value: '40%+ preferred',
            detail: 'Average home humidity is tolerated, but flower buds hold better with a bit more moisture in the air.',
            minPct: 40,
        },
        temperature: {
            value: '55° – 80°F',
            detail: 'A genuinely cool spell (45-55°F) for 6-8 weeks in winter is what triggers heavy spring flowering.',
            minF: 40,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Vigorous vining growth follows the spring bloom and continues through summer warmth.',
        },
        dailyRhythm: {
            heading: 'A vine that blooms hardest after a proper winter chill.',
            body: 'Pink Jasmine spends summer sprawling and building the wood that will flower next spring, then needs a deliberately cool, bright winter to set buds. Give it consistent moisture, a trellis to climb, and — critically — a cold snap it can rest through.',
            highlights: [
                'Move it somewhere cool and bright (an unheated porch or garage window) for 6-8 weeks each winter.',
                'Train new vining growth onto a support weekly — untrained vines tangle into a mat fast.',
                'Fragrance peaks in the evening, so place it somewhere you pass by at night.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top inch of soil and water if it has dried.',
            },
            {
                interval: 'weekly',
                task: 'Wind new vining growth around the trellis or support.',
            },
            {
                interval: 'weekly',
                task: 'Scan leaf undersides and new shoots for pests.',
            },
            {
                interval: 'seasonal',
                task: 'Move to a cool (45-55°F), bright spot for 6-8 weeks each winter to trigger blooming.',
            },
            {
                interval: 'seasonal',
                task: 'Prune spent flowering stems back hard right after the spring bloom fades.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Winter chill',
                stat: '45-55°F, 6-8 weeks',
                detail: 'Without a real cool rest, the plant grows lush foliage but flowers poorly the following spring.',
            },
            {
                label: 'Hydration',
                stat: 'Evenly moist',
                detail: 'Water when the top inch dries; consistent moisture supports both foliage and bud development.',
            },
            {
                label: 'Support & training',
                stat: 'Weekly winding',
                detail: 'Vines twine fast and tangle without regular guidance onto a trellis, hoop, or wire form.',
            },
            {
                label: 'Post-bloom pruning',
                stat: 'Cut back hard, once yearly',
                detail: 'Pruning right after flowering channels the summer’s growth into next year’s bloom wood.',
            },
        ],
        wateringRhythm: {
            heading: 'Consistent moisture, never bone dry, never soggy.',
            body: 'Water when the top inch of soil dries, aiming for evenly moist (not wet) conditions throughout the growing season. Ease off slightly during the winter rest, but never let the root ball fully dry out — jasmine drops buds readily under drought stress.',
            tips: [
                'Wilting between waterings is a clear sign to shorten the interval, not a quirk to ignore.',
                'A cache pot saucer emptied after each watering prevents the roots from sitting wet.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 4-6 days',
                tip: 'Active growth and flowering both raise water demand — check soil more often in heat.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-9 days',
                tip: 'Ease back gradually as growth slows heading into the winter rest.',
            },
            {
                season: 'Winter (cool rest)',
                cadence: 'Every 10-14 days',
                tip: 'Keep just barely moist while cool and semi-dormant; overwatering here invites root rot.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Wind new vining growth onto its support before it tangles.',
                    'Check soil moisture and water if the top inch has dried.',
                    'Inspect leaf undersides and new shoots for early pest activity.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed with a bloom-boosting fertilizer during spring and summer.',
                    'Remove any yellowed or damaged leaves.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Relocate to a cool, bright spot for 6-8 weeks in winter to set flower buds.',
                    'Prune back hard immediately after spring flowering finishes.',
                    'Repot every 2 years in fresh, compost-enriched mix once roots fill the pot.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Trellis, hoop, or wire form',
                note: 'Gives the twining vine something to climb; without it, growth mats into a tangle.',
            },
            {
                item: 'Bloom-boosting fertilizer',
                note: 'A phosphorus-leaning feed supports next spring’s flower count.',
            },
            {
                item: 'Sharp bypass pruners',
                note: 'For the hard post-bloom cutback that keeps the vine from growing leggy and bare at the base.',
            },
            {
                item: 'Cool, bright winter spot',
                note: 'An unheated porch, garage window, or similar space to deliver the necessary winter chill.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Few or No Flowers',
                tag: 'Missing winter chill',
                description:
                    'Healthy foliage with little to no spring bloom almost always traces back to a winter that was too warm for too short a time.',
                actions: [
                    'Move the plant somewhere reliably 45-55°F for at least 6 weeks the following winter.',
                    'Ensure it still gets bright light during the chill period — cold and dark together stresses the plant without helping bud set.',
                ],
            },
            {
                title: 'Sudden Bud Drop',
                description:
                    'Buds that form and then fall before opening usually indicate a sudden change in watering, temperature, or light.',
                actions: [
                    'Keep watering and placement consistent once buds appear — avoid moving the plant during this window.',
                    'Check that the soil has not gone bone dry, a common trigger for bud drop.',
                ],
            },
            {
                title: 'Yellowing Leaves',
                description:
                    'Widespread yellowing usually points to overwatering or a compacted, poorly draining mix.',
                actions: [
                    'Let the top inch dry before watering again and confirm the pot drains freely.',
                    'Repot into fresh mix if the current soil has compacted or smells sour.',
                ],
            },
            {
                title: 'Leggy, Bare-Based Vines',
                description:
                    'Long bare stems with foliage only near the tips point to too little light or a missed post-bloom pruning.',
                actions: [
                    'Move to a brighter spot with a few hours of direct sun.',
                    'Cut back hard right after the next bloom cycle to force branching lower on the vine.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small clustered insects on new shoots and flower buds, often with sticky honeydew residue.',
                treatment:
                    'Rinse off with water and follow with insecticidal soap every 5-7 days until clear.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine webbing and stippled, dull leaves, especially in dry winter air.',
                treatment:
                    'Shower the foliage and raise humidity, then apply insecticidal soap weekly until resolved.',
            },
            {
                name: 'Whiteflies',
                pestSlug: 'whiteflies',
                signs: 'Tiny white insects that flutter up when the foliage is disturbed.',
                treatment:
                    'Use yellow sticky traps and treat with insecticidal soap every 5-7 days, focusing on leaf undersides.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small brown bumps along stems that do not brush off.',
                treatment:
                    'Scrape off light infestations and follow with horticultural oil every 1-2 weeks.',
            },
        ],
        stabilityChecklist: [
            'Deliver a genuine 6-8 week cool rest every winter — it is the single biggest lever on bloom count.',
            'Keep soil evenly moist through spring and summer; never let it go bone dry while budding.',
            'Train vining growth onto a support weekly so it does not mat into an unmanageable tangle.',
            'Prune hard right after flowering to keep growth full and set up the next season’s blooms.',
        ],
    },
};
