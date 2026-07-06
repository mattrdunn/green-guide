import type { Plant } from '../../lib/db/models/Plant';

export const aeoniumArboreum: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'aeonium',
    species: 'arboreum',
    commonNames: ['Tree Aeonium', 'Tree Houseleek', 'Irish Rose'],
    description:
        'Glossy rosettes perched on bare branching stems give Aeonium arboreum the look of a miniature succulent tree — with a twist: it grows through the cool months and naps through summer heat.',
    images: [
        {
            url: 'plants/aeonium/arboreum/img-1.jpg',
            alt: 'Aeonium arboreum rosettes on branching stems',
        },
        {
            url: 'plants/aeonium/arboreum/img-2.png',
            alt: 'Aeonium arboreum rosette close-up',
        },
    ],
    tags: ['succulent', 'rosette', 'winter-grower', 'non-toxic'],
    highlights: [
        'Native to the Canary Islands’ mild, Mediterranean-style climate.',
        'A winter grower — active in cool months, semi-dormant in summer heat.',
        'The near-black cultivar "Zwartkop" is the most sought-after form.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Tolerates a light touch of frost, nothing hard.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Sun to bright shade',
            caption:
                'Full sun in mild weather; light shade in scorching summers.',
        },
        watering: {
            score: 3,
            value: 'Moderate, in season',
            caption:
                'More than most succulents when growing, minimal when dormant.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Easy once you learn its upside-down calendar.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around cats, dogs, and curious kids.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '1-3 ft in pots',
            detail: 'Branching stems slowly build a small shrub; leggy stems can be beheaded and re-rooted to restart compact.',
            minFt: 1,
            maxFt: 3,
        },
        soil: {
            value: 'Loamy + grit',
            detail: 'Equal parts potting soil and perlite suits its shallow, fibrous roots — slightly richer than a pure cactus mix.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Shallow roots and a summer dormancy make constant moisture a rot sentence.',
            compatible: false,
        },
        fertilizer: {
            value: 'Half-strength balanced',
            detail: 'Light feeding during the cool growing season keeps rosettes full without stretching.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Monthly, fall–spring',
            detail: 'Feed while actively growing; never feed a summer-dormant plant.',
        },
        nativeHabitat: {
            value: 'Canary Islands',
            detail: 'Mild wet winters and warm dry summers — the origin of its reversed growing calendar.',
        },
        humidity: {
            value: 'Average is fine',
            detail: 'Unfussy about humidity; airflow matters more than moisture in the air.',
            minPct: 20,
        },
        temperature: {
            value: '40° – 75°F',
            detail: 'Happiest in the cool range; above ~80°F it shuts down and rests.',
            minF: 30,
            maxF: 85,
        },
        growSeason: {
            value: 'Autumn–Spring',
            detail: 'The reverse of most houseplants — expect new rosette growth as the weather cools.',
        },
        dailyRhythm: {
            heading: 'A succulent that keeps a Mediterranean calendar.',
            body: 'Aeoniums do their living in the mild, moist months and sleep through summer heat by curling their rosettes closed and shedding lower leaves. Care that follows this rhythm — water and food in the cool season, benign neglect in the hot one — is the whole secret.',
            highlights: [
                'Cool-season growth means winter is feeding time, not resting time.',
                'Closed, tight rosettes in summer heat are dormancy, not dying.',
                'Shallow roots dry fast — this succulent drinks more often than you’d guess.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top inch of soil — in the growing season, water when it dries.',
            },
            {
                interval: 'weekly',
                task: 'Pick fallen leaves off the soil to deny pests a hiding place.',
            },
            {
                interval: 'as-needed',
                task: 'In summer dormancy, mostly leave it alone; a small sip every few weeks suffices.',
            },
            {
                interval: 'seasonal',
                task: 'Resume regular watering when cooler weather wakes the plant from summer dormancy.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Season sense',
                stat: 'Grows in winter',
                detail: 'Flip your succulent instincts: this plant works October to May and rests June to September.',
            },
            {
                label: 'Hydration',
                stat: 'Weekly-ish in season',
                detail: 'Shallow roots want more frequent, lighter drinks than deep-rooted cacti.',
            },
            {
                label: 'Light',
                stat: 'Sun, softened in heat',
                detail: 'Full sun deepens cultivar color, but hot-summer sun scorches a dormant plant.',
            },
            {
                label: 'Renewal',
                stat: 'Behead & re-root',
                detail: 'Leggy stems restart easily as cuttings — rosettes root in weeks during the cool season.',
            },
        ],
        wateringRhythm: {
            heading: 'Water to the season, not the succulent stereotype.',
            body: 'During the cool growing season, water whenever the top inch of mix dries — often weekly, which is generous by succulent standards. In summer dormancy, cut back to a light drink every 3-4 weeks, just enough to keep the rosettes from fully desiccating.',
            tips: [
                'Wrinkled or limp lower leaves in the growing season mean it wants more water than you think.',
                'Water the soil, not the rosettes — pooled water in the crown invites rot.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Autumn–Spring (growing)',
                cadence: 'Every 5-9 days',
                tip: 'The active season: water when the top inch dries and feed monthly.',
            },
            {
                season: 'Early Summer',
                cadence: 'Every 2-3 weeks',
                tip: 'Taper off as rosettes tighten and growth visibly stalls.',
            },
            {
                season: 'High Summer (dormant)',
                cadence: 'Every 3-4 weeks, lightly',
                tip: 'Shade from scorching afternoon sun and resist heavy watering.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture with a finger during the growing season.',
                    'Rotate the pot so rosettes face the light evenly.',
                    'Remove shed lower leaves from the soil surface.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'In autumn, resume regular water and feeding as rosettes reopen.',
                    'Take stem cuttings in autumn or spring; callus a few days and pot in barely-moist mix.',
                    'Repot every 2-3 years in autumn — wide and shallow beats deep pots.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Wide, shallow pot',
                note: 'Matches the shallow root plate and dries evenly.',
            },
            {
                item: 'Half-and-half gritty mix',
                note: 'Potting soil cut 50% with perlite or pumice.',
            },
            {
                item: 'Clean snips',
                note: 'For beheading leggy stems into fresh cuttings.',
            },
            {
                item: 'Insecticidal soap',
                note: 'Aphids love the tender rosette centers and flower stalks.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Summer Rosette Curl & Leaf Drop',
                description:
                    'In heat, rosettes close into tight buttons and shed outer leaves — dormancy in action, routinely mistaken for death.',
                actions: [
                    'Do not increase watering; keep the plant in light shade and wait.',
                    'Normal open growth resumes on its own when nights cool in autumn.',
                ],
            },
            {
                title: 'Leggy, Bare Stems',
                description:
                    'Long stem stretches between small rosettes come from insufficient light during the growing season.',
                actions: [
                    'Give more direct sun October through May.',
                    'Behead stretched stems and re-root the rosettes for a compact restart.',
                ],
            },
            {
                title: 'Rosette Dies After Flowering',
                description:
                    'Aeonium rosettes are monocarpic — a rosette that produces a flower cone dies afterward, though the rest of the plant lives on.',
                actions: [
                    'Cut the spent stem back to a junction; side shoots fill the gap.',
                    'On single-rosette plants, take offset or stem cuttings before bloom finishes.',
                ],
            },
            {
                title: 'Blackening, Collapsing Stems',
                description:
                    'Dark, soft stem tissue means rot — usually from summer watering on a dormant plant.',
                actions: [
                    'Cut healthy rosettes off above the rot and callus them for several days.',
                    'Re-root cuttings in barely-moist gritty mix; discard the rotted base.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Green or black clusters on new leaves and especially flower stalks.',
                treatment:
                    'Rinse off with water, then apply insecticidal soap every 5-7 days until clear.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White fluff tucked deep between rosette leaves.',
                treatment:
                    'Dab with isopropyl alcohol on a swab, repeating weekly; check leaf bases carefully.',
            },
            {
                name: 'Ants (symptom)',
                signs: 'Ant trails up the stems — they farm aphids and mealybugs for honeydew.',
                treatment:
                    'Control the sap-suckers and the ants leave; a sticky barrier on the pot helps outdoors.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Small flies around soil kept too moist in the dormant season.',
                treatment:
                    'Let the surface dry fully, topdress with grit, and correct the summer watering schedule.',
            },
        ],
        stabilityChecklist: [
            'Mark the calendar: water and feed in the cool months, back off hard in summer.',
            'Never push water at a closed, dormant rosette — that is when rot happens.',
            'Keep a couple of rooted cuttings as insurance; aeoniums restart effortlessly.',
            'Check rosette centers and flower stalks for aphids during the spring bloom.',
        ],
    },
};
