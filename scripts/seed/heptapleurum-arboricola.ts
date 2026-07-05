import type { Plant } from '../../lib/db/models/Plant';

export const heptapleurumArboricola: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'heptapleurum',
    species: 'arboricola',
    commonNames: ['Dwarf Umbrella Tree', 'Dwarf Schefflera', 'Parasol Plant'],
    description:
        'A compact, bushy relative of the Australian Umbrella Tree, with smaller glossy leaflets fanning out from each stem — an easygoing tabletop or floor plant that tolerates a wide range of light.',
    images: [],
    tags: ['beginner-friendly', 'low-maintenance', 'mildly-toxic', 'compact'],
    highlights: [
        'Native to Taiwan and Hainan, where it grows as a shrubby understory plant and epiphyte in humid forests.',
        'Formerly classified as Schefflera arboricola — reclassified into Heptapleurum along with its larger relative, H. actinophyllum.',
        'Widely sold with braided or twisted trunks, a nursery technique that works because young stems stay flexible.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption:
                'Grown outdoors only in frost-free, tropical-to-subtropical climates; a houseplant everywhere else.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Tolerates medium light well, making it more forgiving of average room conditions than most statement trees.',
        },
        watering: {
            score: 2,
            value: 'Let dry between waterings',
            caption:
                'Prefers the top half of the soil to dry before watering again — sensitive to soggy, poorly drained soil.',
        },
        difficulty: {
            score: 1,
            value: 'Very easy',
            caption:
                'One of the most forgiving small trees for low light, inconsistent watering, and beginner mistakes.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Contains calcium oxalate crystals — causes mouth and GI irritation if chewed by pets or children.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '3-6 ft indoors (up to 8 ft outdoors)',
            detail: 'A slow-to-moderate grower that stays manageable on a tabletop for years before needing floor space.',
            minFt: 3,
            maxFt: 8,
        },
        soil: {
            value: 'Well-draining, general-purpose potting mix',
            detail: 'A standard peat- or coco-based mix with added perlite is all it needs — not particular about soil composition.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Converts well to LECA or pon, and its tolerance for a range of moisture levels makes the transition easy.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, foliage-forward',
            detail: 'A balanced houseplant fertilizer at half strength supports steady, compact growth.',
            npk: '10-5-5',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly during spring and summer; skip feeding entirely in winter while growth is dormant.',
        },
        nativeHabitat: {
            value: 'Taiwan and Hainan',
            detail: 'Humid subtropical forest understory and margins, often growing as a shrub or low epiphyte.',
        },
        humidity: {
            value: '40%+ tolerated',
            detail: 'Comfortable in average home humidity, though it responds well to slightly higher levels with glossier growth.',
            minPct: 40,
        },
        temperature: {
            value: '60° – 85°F',
            detail: 'Sits well within typical indoor ranges; keep away from cold drafts and temperatures below 50°F.',
            minF: 60,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'Sends out new leaflet clusters steadily through the warm months, slowing to a near-stop in winter.',
        },
        dailyRhythm: {
            heading: 'A compact, easygoing tree that tolerates a range of conditions.',
            body: 'Dwarf Umbrella Tree adapts to medium or bright indirect light and a straightforward soak-and-dry watering rhythm. Its main appeal is tolerance — it handles inconsistent care, average humidity, and lower light far better than most other trees of similar size.',
            highlights: [
                'New leaflet clusters emerge from the stem tips and fan open over a few days.',
                'Leaning toward a light source is a cue to rotate the pot, not a sign of stress.',
                'Responds well to pruning, making it easy to keep bushy and full at any size.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check topsoil moisture and water once the top half is dry.',
            },
            {
                interval: 'weekly',
                task: 'Rotate the pot a quarter turn toward the light source.',
            },
            {
                interval: 'monthly',
                task: 'Feed with a balanced fertilizer during active growth.',
            },
            {
                interval: 'seasonal',
                task: 'Prune lightly to maintain a full, bushy shape.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Tolerates medium light well, though bright indirect light keeps growth denser.',
            },
            {
                label: 'Water',
                stat: 'Soak & dry',
                detail: 'Water thoroughly, then let the top half of the soil dry before watering again.',
            },
            {
                label: 'Feeding',
                stat: 'Monthly in season',
                detail: 'Light, balanced feeding is enough to sustain its slow-to-moderate growth rate.',
            },
            {
                label: 'Pruning',
                stat: 'Light, as needed',
                detail: 'Tolerates pruning well and responds with fuller, bushier regrowth.',
            },
        ],
        wateringRhythm: {
            heading: 'Water deeply, then let it dry back before the next round.',
            body: 'Saturate the soil fully and allow excess to drain away, then wait until the top half of the pot has dried before watering again. This species tolerates a missed watering far better than it tolerates soil that stays consistently wet.',
            tips: [
                'Yellowing or dropping leaves are usually the first sign of overwatering, not underwatering.',
                'Reduce frequency further in winter when growth slows and light levels drop.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 7-10 days',
                tip: 'Active growth uses more water — check the top half of the soil before each watering.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 10-14 days',
                tip: 'Ease back as light and growth taper off.',
            },
            {
                season: 'Winter',
                cadence: 'Every 14-21 days',
                tip: 'Let the soil dry out more fully between waterings while growth is mostly dormant.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water once the top half is dry.',
                    'Wipe down leaves to clear dust and support light uptake.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed with a balanced fertilizer during active growth.',
                    'Inspect leaf joints and stems for early signs of scale or mealybugs.',
                    'Rotate the pot for even growth on all sides.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Prune lightly to maintain a full, bushy shape.',
                    'Repot into a slightly larger container once roots fill the current pot.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Sharp bypass pruners',
                note: 'Keeps growth compact and encourages the bushy shape this species is grown for.',
            },
            {
                item: 'Well-draining potting mix',
                note: 'Supports the soak-and-dry cycle this species prefers over constant moisture.',
            },
            {
                item: 'Soft plant ties',
                note: 'Useful for maintaining or reshaping a braided trunk as new growth develops.',
            },
            {
                item: 'Neem oil or insecticidal soap',
                note: 'On hand for the scale and mealybug issues this species is prone to.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Yellowing or Dropping Leaves',
                description:
                    'The most common complaint, usually caused by soil staying wet too long between waterings.',
                actions: [
                    'Let the soil dry out further before the next watering and confirm the pot drains fully.',
                    'Move to a pot with drainage holes if none currently exist.',
                    'Trim fully yellowed leaves once they stop improving.',
                ],
            },
            {
                title: 'Leaning or Reaching Toward Light',
                description:
                    'A mild lean toward the brightest window is normal and not a sign of stress on its own.',
                actions: [
                    'Rotate the pot a quarter turn weekly to even out growth.',
                    'Move to a brighter spot only if leaflets are also coming in noticeably smaller.',
                ],
            },
            {
                title: 'Leaf Drop After Relocation',
                description:
                    'Dropping a few leaves after a move or repotting is a normal stress response rather than a sign of lasting damage.',
                actions: [
                    'Keep care consistent and avoid further changes in light or watering while it settles.',
                    'Resume normal watering and feeding once new growth appears.',
                ],
            },
        ],
        pests: [
            {
                name: 'Scale',
                signs: 'Small, dome-shaped brown bumps along stems and leaf undersides, often with sticky honeydew residue.',
                treatment:
                    'Scrape off visible scale and follow with horticultural oil applications every 7-10 days until clear.',
            },
            {
                name: 'Mealybugs',
                signs: 'Cottony white clusters in leaf joints and along stems.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol, then treat with neem oil until no new clusters appear.',
            },
            {
                name: 'Spider Mites',
                signs: 'Fine stippling and faint webbing on leaf undersides, worse in dry indoor air.',
                treatment:
                    'Rinse foliage and treat weekly with insecticidal soap or neem oil until no new damage appears.',
            },
        ],
        stabilityChecklist: [
            'Give it bright to medium indirect light — it tolerates more shade than most small trees.',
            'Let the soil dry out through the top half before watering again — resist the urge to water on a fixed schedule.',
            'Feed monthly during the growing season and pause over winter.',
            'Prune lightly and regularly to keep the canopy full rather than sparse.',
        ],
    },
};
