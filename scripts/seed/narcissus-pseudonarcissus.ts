import type { Plant } from '../../lib/db/models/Plant';

export const narcissusPseudonarcissus: Omit<Plant, 'createdAt' | 'updatedAt'> =
    {
        genus: 'narcissus',
        species: 'pseudonarcissus',
        commonNames: ['Daffodil', 'Common Daffodil', 'Lent Lily'],
        description:
            'Trumpet-centered yellow blooms on upright stems make Daffodils one of the first, most reliable signs of spring — a plant-it-once bulb that multiplies into thicker drifts nearly every year with almost no attention.',
        images: [],
        tags: [
            'bulb',
            'full-sun',
            'spring-blooming',
            'perennial',
            'toxic',
            'deer-resistant',
        ],
        highlights: [
            'Native to meadows and woodland edges of Western Europe, especially Spain and Portugal.',
            'Bulbs contain calcium oxalate crystals and lycorine, making the whole plant unappetizing to deer, rabbits, and rodents.',
            'Naturalizes readily, with clumps splitting into more flowering bulbs each year if left undisturbed.',
        ],
        vitals: {
            hardinessZone: {
                value: '3-8',
                caption:
                    'Needs a real winter chill to flower well; struggles in frost-free climates without pre-chilled bulbs.',
                zoneMin: 3,
                zoneMax: 8,
            },
            light: {
                score: 4,
                value: 'Full sun to light shade',
                caption:
                    'Best flowering in full sun; tolerates the dappled shade of deciduous trees since it blooms before the canopy fills in.',
            },
            watering: {
                score: 2,
                value: 'Moist in growth, dry in dormancy',
                caption:
                    'Wants regular moisture while leaves are green, then a dry summer rest underground.',
            },
            difficulty: {
                score: 1,
                value: 'Very easy',
                caption:
                    'Plant once and largely forget — the main failure mode is impatience with the post-bloom foliage.',
                level: 'easy',
            },
            toxicity: {
                value: 'Toxic',
                caption:
                    'All parts, especially the bulb, contain lycorine and can cause serious vomiting if ingested by pets or people.',
                level: 'toxic',
            },
        },
        overview: {
            height: {
                value: '12-16 in',
                detail: 'Strappy basal leaves with a single leafless flower stalk per bulb, rising just above the foliage.',
                minFt: 1,
                maxFt: 1,
            },
            soil: {
                value: 'Well-drained, average garden soil',
                detail: 'Tolerates a wide range of soils but rots in anything that stays soggy, especially over summer dormancy.',
            },
            semiHydro: {
                value: 'No',
                detail: 'A dormant, dry-summer bulb — permanently moist growing media invites rot.',
                compatible: false,
            },
            fertilizer: {
                value: 'Light, bulb-focused',
                detail: 'A low-nitrogen, phosphorus-forward feed at planting and again as foliage emerges supports strong repeat blooming.',
                npk: '5-10-10',
            },
            fertilizerFrequency: {
                value: 'Twice a year',
                detail: 'Feed at fall planting and again when foliage first emerges in late winter or early spring.',
            },
            nativeHabitat: {
                value: 'Western European meadows and woodlands',
                detail: 'Grows wild across Spain, Portugal, and France, flowering early before summer heat and shade set in.',
            },
            humidity: {
                value: 'Not a factor',
                detail: 'An outdoor bulb grown in open air — ambient humidity has no meaningful effect on its care.',
            },
            temperature: {
                value: '-40° – 85°F',
                detail: 'Needs sustained winter cold below 45°F to trigger flowering; tolerates summer heat once dormant underground.',
                minF: -40,
                maxF: 85,
            },
            growSeason: {
                value: 'Late Winter–Spring',
                detail: 'Foliage and flowers emerge as soil warms in late winter, finishing by late spring before dying back to dormancy.',
            },
            dailyRhythm: {
                heading:
                    'A plant-and-wait bulb that runs almost entirely on its own.',
                body: 'Daffodils ask for very little: a sunny, well-drained spot at planting, and then patience as the foliage yellows and dies back after bloom. That fading foliage is refueling next year’s bulb and should never be cut back early, even though it looks untidy.',
                highlights: [
                    'Let foliage die back naturally for at least 6 weeks after bloom — cutting it early starves next year’s flower.',
                    'Deadhead spent blooms to stop energy going into seed production instead of the bulb.',
                    'Clumps that stop flowering well are usually overcrowded and due for autumn division.',
                ],
            },
            careCadence: [
                {
                    interval: 'weekly',
                    task: 'Check soil moisture during active spring growth; water if the season is dry.',
                },
                {
                    interval: 'as-needed',
                    task: 'Deadhead spent flowers, leaving the stem and foliage intact.',
                },
                {
                    interval: 'seasonal',
                    task: 'Feed at fall planting and again as foliage emerges in late winter.',
                },
                {
                    interval: 'seasonal',
                    task: 'Lift and divide overcrowded clumps every 3-5 years once foliage has fully died back.',
                },
            ],
        },
        care: {
            pillars: [
                {
                    label: 'Chilling',
                    stat: 'Sustained cold below 45°F',
                    detail: 'A real winter dormancy is what triggers strong spring flowering — skip it and blooms thin out fast.',
                },
                {
                    label: 'Foliage',
                    stat: 'Never cut early',
                    detail: 'Leaves must yellow and die back naturally to recharge the bulb for next year.',
                },
                {
                    label: 'Drainage',
                    stat: 'Dry summer rest',
                    detail: 'Bulbs dormant in wet summer soil are prone to rot; a naturally drier season matters more than active watering.',
                },
                {
                    label: 'Division',
                    stat: 'Every 3-5 years',
                    detail: 'Splitting congested clumps in early summer restores vigor and flower count.',
                },
            ],
            wateringRhythm: {
                heading: 'Water through growth, then let the ground dry.',
                body: 'From emergence through the end of bloom, keep soil evenly moist, especially in dry springs. Once flowering finishes and foliage begins yellowing, watering can taper off entirely — the bulb is heading into its natural summer dormancy and prefers dry ground until fall.',
                tips: [
                    'Rainfall is usually enough in most temperate spring climates — supplement only during a dry spell.',
                    'Avoid planting in low spots or heavy clay where summer rain pools around dormant bulbs.',
                ],
            },
            seasonalWatering: [
                {
                    season: 'Late Winter & Spring',
                    cadence: 'Weekly if no rain',
                    tip: 'Consistent moisture during active growth supports fuller, longer-lasting blooms.',
                },
                {
                    season: 'Summer',
                    cadence: 'None needed',
                    tip: 'Bulbs are dormant underground and prefer dry soil until fall.',
                },
                {
                    season: 'Autumn',
                    cadence: 'Water in at planting only',
                    tip: 'A single deep watering after planting new bulbs helps root development before winter.',
                },
            ],
            routines: [
                {
                    interval: 'weekly',
                    steps: [
                        'Check soil moisture during active spring growth.',
                        'Remove spent blooms, leaving stems and leaves in place.',
                    ],
                },
                {
                    interval: 'seasonal',
                    steps: [
                        'Feed with a low-nitrogen bulb fertilizer at fall planting and again at spring emergence.',
                        'Let foliage yellow and collapse fully before any cleanup, at least 6 weeks post-bloom.',
                        'Lift, divide, and replant congested clumps every few years in early summer.',
                    ],
                },
            ],
            toolkit: [
                {
                    item: 'Bulb planter or trowel',
                    note: 'Plants bulbs at the correct depth — roughly three times the bulb’s height — with minimal effort.',
                },
                {
                    item: 'Low-nitrogen bulb fertilizer',
                    note: 'Phosphorus-forward blends support strong root and flower development without excess leafy growth.',
                },
                {
                    item: 'Hardware cloth or wire basket',
                    note: 'Protects newly planted bulbs from squirrels and voles without deterring growth.',
                },
                {
                    item: 'Garden fork',
                    note: 'For lifting and dividing crowded clumps without slicing through bulbs.',
                },
            ],
        },
        issues: {
            stressSignals: [
                {
                    title: 'Blind Clumps (No Flowers)',
                    description:
                        'Plenty of healthy leaves but no blooms usually means a clump is overcrowded or foliage was cut back too early in a previous year.',
                    actions: [
                        'Lift and divide the clump in early summer once foliage has fully died back.',
                        'Replant bulbs with more spacing in full sun.',
                        'Let all foliage die back naturally this year and next to rebuild bulb reserves.',
                    ],
                },
                {
                    title: 'Soft, Rotten Bulbs',
                    description:
                        'Mushy, foul-smelling bulbs found at planting or lifting time point to fungal rot from waterlogged soil.',
                    actions: [
                        'Discard visibly soft or discolored bulbs before planting.',
                        'Improve drainage or raise the bed before replanting.',
                        'Avoid planting in spots that stay wet through summer dormancy.',
                    ],
                },
                {
                    title: 'Floppy, Yellowing Leaves Right After Bloom',
                    description:
                        'This is normal die-back, not a problem — the plant is redirecting energy into the bulb for next year.',
                    actions: [
                        'Leave the foliage in place for at least 6 weeks after flowering ends.',
                        'Disguise fading leaves with later-emerging perennials planted nearby.',
                        'Resist braiding or tying leaves, which reduces the photosynthesis that refuels the bulb.',
                    ],
                },
            ],
            pests: [
                {
                    name: 'Narcissus Bulb Fly',
                    signs: 'Soft, hollowed-out bulbs with a single fat larva inside; weak or absent foliage the following spring.',
                    treatment:
                        'Discard infested bulbs; keep foliage intact as long as possible to close off the soil cracks the fly uses to lay eggs.',
                },
                {
                    name: 'Slugs and Snails',
                    signs: 'Ragged holes in young emerging leaves and flower buds, mainly in wet weather.',
                    treatment:
                        'Use iron phosphate bait or hand-pick in the evening; damage rarely affects the bulb itself.',
                },
                {
                    name: 'Aphids',
                    signs: 'Small clustered insects on flower stalks and buds, usually a minor cosmetic issue.',
                    treatment:
                        'Hose off light infestations; treatment is rarely necessary given the plant’s short bloom window.',
                },
            ],
            stabilityChecklist: [
                'Never cut back green or yellowing foliage before it fully dies on its own.',
                'Plant in full sun with sharp drainage, especially where summers are wet.',
                'Divide overcrowded clumps every few years to keep flowering strong.',
                'Keep bulbs, foliage, and flowers away from pets and children — all parts are toxic if eaten.',
            ],
        },
    };
