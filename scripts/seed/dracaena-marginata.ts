import type { Plant } from '../../lib/db/models/Plant';

export const dracaenaMarginata: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'dracaena',
    species: 'marginata',
    commonNames: [
        'Dragon Tree',
        'Madagascar Dragon Tree',
        'Red-Edged Dracaena',
    ],
    description:
        'Slender rosettes of narrow, red-edged leaves top thin, twisting canes, giving Dracaena marginata a sculptural, almost bonsai-like silhouette and some of the best drought tolerance of any common houseplant.',
    images: [],
    tags: [
        'drought-tolerant',
        'low-light',
        'beginner-friendly',
        'toxic',
        'statement-plant',
    ],
    highlights: [
        'Native to Madagascar, where it grows as a slow, woody tree in dry, rocky terrain.',
        'Young canes are commonly curved or braided into decorative shapes while still flexible.',
        'One of the most drought-tolerant dracaenas — thin, wiry canes store enough moisture to shrug off missed waterings.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Frost-tender; grown as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 3,
            value: 'Bright, indirect',
            caption:
                'Tolerates lower light but keeps its red leaf margins most vivid with strong, filtered sun.',
        },
        watering: {
            score: 1,
            value: 'Sparse — let it dry out',
            caption:
                'Thin canes store water well; err toward underwatering rather than over.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption:
                'Slow-growing and forgiving of missed waterings, with water quality as its main sensitivity.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Saponins can cause vomiting or drooling in cats and dogs if chewed.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '4-10 ft indoors',
            detail: 'Grows slowly on thin, woody canes that lean and twist over time, often trained while young.',
            minFt: 4,
            maxFt: 10,
        },
        soil: {
            value: 'Well-draining, standard mix',
            detail: 'A regular potting mix cut with perlite keeps thin canes from sitting in excess moisture.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'Adapts readily to LECA once established, though transition slowly and watch for rot at first.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, diluted',
            detail: 'A half-strength balanced feed suits its slow, steady growth rate.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly through spring and summer only; skip entirely in fall and winter.',
        },
        nativeHabitat: {
            value: 'Madagascar',
            detail: 'Dry, rocky forests and scrubland, where long dry spells between rains are the norm.',
        },
        humidity: {
            value: 'Any (30-50%)',
            detail: 'Unbothered by average indoor humidity; no misting or humidifier required.',
            minPct: 30,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable indoors year-round; keep away from cold drafts and sudden chills.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New rosettes and cane growth appear during the warm months; growth all but stops in winter.',
        },
        dailyRhythm: {
            heading: 'Built for neglect, not attention.',
            body: 'Dragon tree thrives on a light touch — bright filtered light, infrequent water, and long stretches left alone. Most problems come from watering too often or using tap water high in fluoride, not from underattention.',
            highlights: [
                'When in doubt, wait — thin canes recover from drought far better than from rot.',
                'Brown, crispy leaf tips usually point to fluoride or chlorine sensitivity, not thirst.',
                'Rotate occasionally for even, upright cane growth toward the light.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check that the soil is dry before even considering water.',
            },
            {
                interval: 'weekly',
                task: 'Scan leaf rosettes and cane joints for early pest activity.',
            },
            {
                interval: 'as-needed',
                task: 'Water thoroughly only once the mix is fully dry, then let it drain completely.',
            },
            {
                interval: 'monthly',
                task: 'Wipe down leaves to keep dust off and colors vivid.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 2-3 weeks',
                detail: 'Water thoroughly only once the mix has dried out fully, then let it drain completely.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Tolerates dimmer spots but keeps its signature red margins boldest in strong, filtered light.',
            },
            {
                label: 'Water quality',
                stat: 'Filtered or distilled',
                detail: 'Fluoride-sensitive — tap water is the leading cause of brown, crispy leaf tips.',
            },
            {
                label: 'Nutrition',
                stat: 'Minimal',
                detail: 'A couple of half-strength feedings across spring and summer is plenty for a full year.',
            },
        ],
        wateringRhythm: {
            heading: 'When in doubt, let it go longer.',
            body: 'Dragon tree is far more likely to suffer from overwatering than drought. Let the entire pot dry out between waterings, then soak thoroughly and let it drain fully — never let the pot sit in standing water.',
            tips: [
                'Lift the pot — a fully dry dragon tree pot is noticeably lighter than a wet one.',
                'Use filtered, distilled, or rainwater to avoid fluoride-related tip burn.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 10-14 days',
                tip: 'Water once the pot has dried out fully; brighter placements dry faster.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 2-3 weeks',
                tip: 'Taper off as growth slows with shorter, cooler days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 3-5 weeks',
                tip: 'Water sparingly; the plant is essentially dormant.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Rotate the pot a quarter turn for even, upright growth.',
                    'Check leaf rosettes and cane joints for early pest signs.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe down leaves to remove dust.',
                    'Remove any fully yellowed or dropped leaves at the base of the rosette.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Repot every 2-3 years, or once roots crowd the pot.',
                    'Cut back a leggy cane in spring to encourage bushier branching below the cut.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Well-draining potting mix',
                note: 'Perlite or bark keeps thin canes from sitting in excess moisture.',
            },
            {
                item: 'Filtered or distilled water',
                note: 'Avoids the fluoride sensitivity behind most leaf tip browning.',
            },
            {
                item: 'Moisture meter or wooden chopstick',
                note: 'Confirms the deep soil is dry before every watering.',
            },
            {
                item: 'Clean, sharp pruning shears',
                note: 'For shaping canes or removing spent foliage.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Brown, Crispy Leaf Tips',
                tag: 'Water Quality',
                description:
                    'Fluoride and chlorine buildup from tap water shows up as browning along the tips and margins of otherwise healthy leaves.',
                actions: [
                    'Switch to filtered, distilled, or rainwater.',
                    'Trim damaged tips with clean scissors, following the natural leaf taper.',
                ],
            },
            {
                title: 'Soft, Collapsing Cane',
                tag: 'Root/Cane Rot',
                description:
                    'A cane that feels spongy or discolored near the soil line signals rot from staying too wet.',
                actions: [
                    'Unpot and inspect roots, trimming away any brown, mushy sections.',
                    'Cut the cane back to firm, healthy tissue and repot into dry, fresh mix.',
                    'Withhold water for 1-2 weeks after repotting.',
                ],
            },
            {
                title: 'Leaves Dropping Lower on the Cane',
                tag: 'Natural Aging',
                description:
                    'Older leaves near the base of a rosette yellowing and dropping is normal as the cane grows taller, not necessarily a problem.',
                actions: [
                    'Confirm the rest of the plant looks healthy before treating it as an issue.',
                    'Gently remove fully spent leaves to tidy the cane.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and faint webbing on leaves, especially in warm, dry rooms.',
                treatment:
                    'Rinse foliage and apply insecticidal soap weekly until stippling stops.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White, cottony clusters tucked where leaves meet the cane.',
                treatment:
                    'Dab clusters with rubbing alcohol, then follow up with horticultural oil every 7-10 days.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small, brown, immobile bumps along canes and leaf midribs.',
                treatment:
                    'Scrape off light infestations by hand and treat with horticultural oil to catch remaining crawlers.',
            },
        ],
        stabilityChecklist: [
            'Let the entire pot dry out before every watering — this plant prefers drought to excess.',
            'Use filtered or distilled water to avoid fluoride-related tip burn.',
            'Keep in bright, indirect light to maintain vivid red leaf margins.',
            'Repot infrequently; dragon tree grows best when slightly root-bound.',
        ],
    },
};
