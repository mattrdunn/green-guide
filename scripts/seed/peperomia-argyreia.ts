import type { Plant } from '../../lib/db/models/Plant';

export const peperomiaArgyreia: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'peperomia',
    species: 'argyreia',
    commonNames: ['Watermelon Peperomia', 'Watermelon Begonia'],
    description:
        'A tidy rosette of shield-shaped leaves striped silver and deep green like a watermelon rind, carried on thick, brittle, red-tinted petioles — a striking pattern plant that stays small enough for any windowsill.',
    images: [],
    tags: [
        'succulent-leaved',
        'compact',
        'pet-friendly',
        'beginner-friendly',
        'non-toxic',
    ],
    highlights: [
        'Native to the rainforest floor of Brazil, where it grows in deep shade beneath the canopy.',
        'Leaves and petioles store enough water to make this one of the more drought-tolerant patterned houseplants.',
        'Petioles snap cleanly at the base and root easily, making propagation from a single leaf reliable.',
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
                'Needs more light than plain green peperomias to keep its watermelon pattern crisp.',
        },
        watering: {
            score: 2,
            value: 'Let dry between drinks',
            caption:
                'Thick petioles store water — overwatering rots the shallow roots quickly.',
        },
        difficulty: {
            score: 2,
            value: 'Moderate',
            caption:
                'Easy once its watering rhythm is dialed in, but brittle petioles snap easily and root rot moves fast.',
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
            value: '6-10 in rosette',
            detail: 'Stays low and clumping; older leaves splay outward as the rosette fills in.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Well-draining, chunky mix',
            detail: 'Potting mix cut with perlite and coarse bark keeps the shallow, water-storing roots from sitting wet.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Adapts well to LECA once roots are established; helps avoid the overwatering that trips up soil culture.',
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
            detail: 'Grows in deep, dappled shade beneath the canopy, often tucked among leaf litter and rocks.',
        },
        humidity: {
            value: '50%+ ideal',
            detail: 'Tolerates average home humidity but holds its pattern and firmness better above 50%.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges; protect from cold drafts below 55°F.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Slow-growing even at its peak — new leaves emerge one at a time from the rosette center.',
        },
        dailyRhythm: {
            heading:
                'A patterned rosette that wants to be handled gently and watered rarely.',
            body: 'Watermelon Peperomia rewards a hands-off approach: bright light, a dry-between-drinks schedule, and minimal disturbance of its brittle petioles. Most damage comes from bumping the plant or overwatering, not neglect.',
            highlights: [
                'Keep it somewhere bright but out of direct sun to avoid leaf scorch.',
                'Handle petioles gently — they snap cleanly and easily at the base.',
                'Let the mix dry out fully between waterings.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the soil — only water once it is fully dry.',
            },
            {
                interval: 'weekly',
                task: 'Look over leaf undersides and the rosette center for pests.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly once dry, then let the pot drain completely.',
            },
            {
                interval: 'monthly',
                task: 'Rotate the pot for even growth around the rosette.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 12-16 days',
                detail: 'Thick petioles and leaves store water — underwatering is far safer than over.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'More light than most peperomias need to keep the silver watermelon pattern vivid.',
            },
            {
                label: 'Nutrition',
                stat: 'Monthly, diluted',
                detail: 'Slow growth needs only light, occasional feeding in the growing season.',
            },
            {
                label: 'Handling',
                stat: 'Gentle only',
                detail: 'Brittle petioles snap at the base with rough handling — position it somewhere low-traffic.',
            },
        ],
        wateringRhythm: {
            heading: 'Dry, then soak — never in between.',
            body: 'Let the mix dry out completely, then water thoroughly and let it drain fully. The shallow, water-storing roots rot quickly in mix that stays damp, so a fully dry gap between waterings is the safest routine.',
            tips: [
                'A slightly softer, less taut leaf is the honest thirst signal — it firms back up within a day of watering.',
                'A petiole that darkens and goes soft at the base is an early rot sign — check the roots immediately.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 10-12 days',
                tip: 'Check the pot weight weekly; water only once it is bone-dry.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 14-16 days',
                tip: 'Stretch the interval as growth slows with shorter days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 3-4 weeks',
                tip: 'Water sparingly — cold, damp soil is the fastest route to root rot in winter.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture before doing anything else.',
                    'Inspect the rosette center and leaf undersides for pests.',
                    'Handle the pot carefully — avoid bumping brittle petioles.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Rotate the pot a quarter turn for even light exposure.',
                    'Feed with a diluted balanced fertilizer during the growing season.',
                    'Remove any fully yellowed or collapsed leaves at the base.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Chunky, well-draining mix',
                note: 'Extra perlite or bark protects the shallow roots from staying wet.',
            },
            {
                item: 'Shallow, wide pot',
                note: "Matches the rosette's spreading, shallow-rooted growth habit.",
            },
            {
                item: 'Rooting hormone (optional)',
                note: 'Speeds up leaf-petiole propagation, though it roots readily without it.',
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
                title: 'Soft, Blackened Petiole Base',
                tag: 'Root rot',
                description:
                    'A darkened, mushy base where the petiole meets the soil is the earliest sign of rot from overly wet mix.',
                actions: [
                    'Unpot and inspect the roots, trimming away any brown or mushy sections.',
                    'Repot into fresh, fast-draining mix and hold off watering for a week.',
                    'Reduce watering frequency going forward.',
                ],
            },
            {
                title: 'Snapped Petioles',
                description:
                    'Petioles are brittle and snap easily at the base from bumps or handling, not disease.',
                actions: [
                    'Root the fallen leaf and petiole in water or moist perlite to propagate a new plant.',
                    'Move the pot somewhere lower-traffic to reduce accidental contact.',
                ],
            },
            {
                title: 'Faded, Duller Pattern',
                description:
                    'New leaves emerging with less contrast between silver and green usually mean insufficient light.',
                actions: [
                    'Move to a brighter spot with strong, filtered light.',
                    'Be patient — existing leaves keep their pattern; only new growth reflects the change.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White cottony clusters at the base of petioles and in the rosette center.',
                treatment:
                    'Swab visible clusters with rubbing alcohol, then follow up with horticultural oil every 7-10 days.',
            },
            {
                name: 'Thrips',
                pestSlug: 'thrips',
                signs: 'Silvery scarring and distorted new leaves emerging from the rosette center.',
                treatment:
                    'Isolate the plant, remove heavily damaged leaves, and treat with insecticidal soap weekly for a month.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Small flies around soil that stays damp too long between waterings.',
                treatment:
                    'Let the mix dry further and drench with BTI (mosquito bits) to kill larvae.',
            },
        ],
        stabilityChecklist: [
            'Let the mix dry out completely before watering again — the single biggest lever on root health.',
            'Give bright, indirect light to keep the watermelon pattern crisp.',
            'Handle gently; snapped petioles are a propagation opportunity, not a loss.',
            'Repot only when rootbound — this species prefers snug, shallow pots.',
        ],
    },
};
