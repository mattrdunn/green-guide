import type { Plant } from '../../lib/db/models/Plant';

export const begoniaRex: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'begonia',
    species: 'rex',
    commonNames: ['Rex Begonia', 'King Begonia', 'Painted-Leaf Begonia'],
    description:
        'Grown entirely for its foliage, rex begonia produces swirling, metallic-sheened leaves in patterns of silver, maroon, and green that no two plants quite repeat — the flowers are so minor most growers pinch them off to keep energy in the leaves.',
    images: [
        {
            url: 'plants/begonia/rex/img-1.jpg',
            alt: 'Close-up of rex begonia leaves with metallic silver patterning, dark green centers, and red-fringed edges.',
        },
        {
            url: 'plants/begonia/rex/img-2.jpg',
            alt: 'A rex begonia clump with spiraled, silver-spotted dark green leaves and small pink flowers rising above the foliage.',
        },
        {
            url: 'plants/begonia/rex/img-3.jpg',
            alt: 'Star-shaped rex begonia leaves speckled with silver spots against deep green foliage.',
        },
        {
            url: 'plants/begonia/rex/img-4.jpg',
            alt: "Rex begonia 'Savannah Bay' with bold silver-and-green star-shaped leaves and a plant tag among the foliage.",
        },
        {
            url: 'plants/begonia/rex/img-5.jpg',
            alt: "Rex begonia 'Spitfire' with maroon-and-silver swirled leaves and small white flowers with yellow centers.",
        },
    ],
    tags: [
        'foliage',
        'rhizomatous',
        'toxic',
        'collector-favorite',
        'humidity-loving',
    ],
    highlights: [
        'Native to the humid forest floor of Assam in northeastern India, later hybridized extensively for leaf pattern and color.',
        'Grows from a creeping rhizome along the soil surface rather than a central stem, unlike most other begonia groups.',
        'Often enters a semi-dormant rest in winter, dropping some leaves and slowing new growth — a normal cycle, not decline.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption:
                'Frost-tender; grown strictly as a houseplant outside the tropics.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 3,
            value: 'Medium to bright, indirect',
            caption:
                'Direct sun scorches the delicate patterned leaves; too little light dulls their color.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist, never soggy',
            caption:
                'The surface rhizome rots quickly in wet soil, so consistency matters more than volume.',
        },
        difficulty: {
            score: 4,
            value: 'Advanced',
            caption:
                'Sensitive to low humidity, cold drafts, and inconsistent watering; a rewarding but fussy plant.',
            level: 'advanced',
        },
        toxicity: {
            value: 'Toxic',
            caption:
                'Calcium oxalates concentrated in the rhizome make it particularly risky for cats and dogs that dig or chew.',
            level: 'toxic',
        },
    },
    overview: {
        height: {
            value: '12 in tall, wider spread',
            detail: 'Stays low and mounded as the rhizome creeps outward across the pot surface.',
            minFt: 1,
            maxFt: 1,
        },
        soil: {
            value: 'Chunky, well-draining aroid-style mix',
            detail: 'Potting mix cut with perlite and orchid bark keeps the surface rhizome from sitting in moisture.',
        },
        semiHydro: {
            value: 'Not recommended',
            detail: 'The rhizome is highly prone to rot in constant water; soil culture gives far more margin for error.',
            compatible: false,
        },
        fertilizer: {
            value: 'Balanced liquid feed, diluted',
            detail: 'A gentle, half-strength balanced fertilizer supports leaf growth without pushing weak new leaves.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly in season',
            detail: 'Feed monthly spring through early fall; stop entirely during the winter rest.',
        },
        nativeHabitat: {
            value: 'Assam, northeastern India',
            detail: 'Grows on humid, shaded forest floors and mossy rock faces in the eastern Himalayan foothills.',
        },
        humidity: {
            value: '50%+ preferred',
            detail: 'Crisp leaf edges and steady growth depend on humidity well above typical room levels.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Comfortable indoors; cold drafts below 60°F stress the leaves and slow growth.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Puts out the most new leaves in warm months, then rests through fall and winter.',
        },
        dailyRhythm: {
            heading: 'A foliage plant that trades ease for spectacle.',
            body: 'Rex begonia asks for more attention than most houseplants: steady humidity, gentle watering, and protection from drafts. In exchange, its leaf patterns are unmatched — but skipping the basics shows up quickly as curled or browning edges.',
            highlights: [
                'Check soil moisture every few days; water only the top layer if unsure.',
                'Keep away from cold drafts, heating vents, and direct sun.',
                'Expect fewer new leaves and possible leaf drop during the winter rest.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the top inch of soil before considering a drink.',
            },
            {
                interval: 'weekly',
                task: 'Mist surroundings or run a humidifier to support leaf patterning.',
            },
            {
                interval: 'as-needed',
                task: 'Water lightly once the surface is dry, avoiding the rhizome itself.',
            },
            {
                interval: 'seasonal',
                task: 'Reduce watering and feeding through the winter semi-dormant period.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Hydration',
                stat: 'Every 7-10 days',
                detail: 'Water lightly and consistently — the surface rhizome has little tolerance for standing moisture.',
            },
            {
                label: 'Light',
                stat: 'Medium, indirect',
                detail: 'Bright enough to keep patterning vivid, gentle enough to avoid scorching.',
            },
            {
                label: 'Humidity',
                stat: '50%+',
                detail: 'The single biggest factor separating a thriving rex begonia from a struggling one.',
            },
            {
                label: 'Pruning',
                stat: 'Remove spent leaves',
                detail: 'Trim yellowing or damaged leaves at the base to keep the rhizome healthy.',
            },
        ],
        wateringRhythm: {
            heading: 'Little and often, never soaked.',
            body: 'Water in smaller amounts more frequently rather than a deep soak on a long interval — the goal is consistent moisture around the rhizome without ever leaving it wet for long. Always water around the rhizome rather than directly on top of it.',
            tips: [
                'Curling, crisping leaf edges usually mean humidity is too low, not that the plant needs more water.',
                'A rhizome that turns dark and soft is rotting — cut back watering immediately and improve drainage.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 6-9 days',
                tip: 'Water as soon as the top inch of mix dries; this is the active growth window.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 9-12 days',
                tip: 'Begin easing off as the plant enters its semi-dormant rest.',
            },
            {
                season: 'Winter',
                cadence: 'Every 2-3 weeks',
                tip: 'Water sparingly and expect little to no new growth until spring.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and mist the surrounding air if it feels dry.',
                    'Inspect leaf undersides and the rhizome for early pest or rot signs.',
                    'Rotate the pot for even light exposure and symmetrical growth.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Remove any yellowing or damaged leaves at the base.',
                    'Feed with a diluted balanced fertilizer during spring and summer only.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Chunky, well-draining mix',
                note: 'Extra perlite and bark keep the surface rhizome from staying wet.',
            },
            {
                item: 'Small humidifier or pebble tray',
                note: 'Raises local humidity without wetting the foliage directly.',
            },
            {
                item: 'Sharp micro-snips',
                note: 'Clean removal of spent leaves helps prevent rot from spreading along the rhizome.',
            },
            {
                item: 'Watering can with a narrow spout',
                note: 'Directs water around the rhizome instead of over it.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Curling, Crisping Leaf Edges',
                tag: 'Low Humidity',
                description:
                    'Brown, papery edges that curl inward are the classic sign that ambient humidity has dropped too low.',
                actions: [
                    'Add a humidifier or pebble tray near the plant.',
                    'Move away from heating vents, drafty windows, and air conditioning.',
                ],
            },
            {
                title: 'Soft, Dark Rhizome',
                tag: 'Rot',
                description:
                    'A rhizome that turns dark, mushy, or foul-smelling means water has been sitting against it too long.',
                actions: [
                    'Trim away any soft, discolored sections with a clean blade.',
                    'Repot into fresh, fast-draining mix and water more sparingly going forward.',
                ],
            },
            {
                title: 'Faded, Washed-Out Leaf Pattern',
                tag: 'Low Light',
                description:
                    'Patterns and colors that dull over time usually mean the plant needs more, though still indirect, light.',
                actions: [
                    'Move to a brighter spot out of direct sun.',
                    'Wipe dust from leaves so they can use available light more effectively.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and faint webbing on leaf undersides, especially in dry air.',
                treatment:
                    'Raise humidity, shower the foliage, then apply insecticidal soap weekly until clear.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'White, cottony clusters along the rhizome and in leaf joints.',
                treatment:
                    'Swab visible clusters with rubbing alcohol, then follow up with horticultural oil every 7-10 days.',
            },
            {
                name: 'Thrips',
                pestSlug: 'thrips',
                signs: 'Silvery streaks and tiny black flecks of frass on leaf surfaces.',
                treatment:
                    'Isolate the plant and treat with insecticidal soap or neem oil weekly until signs stop.',
            },
        ],
        stabilityChecklist: [
            'Keep humidity above 50% — this matters more for rex begonia than almost any other factor.',
            'Water lightly and consistently, always around the rhizome rather than over it.',
            'Use a chunky, fast-draining mix to protect the surface rhizome from rot.',
            'Expect a slower, semi-dormant winter rest and reduce watering and feeding accordingly.',
        ],
    },
};
