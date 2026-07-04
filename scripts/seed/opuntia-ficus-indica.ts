import type { Plant } from '../../lib/db/models/Plant';

export const opuntiaFicusIndica: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'opuntia',
    species: 'ficus-indica',
    commonNames: ['Prickly Pear', 'Indian Fig', 'Nopal', 'Barbary Fig'],
    description:
        'The classic paddle cactus — stacked green pads, sunny yellow blooms, and sweet magenta fruit. Opuntia ficus-indica is a full-sun workhorse that has fed people and framed gardens for millennia.',
    images: [],
    tags: ['cactus', 'paddle', 'full-sun', 'edible', 'non-toxic'],
    highlights: [
        'Domesticated in Mexico thousands of years ago for its fruit and pads.',
        'Both the pads (nopales) and fruit (tunas) are edible once de-spined.',
        'Watch the glochids — hair-fine barbed bristles that detach at a touch.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Established plants shrug off brief light frosts.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            value: 'Full sun',
            caption: '6-8 hours direct — the sunniest spot you own.',
        },
        watering: {
            value: 'Sparse & deep',
            caption: 'Every 2-4 weeks in summer; near-zero in winter.',
        },
        difficulty: {
            value: 'Easy',
            caption: 'Nearly indestructible in sun; handling is the hard part.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Edible, not poisonous — but glochids are a mechanical hazard for pets and fingers alike.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '2-5 ft in pots',
            detail: 'In-ground plants in warm climates build trunked shrubs 10-15 ft tall; containers keep it a few stacked pads high.',
            minFt: 2,
            maxFt: 5,
        },
        soil: {
            value: 'Sandy, lean, sharp-draining',
            detail: 'A gritty cactus mix or sandy loam; it tolerates poor rocky soil and resents anything rich and water-retentive.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Desert roots need long dry cycles; constant moisture rots pads from the base.',
            compatible: false,
        },
        fertilizer: {
            value: 'Low-N cactus feed',
            detail: 'Low nitrogen encourages flowers and fruit; high nitrogen just makes floppy pads.',
            npk: '0-10-10',
        },
        fertilizerFrequency: {
            value: '2-3x per season',
            detail: 'A dilute feed in late spring and midsummer covers a potted plant’s needs.',
        },
        nativeHabitat: {
            value: 'Central Mexico',
            detail: 'Arid and semi-arid highlands; now naturalized across the Mediterranean, Africa, and beyond.',
        },
        humidity: {
            value: 'Low & breezy',
            detail: 'Dry air with good circulation; humid stillness invites pad-spotting fungi.',
            minPct: 10,
        },
        temperature: {
            value: '65° – 95°F+',
            detail: 'Revels in heat; mature pads tolerate brief dips into the 20s°F if bone dry.',
            minF: 25,
            maxF: 100,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New pads and flower buds emerge from pad edges in spring; fruit ripens late summer into fall.',
        },
        dailyRhythm: {
            heading: 'A desert native that wants to be ignored in the sun.',
            body: 'Prickly pear thrives on maximum light, minimum water, and zero fuss. Pads store months of moisture, so the daily job is simply sun exposure — the seasonal job is the occasional deep drink and a respectful distance from the glochids.',
            highlights: [
                'Full direct sun is the single biggest factor in pad density and bloom.',
                'Plump, firm pads mean hydrated; wrinkles mean it is finally time to water.',
                'Handle only with tongs or thick leather gloves — never bare-handed.',
            ],
        },
        weeklyChecklist: [
            'Glance over pads for wrinkling, soft spots, or white cottony patches.',
            'Rotate potted plants so new pads emerge evenly, not all sun-side.',
            'Confirm the pot has dried fully since the last watering.',
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6-8 hrs direct',
                detail: 'The more sun, the thicker the pads and the better the flowering — there is no such thing as too much.',
            },
            {
                label: 'Drought',
                stat: 'Water monthly-ish',
                detail: 'Pads are canteens; err heavily on the dry side, always.',
            },
            {
                label: 'Handling',
                stat: 'Tongs & leather',
                detail: 'Glochids detach by the hundred at the lightest brush and are miserable to remove from skin.',
            },
            {
                label: 'Airflow',
                stat: 'Keep it breezy',
                detail: 'Moving air keeps fungal pad spots and cochineal scale from settling in.',
            },
        ],
        wateringRhythm: {
            heading: 'Rare, deep drinks — then genuine drought.',
            body: 'Soak the soil thoroughly, let it drain, and do not water again until the mix has been dry for a week or more. In summer that is roughly every 2-4 weeks for pots; in-ground plants often need nothing beyond rainfall. In winter, stop almost entirely — cold wet soil is the only reliable way to kill an opuntia.',
            tips: [
                'Read the pads, not the calendar: slight wrinkling or thinning is the real watering cue.',
                'In winter, a light monthly sip for potted plants is plenty; skip it entirely if pads stay plump.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Every 3-4 weeks',
                tip: 'Resume watering as new pad buds appear on the edges.',
            },
            {
                season: 'Summer',
                cadence: 'Every 2-4 weeks',
                tip: 'Deep soak in real heat; container plants dry faster than they look.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Monthly to none',
                tip: 'Dry pads plus cold hardiness go together — wet roots forfeit frost tolerance.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Inspect pads for cottony white cochineal patches and wipe early spots away.',
                    'Rotate container plants a quarter turn for even growth.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Prune crowded or damaged pads in late spring at the joint, using tongs and a sharp knife.',
                    'Top-dress with fresh grit and a dilute low-N feed as growth starts.',
                    'Harvest fruit in late summer with tongs; singe or peel off glochids before eating.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Long-handled tongs',
                note: 'The only safe way to hold a pad for pruning, repotting, or harvest.',
            },
            {
                item: 'Thick leather gauntlets',
                note: 'Glochids pierce cloth gloves; leather with cuffs is the minimum.',
            },
            {
                item: 'Gritty cactus mix + sand',
                note: 'Lean and mineral — richness is wasted and risky here.',
            },
            {
                item: 'Duct tape or tweezers',
                note: 'Presses onto skin to pull out glochids after an accidental brush.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Wrinkled, Thinning Pads',
                description:
                    'Pads slowly deflating and wrinkling mean stored water is spent — the normal, safe signal to irrigate.',
                actions: [
                    'Give a single deep soak and let it fully drain.',
                    'Pads should replump within a week; if not, check roots for damage.',
                ],
            },
            {
                title: 'Soft, Dark Pad Bases',
                description:
                    'Blackening, mushy tissue at the soil line is rot from overwatering or poor drainage, and it spreads pad to pad.',
                actions: [
                    'Cut off healthy pads above the rot with a clean blade and callus them for 1-2 weeks.',
                    'Re-root calloused pads shallowly in dry gritty mix — each one starts a new plant.',
                    'Discard the rotted base and soil rather than trying to save it.',
                ],
            },
            {
                title: 'Pale, Narrow New Pads',
                description:
                    'Thin, elongated, light-green pads indicate insufficient sun — common for plants grown indoors.',
                actions: [
                    'Migrate the plant to full direct sun over a couple of weeks.',
                    'Remove badly etiolated pads; well-lit replacements will grow thick and round.',
                ],
            },
            {
                title: 'Sunscald Patches',
                description:
                    'Bleached yellow-white patches on the sun-facing side appear when a shade-grown plant moves abruptly into full sun.',
                actions: [
                    'Shift to bright shade and reintroduce direct sun gradually over 2-3 weeks.',
                    'Scarred tissue is permanent but harmless once it dries tan.',
                ],
            },
        ],
        pests: [
            {
                name: 'Cochineal Scale',
                signs: 'White, cottony, waxy tufts on pads that smear crimson when crushed.',
                treatment:
                    'Blast off with a hose jet, then treat remaining spots with insecticidal soap weekly until pads stay clean.',
            },
            {
                name: 'Mealybugs',
                signs: 'Cottony clusters at pad joints and around spine clusters.',
                treatment:
                    'Swab with isopropyl alcohol and follow with neem or soap sprays every 7-10 days.',
            },
            {
                name: 'Scale Insects',
                signs: 'Hard grey-brown discs peppering pad surfaces.',
                treatment:
                    'Scrape heavy crusts off with a plastic edge, then apply horticultural oil in repeated rounds.',
            },
            {
                name: 'Cactus Longhorn Beetle (outdoors)',
                signs: 'Chewed pad edges and oozing dark wounds; a large black beetle at dusk.',
                treatment:
                    'Hand-pick beetles in the evening; keep the area clear of dead pads where larvae develop.',
            },
        ],
        stabilityChecklist: [
            'Site it in the most sun you have — every other problem is smaller than light hunger.',
            'Water only when pads wrinkle slightly; never on a fixed schedule.',
            'Keep tongs and leather gloves with the plant so no one improvises with bare hands.',
            'Check monthly for the first white specks of cochineal — early spots wipe off in seconds.',
        ],
    },
};
