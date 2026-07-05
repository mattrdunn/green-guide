import type { Plant } from '../../lib/db/models/Plant';

export const cattleyaLabiata: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'cattleya',
    species: 'labiata',
    commonNames: ['Corsage Orchid', 'Cattleya Orchid'],
    description:
        'The classic corsage orchid — large, ruffled, fragrant blooms follow plump water-storing pseudobulbs. Unlike shade-tolerant Phalaenopsis, Cattleya wants strong light and a pronounced dry stretch between waterings to bloom well.',
    images: [],
    tags: ['orchid', 'epiphyte', 'flowering', 'non-toxic', 'fragrant'],
    highlights: [
        'Native to the exposed canopy branches of Brazilian rainforests, where it gets far more direct sun than most houseplant orchids tolerate.',
        'Blooms emerge from a papery sheath atop a mature pseudobulb — a single bulb typically flowers once, then stores energy for the next.',
        'Prized in the cut-flower trade for over a century; many hybrids trace their corsage-orchid looks directly back to this species.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11 outdoors; houseplant elsewhere',
            caption: 'A warm epiphyte from subtropical Brazil — bring indoors below zone 10.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright, with some direct sun',
            caption: 'Wants far more light than a moth orchid — a south or west window, or gentle morning direct sun.',
        },
        watering: {
            score: 2,
            value: 'Deep soak, then dry out fully',
            caption: 'Water thoroughly, then let the pseudobulbs and mix approach bone-dry before the next soak — overwatering is the top killer.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Needs more light and a stricter dry-down than a Phalaenopsis to bloom reliably.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around pets and kids.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '1-2 ft per growth',
            detail: 'Upright pseudobulbs topped with one or two leathery leaves; a mature plant forms a spreading clump of bulbs at different stages.',
            minFt: 1,
            maxFt: 2,
        },
        soil: {
            value: 'Coarse bark & perlite, or mounted',
            detail: 'A very open, fast-draining mix of large-grade fir bark and perlite, or mounted bare on cork or tree fern for maximum air movement around the roots.',
        },
        semiHydro: {
            value: 'Possible, less common',
            detail: 'Some growers succeed with LECA, but the constant moisture works against the pronounced dry cycle this species prefers — pot culture is more forgiving.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, then bloom-booster',
            detail: 'Feed a balanced fertilizer through vegetative growth, then switch to a higher-phosphorus bloom booster once a new pseudobulb matures and a sheath appears.',
            npk: '20-10-20',
        },
        fertilizerFrequency: {
            value: 'Weekly (diluted) in growth, monthly in rest',
            detail: 'Feed weekly at quarter-strength while new growth is active; cut back to monthly once bulbs mature and the plant rests before blooming.',
        },
        nativeHabitat: {
            value: 'Brazilian rainforest canopy',
            detail: 'Grows exposed on tree branches high in the canopy, receiving bright, filtered-to-direct light and a distinct wet-dry seasonal rhythm.',
        },
        humidity: {
            value: '50-60% ideal',
            detail: 'Tolerates average home humidity better than many orchids, provided airflow keeps the pseudobulbs from staying damp.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 85°F, with a night drop',
            detail: 'A 10-15°F drop between day and night helps initiate blooming — avoid keeping it in a perfectly stable, heated room.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'New pseudobulbs in summer, blooms follow rest',
            detail: 'Each new pseudobulb matures over the growing season, then a rest period with reduced water triggers the sheath and bloom.',
        },
        dailyRhythm: {
            heading: 'A sun-loving bloomer built around a wet-dry rhythm.',
            body: 'Cattleya wants far more light than the average houseplant orchid, paired with a firm dry-down between waterings. Get that rhythm right and mature pseudobulbs reward you with large, fragrant blooms.',
            highlights: [
                'Silvery-green, slightly wrinkled pseudobulbs mean it is time to water; plump green ones mean wait.',
                'A papery sheath at the top of a new bulb signals a bloom is on its way — do not disturb it.',
                'Yellow-green foliage (not dark green) signals the plant is getting enough light to bloom.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check pseudobulb firmness and water deeply only once the mix has dried through.',
            },
            {
                interval: 'weekly',
                task: 'Feed at quarter-strength during active growth; skip while resting.',
            },
            {
                interval: 'monthly',
                task: 'Rotate for even light and inspect new pseudobulbs for sheaths.',
            },
            {
                interval: 'seasonal',
                task: 'Reduce watering frequency once a pseudobulb matures to encourage bloom initiation.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright, some direct sun',
                detail: 'The single biggest reason Cattleya fails to rebloom indoors is simply not enough light.',
            },
            {
                label: 'Dry-Down',
                stat: 'Approach bone-dry',
                detail: 'Pseudobulbs store water — let the mix dry out fully between soaks rather than watering on a fixed schedule.',
            },
            {
                label: 'Temperature Swing',
                stat: '10-15°F day/night drop',
                detail: 'A cooler night than day helps cue sheath formation and bloom timing.',
            },
            {
                label: 'Rest Period',
                stat: 'Reduced water post-growth',
                detail: 'Easing off water once a bulb matures signals the plant to bloom rather than push more leaf growth.',
            },
        ],
        wateringRhythm: {
            heading: 'Soak deeply, then wait for a real dry-down.',
            body: 'Water thoroughly until it runs through the mix, then let the pot approach fully dry — pseudobulbs should feel slightly firm-to-yielding, not squishy, before the next soak. This is a much longer dry stretch than most houseplants tolerate, and it is exactly what triggers healthy new growth and blooms.',
            tips: [
                'Lift the pot to judge weight — a dry pot is noticeably lighter than a freshly watered one.',
                'Wrinkled pseudobulbs after watering mean the dry stretch went too long; adjust slightly sooner next time.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 7-10 days',
                tip: 'Active growth and strong light mean faster drying — check bulb firmness before assuming it needs water.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 10-14 days',
                tip: 'Ease off as pseudobulbs mature; this is when sheaths often appear.',
            },
            {
                season: 'Winter / Rest',
                cadence: 'Every 14-21 days',
                tip: 'A firmer dry-down now helps push the plant into bloom rather than vegetative growth.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check pseudobulb firmness and pot weight before deciding to water.',
                    'Feed at quarter-strength if new growth is active.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Inspect for developing sheaths and stake bloom spikes as they emerge.',
                    'Rotate the plant so light reaches all growths evenly.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Trim any fully spent, papery-brown pseudobulb sheaths.',
                    'Repot every 2-3 years once the mix breaks down, ideally right as new roots emerge.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Large-grade fir bark or cork mount',
                note: 'Maximizes airflow around roots to support the pronounced dry cycle this species needs.',
            },
            {
                item: 'High-phosphorus bloom booster fertilizer',
                note: 'Swapped in once a sheath appears to support bud development.',
            },
            {
                item: 'Bright grow light or south-facing window',
                note: 'Supplemental light is often the deciding factor for reliable indoor blooming.',
            },
            {
                item: 'Bloom spike stake',
                note: 'Supports the weight of large, heavy corsage-style flowers.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Wrinkled Pseudobulbs',
                description:
                    'Slight wrinkling right before a scheduled watering is normal; persistent wrinkling even after watering points to root loss.',
                actions: [
                    'Unpot and trim any mushy or hollow roots back to firm, white tissue.',
                    'Repot into fresh, coarse mix and resume a careful soak-and-dry cycle.',
                ],
            },
            {
                title: 'No Blooms, Only Leaf Growth',
                description:
                    'Dark green, floppy leaves with no sheaths almost always mean insufficient light.',
                actions: [
                    'Move to the brightest available window or add a dedicated grow light.',
                    'Watch for yellow-green foliage — that shade signals enough light to support blooming.',
                ],
            },
            {
                title: 'Bud Blast',
                description:
                    'Developing buds shriveling before opening usually traces to a sudden environmental shock.',
                actions: [
                    'Keep temperature, humidity, and watering consistent once a sheath appears.',
                    'Avoid moving the plant or exposing it to cold drafts while buds are forming.',
                ],
            },
        ],
        pests: [
            {
                name: 'Scale',
                signs: 'Small brown, dome-shaped bumps along pseudobulbs and leaf undersides.',
                treatment:
                    'Scrape off manually and follow with horticultural oil every 1-2 weeks until clear.',
            },
            {
                name: 'Mealybugs',
                signs: 'Cottony clusters hidden at the base of pseudobulbs and in leaf folds.',
                treatment:
                    'Dab with isopropyl alcohol, then treat with insecticidal soap weekly until no new clusters appear.',
            },
            {
                name: 'Spider Mites',
                signs: 'Fine stippling on leaves, worse in bright, dry conditions this species prefers.',
                treatment:
                    'Rinse foliage periodically and treat with insecticidal soap or neem oil at the first sign of stippling.',
            },
        ],
        stabilityChecklist: [
            'Prioritize light above all else — this species blooms poorly in shade that a Phalaenopsis would tolerate.',
            'Let the mix dry out fully between waterings; err on the side of underwatering.',
            'Look for a natural day/night temperature drop to help cue blooming.',
            'Leave sheaths undisturbed once they appear — the bloom is developing inside.',
        ],
    },
};
