import type { Plant } from '../../lib/db/models/Plant';

export const dracaenaSanderiana: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'dracaena',
    species: 'sanderiana',
    commonNames: ['Lucky Bamboo', "Sander's Dracaena", 'Ribbon Dracaena'],
    description:
        'Jointed, cane-like stems that mimic true bamboo (though unrelated) make Dracaena sanderiana — better known as lucky bamboo — a feng shui staple, commonly grown curled or braided in nothing more than a few inches of water and pebbles.',
    images: [
        { url: 'plants/dracaena/sanderiana/img-1.jpg', alt: '' },
        { url: 'plants/dracaena/sanderiana/img-2.jpg', alt: '' },
        { url: 'plants/dracaena/sanderiana/img-3.jpg', alt: '' },
        { url: 'plants/dracaena/sanderiana/img-4.jpg', alt: '' },
    ],
    tags: ['low-light', 'beginner-friendly', 'water-grown', 'toxic'],
    highlights: [
        'Not a true bamboo — a member of the asparagus family (Asparagaceae) native to Central Africa.',
        'Grows readily in plain water with a layer of pebbles for support, no soil required.',
        'Decorative curls and spirals are trained by rotating the stem toward a single light source over weeks, not genetically bred.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12',
            caption: 'Grown year-round as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Low to bright, indirect',
            caption:
                'Tolerates dim offices and interior rooms well; avoid direct sun, which scorches the thin leaves.',
        },
        watering: {
            score: 4,
            value: 'Water culture — keep topped up',
            caption:
                'Grown with roots submerged; the water level should stay constant, whether in water or soil.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption:
                'Extremely forgiving as long as its water stays clean and topped up.',
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
            value: '1-3 ft indoors',
            detail: 'Stays compact and tabletop-sized in water culture; grows taller and more shrub-like if eventually potted in soil.',
            minFt: 1,
            maxFt: 3,
        },
        soil: {
            value: 'Water or well-draining mix',
            detail: 'Thrives in plain water with pebbles for support, or in a standard, well-draining potting mix if transitioned to soil.',
        },
        semiHydro: {
            value: 'Yes — its natural state',
            detail: 'Lucky bamboo is essentially always grown hydroponically; LECA or plain water both work well.',
            compatible: true,
        },
        fertilizer: {
            value: 'Very light, occasional',
            detail: 'A few drops of diluted liquid fertilizer every couple of months is plenty; over-feeding in water culture burns roots quickly.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Every 2 months in season',
            detail: 'Feed sparingly through spring and summer; skip fertilizer entirely in fall and winter.',
        },
        nativeHabitat: {
            value: 'Central Africa',
            detail: 'Shaded, humid riverbanks and forest understory in Cameroon and neighboring regions.',
        },
        humidity: {
            value: 'Any (30%+)',
            detail: 'Unfussy about ambient humidity since its roots stay constantly moist in water culture.',
            minPct: 30,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable across typical indoor ranges; avoid cold drafts and water below 60°F.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New leaves and occasional side shoots appear during the warm months; growth slows noticeably in winter.',
        },
        dailyRhythm: {
            heading: 'Simple water culture, minimal fuss.',
            body: 'Lucky bamboo asks for clean, topped-up water, filtered light, and an occasional rinse of its container. Its biggest risks come from tap water chemicals and stagnant water rather than any lighting or temperature demands.',
            highlights: [
                'Refresh the water weekly to keep it from stagnating and growing algae.',
                'Use filtered or distilled water — this species is notably sensitive to chlorine and fluoride.',
                'Yellowing stalks are almost always a water quality or light issue, not disease.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the water level and top it up to cover the roots.',
            },
            {
                interval: 'weekly',
                task: 'Look for cloudy water, algae, or slimy roots.',
            },
            {
                interval: 'weekly',
                task: 'Fully replace the water and rinse the container and pebbles.',
            },
            {
                interval: 'monthly',
                task: 'Wipe leaves clean of dust.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Water quality',
                stat: 'Filtered or distilled',
                detail: 'Chlorine and fluoride sensitivity make water source the single biggest factor in long-term health.',
            },
            {
                label: 'Water changes',
                stat: 'Weekly',
                detail: 'Full water replacement prevents stagnation, algae, and root rot in water culture.',
            },
            {
                label: 'Light',
                stat: 'Low to bright, indirect',
                detail: 'Handles dim interiors well; never place in direct sun, which scorches the thin leaves.',
            },
            {
                label: 'Nutrition',
                stat: 'Very light',
                detail: 'Only a few drops of diluted fertilizer every couple of months — overfeeding in water is easy to overdo.',
            },
        ],
        wateringRhythm: {
            heading: 'Fresh water is the whole game.',
            body: 'Keep roots submerged at all times and fully replace the water weekly rather than just topping it up, which lets minerals and algae accumulate. If grown in soil instead, keep it evenly and consistently moist rather than letting it dry out.',
            tips: [
                'Filtered, distilled, or rainwater prevents the chlorine and fluoride damage this species is known for.',
                'Cloudy or slimy water calls for an immediate full change and a rinse of the roots and container.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Weekly water change',
                tip: 'Warmer temperatures mean water evaporates and turns over faster — check levels more often.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Growth slows slightly; water quality still matters as much as frequency.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Keep water fresh even though growth has mostly paused.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Replace the water fully rather than just topping it off.',
                    'Rinse roots and container to clear any algae or residue.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe leaves to keep them dust-free and glossy.',
                    'Feed very lightly with diluted fertilizer if in the growing season.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Trim any yellowed stalks or leaves at their base.',
                    'Re-curl or stake new growth if maintaining a trained shape.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Clear glass vase or container',
                note: 'Lets you monitor water clarity and root health at a glance.',
            },
            {
                item: 'Decorative pebbles or stones',
                note: 'Anchor the stems upright in water culture.',
            },
            {
                item: 'Filtered or distilled water',
                note: 'Prevents the chlorine and fluoride sensitivity this species is prone to.',
            },
            {
                item: 'Sharp, clean scissors',
                note: 'For trimming roots, yellowed stalks, or propagating new shoots.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Yellowing Stalks or Leaves',
                tag: 'Water Quality',
                description:
                    'Yellowing is the most common complaint with lucky bamboo and almost always traces back to tap water chemicals or stagnant, unchanged water.',
                actions: [
                    'Switch to filtered or distilled water immediately.',
                    'Do a full water change and rinse the container and pebbles.',
                    'Trim any fully yellowed stalks at the base — they will not green back up.',
                ],
            },
            {
                title: 'Slimy Roots or Cloudy Water',
                tag: 'Stagnation',
                description:
                    'Roots that feel slippery and water that looks cloudy or smells off point to bacterial buildup from infrequent water changes.',
                actions: [
                    'Rinse roots gently under running water to remove slime.',
                    'Replace the water fully and increase how often it is changed going forward.',
                ],
            },
            {
                title: 'Sunburned or Bleached Patches',
                tag: 'Too Much Direct Sun',
                description:
                    'Pale, bleached, or scorched patches on the leaves point to direct sun exposure.',
                actions: [
                    'Move to a spot with bright but indirect or filtered light.',
                    'Trim visibly scorched leaves; new growth will not show the same damage once relocated.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and faint webbing on leaves, mostly in dry, warm rooms.',
                treatment:
                    'Rinse foliage thoroughly and wipe down leaves with insecticidal soap weekly until clear.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White, cottony clusters where leaves meet the stem.',
                treatment:
                    'Dab clusters with rubbing alcohol on a cotton swab, then monitor weekly for recurrence.',
            },
            {
                name: 'Fungus Gnats',
                pestSlug: 'fungus-gnats',
                signs: 'Small flies hovering near the container, mainly on plants transitioned to soil.',
                treatment:
                    'Let soil dry between waterings and top-dress with sand if grown in a pot rather than water.',
            },
        ],
        stabilityChecklist: [
            'Use filtered or distilled water, never straight tap water.',
            'Fully replace the water weekly rather than just topping it up.',
            'Keep in bright, indirect light — never direct sun.',
            'Trim yellowed stalks promptly; they will not recover their color.',
        ],
    },
};
