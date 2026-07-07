import type { Plant } from '../../lib/db/models/Plant';

export const senecioRadicans: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'senecio',
    species: 'radicans',
    commonNames: ['String of Bananas', 'Fishhooks Senecio'],
    description:
        'A close cousin of String of Pearls, String of Bananas trades round beads for slender, curved banana-shaped leaves — a faster, denser South African trailer that is just as content to be ignored.',
    images: [],
    tags: ['succulent', 'trailing', 'hanging-basket', 'mildly-toxic'],
    highlights: [
        'Native to the same South African scrub as String of Pearls, and just as drought-hardy.',
        'Grows noticeably faster and bushier than its round-beaded cousin.',
        'Small flowers smell distinctly of cinnamon and vanilla when they appear.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Frost-free only; grown as a houseplant in most climates.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright + gentle sun',
            caption:
                'Bright light with a little direct sun keeps strands tight and leaves plump.',
        },
        watering: {
            score: 2,
            value: 'Light & infrequent',
            caption: 'Every 2-3 weeks; deflating leaves are the cue to water.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'Faster and more forgiving than String of Pearls.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Sap irritates skin and ingestion upsets stomachs — keep strands out of reach of pets.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: 'Trails 2-4 ft',
            detail: 'Vigorous strands spill well past the pot rim within a season; trim tips to keep growth dense rather than stringy.',
            minFt: 2,
            maxFt: 4,
        },
        soil: {
            value: 'Sharp-draining succulent mix',
            detail: 'Cactus mix cut with extra perlite or pumice — shallow roots rot fast in anything that holds moisture.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Fine, shallow roots and rot-prone stems make passive hydro a poor match.',
            compatible: false,
        },
        fertilizer: {
            value: 'Quarter-strength balanced',
            detail: 'A light hand is enough; overfeeding produces soft, rot-prone growth.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: '2-3x in season',
            detail: 'A couple of dilute feeds between spring and midsummer is plenty.',
        },
        nativeHabitat: {
            value: 'South Africa',
            detail: 'Trails along rocky, sun-baked ground in the same regions as String of Pearls — bright light, sharp drainage, sparse rain.',
        },
        humidity: {
            value: 'Low to average',
            detail: 'Dry air suits it fine; avoid misting, which pools water between leaves.',
            minPct: 20,
        },
        temperature: {
            value: '60° – 80°F',
            detail: 'A cooler winter around 55-60°F encourages flowering the following spring.',
            minF: 45,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Strands lengthen quickly in warm, bright months and pause through winter.',
        },
        dailyRhythm: {
            heading: 'Bright light, deep drought, minimal fuss.',
            body: 'String of Bananas stores water in its curved leaves and grows fastest when mostly left alone between waterings. Bright light with a touch of direct sun and a strict dry-out cycle is the whole routine.',
            highlights: [
                'Plump, curved leaves mean hydrated; flattening or wrinkling means water soon.',
                'New growth extends fastest right at the crown — check that spot for pests first.',
                'Drape strands over the rim instead of letting them root into the surrounding soil.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check leaf plumpness along a few strands before deciding to water.',
            },
            {
                interval: 'weekly',
                task: 'Rotate the pot so growth thickens evenly around the crown.',
            },
            {
                interval: 'weekly',
                task: 'Check stem bases at the soil line for softness or blackening.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly once leaves just begin to flatten or dull.',
            },
            {
                interval: 'monthly',
                task: 'Pin a trimmed strand onto the soil surface to root and thicken the pot.',
            },
            {
                interval: 'monthly',
                task: 'Inspect the crown with a flashlight for mealybugs.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright, some sun',
                detail: 'A few hours of direct morning sun plus bright shade keeps leaves compact and curved.',
            },
            {
                label: 'Water',
                stat: 'Every 2-3 weeks',
                detail: 'Wait for leaves to start losing their plump curve; the strands hold weeks of reserve.',
            },
            {
                label: 'Growth habit',
                stat: 'Fast & branching',
                detail: 'Pinch tips regularly to keep the trailing mass full instead of a few long, bare strands.',
            },
            {
                label: 'Propagation',
                stat: 'Roots anywhere it touches soil',
                detail: 'Cuttings and pinned strands establish quickly, making it easy to bulk up a pot.',
            },
        ],
        wateringRhythm: {
            heading: 'Let the leaves signal, then leave it be.',
            body: 'Water thoroughly once the mix is fully dry and leaves have just begun to flatten or lose their sheen, then wait it out. In practice: every 2-3 weeks during the growing season, monthly or less in winter.',
            tips: [
                'Bottom-watering for 10-15 minutes soaks the mix without wetting the vulnerable crown.',
                'A slightly shriveled leaf recovers within a day of watering — err on the dry side.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 2-3 weeks',
                tip: 'Fastest growth of the year; still wait for a full dry-out between drinks.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 3-4 weeks',
                tip: 'Growth slows with the light — ease back gradually.',
            },
            {
                season: 'Winter',
                cadence: 'Every 4-6 weeks',
                tip: 'A cool, barely-watered winter sets up spring flowering.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check leaf plumpness rather than watering on a fixed schedule.',
                    'Rotate the pot a quarter turn for even growth around the crown.',
                    'Pinch any leggy or bare strand tips back to encourage branching.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Pin a healthy trimmed strand onto the soil surface to root.',
                    'Inspect crown growth with a flashlight for mealybugs.',
                    'Feed at quarter strength during spring and early summer only.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Shallow pot or hanging basket',
                note: 'Matches the shallow root system and avoids hidden wet pockets.',
            },
            {
                item: 'Gritty succulent mix + perlite',
                note: 'Fast drainage protects the rot-prone crown and stems.',
            },
            {
                item: 'Small snips and floral pins',
                note: 'For trimming strands and pinning cuttings back into the pot.',
            },
            {
                item: 'Watering tray',
                note: 'Bottom-watering keeps the crown dry while roots take up water.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Flattened, Deflated Leaves',
                description:
                    'Uniform flattening across the plant is simple thirst; one bad strand alone usually means damage to that stem specifically.',
                actions: [
                    'For overall deflation, water thoroughly — leaves replump within a day or two.',
                    'For a single bad strand, trim it back and re-root the healthy tip.',
                ],
            },
            {
                title: 'Mushy, Translucent Leaves',
                description:
                    'Soft, see-through, or bursting leaves signal overwatering — the more dangerous of the two extremes.',
                actions: [
                    'Stop watering and move to a brighter, airier spot.',
                    'Check the crown; if stems at soil level are black, save healthy strand tips as cuttings.',
                    'Repot into drier, grittier mix if the current soil stays wet for more than a week.',
                ],
            },
            {
                title: 'Balding Crown',
                description:
                    'Full strand tips with a bare, sparse crown is classic light starvation at the top of the pot, which sits in its own shade.',
                actions: [
                    'Move the plant so light reaches the top of the pot, not just the trailing strands.',
                    'Pin trimmed strand segments across the bare soil to refill the crown.',
                ],
            },
            {
                title: 'Thin, Stretched Strands',
                description:
                    'Long gaps between small leaves point to insufficient light overall.',
                actions: [
                    'Move to a brighter window or supplement with a grow light.',
                    'Trim leggy growth back once new, denser growth appears.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White cottony flecks tucked between leaves and at stem joints.',
                treatment:
                    'Dab individuals with isopropyl alcohol and follow with weekly insecticidal soap until clear.',
            },
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small soft-bodied insects clustered on new growth and flower stalks.',
                treatment:
                    'Rinse gently with lukewarm water and follow with soap spray every 5-7 days.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Tiny flies hovering near the pot — a sign the mix is staying too wet.',
                treatment:
                    'Extend drying time between waterings, topdress with grit, and water in BTI.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine webbing between strands with dull, stippled leaves.',
                treatment:
                    'Shower the strands, then treat weekly with neem or miticide until webbing stops.',
            },
        ],
        stabilityChecklist: [
            'Water by leaf-feel, never by calendar.',
            'Keep the crown dry and well-lit — it is the usual failure point.',
            'Keep a pinned-down cutting or two as insurance against crown rot.',
            'Hang out of reach of pets; trailing strands are a tempting target.',
        ],
    },
};
