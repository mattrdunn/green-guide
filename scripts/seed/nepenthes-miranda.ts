import type { Plant } from '../../lib/db/models/Plant';

export const nepenthesMiranda: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'nepenthes',
    species: 'miranda',
    commonNames: ['Miranda Pitcher Plant', "Nepenthes 'Miranda'"],
    description:
        'A robust, beginner-friendly hybrid pitcher plant prized for its large, barrel-shaped pitchers blushed red-orange at the mouth. Miranda tolerates average home humidity far better than most Nepenthes, making it the most forgiving entry point into carnivorous plant care.',
    images: [],
    tags: [
        'carnivorous',
        'pitcher-plant',
        'hybrid',
        'vining',
        'tropical',
        'non-toxic',
        'humidity-loving',
    ],
    highlights: [
        'Produces two distinct pitcher forms: squat, mottled lower pitchers that trap crawling insects, and slimmer, flask-shaped upper pitchers that lure flying prey.',
        'One of the most beginner-forgiving Nepenthes hybrids — tolerates average home humidity far better than pure highland species.',
        'A vigorous climbing vine; give it a trellis, hanging basket, or open shelf so its tendrils and pitchers can hang freely.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12 outdoors; houseplant elsewhere',
            caption:
                'Native to humid tropical highlands — treat as a year-round indoor or greenhouse plant outside zone 10-12.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect light',
            caption:
                'An east-facing window or grow light suits it best; a little gentle morning sun deepens pitcher color, but harsh midday sun scorches the leaves.',
        },
        watering: {
            score: 5,
            value: 'Constantly moist, never dry',
            caption:
                'Keep the growing medium evenly damp at all times using distilled, reverse-osmosis, or rainwater — tap water minerals build up and kill the roots.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Easier than most Nepenthes, but still needs steady humidity and mineral-free water to thrive long-term.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                "Safe around pets and kids — the plant's digestive enzymes are only a hazard to the insects it traps.",
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '3-8 ft as a climbing vine',
            detail: 'Left unstaked, stems sprawl and trail; given a pole or trellis, it climbs steadily and tends to produce larger pitchers with height.',
            minFt: 3,
            maxFt: 8,
        },
        soil: {
            value: 'Chunky, nutrient-free mix',
            detail: 'Long-fibered sphagnum moss alone, or a blend of orchid bark, perlite, and sphagnum — never potting soil or fertilizer-amended mixes, which burn the roots.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Many growers keep Nepenthes in a semi-hydro setup with LECA and a water reservoir, which helps maintain the constant moisture and humidity they need.',
            compatible: true,
        },
        fertilizer: {
            value: 'No fertilizer — prey only',
            detail: 'Never fertilize the soil or pitcher fluid — water only with distilled, reverse-osmosis, or rainwater. If grown indoors with little access to live insects, occasionally drop a single rehydrated freeze-dried bloodworm into a mature pitcher instead.',
        },
        fertilizerFrequency: {
            value: 'Monthly, growing season only',
            detail: 'Feed only a few active pitchers roughly once a month, spring through fall. Overfeeding, or feeding dormant or newly opened pitchers, can cause them to blacken and rot.',
        },
        nativeHabitat: {
            value: 'Philippine tropical forest margins',
            detail: "Nepenthes 'Miranda' is a robust hybrid (N. maxima × N. northiana) bred for cultivation; its parent species hail from humid, misty tropical forests with bright, filtered light.",
        },
        humidity: {
            value: 'High, 50-70%+',
            detail: 'Consistently humid air keeps pitchers forming; in dry homes, group with other plants, use a pebble tray, or run a humidifier nearby.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Thrives in warm, stable "intermediate" conditions; avoid cold drafts and sudden temperature swings below 55°F.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'New pitchers and vining growth are most active in warm months; growth slows and existing pitchers simply persist longer through winter.',
        },
        dailyRhythm: {
            heading: 'A vining trap-maker that thrives on humidity and patience.',
            body: "Miranda's daily needs are simple — steady moisture, bright filtered light, and humid air — but its pitchers are the real reward, each one taking weeks to swell and open before beginning its own months-long hunting life.",
            highlights: [
                'Empty pitchers filling with fluid are the plant preparing its next trap, not a problem.',
                'A pitcher that browns and dries after several months has simply finished its natural lifecycle — new ones will follow.',
                'Trim spent vine tips to encourage bushier growth and more pitcher-producing nodes.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check that the growing medium is still evenly moist; top up the tray or mist as needed.',
            },
            {
                interval: 'weekly',
                task: 'Check pitcher fluid levels; top off empty pitchers with a few drops of distilled water.',
            },
            {
                interval: 'monthly',
                task: 'Drop a small prey item into one or two mature pitchers.',
            },
            {
                interval: 'seasonal',
                task: 'Trim spent pitchers and leggy vine growth, and refresh the sphagnum moss once it starts breaking down.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Humidity',
                stat: '50-70%+ RH',
                detail: 'Steady humid air is what keeps new pitchers forming — the single biggest lever for a thriving plant.',
            },
            {
                label: 'Water Quality',
                stat: 'Distilled or rainwater only',
                detail: 'Mineral salts in tap water accumulate in the medium and roots, causing slow decline.',
            },
            {
                label: 'Feeding',
                stat: '1-2 pitchers/month',
                detail: "Occasional prey supplies nitrogen the plant can't get from soil — skip fertilizer entirely.",
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Filtered brightness colors up pitchers without scorching the leaves.',
            },
        ],
        wateringRhythm: {
            heading: 'Constant moisture, mineral-free water.',
            body: "Keep the medium evenly damp at all times — Nepenthes roots never fully dry out in the wild. Water with distilled, reverse-osmosis, or fresh rainwater whenever the surface starts to feel just barely dry; standard tap water's dissolved salts build up in the sphagnum or bark mix and burn the fine roots over time.",
            tips: [
                "Sit the pot in a shallow saucer of water for extra buffer against drying out, but don't let it sit stagnant for weeks — refresh it.",
                'A hygrometer near the plant is more useful than a watering schedule; humidity swings matter more than soil moisture swings.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Keep constantly moist',
                tip: 'Growth ramps up — this is when new pitchers form fastest.',
            },
            {
                season: 'Summer',
                cadence: 'Keep constantly moist, mist daily',
                tip: 'Heat and airflow dry the medium faster; check moisture more often.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Keep evenly moist, ease off misting',
                tip: 'Growth slows; keep the plant somewhere stable and warm rather than cold and soggy.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check medium moisture and pitcher fluid levels.',
                    'Mist the foliage and pitchers if indoor humidity is running low.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Trim blackened, spent pitchers and any leggy vine growth.',
                    'Refresh or top up sphagnum moss as it compacts or breaks down.',
                    'Stake or redirect vining growth toward a trellis or hanging support.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Distilled, reverse-osmosis, or rainwater',
                note: 'Non-negotiable — tap water minerals are the #1 cause of slow decline.',
            },
            {
                item: 'Long-fibered sphagnum moss or orchid bark mix',
                note: 'Chunky, nutrient-free media that stays moist without staying waterlogged.',
            },
            {
                item: 'Small hygrometer',
                note: 'Tracks humidity, the single most important environmental factor for pitcher production.',
            },
            {
                item: 'Freeze-dried bloodworms or betta pellets',
                note: 'A convenient, mess-free prey substitute for monthly feeding.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Pitchers Stop Forming ("Pitcher-less" Vine)',
                description:
                    'Long vines with only leaf tips and no traps almost always trace back to low humidity.',
                actions: [
                    'Raise ambient humidity above 50% with a humidifier, pebble tray, or enclosed grow space.',
                    'Move to brighter, filtered light — pitcher production needs both humidity and light together.',
                ],
            },
            {
                title: 'Blackened, Mushy Pitcher',
                description:
                    'An occasional pitcher blackening after months of use is normal end-of-life; several failing at once signals overfeeding or rot.',
                actions: [
                    'Snip off the spent pitcher at its base with clean scissors.',
                    'Skip feeding for a cycle if multiple pitchers are blackening at once.',
                ],
            },
            {
                title: 'Crispy Leaf Edges',
                description:
                    'Dry, brittle margins point to low humidity or a mineral buildup from tap water.',
                actions: [
                    'Switch immediately to distilled, RO, or rainwater.',
                    'Group with other humidity-loving plants or add a humidity tray nearby.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                signs: 'Cottony white clusters in leaf axils and along new vine growth.',
                treatment:
                    'Dab clusters with isopropyl alcohol and follow with insecticidal soap, keeping both out of open pitcher fluid.',
            },
            {
                name: 'Aphids',
                signs: 'Small clustered insects on tender new shoots and unopened pitchers.',
                treatment:
                    'Rinse off with a gentle water spray and apply insecticidal soap for persistent infestations.',
            },
            {
                name: 'Root Mealybugs',
                signs: 'Slow decline and stunted pitchers despite good care; white residue in the root ball at repotting.',
                treatment:
                    'Bare-root the plant, rinse the roots thoroughly, and repot into fresh sterile medium.',
            },
        ],
        stabilityChecklist: [
            'Water only with distilled, reverse-osmosis, or rainwater — never tap.',
            'Keep humidity above 50% and light bright but filtered.',
            'Feed sparingly — one or two pitchers a month, never the whole plant at once.',
            'Let spent pitchers finish their natural lifecycle before trimming them away.',
        ],
    },
};
