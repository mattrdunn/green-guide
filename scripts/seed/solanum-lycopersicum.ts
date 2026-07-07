import type { Plant } from '../../lib/db/models/Plant';

export const solanumLycopersicum: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'solanum',
    species: 'lycopersicum',
    commonNames: ['Tomato', 'Garden Tomato'],
    description:
        'The backbone of the summer vegetable garden — sprawling or staked vines loaded with clusters of ripening fruit. Tomatoes reward consistent sun, water, and feeding with weeks of harvest.',
    images: [],
    tags: ['vegetable', 'annual', 'edible', 'full-sun', 'toxic'],
    highlights: [
        'Descended from wild nightshades of the South American Andes.',
        'Ripe fruit is a kitchen staple, but the leaves and stems contain toxic solanine.',
        'Thousands of cultivars range from cherry-sized snacking fruit to giant beefsteaks.',
    ],
    vitals: {
        hardinessZone: {
            value: 'Grown as an annual (perennial in 10-11)',
            caption: 'Frost-tender everywhere colder — treat as a warm-season crop.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6-8+ hours direct for strong fruit set and flavor.',
        },
        watering: {
            score: 4,
            value: 'Consistent moisture',
            caption: 'Deep water 1-2x weekly; avoid wetting foliage to limit disease.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption: 'Rewarding but demands staking, pruning, and pest vigilance.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Toxic (foliage & stems)',
            caption:
                'Leaves and stems contain solanine, toxic to pets and people — ripe fruit is safe and edible.',
            level: 'toxic',
        },
    },
    overview: {
        height: {
            value: '3-8 ft vines',
            detail: 'Indeterminate varieties keep climbing all season on stakes or cages; determinate ("bush") types stay compact and stop at a set height.',
            minFt: 3,
            maxFt: 8,
        },
        soil: {
            value: 'Rich, loamy, well-draining',
            detail: 'Deep, fertile soil amended with compost; aim for a pH between 6.0 and 6.8.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Grown hydroponically at commercial scale, but passive semi-hydro setups are not the standard approach for home growers.',
            compatible: false,
        },
        fertilizer: {
            value: 'Lower-N, higher-K for fruiting',
            detail: 'Balanced feed at transplant, then a bloom/fruit formula once flowering starts to avoid all-leaf, no-fruit growth.',
            npk: '3-4-6',
        },
        fertilizerFrequency: {
            value: 'Every 2-3 weeks through fruiting',
            detail: 'Steady, moderate feeding beats one heavy application — tomatoes are hungry the entire season.',
        },
        nativeHabitat: {
            value: 'Western South America',
            detail: 'Wild ancestors grow along the Andean foothills of Peru and Ecuador; domesticated in Mesoamerica.',
        },
        humidity: {
            value: '40-70% moderate',
            detail: 'Average outdoor humidity is fine; poor airflow in stagnant, humid conditions invites fungal disease.',
            minPct: 40,
        },
        temperature: {
            value: '55° – 90°F',
            detail: 'Fruit set stalls below 55°F or above 90°F; frost kills the plant outright.',
            minF: 55,
            maxF: 90,
        },
        growSeason: {
            value: 'Late spring–first frost',
            detail: 'Transplant after the last frost date once nights stay reliably above 50°F; harvest continues until frost.',
        },
        dailyRhythm: {
            heading: 'A hungry, thirsty vine racing to ripen fruit before frost.',
            body: 'Tomatoes need steady inputs all season: sun, even moisture, sturdy support, and regular feeding. The daily job is watching for wilting or pests; the weekly job is tying in new growth and pinching suckers to keep the plant productive.',
            highlights: [
                'Even soil moisture prevents blossom end rot and fruit cracking.',
                'Stake or cage plants early — retrofitting support onto a sprawling vine is much harder.',
                'Pinch suckers on indeterminate varieties to focus energy on fruit, not foliage.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Tie new growth to stakes or cages as vines lengthen.',
            },
            {
                interval: 'weekly',
                task: 'Pinch suckers on indeterminate varieties to control size.',
            },
            {
                interval: 'weekly',
                task: 'Check soil moisture 2" down and water deeply if dry.',
            },
            {
                interval: 'as-needed',
                task: 'Harvest ripe fruit promptly to encourage continued production.',
            },
            {
                interval: 'monthly',
                task: 'Feed with a fruiting-formula fertilizer through the growing season.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6-8+ hrs direct',
                detail: 'More light means faster ripening, better flavor, and stronger disease resistance.',
            },
            {
                label: 'Support',
                stat: 'Stake or cage',
                detail: 'Keeps fruit off the soil, improves airflow, and makes pest checks far easier.',
            },
            {
                label: 'Even Watering',
                stat: '1-2 deep soaks/wk',
                detail: 'Consistency prevents blossom end rot and split skins from feast-or-famine watering.',
            },
            {
                label: 'Feeding',
                stat: 'Every 2-3 weeks',
                detail: 'A fruit-forward fertilizer keeps flowering and fruit set going all season.',
            },
        ],
        wateringRhythm: {
            heading: 'Deep and steady beats frequent and shallow.',
            body: 'Water deeply at the base 1-2 times a week, aiming to keep soil evenly moist rather than alternating between soggy and bone dry. Mulch heavily to buffer moisture swings, and water in the morning so foliage dries before evening to limit fungal disease.',
            tips: [
                'A 2-3" layer of mulch dramatically reduces watering frequency and blocks soil-borne fungal splash.',
                'Irregular watering after a dry spell is the classic cause of tomatoes splitting just as they ripen.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Late Spring (transplant)',
                cadence: 'Every 2-3 days',
                tip: 'Keep new transplants consistently moist while roots establish.',
            },
            {
                season: 'Summer (peak fruiting)',
                cadence: '2x weekly, deep soaks',
                tip: 'Heat and fruit load raise water demand — check daily during heat waves.',
            },
            {
                season: 'Early Fall (wind-down)',
                cadence: 'Taper as harvest slows',
                tip: 'Ease off watering as nights cool and fewer new fruit set.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Tie in new vine growth and remove suckers on indeterminate varieties.',
                    'Inspect the undersides of leaves for pests and early blight spotting.',
                    'Harvest any ripe or overripe fruit.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Refresh mulch to maintain even soil moisture.',
                    'Apply a fruiting-formula feed if growth or flowering has slowed.',
                    'Remove yellowed lower leaves to improve airflow near the soil line.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Stakes, cages, or a trellis',
                note: 'Set up at planting time — vines outgrow late supports fast.',
            },
            {
                item: 'Soft garden ties or twine',
                note: 'Secures heavy fruiting stems without cutting into them.',
            },
            {
                item: 'Straw or shredded leaf mulch',
                note: 'Buffers soil moisture and blocks fungal spores splashing up from soil.',
            },
            {
                item: 'Fruit-forward fertilizer',
                note: 'Lower nitrogen, higher potassium keeps energy going to fruit, not just foliage.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Blossom End Rot',
                description:
                    'A sunken, leathery black patch on the fruit’s bottom, caused by inconsistent watering disrupting calcium uptake.',
                actions: [
                    'Even out the watering schedule with regular deep soaks rather than sporadic ones.',
                    'Mulch to buffer soil moisture swings between waterings.',
                    'Remove affected fruit — the plant will produce healthy fruit once watering stabilizes.',
                ],
            },
            {
                title: 'Yellowing Lower Leaves',
                description:
                    'Older leaves yellowing and developing dark spotted rings often signals early blight or simple nitrogen drawdown.',
                actions: [
                    'Remove and discard affected leaves rather than composting them.',
                    'Improve airflow by pruning lower foliage and suckers.',
                    'Apply a balanced feed if new growth also looks pale.',
                ],
            },
            {
                title: 'Cracked or Split Fruit',
                description:
                    'Circular splits around the top of ripening fruit follow a sudden heavy watering after a dry spell.',
                actions: [
                    'Keep soil moisture consistent with mulch and a regular watering schedule.',
                    'Harvest slightly early and let fruit finish ripening indoors during unpredictable weather.',
                ],
            },
        ],
        pests: [
            {
                name: 'Tomato Hornworm',
                pestSlug: 'caterpillars',
                signs: 'Large green caterpillars with a horn-like tail; stripped foliage and dark droppings.',
                treatment:
                    'Hand-pick and remove; Bacillus thuringiensis (Bt) sprays control heavier infestations.',
            },
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Clusters of small insects on new growth and the undersides of leaves.',
                treatment:
                    'Hose off or treat with insecticidal soap weekly until populations drop.',
            },
            {
                name: 'Whiteflies',
                pestSlug: 'whiteflies',
                signs: 'Tiny white insects that scatter when foliage is disturbed; sticky honeydew residue.',
                treatment:
                    'Yellow sticky traps plus insecticidal soap applications every 5-7 days.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling on leaves and faint webbing during hot, dry spells.',
                treatment:
                    'Increase humidity around plants and treat with insecticidal soap or miticide as needed.',
            },
        ],
        stabilityChecklist: [
            'Stake or cage plants at transplant time, not after they sprawl.',
            'Water deeply and consistently — most fruit problems trace back to irregular moisture.',
            'Mulch heavily to buffer soil moisture and block soil-borne fungal spores.',
            'Rotate tomato beds year to year to reduce blight and soil-borne disease buildup.',
        ],
    },
};
