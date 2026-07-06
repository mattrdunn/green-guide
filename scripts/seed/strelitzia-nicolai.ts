import type { Plant } from '../../lib/db/models/Plant';

export const strelitziaNicolai: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'strelitzia',
    species: 'nicolai',
    commonNames: [
        'Bird of Paradise',
        'White Bird of Paradise',
        'Giant White Bird of Paradise',
    ],
    description:
        'Broad, banana-like paddle leaves fan out from tall upright stems, giving White Bird of Paradise a bold, architectural presence — a fast-growing statement plant that trades easy indoor blooming for sheer jungle-scale drama.',
    images: [],
    tags: [
        'statement-plant',
        'tropical',
        'mildly-toxic',
        'large-plant',
        'beginner-friendly',
    ],
    highlights: [
        'Native to the coastal forests of South Africa, where it can reach 20+ feet in the ground.',
        'Grown for its dramatic paddle leaves — indoor specimens rarely flower without near-greenhouse light.',
        'Splits along its leaves naturally in wind or with age, which is cosmetic rather than a sign of distress.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-11',
            caption: 'Houseplant everywhere colder than USDA zone 10.',
            zoneMin: 10,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Bright, direct-to-indirect',
            caption:
                'The brighter the spot, the better — thrives in a sunny south- or west-facing window.',
        },
        watering: {
            score: 3,
            value: 'Evenly moist',
            caption:
                'Water when the top inch or two of soil dries; dislikes both soggy and bone-dry extremes.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption:
                'Tolerant of minor neglect, though it needs a lot of light and eventually a lot of room to look its best.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Can cause vomiting or diarrhea if chewed by cats or dogs — keep out of reach of curious pets.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '6-10 ft indoors',
            detail: 'Grows quickly given enough light and room; container culture and ceiling height are the real limiting factors indoors.',
            minFt: 5,
            maxFt: 10,
        },
        soil: {
            value: 'Rich, well-draining mix',
            detail: 'A peat- or coco-based potting mix amended with perlite; wants moisture retention without staying waterlogged.',
        },
        semiHydro: {
            value: 'Yes, with care',
            detail: 'Adapts to LECA or pon once established, though its size makes a full transition a significant undertaking.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, nitrogen-forward',
            detail: 'A balanced liquid feed supports the large leaves; extra nitrogen encourages lush foliar growth.',
            npk: '3-1-2',
        },
        fertilizerFrequency: {
            value: 'Monthly, spring through summer',
            detail: 'Pause feeding in winter when growth slows with shorter days.',
        },
        nativeHabitat: {
            value: 'Coastal South Africa',
            detail: 'Subtropical coastal forests and forest margins with warm temperatures and steady rainfall.',
        },
        humidity: {
            value: '50%+ ideal',
            detail: 'Tolerates average indoor humidity but leaf edges brown in very dry air.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 85°F',
            detail: 'Sensitive to cold drafts and temperatures below 50°F — keep away from winter windowsills and exterior doors.',
            minF: 65,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Pushes new paddle leaves fastest with strong light, warmth, and consistent moisture.',
        },
        dailyRhythm: {
            heading:
                'A sun-hungry statement plant that rewards space and light.',
            body: 'White Bird of Paradise wants as much bright light as an indoor spot can offer and evenly moist — never soggy — soil. The main ongoing task is rotating for even growth and giving it room to unfurl its large leaves without obstruction.',
            highlights: [
                'The brightest window in the room is rarely too bright for this plant.',
                'New leaves unfurl tightly rolled and can take days to fully open — this is normal.',
                'Wipe down leaves periodically so dust does not block light uptake on the broad surfaces.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture and water thoroughly if the top inch or two is dry.',
            },
            {
                interval: 'weekly',
                task: 'Rotate the pot a quarter turn for even, upright growth toward the light.',
            },
            {
                interval: 'monthly',
                task: 'Wipe down leaves to clear dust and support photosynthesis.',
            },
            {
                interval: 'monthly',
                task: 'Feed with a balanced fertilizer during active growth.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Bright, direct-to-indirect',
                detail: 'The single biggest driver of growth rate and leaf size for this species.',
            },
            {
                label: 'Moisture',
                stat: 'Evenly moist soil',
                detail: 'Consistency matters more than volume — avoid letting it sit fully dry or waterlogged.',
            },
            {
                label: 'Space',
                stat: 'Room to unfurl',
                detail: 'Large paddle leaves need clearance to expand fully without tearing on furniture or walls.',
            },
            {
                label: 'Feeding',
                stat: 'Monthly in season',
                detail: 'A steady nitrogen-forward feed keeps new leaves coming in large and deeply colored.',
            },
        ],
        wateringRhythm: {
            heading: 'Water deeply, then let the topsoil dry before repeating.',
            body: 'Water thoroughly once the top inch or two of soil has dried, allowing excess to drain away completely. This plant drinks steadily during active growth but is forgiving of an occasional missed watering, unlike more sensitive tropicals.',
            tips: [
                'Drooping, curling leaves usually mean underwatering — a deep soak typically perks it back up within a day.',
                'Yellowing lower leaves paired with wet soil points to overwatering rather than a nutrient issue.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 5-7 days',
                tip: 'Active growth and bright light mean higher water demand — check more often in heat.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Ease back as growth slows with shorter, cooler days.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Reduce watering and keep away from cold drafts and heating vents.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check soil moisture and water deeply if the top inch or two is dry.',
                    'Rotate the pot slightly for even light exposure across all stems.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Wipe down leaves with a damp cloth to remove dust.',
                    'Feed with a balanced, nitrogen-forward fertilizer during active growth.',
                    'Trim any fully browned or split leaf sections at the base if desired.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Large, sturdy pot with drainage',
                note: 'The plant grows quickly and top-heavy stems need a stable, well-anchored base.',
            },
            {
                item: 'Moisture meter',
                note: 'Helps hit the evenly-moist target without guessing on a plant with a lot of soil volume.',
            },
            {
                item: 'Balanced liquid fertilizer',
                note: 'Supports the rapid, large-leaved growth this species is grown for.',
            },
            {
                item: 'Soft cloth or duster',
                note: 'Keeps broad leaf surfaces clear of dust for maximum light uptake.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Split or Torn Leaves',
                description:
                    'Natural splitting along the leaf veins from wind or age is cosmetic, not a sign of disease.',
                actions: [
                    'No treatment needed — splitting is part of the plant’s natural form.',
                    'Move away from strong direct drafts if splitting seems excessive for the plant’s age.',
                ],
            },
            {
                title: 'Brown, Crispy Leaf Edges',
                description:
                    'Usually low humidity, underwatering, or mineral buildup from tap water.',
                actions: [
                    'Water more consistently and check that the pot drains fully.',
                    'Raise ambient humidity with a humidifier, especially in dry winter air.',
                    'Flush the pot occasionally to clear mineral buildup from fertilizer or tap water.',
                ],
            },
            {
                title: 'Yellowing Lower Leaves',
                description:
                    'Older leaves yellowing one at a time is normal turnover; several at once usually points to overwatering.',
                actions: [
                    'Confirm the pot drains fully and is never sitting in standing water.',
                    'Let the soil dry further between waterings before assuming a nutrient problem.',
                ],
            },
        ],
        pests: [
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling on leaves and faint webbing near leaf bases, worse in dry indoor air.',
                treatment:
                    'Raise humidity, rinse leaves regularly, and treat with insecticidal soap or neem oil weekly until clear.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small brown, dome-shaped bumps along stems and leaf midribs.',
                treatment:
                    'Scrape off light infestations and follow with horticultural oil applications every 1-2 weeks.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white clusters at leaf bases and along stems.',
                treatment:
                    'Swab with isopropyl alcohol, then treat with neem oil until no new clusters appear.',
            },
        ],
        stabilityChecklist: [
            'Give it the brightest spot available — light is the main limit on growth rate and leaf size.',
            'Water deeply, then let the topsoil dry before the next watering.',
            'Plan for the plant’s eventual footprint — this species grows large quickly.',
            'Wipe leaves periodically and watch for spider mites in dry indoor air.',
        ],
    },
};
