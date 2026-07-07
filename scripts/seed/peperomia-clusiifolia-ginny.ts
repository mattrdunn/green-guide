import type { Plant } from '../../lib/db/models/Plant';

export const peperomiaClusiifoliaGinny: Omit<Plant, 'createdAt' | 'updatedAt'> =
    {
        genus: 'peperomia',
        species: 'clusiifolia',
        variety: 'ginny',
        commonNames: ['Peperomia Ginny', 'Tricolor Peperomia'],
        description:
            'A variegated cultivar of Peperomia clusiifolia, edging thick, glossy, red-tinted leaves in cream and rosy pink — an upright grower that reads more like a living houseplant sculpture than a typical trailing peperomia.',
        images: [],
        tags: [
            'succulent-leaved',
            'variegated',
            'compact',
            'pet-friendly',
            'beginner-friendly',
            'non-toxic',
        ],
        highlights: [
            'A sport of Peperomia clusiifolia, prized for its cream-and-pink leaf margins over a deep green center.',
            'Thick, waxy leaves store water like the plain species, making it just as tolerant of a missed watering.',
            'Brighter light deepens the pink edge coloring; low light fades new growth toward plain green.',
        ],
        vitals: {
            hardinessZone: {
                value: '10-12',
                caption: 'Frost-tender; keep above 55°F year-round.',
                zoneMin: 10,
                zoneMax: 12,
            },
            light: {
                score: 3,
                value: 'Bright, indirect',
                caption:
                    'Needs more light than plain-leaved peperomias to hold its cream-and-pink variegation.',
            },
            watering: {
                score: 2,
                value: 'Let dry between drinks',
                caption:
                    'Thick leaves store water — soggy soil rots the roots far faster than a missed watering hurts it.',
            },
            difficulty: {
                score: 2,
                value: 'Moderate',
                caption:
                    'Care is as easy as the plain species, but variegation can revert or fade without enough light.',
                level: 'moderate',
            },
            toxicity: {
                value: 'Non-toxic',
                caption: 'Considered safe for cats and dogs.',
                level: 'non-toxic',
            },
        },
        overview: {
            height: {
                value: '8-12 in, upright',
                detail: 'Grows in a stacked, upright rosette rather than trailing — stems thicken with age and can be top-heavy.',
                minFt: 1,
                maxFt: 1,
            },
            soil: {
                value: 'Well-draining succulent or aroid mix',
                detail: 'Potting mix cut with perlite and bark drains fast enough to keep the thick roots from rotting.',
            },
            semiHydro: {
                value: 'Yes',
                detail: 'Transitions well to LECA once established; thick roots adapt readily to semi-hydro moisture levels.',
                compatible: true,
            },
            fertilizer: {
                value: 'Balanced liquid feed',
                detail: 'A gentle, balanced fertilizer at half strength supports steady growth without pushing leggy stems.',
                npk: '3-1-2',
            },
            fertilizerFrequency: {
                value: 'Monthly in season',
                detail: 'Feed monthly spring through early fall; skip winter entirely.',
            },
            nativeHabitat: {
                value: 'Caribbean & Venezuela (species origin)',
                detail: 'The parent species grows as an epiphyte and groundcover in humid, shaded understory.',
            },
            humidity: {
                value: '40%+ tolerated',
                detail: 'Adapts to average home humidity without fuss; extra humidity is a bonus, not a requirement.',
                minPct: 40,
            },
            temperature: {
                value: '65° – 80°F',
                detail: 'Comfortable across typical indoor ranges; protect from cold drafts below 55°F.',
                minF: 65,
                maxF: 80,
            },
            growSeason: {
                value: 'Spring–Summer',
                detail: 'Slow and steady — expect a handful of new leaves per month in bright light.',
            },
            dailyRhythm: {
                heading:
                    'A colorful sculpture plant that mostly wants to be left alone.',
                body: 'Peperomia Ginny asks for the same low-maintenance routine as any thick-leaved peperomia, with one difference: it wants a noticeably brighter spot to keep new growth vividly edged in pink rather than fading toward plain green.',
                highlights: [
                    'Bright, indirect light keeps new leaf margins vividly pink.',
                    'Check soil moisture roughly once a week; it dries slowly.',
                    'Rotate occasionally so the upright stems grow straight rather than leaning toward the light.',
                ],
            },
            careCadence: [
                {
                    interval: 'weekly',
                    task: 'Check the top 2" of soil — only water if it is fully dry.',
                },
                {
                    interval: 'weekly',
                    task: 'Scan leaf undersides and stem joints for early pest activity.',
                },
                {
                    interval: 'as-needed',
                    task: 'Water thoroughly once the mix is dry, then let it drain completely.',
                },
                {
                    interval: 'monthly',
                    task: 'Rotate the pot and wipe leaves clean of dust.',
                },
            ],
        },
        care: {
            pillars: [
                {
                    label: 'Hydration',
                    stat: 'Every 12-18 days',
                    detail: 'Thick leaves and stems store water — err toward underwatering rather than over.',
                },
                {
                    label: 'Light',
                    stat: 'Bright, indirect',
                    detail: 'Needs more brightness than plain-leaved peperomias to hold its pink-and-cream edging.',
                },
                {
                    label: 'Nutrition',
                    stat: 'Monthly, diluted',
                    detail: 'Slow growth needs only light, occasional feeding during the growing season.',
                },
                {
                    label: 'Structure',
                    stat: 'Upright, stacked',
                    detail: 'Grows top-heavy over time — a slightly weighted pot prevents tipping.',
                },
            ],
            wateringRhythm: {
                heading: 'When in doubt, wait.',
                body: 'Let the entire pot dry out before watering again, then soak thoroughly and let it drain fully. This cultivar would rather go a week too long without water than sit in damp soil for even a few days.',
                tips: [
                    'Slightly wrinkled, softer leaves are the honest thirst signal — they plump back up within a day of watering.',
                    'Mushy, translucent leaves mean the roots are already rotting — cut back on watering immediately.',
                ],
            },
            seasonalWatering: [
                {
                    season: 'Spring & Summer',
                    cadence: 'Every 10-14 days',
                    tip: 'Check the pot weight or soil moisture weekly; water only once it is bone-dry.',
                },
                {
                    season: 'Autumn',
                    cadence: 'Every 14-18 days',
                    tip: 'Stretch the interval further as growth slows with shorter days.',
                },
                {
                    season: 'Winter',
                    cadence: 'Every 3-4 weeks',
                    tip: 'Water sparingly — cold, wet soil is the fastest way to lose this plant in winter.',
                },
            ],
            routines: [
                {
                    interval: 'weekly',
                    steps: [
                        'Check soil moisture before doing anything else.',
                        'Inspect stem joints and leaf undersides for pests.',
                        'Rotate the pot a quarter turn for even light exposure.',
                    ],
                },
                {
                    interval: 'monthly',
                    steps: [
                        'Wipe leaves clean with a damp cloth.',
                        'Feed with a diluted balanced fertilizer during the growing season.',
                        'Stake top-heavy stems if the rosette starts to lean.',
                    ],
                },
            ],
            toolkit: [
                {
                    item: 'Well-draining succulent mix',
                    note: 'Extra perlite or bark keeps the thick roots from sitting in moisture.',
                },
                {
                    item: 'Slightly weighted pot',
                    note: 'Helps offset the top-heavy, upright growth habit as the plant matures.',
                },
                {
                    item: 'Soft cloth for leaves',
                    note: 'Dust buildup on the glossy foliage cuts down on light absorption.',
                },
                {
                    item: 'Moisture meter (optional)',
                    note: 'Useful for confirming the pot is truly dry all the way through before rewatering.',
                },
            ],
        },
        issues: {
            stressSignals: [
                {
                    title: 'Mushy, Translucent Leaves',
                    tag: 'Overwatering',
                    description:
                        'Soft, almost see-through leaves that drop at a touch signal root rot from soil that never gets to dry out.',
                    actions: [
                        'Unpot and check the roots; trim away any brown, mushy sections.',
                        'Repot into fresh, fast-draining mix and a pot with drainage holes.',
                        'Hold off watering for at least a week after repotting.',
                    ],
                },
                {
                    title: 'Reverting to Plain Green',
                    description:
                        'New leaves emerging with little or no pink/cream edging usually mean insufficient light.',
                    actions: [
                        'Move to a brighter spot with strong, filtered light.',
                        'Prune back fully reverted stems to encourage variegated regrowth.',
                        'Be patient — existing leaves keep their color; only new growth reflects the change.',
                    ],
                },
                {
                    title: 'Leaning, Top-Heavy Stems',
                    description:
                        'Upright stems topple or lean as the rosette gains height and weight faster than the root base.',
                    actions: [
                        'Stake the stem or move to a heavier, wider pot for stability.',
                        'Prune the tallest stems back to encourage bushier, lower growth.',
                    ],
                },
            ],
            pests: [
                {
                    name: 'Mealybugs',
                    pestSlug: 'mealybugs',
                    signs: 'White cottony clusters tucked into leaf joints and along stems.',
                    treatment:
                        'Swab visible clusters with rubbing alcohol, then follow up with horticultural oil every 7-10 days.',
                },
                {
                    name: 'Spider Mites',
                    pestSlug: 'spider-mites',
                    signs: 'Fine stippling and faint webbing on leaf undersides, especially in dry winter air.',
                    treatment:
                        'Shower the foliage, then apply insecticidal soap weekly until new leaves emerge clean.',
                },
                {
                    name: 'Scale',
                    pestSlug: 'scale',
                    signs: 'Small, hard brown bumps along stems that do not wipe off easily.',
                    treatment:
                        'Scrape off light infestations by hand, then follow with horticultural oil every 1-2 weeks.',
                },
            ],
            stabilityChecklist: [
                'Let the entire pot dry out before watering again — this is the single biggest lever on plant health.',
                'Give bright, indirect light to keep the pink-and-cream variegation from fading.',
                'Use a fast-draining, chunky mix and a pot with drainage holes.',
                'Prune reverted or leggy stems to keep the rosette compact and colorful.',
            ],
        },
    };
