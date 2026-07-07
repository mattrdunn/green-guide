import type { Plant } from '../../lib/db/models/Plant';

export const peperomiaObtusifolia: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'peperomia',
    species: 'obtusifolia',
    commonNames: ['Baby Rubber Plant', 'Pepper Face'],
    description:
        'A compact, easygoing houseplant with thick, glossy, spoon-shaped leaves that store water like a succulent — Baby Rubber Plant tolerates low light and irregular watering better than almost anything else on a shelf.',
    images: [],
    tags: [
        'succulent-leaved',
        'compact',
        'pet-friendly',
        'beginner-friendly',
        'non-toxic',
    ],
    highlights: [
        'Native to Florida, the Caribbean, and Central America, where it grows as both an epiphyte and a groundcover in dappled shade.',
        'Thick, waxy leaves hold enough water that it can go two or three weeks between drinks without complaint.',
        'Variegated forms exist (marble, gold-splash) with materially identical care to the plain green species.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Frost-tender; keep above 55°F year-round.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Low to bright, indirect',
            caption:
                'Tolerates dim corners well; avoid direct sun, which bleaches and scorches the glossy leaves.',
        },
        watering: {
            score: 2,
            value: 'Let dry between drinks',
            caption:
                'Thick leaves store water — soggy soil rots the roots far faster than a missed watering hurts it.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption:
                'One of the most forgiving houseplants available; thrives on benign neglect.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Considered safe for cats and dogs — a rare trait for a common houseplant.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '6-12 in indoors',
            detail: 'Stays compact and shrubby in a pot; older stems can flop and root where they touch soil.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Well-draining succulent or aroid mix',
            detail: 'Potting mix cut with perlite and bark drains fast enough to keep the thick roots from rotting.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Transitions well to LECA once established; thick roots adapt readily to semi-hydro moisture levels.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced liquid feed',
            detail: 'A gentle, balanced fertilizer at half strength supports steady growth without pushing leggy stems.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly spring through early fall; skip winter entirely.',
        },
        nativeHabitat: {
            value: 'Florida, Caribbean & Central America',
            detail: 'Grows as an epiphyte on trees and as groundcover in humid, shaded understory.',
        },
        humidity: {
            value: '40%+ tolerated',
            detail: 'Adapts to average home humidity without fuss; extra humidity is a bonus, not a requirement.',
            minPct: 40,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges; protect from cold drafts below 55°F.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Slow and steady even at its fastest — expect a handful of new leaves per month in bright light.',
        },
        dailyRhythm: {
            heading: 'A low-drama plant that mostly wants to be left alone.',
            body: 'Baby Rubber Plant asks for very little day to day: a glance to confirm the soil is still dry, and an occasional wipe of its glossy leaves. Its biggest risk is attention in the wrong form — watering out of habit rather than need.',
            highlights: [
                'Check soil moisture roughly once a week; it dries slowly.',
                'Wipe leaves occasionally to keep their natural shine and let in more light.',
                'Pinch or prune leggy stems to keep the plant bushy rather than sprawling.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top 2" of soil — only water if it is fully dry.',
            },
            {
                interval: 'weekly',
                task: 'Scan leaf undersides and stem joints for early pest activity.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly once the mix is dry, then let it drain completely.',
            },
            {
                interval: 'monthly',
                task: 'Wipe leaves clean and pinch back any leggy stems.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 12-18 days',
                detail: 'Thick leaves and stems store water — err toward underwatering rather than over.',
            },
            {
                label: 'Light',
                stat: 'Low to bright, indirect',
                detail: 'Tolerates shade better than most succulent-leaved plants, but grows fuller with more brightness.',
            },
            {
                label: 'Nutrition',
                stat: 'Monthly, diluted',
                detail: 'Slow growth needs only light, occasional feeding during the growing season.',
            },
            {
                label: 'Pruning',
                stat: 'Pinch as needed',
                detail: 'Pinching leggy stems keeps the rosette compact instead of sprawling.',
            },
        ],
        wateringRhythm: {
            heading: 'When in doubt, wait.',
            body: 'Let the entire pot dry out before watering again, then soak thoroughly and let it drain fully. Baby Rubber Plant would rather go a week too long without water than sit in damp soil for even a few days.',
            tips: [
                'Slightly wrinkled, softer leaves are the honest thirst signal — they plump back up within a day of watering.',
                'Mushy, translucent leaves mean the roots are already rotting — cut back on watering immediately.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 10-14 days',
                tip: 'Check the pot weight or soil moisture weekly; water only once it is bone-dry.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 14-18 days',
                tip: 'Stretch the interval further as growth slows with shorter days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 3-4 weeks',
                tip: 'Water sparingly — cold, wet soil is the fastest way to lose this plant in winter.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture before doing anything else.',
                    'Inspect stem joints and leaf undersides for pests.',
                    'Rotate the pot a quarter turn for even light exposure.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe leaves clean with a damp cloth.',
                    'Pinch back leggy stems just above a leaf node.',
                    'Feed with a diluted balanced fertilizer during the growing season.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Well-draining succulent mix',
                note: 'Extra perlite or bark keeps the thick roots from sitting in moisture.',
            },
            {
                item: 'Sharp micro-snips',
                note: 'Clean pinches above a node encourage bushier regrowth.',
            },
            {
                item: 'Soft cloth for leaves',
                note: 'Dust buildup on the glossy foliage cuts down on light absorption.',
            },
            {
                item: 'Moisture meter (optional)',
                note: 'Useful for confirming the pot is truly dry all the way through before rewatering.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Mushy, Translucent Leaves',
                tag: 'Overwatering',
                description:
                    'Soft, almost see-through leaves that drop at a touch signal root rot from soil that never gets to dry out.',
                actions: [
                    'Unpot and check the roots; trim away any brown, mushy sections.',
                    'Repot into fresh, fast-draining mix and a pot with drainage holes.',
                    'Hold off watering for at least a week after repotting.',
                ],
            },
            {
                title: 'Wrinkled, Deflated Leaves',
                tag: 'Underwatering',
                description:
                    'Softer, slightly shriveled leaves mean the water-storing tissue has been running on empty for a while.',
                actions: [
                    'Water thoroughly and expect leaves to plump back up within a day.',
                    'Shorten the watering interval slightly if this happens repeatedly.',
                ],
            },
            {
                title: 'Leggy, Sprawling Growth',
                description:
                    'Long bare stems with leaves clustered only at the tips point to insufficient light.',
                actions: [
                    'Move to a brighter spot with filtered light.',
                    'Pinch stems back to encourage denser, bushier regrowth.',
                    'Propagate leggy cuttings to fill the pot back in.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White cottony clusters tucked into leaf joints and along stems.',
                treatment:
                    'Swab visible clusters with rubbing alcohol, then follow up with horticultural oil every 7-10 days.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and faint webbing on leaf undersides, especially in dry winter air.',
                treatment:
                    'Shower the foliage, then apply insecticidal soap weekly until new leaves emerge clean.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Small flies hovering around soil that stays damp too long.',
                treatment:
                    'Let the mix dry further between waterings and drench with BTI (mosquito bits) to kill larvae.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small, hard brown bumps along stems that do not wipe off easily.',
                treatment:
                    'Scrape off light infestations by hand, then follow with horticultural oil every 1-2 weeks.',
            },
        ],
        stabilityChecklist: [
            'Let the entire pot dry out before watering again — this is the single biggest lever on plant health.',
            'Use a fast-draining, chunky mix and a pot with drainage holes.',
            'Give bright, indirect light for the fullest, most compact growth.',
            'Pinch leggy stems periodically and propagate the cuttings to keep the pot full.',
        ],
    },
};
