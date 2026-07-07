import type { Plant } from '../../lib/db/models/Plant';

export const echinocactusGrusonii: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'echinocactus',
    species: 'grusonii',
    commonNames: [
        'Golden Barrel Cactus',
        'Barrel Cactus',
        "Mother-in-Law's Cushion",
    ],
    description:
        'A near-perfect sphere of ribbed green flesh bristling with golden spines, Golden Barrel Cactus is one of the most iconic desert cacti — slow, sculptural, and almost entirely indifferent to neglect once established.',
    images: [],
    tags: ['cactus', 'full-sun', 'drought-tolerant', 'non-toxic'],
    highlights: [
        'Endemic to a small region of central Mexico and now rare in the wild, though common in cultivation.',
        'Grows into a large sphere over decades — specimens over 3 ft across can be a century old.',
        'Golden spines and ribbed form make it one of the most recognizable cacti in cultivation.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Tolerates brief light frost once mature and kept dry.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6-8 hours direct — the sunniest windowsill or patio spot available.',
        },
        watering: {
            score: 1,
            value: 'Very sparse',
            caption: 'Every 3-4 weeks in summer; monthly or less in winter.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Extremely low-maintenance once given enough sun.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Not poisonous, but the stiff golden spines are a real puncture hazard for pets and people alike.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '4-12" in early years',
            detail: 'Extremely slow-growing; container specimens rarely exceed a foot across, while mature outdoor plants can reach 3+ ft over many decades.',
            minFt: 0,
            maxFt: 3,
        },
        soil: {
            value: 'Sandy, mineral cactus mix',
            detail: 'A lean, fast-draining cactus or succulent mix with added coarse sand or pumice; rich soil invites rot.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Deep, drought-adapted roots and a strong need for dry cycles make passive hydro unsuitable.',
            compatible: false,
        },
        fertilizer: {
            value: 'Low-N cactus feed',
            detail: 'Low nitrogen, higher potassium formulas support steady, sturdy growth without soft, weak tissue.',
            npk: '2-7-7',
        },
        fertilizerFrequency: {
            value: '1-2x per season',
            detail: 'A single dilute feed in late spring is plenty for most container specimens.',
        },
        nativeHabitat: {
            value: 'Central Mexico',
            detail: 'Grows on rocky, semi-desert hillsides with intense sun, sharp drainage, and long dry spells.',
        },
        humidity: {
            value: 'Low & dry',
            detail: 'Thrives in arid air; damp, stagnant conditions promote rot and fungal spotting.',
            minPct: 10,
        },
        temperature: {
            value: '65° – 100°F',
            detail: 'Loves heat; established plants tolerate brief dips near freezing if kept completely dry.',
            minF: 30,
            maxF: 105,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New growth is subtle and slow, most visible as a widening girth and fresh spine clusters near the crown.',
        },
        dailyRhythm: {
            heading: 'Maximum sun, minimum water, and a lot of patience.',
            body: 'Golden Barrel Cactus is built for extremes: it wants the strongest sun available, drinks rarely and deeply, and grows so slowly that day-to-day care mostly means leaving it alone in a bright spot.',
            highlights: [
                'A firm, evenly rounded body means it is content; any softening or discoloration needs immediate attention.',
                'Rotate potted specimens occasionally so the ribs develop evenly toward the light.',
                'The golden spines are sharp and semi-barbed — always handle with tongs or a folded towel.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Confirm the mix has fully dried since the last watering.',
            },
            {
                interval: 'weekly',
                task: 'Glance over the body for soft spots, discoloration, or pest webbing near spine clusters.',
            },
            {
                interval: 'as-needed',
                task: 'Give a deep, sparse soak only once the mix has been dry for several days.',
            },
            {
                interval: 'seasonal',
                task: 'Rotate the pot a quarter turn to keep growth symmetrical.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6-8 hrs direct',
                detail: 'More sun means denser spines and a healthier, rounder form — there is essentially no such thing as too much.',
            },
            {
                label: 'Drought',
                stat: 'Water monthly-ish',
                detail: 'The thick body stores water for weeks; err heavily toward underwatering.',
            },
            {
                label: 'Handling',
                stat: 'Tongs & padding',
                detail: 'The stiff golden spines puncture skin easily and are unpleasant to remove.',
            },
            {
                label: 'Patience',
                stat: 'Decades to mature size',
                detail: 'Growth is measured in inches per year — repotting and shaping needs are rare.',
            },
        ],
        wateringRhythm: {
            heading: 'Rare, deep soaks — then real drought.',
            body: 'Soak the mix thoroughly until it drains, then wait until it has been completely dry for at least a week before watering again. In summer that is roughly every 3-4 weeks; in winter, cut back to monthly or skip entirely if the plant is kept cool.',
            tips: [
                'A body that looks slightly flattened or dull is the real cue to water, not the calendar.',
                'When overwintering somewhere cool, err toward too little water rather than too much — cold, wet soil is the fastest way to lose it.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Every 3-4 weeks',
                tip: 'Resume regular watering as new spine growth appears at the crown.',
            },
            {
                season: 'Summer',
                cadence: 'Every 3-4 weeks',
                tip: 'Deep soak in real heat; the body can still go a month between drinks.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Monthly to none',
                tip: 'Dry, cool dormancy is normal and improves cold tolerance.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check the mix for dryness before considering a watering.',
                    'Inspect spine clusters and the crown for early pest activity.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Rotate the pot a quarter turn for even, symmetrical growth.',
                    'Top-dress with fresh grit and a dilute low-N feed as spring growth starts.',
                    'Repot every 3-5 years, sizing up gradually since growth is so slow.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Long-handled tongs or a folded towel',
                note: 'The safest way to handle, turn, or repot a spine-covered specimen.',
            },
            {
                item: 'Thick leather gloves',
                note: 'The barbed golden spines pierce cloth gloves easily.',
            },
            {
                item: 'Mineral cactus mix + coarse sand',
                note: 'Lean and fast-draining — richness is wasted and risks rot.',
            },
            {
                item: 'Wide, heavy terracotta pot',
                note: 'Terracotta wicks moisture away between waterings; weight keeps a top-heavy specimen stable.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Flattened or Sunken Sides',
                description:
                    'A body that looks slightly deflated or dented along the ribs means stored water reserves are running low.',
                actions: [
                    'Give a single deep soak and let it fully drain.',
                    'The body should round back out within a week or two; if not, check the roots for damage.',
                ],
            },
            {
                title: 'Soft, Dark, or Mushy Patches',
                description:
                    'Discolored soft tissue, often starting at the base, signals rot from overwatering or poor drainage.',
                actions: [
                    'Stop watering immediately and move to a drier, airier spot.',
                    'Cut away rotted tissue with a clean, sharp blade back to firm, healthy flesh; let the cut callus for several days before repotting into dry mix.',
                    'If rot has reached the base extensively, the plant is unlikely to be saved.',
                ],
            },
            {
                title: 'Pale, Etiolated Growth',
                description:
                    'New growth that looks stretched, pale, or oddly shaped near the crown indicates insufficient sun.',
                actions: [
                    'Migrate gradually to the sunniest spot available over a couple of weeks to avoid sunscald.',
                    'Expect future growth to correct itself once light levels improve — existing damage is permanent.',
                ],
            },
            {
                title: 'Corky, Brown, Scarred Patches',
                description:
                    'Rough, tan or brown corking on the body is usually old mechanical damage or scale insect scarring rather than active disease.',
                actions: [
                    'Inspect closely for live scale insects and treat if present.',
                    'If no pests are found, the corking is cosmetic and permanent — no treatment needed.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white clusters tucked between ribs and around the crown.',
                treatment:
                    'Swab with isopropyl alcohol and follow with neem or insecticidal soap every 7-10 days.',
            },
            {
                name: 'Scale Insects',
                pestSlug: 'scale',
                signs: 'Small, hard brown or grey discs along the ribs.',
                treatment:
                    'Scrape off light infestations with a plastic edge, then apply horticultural oil in repeated rounds.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine webbing near spine clusters and dull, bronzed patches on the body.',
                treatment:
                    'Rinse gently with a hose jet, then apply a miticide weekly until webbing stops.',
            },
            {
                name: 'Root Mealybugs',
                signs: 'Slow, unexplained decline with white residue found on roots at repotting.',
                treatment:
                    'Bare-root the plant, rinse roots clean, and repot into fresh, dry mix; treat with a systemic insecticide drench if the infestation is heavy.',
            },
        ],
        stabilityChecklist: [
            'Site it in the most direct sun available — light drives nearly every aspect of healthy growth.',
            'Water only after the mix has been fully dry for several days; never on a fixed schedule.',
            'Handle exclusively with tongs or heavy padding — the golden spines are genuinely hazardous.',
            'Expect slow, steady growth over years rather than seasons; resist the urge to overpot or overfeed.',
        ],
    },
};
