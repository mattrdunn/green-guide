import type { Plant } from '../../lib/db/models/Plant';

export const euphorbiaTirucalli: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'euphorbia',
    species: 'tirucalli',
    commonNames: ['Pencil Cactus', 'Firestick Plant', 'Milk Bush'],
    description:
        'A thicket of smooth pencil-thin stems — green in shade, flame-orange in the "Sticks on Fire" form — Euphorbia tirucalli is a bold, nearly indestructible sculpture that asks only for sun and serious respect for its sap.',
    images: [],
    tags: ['euphorbia', 'succulent', 'full-sun', 'drought-tolerant', 'toxic'],
    highlights: [
        'Native to semi-arid Africa; a spurge, not a true cactus.',
        'The "Sticks on Fire" cultivar blazes coral-red in full sun and cool weather.',
        'Among the most caustic saps of any houseplant — handle like it means it.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Frost-free climates only; overwinter indoors elsewhere.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6+ hours direct for dense growth and fiery color.',
        },
        watering: {
            score: 1,
            value: 'Rare, deep soaks',
            caption: 'Every 2-4 weeks in summer; monthly or less in winter.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'Extremely tough — the care warnings are for you, not it.',
            level: 'easy',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'Milky sap causes severe skin and eye burns and is dangerous ingested — gloves, glasses, and distance from pets and kids.',
            level: 'toxic',
        },
    },
    overview: {
        height: {
            value: '2-6 ft indoors',
            detail: 'Reaches small-tree size (20-30 ft) in frost-free ground; pot size and spring pruning keep indoor plants shrubby.',
            minFt: 2,
            maxFt: 6,
        },
        soil: {
            value: 'Lean, gritty, fast-draining',
            detail: 'Cactus mix with added pumice or sand; it grows in near-barren soil in habitat and rots in rich mixes.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Needs hard dry cycles between drinks; constant root moisture is fatal.',
            compatible: false,
        },
        fertilizer: {
            value: 'Dilute balanced feed',
            detail: 'Quarter-strength once or twice in the growing season is ample for this light feeder.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: '1-2x per season',
            detail: 'Late spring and midsummer at most; skip feeding entirely without penalty.',
        },
        nativeHabitat: {
            value: 'Semi-arid Africa',
            detail: 'Dry savanna and scrubland from East to Southern Africa, in blazing sun on poor soils.',
        },
        humidity: {
            value: 'Dry air preferred',
            detail: 'Low humidity and moving air; damp stagnant corners cause stem spotting.',
            minPct: 10,
        },
        temperature: {
            value: '65° – 95°F',
            detail: 'Thrives on heat; keep above 50°F. Cool (not cold) bright winters intensify Firestick color.',
            minF: 50,
            maxF: 100,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New pencil segments and tiny transient leaves appear in warm months.',
        },
        dailyRhythm: {
            heading: 'Sun-drenched, bone-dry, and better left alone.',
            body: 'Pencil cactus care is mostly subtraction: maximum sun, minimum water, no fussing. Its striking silhouette builds itself — your interventions are limited to a rare deep drink, a yearly prune, and full protective gear whenever a stem gets cut or snapped.',
            highlights: [
                'The sunniest exposure you have is barely enough — more sun, more color.',
                'Water only when the pot is featherweight and stems lose a little gloss.',
                'Treat every pruning session like a lab task: gloves, glasses, rinse tools.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Lift the pot — water only at genuine featherweight dryness.',
            },
            {
                interval: 'weekly',
                task: 'Check stems stay firm and glossy; wrinkling means thirst, mush means rot.',
            },
            {
                interval: 'weekly',
                task: 'Confirm it is out of traffic paths where snapped stems could drip sap.',
            },
            {
                interval: 'as-needed',
                task: 'Give a rare, deep soak, then let the pot dry out completely again.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6+ hrs direct',
                detail: 'Light drives both the dense branching and the red Firestick coloration.',
            },
            {
                label: 'Drought',
                stat: 'Soak monthly-ish',
                detail: 'Stems bank months of water; the killer mistakes are all overwatering.',
            },
            {
                label: 'Protection',
                stat: 'Full PPE to prune',
                detail: 'Gloves, long sleeves, and eye protection every time — sap spray from a snapped stem can cause real injury.',
            },
            {
                label: 'Placement',
                stat: 'Out of reach',
                detail: 'Site away from pets, children, and walkways where brittle stems get knocked.',
            },
        ],
        wateringRhythm: {
            heading: 'A deep soak, then weeks of nothing.',
            body: 'Drench the pot until water runs through, then wait until the mix has been completely dry for at least a week — every 2-4 weeks in summer, every 4-6 in winter. Slight stem wrinkling is a safe thirst signal; softness at the base is the opposite and urgent.',
            tips: [
                'Terracotta plus gritty mix makes the schedule nearly foolproof.',
                'When moving it outdoors for summer, shield from rain-soaked saucers.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 2-4 weeks',
                tip: 'Deep soak once fully dry; growth is visible within days of a drink.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 4-5 weeks',
                tip: 'Taper down as temperatures and light decline.',
            },
            {
                season: 'Winter',
                cadence: 'Every 4-6 weeks',
                tip: 'Nearly dry; cool bright winters bring out the strongest Firestick color.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Weigh the pot by hand before even considering water.',
                    'Rotate for even sun exposure on all sides of the thicket.',
                    'Glance over stem joints for mealybug fluff or scale discs.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Prune for shape in late spring: gloves, glasses, sleeves; mist cuts with cold water to stop sap flow.',
                    'Root pruned tips as new plants — callus 1-2 weeks, then set in dry grit.',
                    'Repot every 2-3 years into a heavy pot; the root ball stays small for the plant’s size.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Nitrile gloves, safety glasses, long sleeves',
                note: 'The full set, every time the sap could fly.',
            },
            {
                item: 'Heavy terracotta pot',
                note: 'Anchors a top-heavy thicket and speeds soil dry-down.',
            },
            {
                item: 'Pumice-heavy cactus mix',
                note: 'Lean and mineral — richness only raises rot risk.',
            },
            {
                item: 'Spray bottle of cold water',
                note: 'Coagulates latex at pruning cuts so drips stop fast.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Wrinkled, Dull Stems',
                description:
                    'A light lengthwise pucker with lost gloss is honest thirst after a long dry spell.',
                actions: [
                    'Give one deep, draining soak — stems replump within days.',
                    'Do not compensate with a second watering; resume the normal long cycle.',
                ],
            },
            {
                title: 'Yellowing, Mushy Base',
                description:
                    'Softness and discoloration at the soil line is basal rot from overwatering, and it climbs quickly.',
                actions: [
                    'Unpot immediately and cut back to firm, white-fleshed tissue with a sterile blade — full protective gear on.',
                    'Callus healthy top cuttings for 1-2 weeks and restart them in dry gritty mix.',
                    'Discard infected soil; do not reuse it for succulents.',
                ],
            },
            {
                title: 'Faded Firestick Color',
                description:
                    '"Sticks on Fire" turning plain green-yellow means insufficient sun or too much summer pampering — color peaks with sun and cool-season stress.',
                actions: [
                    'Move to the brightest, sunniest spot available.',
                    'Keep winter cool and dry; the coral tones return with the stress cycle.',
                ],
            },
            {
                title: 'Dropped Stem Segments',
                description:
                    'Segments shed at the joints after cold drafts, hard knocks, or repotting shock.',
                actions: [
                    'Stabilize conditions and handle less — new branchlets emerge from remaining joints.',
                    'Callus and pot up any clean dropped segments as free propagations.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                signs: 'White cottony patches at the branch junctions.',
                treatment:
                    'Swab with isopropyl alcohol and repeat weekly; the smooth stems make thorough coverage easy.',
            },
            {
                name: 'Scale',
                signs: 'Tan-brown discs dotted along older stems.',
                treatment:
                    'Scrape gently and follow with horticultural oil every 7-10 days for a few weeks.',
            },
            {
                name: 'Spider Mites',
                signs: 'Dusty, faded stem tips in hot dry spells with fine webbing.',
                treatment:
                    'Rinse the canopy and treat weekly with insecticidal soap until tips regain color.',
            },
        ],
        stabilityChecklist: [
            'Store the gloves-and-glasses kit next to the plant so shortcuts never happen.',
            'Water by pot weight on a weeks-long cycle; skip a month before you ever double up.',
            'Keep it away from pets, kids, and brushing traffic — brittle stems weep sap when snapped.',
            'Wash tools and hands after any contact; never rub eyes while working on it.',
        ],
    },
};
