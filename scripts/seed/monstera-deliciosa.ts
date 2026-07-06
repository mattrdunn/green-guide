import type { Plant } from '../../lib/db/models/Plant';

export const monsteraDeliciosa: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'monstera',
    species: 'deliciosa',
    commonNames: ['Swiss Cheese Plant'],
    description:
        'Architectural leaves, forgiving care, and adaptable growth habits make Monstera deliciosa a staple for bright homes and lush patios alike.',
    images: [
        {
            url: 'plants/monstera/deliciosa/img-1.jpeg',
            alt: 'Monstera deliciosa leaf close-up',
        },
        {
            url: 'plants/monstera/deliciosa/img-2.jpeg',
            alt: 'Monstera leaf detail',
        },
    ],
    tags: ['aroid', 'vining', 'beginner-friendly', 'mildly-toxic'],
    highlights: [
        'Native to the tropical rainforests of Southern Mexico.',
        'Fenestrations form once plants reach 3+ years old.',
        'Hardy enough to skip misting — ambient home humidity is usually fine.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Keep above 60°F year-round.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption: 'Morning sun, filtered afternoons.',
        },
        watering: {
            score: 2,
            value: 'Soak & dry out',
            caption: 'Water until runoff, then wait for the top 2" to dry.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'Perfect for confident beginners.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Contains calcium oxalate crystals — keep away from pets and curious kids.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '3-10 ft indoors',
            detail: 'Expect the plant to climb once given a moss pole or trellis; prune vines above 10 ft to keep fenestrations manageable.',
            minFt: 3,
            maxFt: 10,
        },
        soil: {
            value: 'Light & airy mix',
            detail: 'Blend chunky bark, perlite, and coco coir for a well-draining aroid mix that still holds gentle moisture.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Switch to LECA or pon with a mild nutrient solution after roots are acclimated to passive hydro.',
            compatible: true,
        },
        fertilizer: {
            value: '4N-2P-1K',
            detail: 'Balanced, foliage-forward fertilizers keep steady growth without leaf burn.',
            npk: '4-2-1',
        },
        fertilizerFrequency: {
            value: 'Every 3 months',
            detail: 'Feed lightly during the growing season and pause when light levels dip in winter.',
        },
        nativeHabitat: {
            value: 'Southern Mexico',
            detail: 'Epiphytic vines climbing jungle canopies—mimic with totems or trellises indoors.',
        },
        humidity: {
            value: '60%+ ideal',
            detail: 'Leaf edges crisp below 40%; humidifiers or clustering plants together helps.',
            minPct: 60,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Protect from drafts and sudden drops below 55°F.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'Expect largest jumps in size when daylight exceeds 12 hours.',
        },
        dailyRhythm: {
            heading: 'A slow, steady climb toward the canopy.',
            body: 'Encourage dramatic leaf splits by pairing bright, indirect light with a sturdy support. Gentle airflow and regular cleaning keep foliage photosynthesizing at full tilt.',
            highlights: [
                'Rotate the pot every week for even fenestration.',
                'Water thoroughly, then allow the top 2" of soil to dry.',
                'Skip misting — it only helps if done daily. A pebble tray or humidifier keeps humidity above 60% without the upkeep.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Rotate the pot a quarter turn for even light exposure.',
            },
            {
                interval: 'weekly',
                task: 'Dust leaves with a damp microfiber cloth.',
            },
            {
                interval: 'weekly',
                task: 'Check moisture halfway down the planter.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly, then let the top 2" of soil dry out.',
            },
            {
                interval: 'monthly',
                task: 'Check that ambient humidity stays above 60%; a pebble tray helps more than misting.',
            },
            {
                interval: 'monthly',
                task: 'Inspect aerial roots and tuck into the moss pole.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Deep soak every 7-10d',
                detail: 'Water until you see runoff, then drain thoroughly to avoid water-logged soiled.',
            },
            {
                label: 'Humidity',
                stat: '60%+ ideal',
                detail: 'Pair a tray of pebbles with a gentle fan to keep foliage crisp and pest-free.',
            },
            {
                label: 'Nutrition',
                stat: 'Low & steady',
                detail: 'Feed with a foliage-forward fertilizer at 1/2 strength during active growth.',
            },
            {
                label: 'Support',
                stat: 'Trellis or pole',
                detail: 'Secure aerial roots into a moss pole so leaves size up with every new node.',
            },
        ],
        wateringRhythm: {
            heading: 'Water deeply, then wait for the mix to breathe.',
            body: 'Monstera roots prefer a predictable soak-and-dry cycle. Use room-temperature water, saturate evenly, then empty the cache pot within ten minutes. Pair hydration with a light fertilizer flush every other month during the growing season.',
            tips: [
                'Check moisture with your finger or a probe halfway down the root ball before committing to water.',
                'Hard water? Collect rainwater or let tap water rest 24 hours so chlorine can dissipate.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 7 days',
                tip: 'Morning waterings keep foliage dry by night; check moisture 2" down before each soak.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 10-12 days',
                tip: 'Light declines—allow the top half of the mix to dry before watering again.',
            },
            {
                season: 'Winter',
                cadence: 'Every 14+ days',
                tip: 'Brighten placement and run a humidifier if the air gets dry; resume feeding when new growth returns.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Rotate the planter a quarter turn to share sunlight.',
                    'Dust the newest leaves with a damp cloth so stomata stay open.',
                    'Inspect petioles and soil surface for pests or fungus gnats.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Flush the substrate with lukewarm water to clear mineral buildup.',
                    'Trim yellowing foliage and reroute aerial roots into the support pole.',
                    'Top-dress with fresh chunky mix if the soil has compacted.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Moisture meter or wooden chopstick',
                note: 'Confirms dryness below the surface before every watering.',
            },
            {
                item: 'Humidifier with built-in hygrometer',
                note: 'Keeps the microclimate above 55% during drier months.',
            },
            {
                item: 'Neem + insecticidal soap duo',
                note: 'Alternate sprays ward off thrips, mites, and scale outbreaks.',
            },
            {
                item: 'Moss pole + soft ties',
                note: 'Anchors vines upright so each node develops larger fenestrations.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Yellow Leaves',
                tag: 'Water or light stress',
                description:
                    'One or two older leaves aging to yellow is normal shed, but new growth or multiple leaves yellowing at once points to trouble.',
                actions: [
                    'Check moisture: soggy soil means ease off watering and add airflow; bone-dry soil needs a deep soak.',
                    'Filter harsh light or pull the plant a few feet back from bright windows to prevent sun stress.',
                    'Trim only fully spent leaves to redirect energy to healthy foliage.',
                ],
            },
            {
                title: 'Drooping or Curling',
                tag: 'Root stress',
                description:
                    'Tired, floppy petioles or inward curling edges typically signal root stress from watering swings or compacted soil.',
                actions: [
                    'Feel the potting mix: rehydrate evenly if dry pockets remain, or repot into chunkier mix if water lingers.',
                    'Confirm the plant is not root-bound; upgrade 1–2" in diameter if roots circle the pot.',
                    'Support large vines with a moss pole so foliage is not dragging under its own weight.',
                ],
            },
            {
                title: 'Brown Tips & Edges',
                tag: 'Humidity or salts',
                description:
                    'Low humidity or salt buildup from fertilizer concentrates crisp leaf margins.',
                actions: [
                    'Run a humidifier to keep humidity above 50–60% — misting only helps if repeated daily, so it rarely moves the needle.',
                    'Flush the pot monthly with lukewarm water to rinse fertilizer residues.',
                    'Wipe leaves with a damp microfiber cloth so stomata can breathe.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                tag: 'Spreads fast',
                signs: 'Dusty webbing on undersides, stippled leaves losing color.',
                treatment:
                    'Shower foliage, then treat weekly with neem oil or insecticidal soap until no new damage appears.',
            },
            {
                name: 'Thrips',
                pestSlug: 'thrips',
                tag: 'Scars new growth',
                signs: 'Silvery streaks and distorted new leaves; black specks (frass) nearby.',
                treatment:
                    'Isolate the plant, prune the worst leaves, and alternate systemic granules with contact sprays for 4–6 weeks.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                tag: 'Mostly a nuisance',
                signs: 'Tiny flies hovering near soil, larvae feeding on fine roots.',
                treatment:
                    'Let the top 2" of mix dry, add a sand topdress, and water in Bacillus thuringiensis israelensis (BTI) or mosquito bits.',
            },
            {
                name: 'Scale & Mealybugs',
                tag: 'Slow but stubborn',
                signs: 'Sticky residue, cottony clusters in leaf nodes, or dome-like shells on stems.',
                treatment:
                    'Swab insects with alcohol, then follow with horticultural oil coverage every 7–10 days until clean.',
            },
        ],
        stabilityChecklist: [
            'Inspect leaves weekly with a flashlight to catch pests before populations explode.',
            'Refresh potting mix every 18–24 months to prevent compaction and fungus gnat hotels.',
            'Rotate the plant quarterly to keep growth symmetrical and avoid one-sided light stress.',
            'Use a moisture meter or chopstick test instead of calendar watering for better accuracy.',
        ],
    },
};
