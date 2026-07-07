import type { Plant } from '../../lib/db/models/Plant';

export const crassulaOvataGollum: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'crassula',
    species: 'ovata',
    variety: 'gollum',
    commonNames: ["Golem Jade", "Gollum Jade", "E.T.'s Fingers"],
    description:
        'A curled, tubular-leafed sport of the common Jade Plant, Golem Jade swaps flat paddles for suction-cup-tipped "fingers" — the same tough, water-storing shrub underneath, styled for whimsical bonsai and novelty pots.',
    images: [],
    tags: ['succulent', 'beginner-friendly', 'mildly-toxic'],
    highlights: [
        'A naturally occurring mutation of Crassula ovata, prized for its tubular, trumpet-shaped leaves.',
        'The concave, suction-cup leaf tips are its signature — reddish where they catch strong sun.',
        'A favorite for miniature and novelty bonsai styling thanks to its slow, gnarled trunk.',
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
                'Direct sun deepens the red blush at each leaf tip and keeps growth compact.',
        },
        watering: {
            score: 1,
            value: 'Sparse & deep',
            caption: 'Every 2-3 weeks; let the mix dry out fully between drinks.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Just as forgiving as the plain species, given enough light.',
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
            value: '1-3 ft indoors',
            detail: 'Grows even more slowly than plain Jade Plant; its gnarled, thickening trunk is the main draw over time.',
            minFt: 1,
            maxFt: 3,
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
            detail: 'A light hand during the growing season is enough; overfeeding produces weak, floppy growth that hides its sculptural form.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: '2-3x per season',
            detail: 'A couple of dilute feeds between spring and late summer covers the year.',
        },
        nativeHabitat: {
            value: 'South Africa (cultivated sport)',
            detail: 'A mutation of the species, which grows as a shrub on dry, rocky hillsides with strong sun and long dry spells.',
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
            detail: 'New tubular leaves and slow trunk thickening happen in warm months; growth nearly stops in winter.',
        },
        dailyRhythm: {
            heading: 'The same drought-loving jade, styled for character.',
            body: 'Golem Jade wants exactly what plain Jade Plant wants — bright light, a full dry-out between waterings, and patience — but rewards that patience with a gnarled, sculptural trunk and curled fingers that make it a natural for shallow bonsai pots.',
            highlights: [
                'Strong, direct light is what brings out the red blush at each leaf tip.',
                'Turn the pot regularly so the trunk thickens evenly for bonsai-style shaping.',
                'Slower growth than plain Jade Plant is normal — let the trunk take years to develop character.',
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
                task: 'Prune and wire lightly if styling as bonsai, working with the naturally gnarled trunk.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright, some direct sun',
                detail: 'Keeps growth compact and deepens the red color at each tubular leaf tip.',
            },
            {
                label: 'Water',
                stat: 'Every 2-3 weeks',
                detail: 'A full dry-out between deep waterings mimics its native drought cycle.',
            },
            {
                label: 'Growth habit',
                stat: 'Very slow & gnarled',
                detail: 'Slower than plain Jade Plant — the payoff is a distinctively twisted trunk over the years.',
            },
            {
                label: 'Propagation',
                stat: 'Leaf or stem cuttings',
                detail: 'A dropped leaf or cut stem calluses and roots readily in dry, gritty mix, true to the parent form.',
            },
        ],
        wateringRhythm: {
            heading: 'Deep, infrequent drinks — then true drought.',
            body: 'Water thoroughly until it drains from the pot, then wait until the mix has been completely dry for several days before watering again. In practice this is roughly every 2-3 weeks in the growing season and monthly or less in winter.',
            tips: [
                'A slightly wrinkled leaf is the honest cue to water — it plumps back up within a day or two.',
                'When in doubt, wait: overwatering kills far more of these than neglect does.',
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
                    'Prune and lightly wire branches if styling as bonsai, working with the trunk’s natural curves.',
                    'Pot up every 2-3 years once roots fill the container, choosing a heavy pot to balance top growth.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Shallow bonsai-style pot',
                note: 'Complements its gnarled trunk and slow, sculptural growth habit.',
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
                note: 'Keeps the tubular leaves dust-free and better able to photosynthesize.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Wrinkled, Shriveled Leaves',
                description:
                    'Tubular leaves losing their plumpness and puckering are simply thirsty — the plant has used up its stored reserve.',
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
                    'Long gaps between leaves and a thin, reaching stem point to insufficient light — and flatten out the plant’s signature curled form.',
                actions: [
                    'Move to the brightest spot available, ideally with some direct sun.',
                    'Prune leggy stems back to encourage bushier, more compact regrowth.',
                ],
            },
            {
                title: 'Leaves Losing Their Curl',
                description:
                    'New leaves emerging flatter and less tubular than older growth usually points to insufficient light.',
                actions: [
                    'Increase direct sun exposure gradually; the curled "finger" shape is most pronounced in strong light.',
                    'Be patient — existing leaves keep their shape; only new growth reflects the change.',
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
            'Maximize light — it sharpens the curled leaf shape and deepens the red tip color.',
            'Keep a rooted leaf or stem cutting as easy insurance against any setback.',
            'Use a heavy, shallow pot as the plant matures to suit its bonsai-friendly trunk.',
        ],
    },
};
