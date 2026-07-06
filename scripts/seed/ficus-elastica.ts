import type { Plant } from '../../lib/db/models/Plant';

export const ficusElastica: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'ficus',
    species: 'elastica',
    commonNames: ['Rubber Plant', 'Rubber Tree', 'Rubber Fig'],
    description:
        'Glossy, burgundy-tinged leaves and an easygoing temperament make Ficus elastica the low-drama alternative to the fiddle-leaf — a fast-growing indoor tree that forgives the occasional missed watering.',
    images: [
        {
            url: 'plants/ficus/elastica/img-1.jpg',
            alt: 'Ficus elastica with burgundy leaves in a white pot',
        },
        {
            url: 'plants/ficus/elastica/img-2.jpeg',
            alt: 'Ficus elastica with burgundy leaves in a white pot',
        },
    ],
    tags: ['ficus', 'tree', 'beginner-friendly', 'mildly-toxic'],
    highlights: [
        'Native to the rainforests of India and Southeast Asia.',
        'Latex-rich sap was an early commercial rubber source.',
        'Cultivars range from deep burgundy to cream-and-pink variegation.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Houseplant everywhere frost occurs.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Tolerates some direct sun; variegated forms need the extra light.',
        },
        watering: {
            score: 2,
            value: 'Soak & dry out',
            caption:
                'Water deeply when the top 2" dries — thick leaves buffer missed waterings.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'The most forgiving of the popular indoor ficus trees.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Milky latex sap irritates skin, mouths, and stomachs — mind pets and wash up after pruning.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '6-10 ft indoors',
            detail: 'A fast vertical grower — prune the top once it nears the ceiling to force branching and a fuller silhouette.',
            minFt: 6,
            maxFt: 10,
        },
        soil: {
            value: 'Well-draining mix',
            detail: 'Standard potting mix with ~25% perlite or bark drains fast enough to keep the thick roots happy.',
        },
        semiHydro: {
            value: 'Possible',
            detail: 'Young plants and fresh cuttings adapt to LECA well; converting a large established tree is riskier.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced feed',
            detail: 'A balanced or slightly nitrogen-forward fertilizer keeps the big glossy leaves coming.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Half-strength monthly from spring to early fall; none in winter.',
        },
        nativeHabitat: {
            value: 'India & Southeast Asia',
            detail: 'A true rainforest giant — wild trees reach 100+ ft and drop curtains of aerial roots.',
        },
        humidity: {
            value: '40%+ is fine',
            detail: 'Thick, waxy leaves shrug off average indoor humidity better than most tropicals.',
            minPct: 40,
        },
        temperature: {
            value: '60° – 85°F',
            detail: 'Handles brief dips to the 50s but drops leaves in cold drafts.',
            minF: 60,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'Can add a foot or more of height per season in bright light.',
        },
        dailyRhythm: {
            heading:
                'Built to be low-maintenance — keep it bright and let it be.',
            body: 'The rubber plant stores water in its thick leaves and stems, so it tolerates the imperfect rhythms of real life. Give it good light, water when the top of the mix is dry, and its main demand becomes a regular leaf-polish to keep the gloss.',
            highlights: [
                'Let the top 2" of soil dry fully between waterings.',
                'Wipe the waxy leaves every couple of weeks — the shine is the point.',
                'Rotate occasionally; it leans into the light faster than you expect.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top 2" of soil; skip watering if any moisture remains.',
            },
            {
                interval: 'weekly',
                task: 'Wipe a few leaves with a damp cloth to clear dust.',
            },
            {
                interval: 'weekly',
                task: 'Glance at stems and leaf undersides for scale and mealybugs.',
            },
            {
                interval: 'as-needed',
                task: 'Water deeply once the top 2" have dried, then empty the saucer.',
            },
            {
                interval: 'monthly',
                task: 'Wipe every leaf with a damp cloth to restore the gloss.',
            },
            {
                interval: 'monthly',
                task: 'Flush with lukewarm water to clear fertilizer salts.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 7-10 days',
                detail: 'Deep soak, full drain, then let it dry — thick leaves make it drought-tolerant.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Burgundy forms tolerate medium light; variegated forms fade and revert without brightness.',
            },
            {
                label: 'Leaf care',
                stat: 'Wipe biweekly',
                detail: 'Dust dulls the signature gloss and slows photosynthesis on these broad leaves.',
            },
            {
                label: 'Shaping',
                stat: 'Prune in spring',
                detail: 'Topping the main stem forces side branches; unpruned plants grow as a single pole.',
            },
        ],
        wateringRhythm: {
            heading: 'Deep drinks, long pauses.',
            body: 'Rubber plants prefer to dry out properly between waterings — their thick leaves and stems carry a reserve. Water thoroughly until runoff, empty the saucer, and wait until the top two inches are fully dry. When in doubt, wait another day or two; overwatering is the main way people lose this plant.',
            tips: [
                'Droopy or gently curling leaves signal thirst well before real damage occurs.',
                'Yellowing lower leaves usually mean too much water, not too little — check before reaching for the can.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 7-10 days',
                tip: 'Pair regular watering with monthly feeding while the tree is stacking new leaves.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 10-14 days',
                tip: 'Growth slows with the light — let the mix dry a little deeper between drinks.',
            },
            {
                season: 'Winter',
                cadence: 'Every 14-21 days',
                tip: 'Water sparingly and keep leaves clean to maximize the weak winter light.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture before watering — err on the dry side.',
                    'Rotate the pot a quarter turn to keep the trunk growing straight.',
                    'Inspect stems and leaf undersides for scale bumps.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe every leaf with a damp cloth to restore the gloss.',
                    'Feed at half strength during the growing season.',
                    'Check the root zone; flush with lukewarm water to clear fertilizer salts.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Microfiber cloths',
                note: 'The glossy foliage is the main event — keep it dust-free.',
            },
            {
                item: 'Sharp pruners + gloves',
                note: 'Cuts bleed white latex; gloves keep the irritating sap off skin.',
            },
            {
                item: 'Paper towel or cinnamon powder',
                note: 'Press against fresh cuts to stop latex flow after pruning.',
            },
            {
                item: 'Moisture meter or chopstick',
                note: 'Confirms the mix is truly dry — the top crust often lies.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Yellowing Lower Leaves',
                description:
                    'The classic overwatering signature on rubber plants — lower leaves yellow and drop while the soil stays damp.',
                actions: [
                    'Lengthen the drying interval; the top 2" should be bone dry before rewatering.',
                    'Verify the pot drains and the mix is not compacted; repot with added perlite if water lingers.',
                    'If yellowing continues, unpot and inspect for brown, mushy roots — trim and repot fresh.',
                ],
            },
            {
                title: 'Leaf Drop',
                description:
                    'Shedding otherwise healthy leaves usually follows cold drafts, relocation, or a sharp swing between soggy and bone dry.',
                actions: [
                    'Move the plant away from exterior doors, drafty windows, and AC or heat vents.',
                    'Re-establish a consistent watering rhythm and let the plant settle for a few weeks.',
                    'Check light levels — a spot that was bright in summer can be dim by midwinter.',
                ],
            },
            {
                title: 'Dull, Drooping Leaves',
                description:
                    'Loss of gloss with a general droop means thirst, dusty foliage, or both.',
                actions: [
                    'Water deeply if the mix is dry throughout — turgor returns within a day.',
                    'Wipe leaves clean; a dust layer visibly dulls and starves them.',
                    'Raise humidity slightly if the air is desert-dry from winter heating.',
                ],
            },
        ],
        pests: [
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Brown limpet-like bumps on stems and leaf midribs with sticky honeydew beneath.',
                treatment:
                    'Swab each insect with isopropyl alcohol, then apply horticultural oil every 7-10 days until clean.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White cottony masses tucked into leaf axils and along new growth.',
                treatment:
                    'Alcohol-swab visible clusters, follow with insecticidal soap weekly, and recheck hidden crevices.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Pin-prick stippling and fine webbing, worst in hot, dry rooms.',
                treatment:
                    'Shower the foliage, boost humidity, and spray neem or insecticidal soap weekly for 3-4 weeks.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Tiny flies over chronically moist soil.',
                treatment:
                    'Dry the top layer out fully between waterings and drench with BTI to stop the larval cycle.',
            },
        ],
        stabilityChecklist: [
            'When unsure whether to water, wait — this plant loses far more owners to rot than drought.',
            'Keep leaves dusted so the thick foliage earns its keep in lower winter light.',
            'Inspect stems for scale monthly; catch it before honeydew appears on the floor.',
            'Repot every 2-3 years in spring — a fast grower that becomes root-bound quietly.',
        ],
    },
};
