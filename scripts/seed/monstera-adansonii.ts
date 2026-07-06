import type { Plant } from '../../lib/db/models/Plant';

export const monsteraAdansonii: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'monstera',
    species: 'adansonii',
    commonNames: ['Swiss Cheese Vine', 'Monkey Mask Monstera'],
    description:
        'A fast-growing vine with delicate, hole-punched leaves — Monstera adansonii delivers the fenestrated look in a compact, shelf-and-trellis-friendly package.',
    images: [],
    tags: ['aroid', 'vining', 'beginner-friendly', 'mildly-toxic'],
    highlights: [
        'Native to Central and South America, from Mexico down to Brazil.',
        'Fenestrations appear on juvenile leaves — no waiting years for holes.',
        'Grows fast enough to visibly lengthen week over week in spring.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Frost-tender; keep above 60°F year-round.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Tolerates medium light but grows leggy without brightness.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist-ish',
            caption:
                'Water when the top 1-2" dries; wilts dramatically if forgotten.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'Forgiving, quick to recover, and simple to propagate.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Calcium oxalate crystals irritate mouths and stomachs — keep away from pets.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '3-8 ft vines indoors',
            detail: 'Trails from hanging baskets or climbs a trellis; vines size up dramatically when allowed to climb instead of trail.',
            minFt: 3,
            maxFt: 8,
        },
        soil: {
            value: 'Chunky aroid mix',
            detail: 'Bark, perlite, and coco coir in roughly equal parts — roots rot quickly in dense, water-retentive soil.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'One of the easiest plants to transition to LECA or pon; nodes root readily in water first.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced liquid feed',
            detail: 'A gentle 3-1-2 style foliage fertilizer at half strength suits its fast growth.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly spring through early fall; skip winter entirely.',
        },
        nativeHabitat: {
            value: 'Central & South America',
            detail: 'Scrambles up trunks in humid lowland rainforest — it wants dappled light and something to grip.',
        },
        humidity: {
            value: '60%+ ideal',
            detail: 'Tolerates 40-50% but leaves grow larger and fenestrate more in humid air.',
            minPct: 60,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Growth stalls below 60°F; keep clear of cold windows and AC vents.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Fall',
            detail: 'A vigorous grower — expect multiple new leaves per vine each month in peak season.',
        },
        dailyRhythm: {
            heading: 'A sprinter that rewards small, frequent attention.',
            body: 'Adansonii moves fast: vines stretch, leaves unfurl, and soil dries quicker than its larger cousins. A quick glance most days — moisture check, vine tuck, leaf inspection — keeps it full and lush instead of leggy.',
            highlights: [
                'Check soil moisture twice a week; it dries faster than deliciosa.',
                'Tuck new vine growth onto its support to encourage bigger leaves.',
                'Prune leggy runners just after a node to trigger bushier growth.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check moisture in the top 2" of mix — water if dry.',
            },
            {
                interval: 'weekly',
                task: 'Wind or clip new vine growth onto the trellis or pole.',
            },
            {
                interval: 'weekly',
                task: 'Scan leaf undersides for spider mites, which love this species.',
            },
            {
                interval: 'as-needed',
                task: 'Water once the top 2" are dry; keep it lightly moist in the growing season.',
            },
            {
                interval: 'monthly',
                task: 'Prune leggy or bare vines just past a node to keep the plant full.',
            },
            {
                interval: 'monthly',
                task: 'Flush the substrate with lukewarm water to prevent salt buildup.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 5-7 days',
                detail: 'Thinner leaves mean less water storage — it wilts fast but bounces back after a drink.',
            },
            {
                label: 'Humidity',
                stat: '60%+ ideal',
                detail: 'Humid air keeps thin leaves from crisping and fuels bigger fenestrations.',
            },
            {
                label: 'Nutrition',
                stat: 'Monthly, diluted',
                detail: 'Fast growth needs steady, gentle feeding — half-strength balanced fertilizer monthly.',
            },
            {
                label: 'Support',
                stat: 'Climb or trail',
                detail: 'Climbing produces larger, more fenestrated leaves; trailing keeps a fuller cascade.',
            },
        ],
        wateringRhythm: {
            heading: 'Little and often beats deep and rare.',
            body: 'Adansonii holds less water in its thin leaves and slim stems than larger monsteras, so it prefers a shorter dry-down. Water when the top inch or two is dry, saturate until runoff, and drain fully. In bright rooms during summer, that can mean twice a week.',
            tips: [
                'Slight leaf droop is an honest thirst signal — water within a day and it recovers overnight.',
                'In hanging baskets, dunk the whole pot in a bucket for ten minutes for an even soak.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 5-7 days',
                tip: 'Fast growth plus small pots means quick dry-downs — check twice weekly.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Stretch the interval as growth slows; keep humidity up as heating kicks in.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Water only when the top half of the mix is dry; cold, wet soil invites rot.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Rotate the pot a quarter turn so vines fill in evenly.',
                    'Tuck or tie new growth to the support before stems harden.',
                    'Inspect leaf undersides and new growth for mites and thrips.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Feed with half-strength balanced fertilizer during the growing season.',
                    'Prune leggy or bare vines just past a node to keep the plant full.',
                    'Flush the substrate with lukewarm water to prevent salt buildup.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Small trellis or coco pole',
                note: 'Climbing support unlocks noticeably larger, holier leaves.',
            },
            {
                item: 'Sharp snips',
                note: 'Frequent light pruning keeps vines branching instead of stringing out.',
            },
            {
                item: 'Propagation jars',
                note: 'Every pruned node roots easily in water — refill the pot for a fuller plant.',
            },
            {
                item: 'Neem oil or insecticidal soap',
                note: 'Thin leaves show mite damage fast; treat at the first stippling.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Yellow Leaves',
                description:
                    'Usually overwatering in a mix that is too dense; occasionally normal shed of the oldest leaves along a vine.',
                actions: [
                    'Check the root zone — if soil smells sour or stays wet for a week, repot into chunkier mix.',
                    'Confirm the pot drains freely and the cache pot is emptied after watering.',
                    'Remove fully yellow leaves at the petiole to redirect energy.',
                ],
            },
            {
                title: 'Dramatic Wilting',
                description:
                    'Adansonii collapses theatrically when thirsty — thin leaves droop and curl within a day of the mix drying out.',
                actions: [
                    'Water thoroughly; expect full recovery within 12-24 hours.',
                    'If wilting persists after watering, check for root rot from a previous soggy spell.',
                    'Shorten the watering interval or add coco coir to boost moisture retention slightly.',
                ],
            },
            {
                title: 'Small Leaves Without Holes',
                description:
                    'New leaves emerging small and solid signal insufficient light or a vine left to trail too long.',
                actions: [
                    'Move the plant closer to a bright window with filtered light.',
                    'Train vines up a pole — climbing growth fenestrates far more reliably.',
                    'Feed monthly in season so new growth has the resources to size up.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and webbing on thin leaves; damage spreads quickly on this species.',
                treatment:
                    'Shower the foliage, then apply insecticidal soap or neem weekly for 3-4 weeks, covering leaf undersides.',
            },
            {
                name: 'Thrips',
                pestSlug: 'thrips',
                signs: 'Silvery patches, distorted new leaves, and black frass specks.',
                treatment:
                    'Isolate, prune heavily damaged leaves, and alternate systemic granules with contact sprays for 4-6 weeks.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Small flies around the soil surface, especially in moisture-retentive mixes.',
                treatment:
                    'Let the top 2" dry between waterings and drench with BTI (mosquito bits) to kill larvae.',
            },
            {
                name: 'Scale & Mealybugs',
                signs: 'Cottony tufts in leaf axils and along vines; sticky honeydew on leaves below.',
                treatment:
                    'Dab insects with isopropyl alcohol, then coat stems and nodes with horticultural oil every 7-10 days.',
            },
        ],
        stabilityChecklist: [
            'Check soil moisture twice weekly — this species dries out faster than most aroids.',
            'Prune and propagate regularly; replanted cuttings keep the pot full and vigorous.',
            'Inspect thin leaves weekly for early mite stippling before webbing appears.',
            'Repot every 12-18 months; fast root growth compacts the mix quickly.',
        ],
    },
};
