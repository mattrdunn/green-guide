import type { Plant } from '../../lib/db/models/Plant';

export const ficusLyrata: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'ficus',
    species: 'lyrata',
    commonNames: ['Fiddle-Leaf Fig'],
    description:
        'Sculptural, violin-shaped leaves make Ficus lyrata the statement tree of modern interiors — a diva about drafts and moving day, but stunning once it settles in.',
    images: [
        {
            url: 'plants/ficus/lyrata/img-1.png',
            alt: 'Fiddle-leaf fig in a bright living room, with a few leaves showing brown edges.',
        },
        {
            url: 'plants/ficus/lyrata/img-2.png',
            alt: 'Fiddle-leaf fig in a bright living room, with a few leaves showing brown edges.',
        },
    ],
    tags: ['ficus', 'tree', 'statement-plant', 'mildly-toxic'],
    highlights: [
        'Native to the lowland rainforests of West Africa.',
        'Can reach ceiling height indoors within a few years of good care.',
        'Famously dislikes change — pick a bright spot and leave it there.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Outdoor survival only in frost-free climates.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 4,
            value: 'Bright, some direct',
            caption: 'A few hours of gentle morning sun keeps growth compact.',
        },
        watering: {
            score: 3,
            value: 'Thorough & consistent',
            caption:
                'Water when the top 2" dries; hates both drought and soggy roots.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Sensitive to relocation, drafts, and inconsistent watering.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Milky sap irritates skin and stomachs — keep from pets and wash hands after pruning.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '6-10 ft indoors',
            detail: 'Grows as a single-trunk tree or bushy column; notch or prune the trunk to encourage branching.',
            minFt: 6,
            maxFt: 10,
        },
        soil: {
            value: 'Rich, well-draining',
            detail: 'Quality indoor potting mix cut with ~25% perlite or bark; it wants moisture without ever sitting wet.',
        },
        semiHydro: {
            value: 'Not recommended',
            detail: 'Mature root systems resent disturbance; transitions to LECA frequently trigger heavy leaf drop.',
            compatible: false,
        },
        fertilizer: {
            value: 'Foliage-forward feed',
            detail: 'A 3-1-2 ratio fertilizer supports the large, nitrogen-hungry leaves.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly spring through summer at half strength; none in winter.',
        },
        nativeHabitat: {
            value: 'West Africa',
            detail: 'Lowland tropical rainforest — warm, humid, and bright. It often starts life as an epiphyte strangling a host tree.',
        },
        humidity: {
            value: '40-60%',
            detail: 'More tolerant of average home humidity than most tropicals, but crisps below 30%.',
            minPct: 40,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Cold drafts below 55°F trigger leaf drop — keep away from frequently opened doors in winter.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'A healthy tree pushes flushes of 2-3 new leaves at a time from each growing tip.',
        },
        dailyRhythm: {
            heading: 'Stability is the whole care philosophy.',
            body: 'The fiddle-leaf thrives on sameness: the same bright window, the same watering rhythm, the same temperature. Resist the urge to move, rotate drastically, or fuss — most fiddle-leaf failures trace back to change, not neglect.',
            highlights: [
                'Choose the brightest window you have and commit to it.',
                'Water on a consistent rhythm, adjusting only with the seasons.',
                'Wipe the broad leaves regularly — dust meaningfully cuts their light intake.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top 2" of soil and water only if dry.',
            },
            {
                interval: 'weekly',
                task: 'Wipe one or two of the large leaves with a damp cloth.',
            },
            {
                interval: 'weekly',
                task: 'Look for brown spots or sudden leaf drop — both are early warnings.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly when the top 2" are dry — consistency beats volume.',
            },
            {
                interval: 'monthly',
                task: 'Wipe every leaf, top and bottom, with a damp microfiber cloth.',
            },
            {
                interval: 'monthly',
                task: 'Prune crossing or inward-facing branches to keep an open canopy.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Brightest window',
                detail: 'More light solves most fiddle-leaf problems; gentle direct morning sun is a bonus.',
            },
            {
                label: 'Consistency',
                stat: 'Same spot, same rhythm',
                detail: 'Relocation, drafts, and erratic watering are the top three causes of leaf drop.',
            },
            {
                label: 'Hydration',
                stat: 'Every 7-10 days',
                detail: 'Water thoroughly when the top 2" dries; even moisture prevents brown edge spots.',
            },
            {
                label: 'Leaf care',
                stat: 'Dust monthly',
                detail: 'Clean, glossy leaves photosynthesize better and reveal pests early.',
            },
        ],
        wateringRhythm: {
            heading: 'Even moisture, never extremes.',
            body: 'Fiddle-leaf figs punish both drought and waterlogging with brown spots and shed leaves. Water thoroughly until runoff when the top two inches dry, then let the pot drain completely. The goal is a steady cycle — the same amount, on roughly the same rhythm, adjusted gently by season.',
            tips: [
                'Lift the pot after watering to learn its "heavy" weight — a light pot is the most reliable thirst signal.',
                'Use room-temperature water; cold water shocks roots and can spot leaves.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 7 days',
                tip: 'Growth flushes drink heavily — keep the rhythm steady and feed monthly.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 10 days',
                tip: 'Taper gradually as light fades; sudden schedule changes stress the tree.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Keep it clear of radiators and cold windows; both bake or chill the root ball.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and pot weight before deciding to water.',
                    'Rotate the pot a few degrees — slowly, over weeks — for even growth.',
                    'Scan trunks and leaf undersides for scale bumps and mealybug fluff.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe every leaf, top and bottom, with a damp microfiber cloth.',
                    'Feed at half strength during the growing season.',
                    'Prune crossing or inward-facing branches to keep an open canopy.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Moisture meter',
                note: 'Takes the guesswork out of the strict watering rhythm this tree demands.',
            },
            {
                item: 'Microfiber cloths',
                note: 'The oversized leaves collect dust fast and lose real light to it.',
            },
            {
                item: 'Sharp bypass pruners',
                note: 'Clean cuts when shaping; wear gloves — the white sap irritates skin.',
            },
            {
                item: 'Sturdy stake or bamboo cane',
                note: 'Young trunks often need support until they thicken; wiggle the trunk gently to strengthen it.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Brown Spots on Leaves',
                description:
                    'Crisp brown edges point to underwatering or dry air; dark brown-black patches spreading from the center or veins usually mean overwatering and root rot.',
                actions: [
                    'Unpot and check roots if spots are dark and spreading — trim mushy roots and repot in fresh, drier mix.',
                    'Tighten the watering rhythm if edges are crispy; the mix likely swung too dry between drinks.',
                    'Remove badly spotted leaves; they will not recover and can harbor fungus.',
                ],
            },
            {
                title: 'Sudden Leaf Drop',
                description:
                    'Shedding green, healthy-looking leaves is the classic fiddle-leaf shock response to relocation, drafts, or a big watering change.',
                actions: [
                    'Identify what changed in the last two weeks — location, temperature, light, or schedule — and stabilize it.',
                    'Do not compensate with extra water or fertilizer; resume the normal routine and wait.',
                    'Expect recovery flushes in spring once conditions have been stable for a few weeks.',
                ],
            },
            {
                title: 'Leaning or Leggy Growth',
                description:
                    'Long bare stretches of trunk and a hard lean toward the window mean the tree is starved for light.',
                actions: [
                    'Move it to the brightest available spot — this is the one move worth the shock.',
                    'Rotate a few degrees weekly so growth stays balanced.',
                    'Notch or pinch the top in spring to trigger branching along bare trunk.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                signs: 'Faint stippling and dusty webbing, often starting on the newest leaves.',
                treatment:
                    'Shower the canopy, then spray insecticidal soap or neem weekly for 3-4 weeks, coating leaf undersides.',
            },
            {
                name: 'Scale',
                signs: 'Brown, dome-shaped bumps along the trunk and leaf midribs; sticky honeydew below.',
                treatment:
                    'Scrape or alcohol-swab each insect, then apply horticultural oil every 7-10 days until no new bumps appear.',
            },
            {
                name: 'Mealybugs',
                signs: 'White cottony clusters where leaves meet the trunk.',
                treatment:
                    'Dab with isopropyl alcohol on a cotton swab and follow with insecticidal soap; recheck weekly.',
            },
            {
                name: 'Fungus Gnats',
                signs: 'Small flies around the soil, usually after a stretch of overwatering.',
                treatment:
                    'Let the top 2" of soil dry fully, topdress with sand, and drench with BTI to break the larval cycle.',
            },
        ],
        stabilityChecklist: [
            'Keep the tree in one bright spot — move it only as a last resort, and expect an adjustment period.',
            'Hold a steady watering rhythm and adjust gradually with the seasons, never abruptly.',
            'Dust the leaves monthly; dust is a real light tax on leaves this large.',
            'Check trunk and leaf undersides for scale monthly — it is this species’ most persistent pest.',
        ],
    },
};
