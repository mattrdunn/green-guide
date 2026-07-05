import type { Plant } from '../../lib/db/models/Plant';

export const senecioRowleyanus: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'senecio',
    species: 'rowleyanus',
    commonNames: ['String of Pearls', 'String of Beads'],
    description:
        'Cascading strands of pea-shaped leaves make String of Pearls the most coveted trailing succulent — a South African creeper whose beads are tiny water tanks with a built-in light window.',
    images: [],
    tags: ['succulent', 'trailing', 'hanging-basket', 'mildly-toxic'],
    highlights: [
        'Native to the arid southwest of South Africa, creeping under shrubs.',
        'Each pearl has a translucent "window" that lets light into the leaf.',
        'Blooms tiny white flowers that smell faintly of cinnamon.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-12',
            caption: 'Frost-free only; a houseplant almost everywhere.',
            zoneMin: 9,
            zoneMax: 12,
        },
        light: {
            score: 4,
            value: 'Bright + gentle sun',
            caption: 'Loves soft morning sun; harsh midday rays scorch pearls.',
        },
        watering: {
            score: 2,
            value: 'Light & infrequent',
            caption: 'Every 2-3 weeks; shriveling pearls are the cue.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Simple rules, small margin for error on watering.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Sap irritates skin; ingestion upsets stomachs — hang it out of reach of pets.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: 'Trails 1-3 ft',
            detail: 'A creeper, not a climber — strands spill over pot edges and can reach 3 ft with age; trim to thicken.',
            minFt: 1,
            maxFt: 3,
        },
        soil: {
            value: 'Sharp-draining succulent mix',
            detail: 'Cactus mix with extra perlite; the fine, shallow roots drown quickly in anything moisture-retentive.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Hair-fine roots and rot-prone stems make passive hydro a poor fit.',
            compatible: false,
        },
        fertilizer: {
            value: 'Quarter-strength balanced',
            detail: 'A whisper of feed is enough; overfed strands grow soft and rot-prone.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: '2-3x in season',
            detail: 'A few dilute feeds between spring and midsummer covers the year.',
        },
        nativeHabitat: {
            value: 'Southwest South Africa',
            detail: 'Trails along the ground in the dappled shade of taller plants — bright light, cool roots, little rain.',
        },
        humidity: {
            value: 'Low to average',
            detail: 'Dry air is welcome; avoid misting, which lodges water between pearls.',
            minPct: 20,
        },
        temperature: {
            value: '60° – 80°F',
            detail: 'A cool, drier winter around 55-60°F encourages the cinnamon-scented blooms.',
            minF: 45,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Strands lengthen fastest in warm bright months; growth pauses in winter.',
        },
        dailyRhythm: {
            heading: 'Bright light above, drought below, hands off.',
            body: 'String of Pearls stores weeks of water in its beads and resents interference. Park it where it gets bright light with a little soft sun, water only when pearls just begin to lose their sheen and plumpness, and let the strands do the work.',
            highlights: [
                'Top of the soil dwells in shade under its own strands — check moisture by weight, not looks.',
                'Plump, glossy pearls mean hydrated; dull or puckering pearls mean water now.',
                'Drape strands over the pot rim rather than letting them root into damp soil.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Squeeze-test a few pearls — firm means wait, slightly soft means water soon.',
            },
            {
                interval: 'weekly',
                task: 'Turn the pot so all sides of the crown get light; bald crowns start in shade.',
            },
            {
                interval: 'weekly',
                task: 'Check strand bases at the soil line for mushy or blackened stems.',
            },
            {
                interval: 'as-needed',
                task: 'Give a light drink when pearls just begin to soften; never leave the pot wet.',
            },
            {
                interval: 'monthly',
                task: 'Coil a healthy trimmed strand onto the soil surface and pin it to root.',
            },
            {
                interval: 'monthly',
                task: 'Inspect under the crown foliage with a flashlight for mealybugs.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright, some sun',
                detail: '2-3 hours of gentle morning sun plus bright shade keeps pearls tight along the strand.',
            },
            {
                label: 'Water',
                stat: 'Every 2-3 weeks',
                detail: 'Wait for the first hint of pearl-pucker; the beads carry a large reserve.',
            },
            {
                label: 'Crown health',
                stat: 'Keep the top dry',
                detail: 'Most losses start as rot at the soil surface where strands emerge.',
            },
            {
                label: 'Propagation',
                stat: 'Always have backups',
                detail: 'Strands root wherever they touch soil — coil trimmings onto the pot to thicken and insure it.',
            },
        ],
        wateringRhythm: {
            heading: 'Let the pearls tell you — they always do.',
            body: 'Water lightly but thoroughly when the mix is fully dry and the pearls have just begun to dull and soften, then leave it completely alone. In practice: every 2-3 weeks in the growing season, monthly or less in winter. This plant dies far more often from kindness than neglect.',
            tips: [
                'Bottom-watering for 10-15 minutes wets the mix without soaking the vulnerable crown.',
                'If in doubt, wait three more days — shriveled pearls recover, rotted crowns do not.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 2-3 weeks',
                tip: 'Growth season; still wait for the mix to dry fully between drinks.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 3-4 weeks',
                tip: 'Slow down with the light; pearls hold more reserve in cool air.',
            },
            {
                season: 'Winter',
                cadence: 'Every 4-6 weeks',
                tip: 'Cool and barely-watered is the recipe for spring flowers.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check pearl firmness and pot weight instead of watering by date.',
                    'Rotate the pot a quarter turn to keep the crown evenly leafed.',
                    'Snip any blackened or bald strand sections back to healthy growth.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Coil a healthy trimmed strand onto the soil surface and pin it to root.',
                    'Inspect under the crown foliage with a flashlight for mealybugs.',
                    'Feed at quarter strength during spring and early summer only.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Shallow pot or hanging basket',
                note: 'Matches the shallow roots; deep pots hold hidden wet zones.',
            },
            {
                item: 'Gritty succulent mix + perlite',
                note: 'Fast drainage protects the rot-prone crown.',
            },
            {
                item: 'Small snips and floral pins',
                note: 'For trimming strands and pinning cuttings back into the pot.',
            },
            {
                item: 'Watering tray',
                note: 'Bottom-watering keeps the crown dry while roots drink.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Shriveled, Puckered Pearls',
                description:
                    'Uniform shriveling across the plant is simple thirst; shriveling on one strand only usually means that strand’s stem is damaged.',
                actions: [
                    'For overall shrivel, water thoroughly — pearls replump within days.',
                    'For a single bad strand, trim it back and re-root the healthy tip.',
                ],
            },
            {
                title: 'Mushy, Translucent Pearls',
                description:
                    'Pearls turning soft, see-through, or burst mean overwatering — the opposite problem, and the dangerous one.',
                actions: [
                    'Stop watering immediately and move to brighter, airier conditions.',
                    'Check the crown; if stems at soil level are black, salvage healthy strand tips as cuttings.',
                    'Repot into dry, grittier mix if the current soil stays wet for more than a week.',
                ],
            },
            {
                title: 'Balding Crown',
                description:
                    'Strands stay full at the tips while the top of the pot goes sparse — classic light starvation at the crown, which sits in its own shade.',
                actions: [
                    'Move the plant so light hits the top of the pot, not just the strands.',
                    'Pin trimmed strand segments across the bare soil to refill the crown.',
                ],
            },
            {
                title: 'Flat, Spaced-Out Pearls',
                description:
                    'Small pearls set far apart along thin stems signal insufficient light overall.',
                actions: [
                    'Upgrade to a brighter window or add a grow light.',
                    'Trim leggy growth once new compact growth establishes.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                signs: 'White cottony specks wedged between pearls and at stem joints.',
                treatment:
                    'Dab individuals with isopropyl alcohol and spray the strands with insecticidal soap weekly until clear.',
            },
            {
                name: 'Aphids',
                signs: 'Soft green insects clustered on new tips and flower stalks.',
                treatment:
                    'Rinse gently under lukewarm water and follow with soap spray every 5-7 days.',
            },
            {
                name: 'Fungus Gnats',
                signs: 'Tiny flies around the pot — a flag that the mix is staying too wet.',
                treatment:
                    'Extend drying time, topdress with grit, and use BTI bits in the watering can.',
            },
            {
                name: 'Spider Mites',
                signs: 'Fine webbing between strands with dull, stippled pearls.',
                treatment:
                    'Shower the strands, then treat weekly with neem or miticide until webbing stops.',
            },
        ],
        stabilityChecklist: [
            'Water by pearl-feel and pot weight, never by calendar.',
            'Keep the crown in light and out of standing moisture — it is the failure point.',
            'Maintain a pinned-down cutting or two as living insurance against crown rot.',
            'Hang out of reach of pets; falling pearls tempt cats especially.',
        ],
    },
};
