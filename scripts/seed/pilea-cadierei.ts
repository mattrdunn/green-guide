import type { Plant } from '../../lib/db/models/Plant';

export const pileaCadierei: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'pilea',
    species: 'cadierei',
    commonNames: ['Aluminum Plant', 'Watermelon Pilea'],
    description:
        'A bushy, fast-filling foliage plant whose quilted, dark green leaves are painted with metallic silver patches between the veins — a striking pattern plant that stays compact with regular pinching.',
    images: [],
    tags: [
        'compact',
        'bushy',
        'fast-growing',
        'beginner-friendly',
        'pet-friendly',
        'non-toxic',
    ],
    highlights: [
        'Native to the humid forest floor and limestone rock crevices of Vietnam and southern China.',
        'Metallic silver patches on the leaves come from air pockets beneath the surface, not pigment.',
        'Grows fast and leggy without regular pinching — cuttings root readily to refill a thinning pot.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption: 'Frost-tender; keep above 55°F year-round.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Strong, filtered light keeps the silver patterning vivid; too little light fades new leaves toward plain green.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Thin leaves have little water storage — wilts dramatically within a day of drying out.',
        },
        difficulty: {
            score: 2,
            value: 'Easy–moderate',
            caption:
                'Forgiving of most mistakes but needs consistent moisture and regular pinching to stay full.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Considered safe for cats and dogs.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '6-12 in, bushy',
            detail: 'Forms a mounding, shrubby clump; stems become woody and sparse with age unless refreshed by cuttings.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Standard, well-draining potting mix',
            detail: 'A basic potting mix with added perlite holds moisture without staying soggy.',
        },
        semiHydro: {
            value: 'Somewhat',
            detail: 'Thin roots can adapt to LECA with care, though soil culture is more forgiving of its steady moisture needs.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced liquid feed',
            detail: 'A diluted, balanced fertilizer supports its fast growth without pushing weak, leggy stems.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly spring through early fall; skip winter entirely.',
        },
        nativeHabitat: {
            value: 'Vietnam & southern China',
            detail: 'Grows low on humid forest floors and limestone rock crevices, often in dappled shade.',
        },
        humidity: {
            value: '50%+ ideal',
            detail: 'Leaf edges crisp in dry air below 40% — a pebble tray or nearby humidifier helps in heated rooms.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges; protect from cold drafts below 55°F.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'A vigorous grower — expect noticeable new growth most weeks in bright, warm conditions.',
        },
        dailyRhythm: {
            heading: 'A fast grower that rewards small, frequent attention.',
            body: 'Aluminum Plant moves quickly: stems lengthen, soil dries faster than sturdier houseplants, and neglect shows up within a day as dramatic wilting. A quick glance most days — moisture check, pinch a leggy tip — keeps it full and silver-patterned instead of sparse.',
            highlights: [
                'Check soil moisture every few days; thin leaves wilt fast once dry.',
                'Pinch growing tips regularly to keep the mound bushy rather than leggy.',
                'Rotate toward the light source to prevent one-sided, lopsided growth.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture — water before the top inch fully dries.',
            },
            {
                interval: 'weekly',
                task: 'Pinch back leggy stem tips to keep growth dense.',
            },
            {
                interval: 'as-needed',
                task: 'Water when the surface starts to feel dry; keep it lightly moist, not soggy.',
            },
            {
                interval: 'monthly',
                task: 'Root pinched cuttings and replant them to thicken the pot.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 5-7 days',
                detail: 'Thin leaves store little water — it wilts fast when dry but recovers quickly after a drink.',
            },
            {
                label: 'Humidity',
                stat: '50%+ ideal',
                detail: 'Humid air keeps leaf edges from crisping and supports faster, fuller growth.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Strong, filtered light keeps the metallic silver patterning bold on new leaves.',
            },
            {
                label: 'Pruning',
                stat: 'Pinch weekly',
                detail: "Frequent pinching is the main lever against this species' tendency to go leggy.",
            },
        ],
        wateringRhythm: {
            heading: 'Consistent, never bone-dry.',
            body: 'Water when the top inch of soil starts to feel dry, saturate thoroughly, and let it drain. Unlike succulent-leaved houseplants, Aluminum Plant has little water reserve in its thin leaves, so it prefers a shorter, steadier cycle than a deep dry-down.',
            tips: [
                "Dramatic wilting that recovers fully within hours of watering is normal — just don't let it happen often.",
                'Crispy, brown leaf edges point to low humidity or mineral buildup from tap water, not underwatering alone.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 4-6 days',
                tip: 'Fast growth and warm air dry the pot quickly — check every couple of days.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 6-8 days',
                tip: 'Ease off slightly as growth slows and light softens.',
            },
            {
                season: 'Winter',
                cadence: 'Every 8-12 days',
                tip: 'Water a bit less often, but never let the pot go bone-dry for long.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water before it fully dries out.',
                    'Pinch leggy stem tips just above a leaf pair.',
                    'Rotate the pot a quarter turn for even growth.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Root pinched cuttings in water or moist soil and replant to thicken the pot.',
                    'Feed with a diluted balanced fertilizer during the growing season.',
                    'Flush the soil with lukewarm water to prevent mineral buildup on leaf edges.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Sharp micro-snips',
                note: 'Frequent light pinching keeps the mound dense instead of sparse and woody.',
            },
            {
                item: 'Pebble tray or humidifier',
                note: 'Boosts humidity around the plant to prevent crisping leaf edges.',
            },
            {
                item: 'Propagation jars',
                note: 'Pinched tips root readily in water within 1-2 weeks.',
            },
            {
                item: 'Filtered or distilled water',
                note: 'Reduces the mineral spotting and edge burn some plants show with hard tap water.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Dramatic Wilting',
                description:
                    'Aluminum Plant collapses theatrically when thirsty — thin leaves droop within a day of the soil drying out.',
                actions: [
                    'Water thoroughly; expect full recovery within a few hours.',
                    'Shorten the watering interval if this happens regularly.',
                    'Move to a spot where soil moisture is easier to monitor and maintain.',
                ],
            },
            {
                title: 'Legginess, Bare Lower Stems',
                description:
                    'Long stems with leaves clustered only near the tips mean pinching has fallen behind or light is too low.',
                actions: [
                    'Pinch stems back hard just above a leaf pair to force branching.',
                    'Move to a brighter spot with strong, filtered light.',
                    'Root the pinched cuttings and replant them to fill the pot back in.',
                ],
            },
            {
                title: 'Crispy Leaf Edges',
                description:
                    'Brown, brittle margins usually point to low humidity, mineral buildup from tap water, or both.',
                actions: [
                    'Increase humidity with a pebble tray or nearby humidifier.',
                    'Switch to filtered or distilled water if edges keep browning.',
                    'Flush the soil periodically to clear mineral buildup.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and webbing on leaf undersides, especially in dry winter air.',
                treatment:
                    'Shower the foliage, then apply insecticidal soap weekly for 3-4 weeks, covering leaf undersides.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White cottony clusters at leaf joints and along stems.',
                treatment:
                    'Swab visible clusters with rubbing alcohol, then follow up with horticultural oil every 7-10 days.',
            },
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small clustered insects on tender new growth, often with sticky honeydew residue.',
                treatment:
                    'Rinse foliage with water, then apply insecticidal soap to new growth every 5-7 days until clear.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Small flies around soil that stays consistently damp.',
                treatment:
                    'Let the surface dry slightly between waterings and drench with BTI (mosquito bits) to kill larvae.',
            },
        ],
        stabilityChecklist: [
            'Keep the soil consistently moist — this species has little tolerance for drying out completely.',
            'Pinch stem tips weekly; skipping this is the main reason plants go bare and leggy.',
            'Give bright, indirect light to keep the silver patterning bold on new growth.',
            'Propagate cuttings regularly to refresh the pot as older stems turn woody.',
        ],
    },
};
