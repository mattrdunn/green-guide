import type { Plant } from '../../lib/db/models/Plant';

export const dionaeaMuscipula: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'dionaea',
    species: 'muscipula',
    commonNames: ['Venus Flytrap'],
    description:
        "The single wild species in its genus, native to a small stretch of North and South Carolina bogs. Its hinged, tooth-fringed lobes snap shut in a fraction of a second when triggered by prey — the most famous carnivorous plant, but also one of the more demanding, since it needs a genuine winter dormancy and steady full sun to stay healthy for more than a season.",
    images: [],
    tags: [
        'carnivorous',
        'flytrap',
        'beginner-unfriendly',
        'non-toxic',
        'dormancy-required',
        'full-sun',
    ],
    highlights: [
        "Snaps shut in under a second when trigger hairs inside a trap are touched twice in quick succession — nature's fastest plant movement.",
        'Requires a true winter dormancy (a cold, low-light rest period) every year — skipping it exhausts and eventually kills the plant.',
        'Individual traps only close a handful of times before they stop working and blacken; this is normal aging, not a sign of poor care.',
    ],
    vitals: {
        hardinessZone: {
            value: '8-10 outdoors; dormancy required elsewhere',
            caption:
                'Native to coastal North and South Carolina bogs; grown outdoors year-round in zone 8-10, or indoors with an enforced cool winter rest elsewhere.',
            zoneMin: 8,
            zoneMax: 10,
        },
        light: {
            score: 5,
            value: 'Full sun, 4+ hours direct',
            caption:
                'Needs the strongest light available — a bare windowsill is rarely enough; direct outdoor sun or an intense full-spectrum grow light is what produces healthy red-throated traps.',
        },
        watering: {
            score: 5,
            value: 'Constantly moist, tray method',
            caption:
                'Sits in a shallow tray of distilled or rainwater year-round, though the tray is allowed to run nearly dry during winter dormancy.',
        },
        difficulty: {
            score: 4,
            value: 'Advanced',
            caption:
                'Deceptively fussy — most struggling plants trace back to insufficient light or a skipped dormancy period rather than anything about the traps themselves.',
            level: 'advanced',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                "Safe around pets and kids — the trap's digestive enzymes only affect the insects it catches.",
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '3-6 in rosette',
            detail: 'Stays low and compact, spreading traps out flat in a rosette; flower stalks can rise a foot or more above the traps in spring.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Pure sphagnum peat mix, nutrient-free',
            detail: 'A 1:1 blend of peat moss and perlite or silica sand — no potting soil, compost, or fertilizer; any added nutrients or minerals damage the roots.',
        },
        semiHydro: {
            value: 'No',
            detail: "Grown in peat-based mix standing in a water tray rather than an inert semi-hydro medium; the plant's roots are adapted to acidic, nutrient-poor bog peat.",
            compatible: false,
        },
        fertilizer: {
            value: 'No fertilizer — prey only',
            detail: 'Never fertilize the soil or drop food into unopened traps. Outdoors the plant catches its own prey; indoors, an occasional small freeze-dried bloodworm dropped into a mature, fully open trap substitutes.',
        },
        fertilizerFrequency: {
            value: 'Monthly at most, growing season only',
            detail: 'Feed at most one or two traps a month through spring and summer — never during dormancy, and never every trap at once.',
        },
        nativeHabitat: {
            value: 'Coastal Carolina bogs and wet pine savannas',
            detail: 'Grows in acidic, waterlogged, nutrient-poor sandy soils exposed to intense, unobstructed sun for most of the day — conditions it strongly needs to replicate in cultivation.',
        },
        humidity: {
            value: 'Average room humidity is fine',
            detail: 'Unlike tropical carnivorous plants, Venus Flytrap tolerates typical indoor humidity well and does not need a terrarium; light and dormancy matter far more than air moisture.',
        },
        temperature: {
            value: '70° – 90°F in summer; 35° – 50°F during dormancy',
            detail: 'Warm and sunny through the growing season, then a genuinely cold, low-light rest of roughly three months in winter — an unheated garage, cold frame, or refrigerator crisper drawer are common ways to provide it indoors.',
            minF: 35,
            maxF: 90,
        },
        growSeason: {
            value: 'Spring–Fall, dormant in winter',
            detail: 'Active growth and new trap production run spring through fall; the plant then dies back to a small winter bud and rests for roughly three months before regrowing in spring.',
        },
        dailyRhythm: {
            heading: 'An intense-sun, seasonal plant more than a daily-fuss one.',
            body: "Once light, water, and the yearly dormancy cycle are dialed in, Venus Flytrap needs little day-to-day intervention — its rhythm is seasonal, not daily, and most problems come from fighting that cycle rather than from any single day's care.",
            highlights: [
                'A trap that blackens after closing a few times has simply reached the end of its natural lifespan — new traps replace it.',
                'Dying back to a small winter bud with no visible traps is expected dormancy behavior, not the plant dying.',
                "Never trigger traps to close for entertainment — each closure spends one of a trap's limited lifetime uses without any food reward.",
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Refill the water tray with distilled or rainwater so it never runs dry (except during dormancy).',
            },
            {
                interval: 'monthly',
                task: 'Trim any fully blackened, spent traps at their base.',
            },
            {
                interval: 'seasonal',
                task: 'Move the plant into a cold, low-light rest for about three months in winter, then gradually reintroduce bright light and normal watering in spring.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Full sun, 4+ hrs direct',
                detail: 'The most common reason for a weak, floppy, dark-throated plant is simply not enough direct light.',
            },
            {
                label: 'Dormancy',
                stat: '~3 cold months every winter',
                detail: 'A required annual rest, not optional — skipping it repeatedly exhausts and eventually kills the plant.',
            },
            {
                label: 'Water Quality',
                stat: 'Distilled or rainwater only',
                detail: 'Tap water minerals build up in the peat and burn the fine root system over successive seasons.',
            },
            {
                label: 'Feeding',
                stat: '1-2 traps/month, growing season only',
                detail: "Outdoor plants rarely need supplemental feeding at all — they catch their own prey.",
            },
        ],
        wateringRhythm: {
            heading: 'Tray method through the growing season, drier during dormancy.',
            body: 'Spring through fall, keep the pot standing in a half-inch to an inch of distilled, reverse-osmosis, or rainwater at all times. During winter dormancy, let the tray run nearly dry between light waterings — the resting bud tolerates far less moisture than the active summer plant.',
            tips: [
                'Never use tap, bottled mineral, or softened water — even occasional use accumulates salts over years.',
                'A clear tray makes it easy to check the water level without disturbing the pot.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Tray always full',
                tip: 'Peak growth and trap production — this is also when the plant catches or is fed most of its prey.',
            },
            {
                season: 'Autumn',
                cadence: 'Ease the tray toward drier as growth slows',
                tip: 'Cooling temperatures and shortening days signal the plant to begin preparing for dormancy.',
            },
            {
                season: 'Winter (dormancy)',
                cadence: 'Barely moist, tray mostly empty',
                tip: 'Cold and slightly drier conditions are correct at this stage — resist the urge to keep it as wet as summer.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Top up the water tray with distilled or rainwater (growing season).',
                    'Check for any blackened traps ready to be trimmed.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Move the plant to a cold, low-light spot for its winter dormancy around 3 months.',
                    'Gradually reintroduce bright light and full watering as new growth appears in spring.',
                    'Divide crowded rosettes or repot into fresh peat mix if the medium has broken down.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Distilled, reverse-osmosis, or rainwater',
                note: 'Non-negotiable long-term — mineral buildup is the most common slow killer.',
            },
            {
                item: 'Peat moss and perlite (or silica sand) mix',
                note: 'Acidic, nutrient-free medium that mirrors native bog soil.',
            },
            {
                item: 'Shallow water tray',
                note: 'Keeps roots consistently moist through the growing season without guesswork.',
            },
            {
                item: 'Cold frame, unheated garage, or refrigerator space',
                note: 'A practical way to provide the required winter dormancy indoors or in mild climates.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Weak, Floppy, Dark-Green Traps',
                description:
                    "Traps that stay small, pale-throated, or floppy instead of upright and red-lined almost always mean insufficient light.",
                actions: [
                    'Move outdoors into full sun where climate allows, or add a strong full-spectrum grow light.',
                    "Increase daily light duration gradually rather than moving the plant into intense sun all at once.",
                ],
            },
            {
                title: 'Failure to Thrive After a Skipped Winter',
                description:
                    'A plant kept warm and lit year-round with no dormancy period gradually weakens, producing smaller traps each year until it dies.',
                actions: [
                    'Provide a genuine cold, low-light rest of roughly three months the following winter.',
                    'Reduce watering and stop feeding entirely once the plant signals it is entering dormancy.',
                ],
            },
            {
                title: 'Blackened Trap',
                description:
                    'A single trap blackening after several natural closures is normal end-of-life; several blackening at once, unrelated to feeding, suggests rot or mineral buildup.',
                actions: [
                    'Trim the spent trap at its base with clean scissors.',
                    'Flush the pot with distilled water and confirm only distilled or rainwater has been used.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small clustered insects on flower stalks and new growth near the crown.',
                treatment:
                    'Rinse gently with water and apply insecticidal soap for persistent infestations, avoiding contact inside open traps.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Small flies hovering near the soil surface; larvae feeding on fine roots in overly wet peat.',
                treatment:
                    'Let the tray run slightly drier for a few days and use sticky traps to catch adults; avoid soil drenches not rated for carnivorous plants.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small, immobile brown bumps along leaf petioles.',
                treatment:
                    'Scrape off visible scale with a soft brush or cotton swab dipped in isopropyl alcohol, kept away from open traps.',
            },
        ],
        stabilityChecklist: [
            'Water only with distilled, reverse-osmosis, or rainwater — never tap.',
            'Give it the strongest light available — full outdoor sun whenever climate allows.',
            'Provide a genuine cold winter dormancy every year without exception.',
            "Let traps trigger only on real prey — resist poking them for show.",
        ],
    },
};
