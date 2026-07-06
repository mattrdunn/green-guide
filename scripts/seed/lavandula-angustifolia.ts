import type { Plant } from '../../lib/db/models/Plant';

export const lavandulaAngustifolia: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'lavandula',
    species: 'angustifolia',
    commonNames: ['English Lavender', 'Common Lavender', 'True Lavender'],
    description:
        'Silvery foliage, violet-blue spikes, and an unmistakable fragrance make English Lavender a Mediterranean garden staple — happiest baking in full sun with its roots kept lean and dry.',
    images: [],
    tags: [
        'herb',
        'full-sun',
        'drought-tolerant',
        'fragrant',
        'mildly-toxic',
        'perennial',
    ],
    highlights: [
        'Native to rocky, sun-baked hillsides of the Mediterranean.',
        'Flower spikes attract bees and pollinators all summer long.',
        'Dried buds hold their scent for months — a classic sachet and tea herb.',
    ],
    vitals: {
        hardinessZone: {
            value: '5-9',
            caption: 'Reliably perennial; mulch crowns in zone 5 winters.',
            zoneMin: 5,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6-8+ hours direct — flowering and fragrance both depend on it.',
        },
        watering: {
            score: 1,
            value: 'Drought-tolerant',
            caption: 'Water deeply every 1-2 weeks once established; skip during rain.',
        },
        difficulty: {
            score: 2,
            value: 'Easy, once sited well',
            caption: 'Thrives on neglect in the right soil — drainage is the only real requirement.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Linalool and linalyl acetate can upset pets in quantity; occasional sniffing or brushing is harmless.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '1-3 ft mound',
            detail: 'Forms a rounded woody-based shrub; flower spikes add another 6-12" above the foliage.',
            minFt: 1,
            maxFt: 3,
        },
        soil: {
            value: 'Sandy, alkaline, lean',
            detail: 'Gritty, gravelly soil with a neutral-to-alkaline pH; amend heavy clay with sand and grit before planting.',
        },
        semiHydro: {
            value: 'No',
            detail: 'A dryland Mediterranean shrub — constantly moist roots invite fungal collapse.',
            compatible: false,
        },
        fertilizer: {
            value: 'Rarely needed',
            detail: 'Rich soil produces lush, floppy growth with fewer blooms; skip feeding in all but the poorest soils.',
            npk: '5-10-5',
        },
        fertilizerFrequency: {
            value: 'Once in spring, if at all',
            detail: 'A single light feed as new growth starts is the most any bed needs.',
        },
        nativeHabitat: {
            value: 'Mediterranean basin',
            detail: 'Dry, rocky, sun-scorched hillsides of southern France and Iberia.',
        },
        humidity: {
            value: 'Low & breezy',
            detail: 'Dislikes humid stillness — good airflow prevents fungal foliage and root disease.',
            minPct: 10,
        },
        temperature: {
            value: '-10° – 90°F',
            detail: 'Reliably cold-hardy once established; the real threat is wet feet in winter, not cold air.',
            minF: -10,
            maxF: 90,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Blooms peak in early-to-mid summer; a light second flush can follow after deadheading.',
        },
        dailyRhythm: {
            heading: 'A sun-lover that wants to be left alone in poor soil.',
            body: 'Lavender does its best work when ignored: full sun, sharp drainage, and infrequent water. The seasonal job is a hard prune after bloom to keep the woody frame compact and productive for years.',
            highlights: [
                'Full sun all day is non-negotiable for tight growth and strong fragrance.',
                'Let soil dry out between waterings — root rot, not drought, is the real risk.',
                'Prune right after flowering to prevent legginess and bare woody centers.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil dryness before considering water, especially in containers.',
            },
            {
                interval: 'weekly',
                task: 'Snip spent flower spikes to encourage a second flush.',
            },
            {
                interval: 'as-needed',
                task: 'Deep water only once the top few inches are fully dry.',
            },
            {
                interval: 'seasonal',
                task: 'Hard-prune by a third right after flowering to keep the shrub compact.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6-8+ hrs direct',
                detail: 'The single biggest driver of compact growth, oil production, and bloom count.',
            },
            {
                label: 'Drainage',
                stat: 'Lean, gritty soil',
                detail: 'Sand or grit worked into the planting hole prevents the fungal rot that kills more lavender than cold ever does.',
            },
            {
                label: 'Pruning',
                stat: 'Hard cut post-bloom',
                detail: 'Annual shaping keeps the woody base from splitting open and going bare in the middle.',
            },
            {
                label: 'Harvest',
                stat: 'Cut at first color',
                detail: 'Harvesting spikes just as buds show color yields the strongest fragrance for drying.',
            },
        ],
        wateringRhythm: {
            heading: 'Deep, infrequent drinks on genuinely dry soil.',
            body: 'Once established, lavender wants long dry stretches between deep waterings. Soak thoroughly, then let the top several inches dry completely before watering again — roughly every 1-2 weeks in summer heat, far less in cooler or rainy stretches. Newly planted lavender needs more consistent moisture for its first season while roots establish.',
            tips: [
                'Skip supplemental water entirely during rainy spells — soggy roots are the top killer.',
                'Container lavender dries faster than in-ground plants; check pots more often.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Every 7-10 days',
                tip: 'Support new growth with steady moisture until the plant is established.',
            },
            {
                season: 'Summer',
                cadence: 'Every 10-14 days',
                tip: 'Let the soil dry fully between soaks; established plants tolerate real heat and drought.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Minimal to none',
                tip: 'Rely on rainfall; excess winter moisture is far riskier than cold air.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Deadhead spent spikes to tidy the plant and encourage reblooming.',
                    'Check the base of the plant for signs of dieback or fungal spotting.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Prune back by about a third immediately after the main summer bloom.',
                    'Never cut into bare old wood — always leave some green growth on each stem.',
                    'Harvest and hang-dry bundles of flower spikes for sachets or tea.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Sharp bypass shears',
                note: 'Clean cuts after bloom prevent the woody stems from splitting or fraying.',
            },
            {
                item: 'Coarse sand or grit',
                note: 'Worked into planting holes, it is the single best insurance against root rot.',
            },
            {
                item: 'Garden lime (in acidic soil)',
                note: 'Nudges soil pH toward the neutral-to-alkaline range lavender prefers.',
            },
            {
                item: 'Drying rack or hanging bundles',
                note: 'Preserves harvested spikes for cooking, sachets, or crafts.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Blackened, Dying Stems',
                description:
                    'Dieback at the base with darkened, mushy wood almost always traces back to waterlogged soil.',
                actions: [
                    'Stop watering and improve drainage immediately — add grit or raise the bed.',
                    'Prune out dead wood, cutting back to healthy green growth.',
                    'Relocate container plants to a faster-draining mix if rot recurs.',
                ],
            },
            {
                title: 'Leggy, Bare-Centered Growth',
                description:
                    'An open, woody center with foliage only at the stem tips signals a shrub that has gone too long without pruning.',
                actions: [
                    'Prune hard right after the next bloom cycle, but avoid cutting into completely bare wood.',
                    'Expect full recovery to take a season or two of consistent annual pruning.',
                ],
            },
            {
                title: 'Sparse Flowering',
                description:
                    'Healthy foliage but few flower spikes usually points to too much shade, too-rich soil, or old wood.',
                actions: [
                    'Confirm the plant gets at least 6 hours of direct sun.',
                    'Stop fertilizing — excess nitrogen favors leaves over blooms.',
                    'Renew older plants with a hard prune to stimulate fresh flowering wood.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spittlebugs',
                signs: 'Foamy white "spit" masses at stem joints in spring.',
                treatment:
                    'Hose off the foam and insects; damage is mostly cosmetic and rarely needs chemical control.',
            },
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small clustered insects on new growth and flower buds, often with sticky residue.',
                treatment:
                    'Hose off light infestations or treat with insecticidal soap every 5-7 days until clear.',
            },
            {
                name: 'Root Rot (Phytophthora)',
                signs: 'Wilting foliage despite moist soil, blackened roots and crown.',
                treatment:
                    'Improve drainage immediately; severely affected plants are best replaced in amended, faster-draining soil.',
            },
        ],
        stabilityChecklist: [
            'Never plant lavender in a low spot where water collects after rain.',
            'Prune every year right after bloom — skipped years lead to irreversible woody gaps.',
            'Resist the urge to fertilize; lean soil produces the best flowering and fragrance.',
            'Space plants generously for airflow, which prevents most fungal issues outright.',
        ],
    },
};
