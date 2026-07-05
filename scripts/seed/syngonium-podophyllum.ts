import type { Plant } from '../../lib/db/models/Plant';

export const syngoniumPodophyllum: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'syngonium',
    species: 'podophyllum',
    commonNames: ['Arrowhead Plant', 'Arrowhead Vine', 'Goosefoot Plant'],
    description:
        'Arrow-shaped juvenile leaves mature into deeply lobed, almost hand-like foliage — Syngonium podophyllum is a fast, forgiving climber that shifts its own look as it grows.',
    images: [],
    tags: ['aroid', 'vining', 'beginner-friendly', 'mildly-toxic'],
    highlights: [
        'Native to the rainforests of Central and South America.',
        'Leaf shape changes with age — young plants show simple arrowheads, mature climbing growth splits into multiple lobes.',
        'Left untrained it trails; given a pole or moss stick it climbs and the leaves size up dramatically.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Frost-tender; keep above 60°F year-round.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption: 'Tolerates medium light but leaves stay small and slow.',
        },
        watering: {
            score: 3,
            value: 'Moderate — top 1-2" dry',
            caption:
                'Water when the upper soil dries; roughly weekly in season.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Fast, adaptable, and quick to bounce back from neglect.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Calcium oxalate crystals irritate mouths and stomachs — keep away from pets and kids.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '3-6 ft vines',
            detail: 'Trails from shelves and baskets or climbs a pole; climbing growth produces noticeably larger, more deeply lobed leaves than trailing growth.',
            minFt: 3,
            maxFt: 6,
        },
        soil: {
            value: 'Light & airy mix',
            detail: 'A standard aroid blend of potting soil, perlite, and orchid bark drains fast while holding gentle moisture.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Cuttings root readily in water or LECA, making the move to passive hydro straightforward.',
            compatible: true,
        },
        fertilizer: {
            value: 'Foliage-forward',
            detail: 'A gentle nitrogen-leaning feed keeps new growth large and lush.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed at half strength monthly through spring and summer; pause over winter.',
        },
        nativeHabitat: {
            value: 'Central & South America',
            detail: 'Scrambles up rainforest trunks in warm, humid, dappled light — it wants moisture in the air more than in the soil.',
        },
        humidity: {
            value: '50%+ ideal',
            detail: 'Tolerates average room humidity but leaf edges crisp in very dry air.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Steady warmth suits it; growth stalls and leaf edges brown below 55°F.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'A quick grower in warm months — vines lengthen and leaves size up visibly week to week.',
        },
        dailyRhythm: {
            heading: 'A shapeshifting climber that rewards a little structure.',
            body: 'Arrowhead plant grows fast and changes its own leaf shape as it matures — the main job is deciding whether it trails or climbs, then keeping it pointed that way. A quick check for dryness and a nudge toward its support cover most days.',
            highlights: [
                'Bright, indirect light keeps leaves broad and well-lobed.',
                'Give it a moss pole early — climbing growth looks dramatically different from trailing growth.',
                'Every pruned cutting roots easily in water for a free new plant.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top 1-2" of soil for dryness.',
            },
            {
                interval: 'weekly',
                task: 'Scan new growth and leaf undersides for pests.',
            },
            { interval: 'weekly', task: 'Redirect or tie in climbing vines.' },
            {
                interval: 'as-needed',
                task: 'Water once the top 1-2" are dry; err on the dry side.',
            },
            {
                interval: 'monthly',
                task: 'Wipe leaves clean and feed at half strength in season.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Weekly-ish',
                detail: 'Water when the top 1-2" dries; leaves droop gently when thirsty and recover fast.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Enough light for broad, well-lobed leaves, but no harsh midday sun.',
            },
            {
                label: 'Support',
                stat: 'Climb or trail',
                detail: 'Climbing on a pole produces larger, more deeply cut leaves than left to trail.',
            },
            {
                label: 'Pruning',
                stat: 'Pinch as needed',
                detail: 'Trimming leggy runners keeps the base full instead of bare and stringy.',
            },
        ],
        wateringRhythm: {
            heading: 'Even moisture, honest signals.',
            body: 'Arrowhead plant likes its mix to dry partway between drinks. It telegraphs thirst with a soft, all-over droop and perks back up within hours of watering, making the rhythm easy to read.',
            tips: [
                'Droopy leaves plus dry soil means water now; droopy leaves plus wet soil means check the roots.',
                'Brown, crispy leaf edges point to low humidity rather than underwatering.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 5-7 days',
                tip: 'Fast growth means thirsty roots; check the topsoil twice a week.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Ease off as growth slows and light softens.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Let the mix dry deeper between drinks and hold fertilizer.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Rotate the pot so growth fills in evenly.',
                    'Tie in or redirect new vine growth onto its support.',
                    'Inspect new leaves and undersides for early pest signs.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe leaves clean to keep them photosynthesizing well.',
                    'Feed at half strength during the growing season.',
                    'Pinch leggy runners just above a node to encourage branching.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Root pruned cuttings in water and replant to thicken the base.',
                    'Repot in spring once roots crowd the nursery pot (every 1-2 years).',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Moss pole or small trellis',
                note: 'Unlocks larger, more deeply lobed mature leaves.',
            },
            {
                item: 'Sharp micro-snips',
                note: 'Clean cuts above nodes for pruning and propagation.',
            },
            {
                item: 'Propagation jars',
                note: 'Cuttings root in water within 2-3 weeks.',
            },
            {
                item: 'Neem + insecticidal soap duo',
                note: 'First-line defense against mites and thrips on soft new growth.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Small, Unlobed Leaves',
                description:
                    'New leaves staying simple and arrow-shaped instead of splitting into lobes signals insufficient light or no climbing support.',
                actions: [
                    'Move to a brighter spot with indirect light.',
                    'Add a moss pole or trellis — climbing triggers the mature, lobed leaf form.',
                    'Be patient; only new growth changes shape.',
                ],
            },
            {
                title: 'Yellow Leaves',
                description:
                    'Scattered yellowing of older leaves is normal turnover, but widespread yellowing points to overwatering.',
                actions: [
                    'Check soil moisture before anything else — soggy mix means longer dry-downs.',
                    'Ensure the pot drains freely and the cache pot is emptied after watering.',
                    'Remove fully yellowed leaves at the stem.',
                ],
            },
            {
                title: 'Crispy Leaf Edges',
                description:
                    'Brown, dry margins usually trace back to low humidity or a buildup of fertilizer salts.',
                actions: [
                    'Raise humidity with a pebble tray or humidifier.',
                    'Flush the soil with plain water to clear excess salts.',
                    'Trim damaged edges; they will not heal but new growth can come in clean.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                signs: 'Fine webbing and pale stippling, especially in dry winter air.',
                treatment:
                    'Shower the foliage, then spray weekly with insecticidal soap until new leaves emerge clean.',
            },
            {
                name: 'Mealybugs',
                signs: 'Cottony white clusters tucked into leaf axils and along stems.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol and follow with neem oil sprays until clear.',
            },
            {
                name: 'Fungus Gnats',
                signs: 'Small flies hovering around consistently damp soil.',
                treatment:
                    'Extend dry-downs, topdress with sand, and water in BTI to break the larval cycle.',
            },
        ],
        stabilityChecklist: [
            'Keep it bright — light drives both leaf size and lobing.',
            'Decide early whether it climbs or trails, and give it the matching support.',
            'Check new growth weekly, since pests target the softest tissue first.',
            'Refresh the mix every 1-2 years to keep drainage sharp.',
        ],
    },
};
