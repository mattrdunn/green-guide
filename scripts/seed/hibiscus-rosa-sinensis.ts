import type { Plant } from '../../lib/db/models/Plant';

export const hibiscusRosaSinensis: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'hibiscus',
    species: 'rosa-sinensis',
    commonNames: ['Tropical Hibiscus', 'Chinese Hibiscus', 'China Rose'],
    description:
        'Enormous, trumpet-shaped blooms in vivid reds, pinks, oranges, and yellows open for just a day or two but come in constant succession — a sun-loving tropical shrub grown outdoors in warm climates or as a patio plant everywhere else.',
    images: [],
    tags: [
        'flowering',
        'full-sun',
        'tender-perennial',
        'container-friendly',
        'non-toxic',
        'pollinator-friendly',
    ],
    highlights: [
        'A garden hybrid of ancient cultivation, likely originating in East Asia and long naturalized across the tropics.',
        'Each flower typically lasts only a day or two, but a healthy plant produces new blooms continuously through the warm season.',
        'The national flower of Malaysia and Haiti, and widely used in tropical landscaping worldwide.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption:
                'Reliably perennial only in frost-free climates; grown as a container plant brought indoors for winter elsewhere.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption:
                '6+ hours of direct sun is essential for continuous, heavy blooming.',
        },
        watering: {
            score: 4,
            value: 'Consistently moist',
            caption:
                'Drinks heavily in hot weather, especially in containers; drought stress causes bud and leaf drop quickly.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Rewarding but demanding — heavy feeders and heavy drinkers that sulk visibly when either lapses.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Considered safe around pets and children; flowers are even used in some teas and garnishes.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '4-8 ft (shrub); smaller in containers',
            detail: 'Grows as a large, multi-stemmed shrub outdoors in the ground; regular pruning keeps container specimens compact.',
            minFt: 4,
            maxFt: 8,
        },
        soil: {
            value: 'Rich, well-drained',
            detail: 'A loamy, organic-rich mix that drains well supports the heavy feeding and watering this plant needs.',
        },
        semiHydro: {
            value: 'No',
            detail: 'A heavy-feeding tropical shrub best suited to rich soil rather than soilless growing media.',
            compatible: false,
        },
        fertilizer: {
            value: 'Heavy, potassium-forward',
            detail: 'A hibiscus-specific or high-potassium, low-phosphorus feed supports the plant’s constant bloom cycle.',
            npk: '17-5-24',
        },
        fertilizerFrequency: {
            value: 'Every 2-3 weeks in season',
            detail: 'Regular feeding through spring and summer fuels the nonstop flower production this species is known for.',
        },
        nativeHabitat: {
            value: 'Tropical Asia (garden origin)',
            detail: 'Long cultivated across East and Southeast Asia, naturalized throughout the tropics worldwide.',
        },
        humidity: {
            value: '50%+ preferred',
            detail: 'Enjoys humid, tropical-like air; dry conditions can invite spider mites and bud drop.',
            minPct: 50,
        },
        temperature: {
            value: '60° – 90°F',
            detail: 'Thrives in warm, frost-free conditions; growth stalls and leaves drop below 50°F.',
            minF: 60,
            maxF: 90,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Blooms continuously through warm months, slowing noticeably once temperatures and light drop in autumn.',
        },
        dailyRhythm: {
            heading: 'A heavy-feeding, heavy-drinking bloom machine.',
            body: 'Tropical Hibiscus rewards consistent sun, water, and fertilizer with an almost nonstop parade of oversized flowers through the warm season. Lapses in any of the three show up fast as dropped buds or yellowing leaves, making this a plant that punishes neglect more than most.',
            highlights: [
                'Bud drop is usually the first and fastest sign that water, light, or feeding has lapsed.',
                'Container plants need repotting or root pruning every year or two to sustain vigorous blooming.',
                'Bring container plants indoors before the first frost in any climate that isn’t reliably frost-free.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture, especially for container plants in hot weather.',
            },
            {
                interval: 'weekly',
                task: 'Inspect leaf undersides for aphids or spider mites.',
            },
            {
                interval: 'as-needed',
                task: 'Water deeply whenever the top inch of soil starts to dry.',
            },
            {
                interval: 'seasonal',
                task: 'Feed every 2-3 weeks in season; prune to shape after the main bloom flush.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6+ hrs direct',
                detail: 'The single biggest driver of continuous, heavy flowering.',
            },
            {
                label: 'Feeding',
                stat: 'Potassium-forward, frequent',
                detail: 'A heavy bloomer that depletes soil nutrients quickly and needs regular replenishment.',
            },
            {
                label: 'Water',
                stat: 'Consistent, never dry',
                detail: 'Drought stress causes rapid bud and leaf drop — this is not a plant that tolerates forgetfulness.',
            },
            {
                label: 'Winter Protection',
                stat: 'Indoors below 50°F',
                detail: 'A tropical shrub that needs to come inside or into a greenhouse before any real cold arrives.',
            },
        ],
        wateringRhythm: {
            heading:
                'Deep, frequent watering that never lets the plant fully dry.',
            body: 'Tropical Hibiscus wants consistently moist soil, especially in containers exposed to full sun and heat. Water deeply whenever the top inch of soil dries, and expect to water container plants daily in peak summer heat. Unlike many flowering plants, this species does not tolerate drought stress well — expect prompt bud drop if watering lapses.',
            tips: [
                'Container plants in full sun may need daily watering during summer heat waves.',
                'A consistent watering schedule matters more than any specific amount — irregular watering causes more bud drop than slightly dry soil.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 1-3 days',
                tip: 'Peak growth and bloom season — check container soil daily in hot weather.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 4-6 days',
                tip: 'Growth and blooming slow as temperatures drop — ease back gradually.',
            },
            {
                season: 'Winter',
                cadence: 'Every 7-10 days',
                tip: 'Minimal growth indoors means minimal water demand; avoid overwatering while dormant-ish.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water deeply as needed.',
                    'Inspect leaves and buds for aphids or spider mites.',
                    'Deadhead spent blooms to keep the plant tidy.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Feed every 2-3 weeks with a potassium-forward fertilizer through the growing season.',
                    'Prune by up to a third in early spring to encourage bushy, floriferous new growth.',
                    'Repot container plants every 1-2 years to refresh soil and root space.',
                    'Move container plants indoors before the first frost in non-tropical climates.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Hibiscus-specific fertilizer',
                note: 'Higher potassium and lower phosphorus than general blooming feeds, matching this plant’s specific needs.',
            },
            {
                item: 'Bypass pruners',
                note: 'For annual shaping cuts and removing any winter dieback on container plants.',
            },
            {
                item: 'Large, well-draining container',
                note: 'Gives roots room between repottings and prevents waterlogging in a heavy-feeding, heavy-drinking plant.',
            },
            {
                item: 'Plant dolly or wheeled base',
                note: 'Makes moving a large container plant indoors for winter far more manageable.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Sudden Bud Drop',
                description:
                    'Buds falling before opening is this plant’s classic stress response, usually to inconsistent watering, a sudden temperature swing, or a recent move.',
                actions: [
                    'Stabilize the watering schedule and avoid letting soil dry out fully.',
                    'Keep the plant away from drafts, heating vents, or sudden temperature changes.',
                    'Be patient — a settled plant usually resumes normal budding within a few weeks.',
                ],
            },
            {
                title: 'Yellowing Leaves',
                description:
                    'Pale or yellowing foliage, especially on lower growth, often signals a nutrient deficiency or overwatering.',
                actions: [
                    'Check that feeding is on schedule with a balanced or hibiscus-specific fertilizer.',
                    'Confirm the pot drains well and isn’t sitting in standing water.',
                    'Remove badly yellowed leaves; new growth should come in greener once care is adjusted.',
                ],
            },
            {
                title: 'Stunted Growth, Few Blooms',
                description:
                    'Slow growth and a thin bloom count almost always trace back to insufficient direct sun.',
                actions: [
                    'Relocate to the sunniest available spot, ideally 6+ hours of direct light.',
                    'Increase feeding frequency slightly once light is corrected.',
                    'Expect a lag of several weeks before blooming picks back up.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Clusters of small insects on buds and new growth, often with sticky residue.',
                treatment:
                    'Hose off light infestations or treat with insecticidal soap every 5-7 days until clear.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine webbing and pale stippling on leaves, especially in hot, dry conditions.',
                treatment:
                    'Shower foliage regularly and raise humidity; treat persistent cases with insecticidal soap.',
            },
            {
                name: 'Whiteflies',
                pestSlug: 'whiteflies',
                signs: 'Small white insects that flutter up when foliage is disturbed, leaving sticky residue behind.',
                treatment:
                    'Use yellow sticky traps and insecticidal soap sprays, repeating weekly until the population clears.',
            },
        ],
        stabilityChecklist: [
            'Provide at least 6 hours of direct sun for reliable, continuous blooming.',
            'Keep soil consistently moist — this species does not tolerate drought stress well.',
            'Feed every 2-3 weeks in season with a potassium-forward fertilizer.',
            'Move container plants indoors before frost in any climate that isn’t reliably tropical.',
        ],
    },
};
