import type { Plant } from '../../lib/db/models/Plant';

export const droseraCapensis: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'drosera',
    species: 'capensis',
    commonNames: ['Cape Sundew'],
    description:
        'A fast-growing, forgiving carnivorous plant from South Africa whose strap-like leaves are covered in sticky, glistening tentacles that curl around trapped gnats and fruit flies within minutes. Its ease of care, rapid growth, and constant seed production make it the most commonly recommended first sundew.',
    images: [],
    tags: [
        'carnivorous',
        'sundew',
        'beginner-friendly',
        'non-toxic',
        'humidity-loving',
        'fast-growing',
    ],
    highlights: [
        'One of the easiest carnivorous plants to grow — tolerant of average home humidity and forgiving of minor care slips.',
        'Leaves visibly curl around trapped prey within 15-30 minutes, making it a favorite for watching carnivory in action.',
        'Self-sows readily and produces offshoots ("pups"), so a single plant often becomes several within a year or two.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11 outdoors; houseplant elsewhere',
            caption:
                'Native to the winter-rainfall Cape region of South Africa — grown as a year-round houseplant or greenhouse subject outside zone 9-11.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun to very bright light',
            caption:
                'Needs at least a few hours of direct sun or a strong grow light — the sticky dew that defines this plant only forms under strong light; low light produces limp, dew-less leaves.',
        },
        watering: {
            score: 5,
            value: 'Constantly moist, tray method',
            caption:
                'Sits in a shallow tray of distilled or rainwater at all times — the soil should never dry out.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption:
                'Among the most beginner-friendly carnivorous plants; the main failure points are tap water and letting the tray run dry.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                "Safe around pets and kids — the sticky mucilage only troubles the insects it's built to catch.",
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '6-12 in, rosette to sprawling',
            detail: 'Forms an upright rosette of strap-shaped leaves when young; older plants sprawl and lean, sometimes benefiting from a light stake.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Pure sphagnum peat mix, nutrient-free',
            detail: 'A 1:1 blend of peat moss and perlite or silica sand, with no potting soil, compost, or fertilizer additives — any nutrients or minerals in the mix damage the roots.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Grown in a peat-based mix sitting in a water tray rather than an inert semi-hydro medium; the fine, hair-like roots do best anchored in peat.',
            compatible: false,
        },
        fertilizer: {
            value: 'No fertilizer — prey only',
            detail: 'Never fertilize the soil — water only with distilled, reverse-osmosis, or rainwater. Indoors away from flying insects, an occasional crushed freeze-dried bloodworm on a leaf substitutes for prey.',
        },
        fertilizerFrequency: {
            value: 'Every few weeks, growing season only',
            detail: 'A tiny pinch of prey on a couple of leaves every few weeks through spring and summer is plenty — overfeeding a leaf can cause it to blacken.',
        },
        nativeHabitat: {
            value: 'South African winter-rainfall bogs and seeps',
            detail: 'Grows in nutrient-poor, permanently damp sandy soils in the Cape region, where sunlight is intense and prey is the only reliable nitrogen source.',
        },
        humidity: {
            value: 'Moderate, 40%+',
            detail: 'Unlike many carnivorous plants, Cape Sundew tolerates average indoor humidity well; it does not need a terrarium or cloche to thrive.',
            minPct: 40,
        },
        temperature: {
            value: '60° – 90°F',
            detail: 'Comfortable across typical room and greenhouse temperatures; brief cooler winter nights are tolerated without a true dormancy requirement.',
            minF: 60,
            maxF: 90,
        },
        growSeason: {
            value: 'Spring–Fall, near-continuous indoors',
            detail: 'Growth slows only slightly in winter under stable indoor conditions; outdoors it tracks the local growing season.',
        },
        dailyRhythm: {
            heading: 'A dew-covered leaf factory that never really stops growing.',
            body: "Cape Sundew's whole rhythm centers on light and moisture — keep both strong and it churns out new sticky leaves, flower stalks, and pups with little else required.",
            highlights: [
                'Dry, dull leaf tips (instead of glistening dew) are the first sign light or moisture has dropped too low.',
                'Tall, wiry flower stalks are normal and can be left to self-seed or snipped off to redirect energy to leaves.',
                'Older lower leaves browning and dying back is normal aging — new leaves emerge continuously from the center.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Refill the water tray with distilled or rainwater so it never runs dry.',
            },
            {
                interval: 'weekly',
                task: 'Check that leaves are glistening with dew; move to brighter light if they look dry or dull.',
            },
            {
                interval: 'monthly',
                task: 'Snip spent flower stalks and remove any fully browned lower leaves.',
            },
            {
                interval: 'seasonal',
                task: 'Divide and repot pups or offshoots once they crowd the pot.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Full sun / strong grow light',
                detail: 'The single biggest driver of dew production — without strong light, leaves stay limp and dry.',
            },
            {
                label: 'Water Quality',
                stat: 'Distilled or rainwater only',
                detail: "Tap water minerals accumulate in the peat and burn the plant's fine roots over time.",
            },
            {
                label: 'Tray Method',
                stat: 'Always standing in water',
                detail: 'A shallow saucer kept topped up removes the guesswork of a manual watering schedule.',
            },
            {
                label: 'Feeding',
                stat: 'Optional, prey only',
                detail: 'Sundews catch plenty of their own gnats and fruit flies indoors — supplemental feeding just speeds growth.',
            },
        ],
        wateringRhythm: {
            heading: 'Never let the tray run dry.',
            body: 'Keep the pot standing in a half-inch to an inch of distilled, reverse-osmosis, or rainwater at all times, letting the peat mix wick moisture upward. Refill the tray before it empties completely rather than waiting for the soil surface to look dry.',
            tips: [
                'A clear or lightly tinted tray makes it easy to glance and check the water level.',
                'If leaves lose their dew despite a full tray, the issue is almost always insufficient light, not water.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Tray always full',
                tip: 'Peak growing season — evaporation is faster, so check the tray more often in heat.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Tray kept topped up, slightly less often',
                tip: 'Growth slows a little with shorter days; keep it damp but ease off if the room runs cool.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Top up the water tray with distilled or rainwater.',
                    'Glance over the leaves to confirm dew droplets are present and glistening.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Remove browned lower leaves and spent flower stalks.',
                    'Separate and repot any pups that have formed at the base.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Distilled, reverse-osmosis, or rainwater',
                note: 'The most common cause of decline is tap water salts building up in the peat.',
            },
            {
                item: 'Peat moss and perlite (or silica sand) mix',
                note: 'A nutrient-free medium that holds moisture without waterlogging the roots.',
            },
            {
                item: 'Shallow humidity/water tray',
                note: 'Keeps the pot constantly wicking moisture without daily manual watering.',
            },
            {
                item: 'Strong grow light or unobstructed south-facing window',
                note: 'Directly determines how much dew — and how many traps — the plant produces.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Dry, Dew-less Leaves',
                description:
                    "Leaves that look green but lack sticky droplets have almost always dropped below the light level they need — it's rarely a watering issue at this stage.",
                actions: [
                    'Move to the brightest available window or add a dedicated grow light.',
                    'Confirm the water tray is full — dryness at the root can compound the problem.',
                ],
            },
            {
                title: 'Blackened Leaf Tip',
                description:
                    'An occasional leaf blackening after overfeeding or old age is normal; widespread blackening points to fertilizer or mineral exposure.',
                actions: [
                    'Trim the affected leaf at its base with clean scissors.',
                    'Flush the pot with distilled water and switch water sources if tap water was used.',
                ],
            },
            {
                title: 'Leggy, Sprawling Growth',
                description:
                    'Stretching and leaning toward a light source signals the plant is reaching for more light than it currently gets.',
                actions: [
                    'Rotate the pot regularly or move it closer to the light source.',
                    'Stake sprawling stems if the plant has grown tall and top-heavy.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small clustered insects on flower stalks and new leaf growth.',
                treatment:
                    'Rinse gently with water and apply insecticidal soap for persistent infestations, keeping soap off the sticky leaf traps.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white residue at the base of leaves or along flower stalks.',
                treatment:
                    'Dab clusters with isopropyl alcohol on a cotton swab, avoiding the dew-covered trap surfaces.',
            },
            {
                name: 'Botrytis (grey mold)',
                signs: 'Fuzzy grey mold on dying leaves or crowded, poorly ventilated rosettes.',
                treatment:
                    'Remove affected leaves promptly and improve airflow around the plant; avoid overcrowding pots together.',
            },
        ],
        stabilityChecklist: [
            'Water only with distilled, reverse-osmosis, or rainwater — never tap.',
            'Keep the tray full and the plant in full sun or under a strong grow light.',
            'Skip fertilizer entirely — let the plant catch its own prey or feed sparingly with dried insects.',
            'Trim spent flower stalks and browned leaves to keep growth tidy.',
        ],
    },
};
