import type { Plant } from '../../lib/db/models/Plant';

export const monsteraDeliciosaThaiConstellation: Omit<
    Plant,
    'createdAt' | 'updatedAt'
> = {
    genus: 'monstera',
    species: 'deliciosa',
    variety: 'thai-constellation',
    commonNames: ['Thai Constellation Monstera'],
    description:
        'A tissue-cultured sport of Monstera deliciosa, Thai Constellation trades solid green for a stable, creamy-yellow speckled variegation on every leaf — the same fenestrated growth habit, slower and hungrier for light.',
    images: [
        {
            url: 'plants/monstera/deliciosa/thai-constellation/img-1.jpeg',
            alt: 'Monstera deliciosa Thai Constellation leaf with cream speckled variegation',
        },
    ],
    tags: [
        'aroid',
        'vining',
        'variegated',
        'beginner-friendly',
        'mildly-toxic',
    ],
    highlights: [
        'A lab-grown (tissue culture) sport, so variegation is stable rather than random like a mutant cutting.',
        'Grows noticeably slower than plain Monstera deliciosa, especially in lower light.',
        'Each leaf carries a unique speckled pattern — no two are identical.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Keep above 60°F year-round.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright, indirect (more than the species)',
            caption:
                'Cream sections lack chlorophyll — needs brighter light than plain deliciosa to keep growing well.',
        },
        watering: {
            score: 2,
            value: 'Soak & dry out',
            caption: 'Water until runoff, then wait for the top 2-3" to dry.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Same care rules as the species, but slower growth and higher light needs leave less room for error.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Contains calcium oxalate crystals — keep away from pets and curious kids.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '3-8 ft indoors',
            detail: 'Climbs a moss pole like the species but sizes up more slowly; expect smaller, later fenestrations than a green Monstera at the same age.',
            minFt: 3,
            maxFt: 8,
        },
        soil: {
            value: 'Light & airy mix',
            detail: 'Chunky bark, perlite, and coco coir blended for a well-draining aroid mix that still holds gentle moisture.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Transitions to LECA or pon well once roots are established, same as the species.',
            compatible: true,
        },
        fertilizer: {
            value: '4N-2P-1K',
            detail: 'A balanced, foliage-forward fertilizer at reduced strength — variegated leaf tissue burns more easily than solid green.',
            npk: '4-2-1',
        },
        fertilizerFrequency: {
            value: 'Every 2-3 months',
            detail: 'Feed lightly in the growing season; slower growth means it uses less than the plain species.',
        },
        nativeHabitat: {
            value: 'Southern Mexico (cultivated origin)',
            detail: 'A variegated sport of the species, which climbs jungle canopies in the wild — mimic with a moss pole or trellis indoors.',
        },
        humidity: {
            value: '60%+ ideal',
            detail: 'Variegated sections crisp first under low humidity; a humidifier or pebble tray helps more here than on the plain species.',
            minPct: 60,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Protect from drafts and sudden drops below 55°F.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'Growth is steady but visibly slower than plain deliciosa year-round, most noticeable in leaf size.',
        },
        dailyRhythm: {
            heading: 'The same climb, on a slower and hungrier-for-light clock.',
            body: 'Thai Constellation follows the same soak-and-dry, climb-a-pole routine as any Monstera deliciosa, but its cream variegation means it needs brighter light to keep producing strong new growth, and patience with how slowly that growth arrives.',
            highlights: [
                'More direct light than plain Monstera deliciosa keeps new leaves well-variegated and strong.',
                'Rotate the pot regularly — uneven light quickly shows up as lopsided fenestration.',
                'Slower growth is normal, not a symptom — compare seasons, not weeks.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Rotate the pot a quarter turn for even light exposure.',
            },
            {
                interval: 'weekly',
                task: 'Dust leaves with a damp microfiber cloth.',
            },
            {
                interval: 'weekly',
                task: 'Check moisture halfway down the planter.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly, then let the top 2-3" of soil dry out.',
            },
            {
                interval: 'monthly',
                task: 'Confirm ambient humidity stays above 60%; a pebble tray helps more than misting.',
            },
            {
                interval: 'monthly',
                task: 'Inspect aerial roots and tuck into the moss pole.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright, more than the species',
                detail: 'Cream leaf tissue does no photosynthesis — extra light compensates for the variegated area.',
            },
            {
                label: 'Hydration',
                stat: 'Deep soak every 7-10d',
                detail: 'Water until runoff, then drain thoroughly to avoid waterlogged soil.',
            },
            {
                label: 'Nutrition',
                stat: 'Low & gentle',
                detail: 'Feed at reduced strength — variegated foliage is more prone to fertilizer burn.',
            },
            {
                label: 'Patience',
                stat: 'Slow by design',
                detail: 'Expect fewer, smaller leaves per season than a green Monstera in the same spot.',
            },
        ],
        wateringRhythm: {
            heading: 'Water deeply, then let the mix breathe.',
            body: 'Use the same soak-and-dry cycle as plain Monstera deliciosa: saturate evenly, drain fully, and wait for the top 2-3" to dry before watering again. Slower growth means it also uses water more slowly, so err toward waiting an extra day.',
            tips: [
                'Check moisture with a finger or probe before watering — variegated roots are just as prone to rot as the species.',
                'Rest tap water 24 hours or use rainwater if your water is heavily chlorinated or hard.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 7-10 days',
                tip: 'Check moisture 2-3" down before each soak; growth is most active now.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 10-14 days',
                tip: 'Allow more of the mix to dry as light and growth slow.',
            },
            {
                season: 'Winter',
                cadence: 'Every 14+ days',
                tip: 'Brighten placement if possible and hold off on feeding until new growth resumes.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Rotate the planter a quarter turn to share sunlight evenly.',
                    'Dust the newest leaves with a damp cloth to keep stomata open.',
                    'Inspect petioles and soil surface for pests or fungus gnats.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Flush the substrate with lukewarm water to clear mineral buildup.',
                    'Trim yellowing foliage and reroute aerial roots into the support pole.',
                    'Feed at half the label rate to avoid scorching variegated tissue.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Moisture meter or wooden chopstick',
                note: 'Confirms dryness below the surface before every watering.',
            },
            {
                item: 'Humidifier with built-in hygrometer',
                note: 'Keeps the microclimate above 55-60% during drier months.',
            },
            {
                item: 'Grow light',
                note: 'Useful insurance in lower-light homes, given its higher light appetite.',
            },
            {
                item: 'Moss pole + soft ties',
                note: 'Anchors vines upright so each node develops larger, better-variegated leaves.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Reverting to Solid Green',
                tag: 'Light-driven',
                description:
                    'New leaves emerging with little or no cream variegation usually mean the plant is not getting enough light and is falling back on efficient, fully-green growth.',
                actions: [
                    'Move to a brighter spot with strong indirect light, or supplement with a grow light.',
                    'Prune stems that consistently push all-green leaves to redirect energy toward variegated growth points.',
                ],
            },
            {
                title: 'All-White or Sparse Leaves Struggling',
                tag: 'Too little chlorophyll',
                description:
                    'Leaves that emerge mostly or entirely white lack enough chlorophyll to sustain themselves and often stall or brown at the edges.',
                actions: [
                    'Leave the leaf in place — it still contributes some energy — but do not expect it to size up normally.',
                    'Focus care on maximizing light so future leaves strike a healthier white-to-green balance.',
                ],
            },
            {
                title: 'Yellow Leaves',
                tag: 'Water or light stress',
                description:
                    'Widespread yellowing, especially with soft stems, points to overwatering; occasional lower-leaf yellowing on an older plant is normal shed.',
                actions: [
                    'Check moisture: ease off watering and improve airflow if soggy, or give a deep soak if bone-dry.',
                    'Filter harsh direct light, which stresses variegated tissue faster than solid green leaves.',
                ],
            },
            {
                title: 'Brown, Crispy Patches on Cream Sections',
                tag: 'Sun or humidity',
                description:
                    'White and cream tissue scorches and dries out faster than green tissue under direct sun or dry air.',
                actions: [
                    'Move out of direct midday sun; bright indirect light is safer for variegated leaves.',
                    'Raise humidity with a humidifier or pebble tray to slow moisture loss from cream sections.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                tag: 'Spreads fast',
                signs: 'Dusty webbing on undersides, stippled leaves losing color — shows up first on the palest variegated patches.',
                treatment:
                    'Shower foliage, then treat weekly with neem oil or insecticidal soap until no new damage appears.',
            },
            {
                name: 'Thrips',
                pestSlug: 'thrips',
                tag: 'Scars new growth',
                signs: 'Silvery streaks and distorted new leaves; black specks (frass) nearby.',
                treatment:
                    'Isolate the plant, prune the worst leaves, and alternate systemic granules with contact sprays for 4-6 weeks.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                tag: 'Mostly a nuisance',
                signs: 'Tiny flies hovering near soil, larvae feeding on fine roots.',
                treatment:
                    'Let the top 2-3" of mix dry, add a sand topdress, and water in BTI or mosquito bits.',
            },
            {
                name: 'Scale & Mealybugs',
                tag: 'Slow but stubborn',
                signs: 'Sticky residue, cottony clusters in leaf nodes, or dome-like shells on stems.',
                treatment:
                    'Swab insects with alcohol, then follow with horticultural oil coverage every 7-10 days until clean.',
            },
        ],
        stabilityChecklist: [
            'Give it more light than a plain Monstera deliciosa — variegation is the first thing to suffer in dim spots.',
            'Judge growth by the season, not the week; slower is normal for this cultivar.',
            'Prune stems that keep pushing all-green leaves so energy favors variegated growth points.',
            'Feed lightly — variegated tissue scorches more easily than solid green leaves.',
        ],
    },
};
