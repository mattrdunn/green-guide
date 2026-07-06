import type { Plant } from '../../lib/db/models/Plant';

export const zamioculcasZamiifolia: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'zamioculcas',
    species: 'zamiifolia',
    commonNames: ['ZZ Plant', 'Zanzibar Gem', 'Eternity Plant', 'Zuzu Plant'],
    description:
        'Glossy, waxy fronds rising from water-storing rhizomes make Zamioculcas zamiifolia the definitive low-maintenance houseplant — the ZZ plant shrugs off missed waterings, dim light, and dry air without losing its shine.',
    images: [],
    tags: ['aroid', 'low-light', 'beginner-friendly', 'mildly-toxic'],
    highlights: [
        'Native to the drought-prone grasslands of East Africa.',
        'Potato-like rhizomes store water for weeks of neglect.',
        'The only species in its genus — a true botanical one-of-a-kind aroid.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-10',
            caption: 'Strictly a houseplant outside the warmest climates.',
            zoneMin: 9,
            zoneMax: 10,
        },
        light: {
            score: 1,
            value: 'Low to bright, indirect',
            caption: 'Handles offices and dim rooms; avoid harsh direct sun.',
        },
        watering: {
            score: 1,
            value: 'Sparse — soak & dry fully',
            caption: 'Every 2-3 weeks; the rhizomes bridge the gaps.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Practically thrives on being forgotten.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Contains calcium oxalate crystals — irritating if chewed by pets or kids.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '2-4 ft indoors',
            detail: 'New fronds emerge rolled from the rhizomes and unfurl over weeks; mature plants form dense, arching clumps.',
            minFt: 2,
            maxFt: 4,
        },
        soil: {
            value: 'Well-draining mix',
            detail: 'Standard potting soil cut with a third perlite or cactus mix keeps the rhizomes out of standing moisture.',
        },
        semiHydro: {
            value: 'Yes, with care',
            detail: 'Transitions to LECA well, but keep the reservoir low — the rhizomes rot if they sit in water.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, diluted',
            detail: 'A balanced liquid feed at half strength supports the slow, steady frond production.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: '2x per growing season',
            detail: 'Once in spring and once in midsummer is plenty; overfeeding burns the roots faster than it speeds growth.',
        },
        nativeHabitat: {
            value: 'East Africa',
            detail: 'Seasonally dry grasslands and forest floors from Kenya to northeastern South Africa — built for boom-and-bust rainfall.',
        },
        humidity: {
            value: 'Any (30-50%)',
            detail: 'The waxy cuticle locks in moisture; ordinary indoor air is perfectly fine.',
            minPct: 30,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Keep above 50°F; cold snaps combined with wet soil invite rhizome rot.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Expect a few new fronds per season; growth pauses almost entirely in winter.',
        },
        dailyRhythm: {
            heading: 'Slow, glossy, and unbothered.',
            body: 'ZZ plants bank energy in their rhizomes and spend it in occasional bursts of new fronds. Your job is simply to stay out of the way: moderate light, infrequent water, and no fussing.',
            highlights: [
                'The waxy shine is natural — no leaf-gloss products needed.',
                'New fronds arrive light green and darken as they harden off.',
                'Underwatering is almost always safer than overwatering.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check that soil is drying — not staying damp — between waterings.',
            },
            {
                interval: 'weekly',
                task: 'Glance under fronds for the rare pest hitchhiker.',
            },
            {
                interval: 'weekly',
                task: 'Rotate the pot so the arching fronds develop evenly.',
            },
            {
                interval: 'as-needed',
                task: 'Soak thoroughly only when the mix has dried out fully — monthly is often enough.',
            },
            {
                interval: 'monthly',
                task: 'Wipe fronds with a damp cloth to restore the natural gloss.',
            },
            {
                interval: 'monthly',
                task: 'Prune any fully yellowed fronds at the soil line.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 2-3 weeks',
                detail: 'Soak thoroughly once the mix is fully dry, then let the rhizomes take over.',
            },
            {
                label: 'Light',
                stat: 'Flexible',
                detail: 'Brighter placements speed up frond production; deep shade just slows it down.',
            },
            {
                label: 'Nutrition',
                stat: 'Minimal',
                detail: 'Two light feedings a year keeps fronds glossy without salt buildup.',
            },
            {
                label: 'Patience',
                stat: 'Slow grower',
                detail: 'Long pauses between fronds are normal — energy is accumulating underground.',
            },
        ],
        wateringRhythm: {
            heading: 'Let the rhizomes do their job.',
            body: 'Those chunky underground rhizomes are living water tanks. Water deeply but only when the mix has dried completely, and stretch intervals further in winter. A thirsty ZZ recovers overnight; a soggy one loses rhizomes permanently.',
            tips: [
                'Yellowing lower leaflets usually mean too much water, not too little.',
                'In low light, monthly watering is often enough — check the soil, not the schedule.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 2-3 weeks',
                tip: 'Water when the pot feels light and the top half of the mix is dry.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 3-4 weeks',
                tip: 'Growth slows with the light; let the interval stretch naturally.',
            },
            {
                season: 'Winter',
                cadence: 'Every 4-5 weeks',
                tip: 'Minimal water — the plant is essentially dormant.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Rotate the planter a quarter turn for symmetrical arching.',
                    'Confirm the cache pot or saucer is not holding standing water.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe fronds with a damp cloth to restore the natural gloss.',
                    'Prune any fully yellowed fronds at the soil line.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Check whether rhizomes are pressing against the pot walls — repot in spring if so.',
                    'Divide large clumps at the rhizome when repotting for easy propagation.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Well-draining potting mix with perlite',
                note: 'Keeps water moving past the rot-prone rhizomes.',
            },
            {
                item: 'Sturdy pot with drainage',
                note: 'Mature rhizomes are strong enough to crack thin plastic pots.',
            },
            {
                item: 'Moisture meter or wooden chopstick',
                note: 'Verifies deep dryness before each watering.',
            },
            {
                item: 'Microfiber cloth',
                note: 'A monthly wipe keeps the signature gloss and deters mites.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Yellowing Fronds',
                description:
                    'Multiple fronds yellowing from the base up nearly always signals overwatering and the beginnings of rhizome rot.',
                actions: [
                    'Stop watering and let the mix dry out completely.',
                    'If yellowing continues, unpot and cut away any soft, brown rhizome tissue.',
                    'Repot into fresh, dry, gritty mix and resume watering sparingly.',
                ],
            },
            {
                title: 'Wrinkled Stems & Dropping Leaflets',
                description:
                    'Wrinkled petioles and shed leaflets mean the water reserves are finally exhausted — an extended drought signal.',
                actions: [
                    'Water slowly and deeply until it drains from the bottom.',
                    'Expect the plant to re-plump within days; severely dropped fronds may not refill.',
                    'Tighten the watering interval by a week going forward.',
                ],
            },
            {
                title: 'Leggy, Stretching Fronds',
                description:
                    'Long gaps between leaflets and fronds leaning hard toward the window indicate too little light.',
                actions: [
                    'Move closer to a window with bright, indirect light.',
                    'Rotate weekly so new growth stays balanced.',
                    'Accept existing stretch — only new fronds will grow compact.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white clusters where leaflets meet the stem.',
                treatment:
                    'Dab with isopropyl alcohol, then spray with insecticidal soap weekly until clear.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Faint stippling and dull patches on the normally glossy leaflets.',
                treatment:
                    'Shower the fronds, then apply neem oil or insecticidal soap on a weekly cycle.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Tiny flies at the soil surface — evidence the mix is staying too moist.',
                treatment:
                    'Dry the pot out fully, add a grit topdress, and water in BTI if larvae persist.',
            },
        ],
        stabilityChecklist: [
            'Verify complete soil dryness before every watering.',
            'Empty cache pots within ten minutes of watering — rhizomes hate wet feet.',
            'Wipe fronds monthly to keep gloss high and pests low.',
            'Repot every 2-3 years or when rhizomes deform the pot.',
        ],
    },
};
