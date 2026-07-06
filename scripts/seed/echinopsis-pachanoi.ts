import type { Plant } from '../../lib/db/models/Plant';

export const echinopsisPachanoi: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'echinopsis',
    species: 'pachanoi',
    commonNames: ['San Pedro Cactus'],
    description:
        'A fast-growing columnar cactus from the Andes, Echinopsis pachanoi rewards full sun and a surprisingly generous summer watering can with feet of blue-green growth — one of the easiest large cacti to keep happy.',
    images: [],
    tags: ['cactus', 'columnar', 'full-sun', 'fast-growing', 'toxic'],
    highlights: [
        'Native to the Andean slopes of Ecuador and Peru at 6,500-9,800 ft.',
        'One of the fastest columnar cacti — up to a foot of growth per year.',
        'Mountain origins make it more cold- and water-tolerant than desert cacti.',
    ],
    vitals: {
        hardinessZone: {
            value: '8b-10',
            caption: 'Handles brief dips to ~15°F when kept dry.',
            zoneMin: 8,
            zoneMax: 10,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6+ hours direct; acclimate young plants gradually.',
        },
        watering: {
            score: 2,
            value: 'Deep soak, full dry',
            caption: 'Generous in summer for a cactus; nearly none in winter.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'Vigorous and forgiving as long as drainage is sharp.',
            level: 'easy',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'Contains psychoactive alkaloids — an ornamental only, kept away from pets and children.',
            level: 'toxic',
        },
    },
    overview: {
        height: {
            value: '2-6 ft in pots',
            detail: 'Reaches 10-20 ft in the ground in frost-free climates; pot size and pruning keep indoor columns manageable.',
            minFt: 2,
            maxFt: 6,
        },
        soil: {
            value: 'Gritty & fast-draining',
            detail: 'Half cactus mix, half mineral grit (pumice or perlite); richer than pure desert mixes is fine given its mountain origins.',
        },
        semiHydro: {
            value: 'Not recommended',
            detail: 'Columnar cacti dislike constant root moisture; stick with a mineral-heavy soil mix.',
            compatible: false,
        },
        fertilizer: {
            value: 'Low-N cactus feed',
            detail: 'A dilute low-nitrogen formula fuels fast columnar growth without soft, weak tissue.',
            npk: '2-7-7',
        },
        fertilizerFrequency: {
            value: 'Monthly in summer',
            detail: 'Feed at half strength May through September; none in the cool months.',
        },
        nativeHabitat: {
            value: 'Andes of Ecuador & Peru',
            detail: 'High-altitude slopes with intense sun, cool nights, and seasonal rain — hence its unusual tolerance for water and chill.',
        },
        humidity: {
            value: 'Low, airy',
            detail: 'Ambient dryness is ideal; good airflow prevents fungal spotting on the ribs.',
            minPct: 20,
        },
        temperature: {
            value: '50° – 90°F',
            detail: 'Enjoys cool winter nights (a dry rest at 45-55°F encourages flowering); protect from hard frost.',
            minF: 40,
            maxF: 95,
        },
        growSeason: {
            value: 'Late spring–Summer',
            detail: 'Columns visibly lengthen in warm months; huge white night-blooming flowers appear on mature plants.',
        },
        dailyRhythm: {
            heading: 'Built for mountain sun and cool nights.',
            body: 'San Pedro grows hard when given real sun, real water, and real drainage. Unlike desert cacti it drinks eagerly in summer heat — the trick is letting the mineral mix dry fully between soaks and cutting water almost entirely in winter.',
            highlights: [
                'Give the sunniest spot you have; a south window minimum indoors.',
                'Soak thoroughly in summer, then wait for the pot to go fully dry.',
                'Winter is a dry, cool rest — that pause powers next year’s growth.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check pot weight or probe the mix — water only when fully dry.',
            },
            {
                interval: 'weekly',
                task: 'Look over ribs and the growth tip for scale or orange spotting.',
            },
            {
                interval: 'weekly',
                task: 'Rotate a quarter turn so the column grows straight, not leaning.',
            },
            {
                interval: 'as-needed',
                task: 'Drench thoroughly once the pot is bone-dry; in winter, barely water at all.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6+ hrs direct',
                detail: 'Full sun keeps ribs fat and spacing tight; low light causes thin, etiolated growth that never recovers.',
            },
            {
                label: 'Drainage',
                stat: '50% mineral grit',
                detail: 'Its water tolerance only holds when the mix dries fast — grit is non-negotiable.',
            },
            {
                label: 'Summer water',
                stat: 'Every 7-14 days',
                detail: 'Generous soaks during heat drive its famous growth rate.',
            },
            {
                label: 'Winter rest',
                stat: 'Cool & dry',
                detail: 'A near-dry rest at 45-55°F prevents rot and sets up flowering.',
            },
        ],
        wateringRhythm: {
            heading: 'Drench like a rainstorm, dry like the Andes.',
            body: 'Water heavily until it pours from the drainage holes, then leave the pot alone until the mix is bone dry throughout — typically 1-2 weeks in summer heat, and a month or more in cool weather. When in doubt, wait: this cactus shrugs off drought but sulks and rots in standing moisture.',
            tips: [
                'A slight sheen loss or faint rib wrinkling means it is truly ready to drink.',
                'Water the soil, not the column — moisture sitting in the crown invites rot.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Every 2-3 weeks',
                tip: 'Ramp up gradually as temperatures climb and growth resumes.',
            },
            {
                season: 'Summer',
                cadence: 'Every 7-14 days',
                tip: 'In real heat it drinks like a tropical — soak deeply whenever fully dry.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Monthly or less',
                tip: 'Below 55°F, keep essentially dry; a light monthly sip prevents root desiccation.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Lift the pot to judge dryness by weight before any watering.',
                    'Rotate toward the sun to prevent a permanent lean.',
                    'Inspect the growing tip — damage there shows problems first.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'In spring, reintroduce outdoor sun over two weeks to avoid sunburn.',
                    'Refresh the top inch of grit and check for circling roots each year.',
                    'Before winter, move to the coolest bright spot and stop feeding.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Pumice or coarse perlite',
                note: 'The mineral half of the mix that makes generous watering safe.',
            },
            {
                item: 'Terracotta pot',
                note: 'Breathable walls speed dry-down between soaks.',
            },
            {
                item: 'Thick gloves or folded towel',
                note: 'For repotting — the areole spines are short but sharp.',
            },
            {
                item: 'Isopropyl alcohol + cotton swabs',
                note: 'Spot-treats mealybugs hiding along the ribs.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Etiolation (Thin New Growth)',
                description:
                    'New growth narrower and paler than the column below means light hunger — common after a dark winter indoors.',
                actions: [
                    'Move to the brightest position available, or add a strong grow light.',
                    'Accept that the thin section is permanent; healthy girth resumes above it in good sun.',
                ],
            },
            {
                title: 'Soft Brown or Black Base',
                description:
                    'Mushy darkening at soil level is basal rot from cold, wet soil — the one killer this cactus cannot outgrow.',
                actions: [
                    'Unpot immediately and cut away all soft tissue with a sterile blade until only firm green-white flesh remains.',
                    'Let the healthy top callus in dry shade for 2-4 weeks, then re-root it in dry grit as a cutting.',
                ],
            },
            {
                title: 'Orange or Rust Spotting',
                description:
                    'Dry orange lesions on the ribs are a common fungal blemish, cosmetic in mild cases but spreading in stagnant humid air.',
                actions: [
                    'Improve airflow and keep water off the column.',
                    'Treat spreading patches with a copper-based fungicide.',
                ],
            },
            {
                title: 'Corky Tan Patches Near the Base',
                description:
                    'Uniform tan, bark-like texture creeping up from the soil line on older columns is normal corking with age, not disease.',
                actions: [
                    'No action needed — distinguish it from rot by texture: cork is firm and dry.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White cottony tufts wedged between ribs and around areoles.',
                treatment:
                    'Swab colonies with isopropyl alcohol, then drench weekly with insecticidal soap until no new tufts appear.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Hard tan discs stuck to the column that resist a light rub.',
                treatment:
                    'Scrape gently with a soft brush, then apply horticultural oil every 7-10 days for several weeks.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Rusty, dusty discoloration at the tender growth tip with fine webbing.',
                treatment:
                    'Rinse the column, increase airflow, and spray with miticide or insecticidal soap weekly until color returns.',
            },
            {
                name: 'Root Mealybugs',
                signs: 'A struggling plant with white, ash-like deposits visible on unpotted roots.',
                treatment:
                    'Wash all old soil from the roots, trim damaged sections, and repot in fresh dry mix after a systemic or soap drench.',
            },
        ],
        stabilityChecklist: [
            'Confirm the mix is bone dry before every winter watering — cold plus wet is the only common cause of death.',
            'Acclimate to spring sun gradually; sunburn scars are permanent.',
            'Check ribs and areoles monthly with a flashlight for early mealybug tufts.',
            'Repot every 2-3 years — a fast grower exhausts and crowds its pot quickly.',
        ],
    },
};
