import type { Plant } from '../../lib/db/models/Plant';

export const crassulaOvata: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'crassula',
    species: 'ovata',
    commonNames: ['Jade Plant', 'Money Plant', 'Lucky Plant', 'Friendship Tree'],
    description:
        'Thick, glossy paddle-shaped leaves on sturdy branching stems make Jade Plant the archetypal easy succulent — a South African shrub that slowly builds into a miniature tree over decades of neglect-friendly care.',
    images: [],
    tags: ['succulent', 'beginner-friendly', 'mildly-toxic'],
    highlights: [
        'Native to the rocky Kwazulu-Natal and Eastern Cape regions of South Africa.',
        'Considered a symbol of good luck and prosperity in many cultures, hence "Money Plant".',
        'Can live for decades and is often passed down as a cutting between generations.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption: 'Frost-tender; grown as a houseplant almost everywhere.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright, some direct sun',
            caption:
                'A few hours of direct sun daily keeps leaves compact and can flush red at the edges.',
        },
        watering: {
            score: 1,
            value: 'Sparse & deep',
            caption: 'Every 2-3 weeks; let the mix dry out fully between drinks.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'One of the most forgiving houseplants there is.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Can cause vomiting, incoordination, or a slowed heart rate in pets if chewed.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '2-4 ft indoors',
            detail: 'A slow, tree-like grower — thick trunks and branching stems develop over years, especially with strong light.',
            minFt: 2,
            maxFt: 4,
        },
        soil: {
            value: 'Sharp-draining succulent mix',
            detail: 'A cactus or succulent mix cut with extra perlite or pumice suits its water-storing roots.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Thick storage roots and stems are prone to rot in constantly wet passive hydro setups.',
            compatible: false,
        },
        fertilizer: {
            value: 'Half-strength balanced',
            detail: 'A light hand during the growing season is enough; overfeeding produces weak, floppy growth.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: '2-3x per season',
            detail: 'A couple of dilute feeds between spring and late summer covers the year.',
        },
        nativeHabitat: {
            value: 'South Africa',
            detail: 'Grows as a shrub on dry, rocky hillsides with strong sun and long dry spells between rains.',
        },
        humidity: {
            value: 'Low to average',
            detail: 'Thrives in dry indoor air; high humidity with poor airflow invites fungal issues.',
            minPct: 20,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Tolerates brief dips near 40°F but should be protected from any real frost.',
            minF: 40,
            maxF: 90,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'New leaf pairs and branching appear steadily in warm months; growth nearly stops in winter.',
        },
        dailyRhythm: {
            heading: 'Strong light, deep drought, and patience.',
            body: 'Jade Plant stores months of water in its thick leaves and stems, so the job is mostly staying out of its way: maximum bright light, a full dry-out between waterings, and acceptance that meaningful growth is measured in seasons, not weeks.',
            highlights: [
                'Plump, glossy leaves mean well hydrated; wrinkled leaves mean it is finally time to water.',
                'Turn the pot regularly so the trunk thickens and branches evenly rather than leaning toward the light.',
                'A little direct sun brings out a attractive red blush along the leaf edges.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check leaf firmness before deciding whether to water.',
            },
            {
                interval: 'weekly',
                task: 'Rotate the pot a quarter turn for even, upright growth.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly only once the mix has dried out completely.',
            },
            {
                interval: 'monthly',
                task: 'Wipe leaves free of dust so they photosynthesize efficiently.',
            },
            {
                interval: 'seasonal',
                task: 'Prune and shape after a season of strong growth to encourage a tree-like form.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright, some direct sun',
                detail: 'The single biggest factor in keeping growth compact instead of stretched and leggy.',
            },
            {
                label: 'Water',
                stat: 'Every 2-3 weeks',
                detail: 'A full dry-out between deep waterings mimics its native drought cycle.',
            },
            {
                label: 'Growth habit',
                stat: 'Slow & tree-like',
                detail: 'Patient pruning over years shapes a thick, branching trunk reminiscent of a bonsai.',
            },
            {
                label: 'Propagation',
                stat: 'Leaf or stem cuttings',
                detail: 'A dropped leaf or a cut stem calluses and roots readily in dry, gritty mix.',
            },
        ],
        wateringRhythm: {
            heading: 'Deep, infrequent drinks — then true drought.',
            body: 'Water thoroughly until it drains from the pot, then wait until the mix has been completely dry for several days before watering again. In practice this is roughly every 2-3 weeks in the growing season and monthly or less in winter.',
            tips: [
                'A slightly wrinkled leaf is the honest cue to water — it plumps back up within a day or two.',
                'When in doubt, wait: overwatering kills far more Jade Plants than neglect does.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 2-3 weeks',
                tip: 'The active growing season; still let the mix dry fully between waterings.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 3-4 weeks',
                tip: 'Growth slows with the light — extend the dry-out accordingly.',
            },
            {
                season: 'Winter',
                cadence: 'Every 4-6 weeks',
                tip: 'Minimal water is needed while the plant rests through the cool, dim months.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check leaf firmness and pot weight rather than watering by date.',
                    'Rotate the pot a quarter turn so the trunk grows upright and even.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe leaves clean of dust with a soft, damp cloth.',
                    'Feed at half strength during the growing season only.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Prune leggy or crossing branches to encourage a thicker, tree-like structure.',
                    'Pot up every 2-3 years once roots fill the container, choosing a heavy pot to balance top growth.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Heavy, wide pot',
                note: 'Counterbalances the top-heavy, tree-like growth habit as the plant matures.',
            },
            {
                item: 'Gritty succulent mix',
                note: 'Sharp drainage is essential for the thick, water-storing roots.',
            },
            {
                item: 'Clean bypass pruners',
                note: 'For shaping cuts and taking leaf or stem cuttings.',
            },
            {
                item: 'Soft brush or cloth',
                note: 'Keeps glossy leaves dust-free and better able to photosynthesize.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Wrinkled, Shriveled Leaves',
                description:
                    'Leaves losing their plumpness and puckering are simply thirsty — the plant has used up its stored reserve.',
                actions: [
                    'Water thoroughly; leaves should firm back up within a day or two.',
                    'If wrinkling persists after watering, check the roots for rot or excessive compaction.',
                ],
            },
            {
                title: 'Soft, Mushy, Translucent Leaves',
                description:
                    'Leaves turning soft or glassy — often dropping at the lightest touch — signal overwatering, the far more dangerous extreme.',
                actions: [
                    'Stop watering immediately and let the soil dry out completely.',
                    'Check the stem base for blackened, mushy tissue; if found, take healthy cuttings and discard the rest.',
                    'Repot into fresh, sharp-draining mix once the plant recovers.',
                ],
            },
            {
                title: 'Leggy, Stretched Growth',
                description:
                    'Long gaps between leaf pairs and a thin, reaching stem point to insufficient light.',
                actions: [
                    'Move to the brightest spot available, ideally with some direct sun.',
                    'Prune leggy stems back to encourage bushier, more compact regrowth.',
                ],
            },
            {
                title: 'Leaves Dropping Easily',
                description:
                    'Jade Plants naturally shed a leaf here and there when bumped, but heavy leaf drop signals stress from watering swings or a sudden move.',
                actions: [
                    'Check that watering has been consistent, neither bone-dry for too long nor soggy.',
                    'Keep the plant in a stable spot away from cold drafts or sudden light changes.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White cottony clusters tucked into leaf joints and along stems.',
                treatment:
                    'Dab with isopropyl alcohol on a swab and follow with insecticidal soap weekly until clear.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small brown or tan bumps along stems that do not wipe off easily.',
                treatment:
                    'Scrape off light infestations and treat with horticultural oil every 1-2 weeks.',
            },
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small soft-bodied insects clustered on new growth tips.',
                treatment:
                    'Rinse off with water and follow with insecticidal soap every 5-7 days.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Small flies near the pot, indicating the mix is staying too wet.',
                treatment:
                    'Extend drying time between waterings and water in BTI to break the larval cycle.',
            },
        ],
        stabilityChecklist: [
            'Water by leaf-feel and pot weight, never by a fixed calendar.',
            'Maximize light — it is the single biggest lever on compact, healthy growth.',
            'Keep a rooted leaf or stem cutting as easy insurance against any setback.',
            'Use a heavy pot as the plant matures to keep top-heavy branching from tipping over.',
        ],
    },
};
