import type { Plant } from '../../lib/db/models/Plant';

export const peperomiaCaperata: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'peperomia',
    species: 'caperata',
    commonNames: ['Emerald Ripple Peperomia', 'Radiator Plant'],
    description:
        'A dense little rosette of deeply corrugated, heart-shaped leaves on wiry red-tinted petioles, topped in season by thin, upright flower spikes — a classic desktop plant named for its comfort with the dry warmth near a radiator.',
    images: [],
    tags: ['compact', 'pet-friendly', 'beginner-friendly', 'non-toxic'],
    highlights: [
        "Native to Brazil's rainforest floor, where its rippled leaves grow low in deep shade.",
        'The "Radiator Plant" nickname comes from its tolerance of the warm, dry air near old steam radiators.',
        'Thin, wire-like flower spikes appear readily indoors and last for weeks without fading.',
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
            value: 'Medium to bright, indirect',
            caption:
                'Tolerates lower light than most peperomias but leaves ripple less and colors fade without brightness.',
        },
        watering: {
            score: 2,
            value: 'Let dry between drinks',
            caption:
                'Shallow roots rot quickly in soil that stays wet — this species prefers to dry out fully.',
        },
        difficulty: {
            score: 2,
            value: 'Moderate',
            caption:
                'Easy once its watering rhythm is dialed in, but root rot from overwatering is a common early mistake.',
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
            value: '6-8 in, mounding',
            detail: 'Stays low and compact, spreading slightly wider than tall as the rosette fills in.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Well-draining, chunky mix',
            detail: 'Potting mix cut with perlite drains fast enough to protect the shallow, delicate roots.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Adapts reasonably well to LECA once established, though soil culture is more forgiving for beginners.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced liquid feed',
            detail: 'A gentle, balanced fertilizer at half strength is plenty for its slow, compact growth.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly spring through early fall; skip winter entirely.',
        },
        nativeHabitat: {
            value: 'Brazil (rainforest floor)',
            detail: 'Grows low in deep, dappled shade, often tucked among leaf litter and fallen branches.',
        },
        humidity: {
            value: '50%+ ideal',
            detail: 'Tolerates average home humidity but leaves ripple more fully and stay firmer above 50%.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges, including the warm, dry air near heating vents.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Slow and steady — new leaves emerge from the rosette center a few at a time.',
        },
        dailyRhythm: {
            heading: 'A tidy desktop rosette that asks for very little.',
            body: 'Emerald Ripple settles into a light glance-and-water routine: check that the mix has dried out, water thoroughly when it has, and otherwise leave it alone. Its main risk is overattentive watering rather than neglect.',
            highlights: [
                'Check soil moisture roughly once a week; it dries slowly in a chunky mix.',
                'Snip spent flower spikes at the base once they brown.',
                'Keep it out of direct sun, which scorches the rippled leaves.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the soil — only water once it is fully dry.',
            },
            {
                interval: 'weekly',
                task: 'Look over the rosette center and leaf undersides for pests.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly once dry, then let the pot drain completely.',
            },
            {
                interval: 'monthly',
                task: 'Remove spent flower spikes and any yellowed leaves at the base.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 10-14 days',
                detail: 'Shallow roots rot quickly in wet mix — let the pot dry out fully between waterings.',
            },
            {
                label: 'Light',
                stat: 'Medium to bright, indirect',
                detail: 'More forgiving of lower light than most peperomias, but leaf ripple is best in brighter spots.',
            },
            {
                label: 'Nutrition',
                stat: 'Monthly, diluted',
                detail: 'Slow growth needs only light, occasional feeding in the growing season.',
            },
            {
                label: 'Grooming',
                stat: 'Snip spent spikes',
                detail: 'Removing browned flower spikes keeps the compact rosette looking tidy.',
            },
        ],
        wateringRhythm: {
            heading: 'Dry, then soak — never in between.',
            body: 'Let the mix dry out fully, then water thoroughly and let it drain completely. The shallow root system is unusually quick to rot in mix that stays damp, so resist the urge to water on a fixed schedule.',
            tips: [
                'Slightly softer, less rippled leaves are the honest thirst signal — they firm back up within a day of watering.',
                'Yellowing paired with a sour soil smell means root rot — check the roots immediately.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 8-10 days',
                tip: 'Check the topsoil weekly; water only once it has dried through.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 10-14 days',
                tip: 'Stretch the interval as growth slows with shorter days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 2-3 weeks',
                tip: 'Water sparingly — cold, damp soil is the fastest route to root rot in winter.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture before doing anything else.',
                    'Inspect the rosette center and leaf undersides for pests.',
                    'Rotate the pot a quarter turn for even light exposure.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Snip spent flower spikes at the base once they brown.',
                    'Feed with a diluted balanced fertilizer during the growing season.',
                    'Remove any fully yellowed leaves at the base.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Chunky, well-draining mix',
                note: 'Extra perlite protects the shallow, delicate roots from staying wet.',
            },
            {
                item: 'Shallow, wide pot',
                note: "Matches the rosette's compact, shallow-rooted growth habit.",
            },
            {
                item: 'Fine snips',
                note: 'For tidying spent flower spikes and removing yellowed leaves.',
            },
            {
                item: 'Moisture meter (optional)',
                note: 'Confirms the pot is fully dry before rewatering.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Yellowing, Sour-Smelling Soil',
                tag: 'Root rot',
                description:
                    'Yellow leaves paired with soil that smells sour or stays wet for days signal root rot from overwatering.',
                actions: [
                    'Unpot and check the roots, trimming away any brown or mushy sections.',
                    'Repot into fresh, fast-draining mix and hold off watering for a week.',
                    'Lengthen the interval between waterings going forward.',
                ],
            },
            {
                title: 'Drooping, Flattened Rosette',
                description:
                    'A rosette that collapses flat rather than standing upright often means the mix has dried out for too long.',
                actions: [
                    'Water thoroughly; expect the rosette to firm back up within a day.',
                    'If drooping persists after watering, check for root rot from a previous soggy spell.',
                ],
            },
            {
                title: 'Faded, Less Rippled Leaves',
                description:
                    'New leaves emerging flatter and paler than older growth usually point to insufficient light.',
                actions: [
                    'Move to a brighter spot with filtered light.',
                    'Be patient — existing leaves keep their texture; only new growth reflects the change.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White cottony clusters tucked into the rosette center and along petioles.',
                treatment:
                    'Swab visible clusters with rubbing alcohol, then follow up with horticultural oil every 7-10 days.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Small flies around soil that stays damp too long between waterings.',
                treatment:
                    'Let the mix dry further and drench with BTI (mosquito bits) to kill larvae.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling on leaf surfaces, especially in dry winter air.',
                treatment:
                    'Shower the foliage, then apply insecticidal soap weekly until new leaves emerge clean.',
            },
        ],
        stabilityChecklist: [
            'Let the mix dry out completely before watering again — the single biggest lever on root health.',
            'Use a shallow pot and chunky mix suited to its shallow root system.',
            'Give medium to bright, indirect light for the fullest leaf ripple.',
            'Snip spent flower spikes and yellowed leaves to keep the rosette tidy.',
        ],
    },
};
