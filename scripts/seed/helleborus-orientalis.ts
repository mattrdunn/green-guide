import type { Plant } from '../../lib/db/models/Plant';

export const helleborusOrientalis: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'helleborus',
    species: 'orientalis',
    commonNames: ['Lenten Rose', 'Oriental Hellebore', 'Winter Rose'],
    description:
        'Nodding, rose-like flowers in shades of white, pink, and deep plum push through late winter cold when almost nothing else in the garden is blooming — a tough, shade-loving perennial that only gets better with age.',
    images: [],
    tags: [
        'perennial',
        'shade-tolerant',
        'winter-blooming',
        'evergreen',
        'toxic',
        'deer-resistant',
    ],
    highlights: [
        'Native to woodland slopes of Greece, Turkey, and the Caucasus, where it blooms through late snow.',
        'Flowers often open in late winter, weeks before most spring perennials break dormancy.',
        'Leathery, evergreen foliage persists through winter in milder climates, giving year-round structure.',
    ],
    vitals: {
        hardinessZone: {
            value: '4-9',
            caption:
                'Reliably perennial and cold-hardy; foliage may need shelter from harsh winter wind in zone 4.',
            zoneMin: 4,
            zoneMax: 9,
        },
        light: {
            score: 2,
            value: 'Part to full shade',
            caption:
                'Thrives under deciduous trees; too much direct sun scorches the evergreen leaves.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Prefers consistent moisture, especially while establishing, but tolerates short dry spells once mature.',
        },
        difficulty: {
            score: 2,
            value: 'Easy, once established',
            caption:
                'Slow to settle in its first year or two, then remarkably low-maintenance for decades.',
            level: 'easy',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'All parts contain cardiac glycosides that irritate skin and are dangerous if ingested by pets or people.',
            level: 'toxic',
        },
    },
    overview: {
        height: {
            value: '12-18 in',
            detail: 'Forms a low, clumping mound of leathery, palmate leaves with flower stems held just above the foliage.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Rich, humus-forward, well-drained',
            detail: 'Woodland conditions suit it best — organic matter worked into the soil mimics its native forest floor habitat.',
        },
        semiHydro: {
            value: 'No',
            detail: 'A woodland perennial grown in garden soil; not suited to soilless or hydroponic setups.',
            compatible: false,
        },
        fertilizer: {
            value: 'Light, balanced',
            detail: 'A modest balanced feed in early spring supports foliage and next winter’s bud set without pushing weak growth.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Once yearly',
            detail: 'A single application as new growth starts in spring is typically all a mature plant needs.',
        },
        nativeHabitat: {
            value: 'Southeastern European woodlands',
            detail: 'Grows wild on shaded, humus-rich slopes across Greece, Turkey, and the Caucasus.',
        },
        humidity: {
            value: 'Ambient outdoor',
            detail: 'Ordinary outdoor humidity is fine; good air circulation around the crown helps prevent leaf spot.',
        },
        temperature: {
            value: '-20° – 85°F',
            detail: 'Reliably cold-hardy in the ground; evergreen foliage can brown in exposed winter wind.',
            minF: -20,
            maxF: 85,
        },
        growSeason: {
            value: 'Late Winter–Spring',
            detail: 'Flowers emerge in late winter and persist for weeks; new foliage follows through spring.',
        },
        dailyRhythm: {
            heading: 'A shade perennial that blooms when little else will.',
            body: 'Hellebores ask for a woodland-like spot and patience while they establish — the first couple of seasons are about root and clump development more than flowers. Once settled, the daily job all but disappears: shade, steady moisture, and an annual tidy-up of old leaves each year.',
            highlights: [
                'Nodding flowers face downward by design — tip blooms up gently to see the detail rather than forcing the stem.',
                'Evergreen leaves can look tattered by late winter; cutting them back before bloom lets flowers take center stage.',
                'Established clumps self-seed readily, often producing volunteer seedlings nearby.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture, especially for plants in their first two seasons.',
            },
            {
                interval: 'seasonal',
                task: 'Cut back tattered old foliage in late winter just before flower buds rise.',
            },
            {
                interval: 'seasonal',
                task: 'Apply a balanced feed and refresh mulch in early spring.',
            },
            {
                interval: 'as-needed',
                task: 'Deadhead spent flowers if self-seeding isn’t wanted in that spot.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Shade',
                stat: 'Part to full shade',
                detail: 'Dappled light under deciduous trees mimics its native woodland floor and prevents leaf scorch.',
            },
            {
                label: 'Soil',
                stat: 'Humus-rich & moist',
                detail: 'Organic matter and consistent moisture drive establishment far more than fertilizer does.',
            },
            {
                label: 'Old Foliage',
                stat: 'Cut back in late winter',
                detail: 'Removing tattered leaves just before bloom lets flowers show and reduces fungal leaf spot.',
            },
            {
                label: 'Patience',
                stat: '2-3 years to mature',
                detail: 'Newly planted hellebores focus on roots before flowers — established clumps reward the wait for decades.',
            },
        ],
        wateringRhythm: {
            heading:
                'Steady moisture while establishing, more forgiving once mature.',
            body: 'Newly planted hellebores need consistently moist soil through their first year or two while roots spread. Once established, a mature clump tolerates short dry spells, though regular moisture during active spring growth keeps foliage lush and flowering strong the following winter.',
            tips: [
                'Mulch generously to conserve soil moisture and moderate temperature swings around the crown.',
                'Reduce watering in high summer once the plant is dormant-ish and resting under shade trees.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Winter & Spring',
                cadence: 'Weekly if dry',
                tip: 'Consistent moisture during bloom and new-leaf growth supports the best flower display.',
            },
            {
                season: 'Summer',
                cadence: 'Every 10-14 days',
                tip: 'Established plants tolerate some dryness under shade trees; water during prolonged heat.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 1-2 weeks',
                tip: 'Keep soil from drying out completely as the plant sets buds for next winter’s bloom.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture, particularly for young plants.',
                    'Look over foliage for slug damage or leaf spot.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Cut back old, tattered leaves in late winter just before flowering.',
                    'Top-dress with compost and refresh mulch in early spring.',
                    'Divide congested clumps in early autumn if flowering has thinned.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Bypass pruners',
                note: 'For cutting back old foliage cleanly at the base without disturbing the crown.',
            },
            {
                item: 'Leaf mold or compost',
                note: 'Worked into the planting area, it recreates the humus-rich woodland soil this species prefers.',
            },
            {
                item: 'Shredded bark mulch',
                note: 'Retains moisture and moderates soil temperature around the shallow crown.',
            },
            {
                item: 'Garden gloves',
                note: 'Sap can irritate skin, so gloves are worth wearing during pruning or division.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Blackened, Spotted Leaves',
                description:
                    'Dark blotches spreading across foliage, especially in wet or crowded conditions, point to hellebore leaf spot, a common fungal issue.',
                actions: [
                    'Remove and discard affected leaves promptly, cutting at the base.',
                    'Improve airflow by thinning nearby plantings.',
                    'Avoid overhead watering; water at the soil line instead.',
                ],
            },
            {
                title: 'Sparse or Absent Flowering',
                description:
                    'Healthy foliage with few or no blooms usually means too much shade, a still-establishing root system, or an overcrowded clump.',
                actions: [
                    'Confirm the site gets at least some dappled winter light.',
                    'Be patient with plants under two years old — flowering builds over time.',
                    'Divide dense, older clumps in early autumn to renew vigor.',
                ],
            },
            {
                title: 'Yellowing, Wilting Foliage',
                description:
                    'Pale, drooping leaves despite adequate shade often trace back to waterlogged soil or root rot.',
                actions: [
                    'Check drainage and improve it with compost or a raised planting position.',
                    'Ease back on watering until the soil surface dries somewhat.',
                    'Remove badly affected foliage to prevent fungal spread.',
                ],
            },
        ],
        pests: [
            {
                name: 'Slugs and Snails',
                signs: 'Ragged holes in new leaves and flower buds, particularly in damp weather.',
                treatment:
                    'Use iron phosphate bait around the crown or hand-pick in the evening; established plants tolerate light damage.',
            },
            {
                name: 'Aphids',
                signs: 'Small clustered insects on new growth and flower stems in spring.',
                treatment:
                    'Hose off light infestations or treat with insecticidal soap every 5-7 days until clear.',
            },
            {
                name: 'Hellebore Leaf Miner',
                signs: 'Winding pale trails tunneled through leaf tissue.',
                treatment:
                    'Remove and discard mined leaves; damage is mostly cosmetic and rarely threatens the plant.',
            },
        ],
        stabilityChecklist: [
            'Plant in humus-rich, well-drained shade and be patient through the first two seasons.',
            'Cut back old foliage in late winter to showcase flowers and reduce leaf spot.',
            'Water consistently while establishing; ease off once mature.',
            'Keep all parts away from pets and children — the entire plant is toxic if ingested.',
        ],
    },
};
