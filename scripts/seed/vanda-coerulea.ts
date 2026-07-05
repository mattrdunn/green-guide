import type { Plant } from '../../lib/db/models/Plant';

export const vandaCoerulea: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'vanda',
    species: 'coerulea',
    commonNames: ['Blue Vanda'],
    description:
        'An advanced, high-light orchid grown completely bare-root — no potting mix at all. Thick silvery roots hang free in a slatted basket or open air, drying and rewetting daily, in exchange for some of the largest, most striking blooms of any orchid.',
    images: [],
    tags: ['orchid', 'epiphyte', 'bare-root', 'flowering', 'advanced'],
    highlights: [
        'Native to the exposed monsoon forests of the Himalayan foothills and Southeast Asia, clinging high in the canopy with roots fully exposed to air.',
        'Grown with no potting medium whatsoever — roots hang free in a basket or from a slab, a growing style unlike almost any other common houseplant.',
        'One of the few orchids with naturally blue-tinted flowers, a color rare enough in the genus that it drove historic Victorian plant-hunting expeditions.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12 outdoors; houseplant elsewhere',
            caption: 'A warm monsoon-forest epiphyte — grow indoors or in a greenhouse outside zone 10-12.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 5,
            value: 'Very bright, near-direct sun',
            caption: 'Wants the brightest spot available — a lightly filtered south-facing window or strong grow light.',
        },
        watering: {
            score: 5,
            value: 'Daily watering or misting',
            caption: 'Bare roots hold no reserve — expect to water or mist once, sometimes twice, every single day.',
        },
        difficulty: {
            score: 4,
            value: 'Advanced',
            caption: 'The daily watering commitment and high humidity needs make this a poor first orchid.',
            level: 'advanced',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around pets and kids.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '1-3 ft, plus trailing roots',
            detail: 'A monopodial stem grows straight upward from a single point, with thick aerial roots trailing a foot or more below the basket.',
            minFt: 1,
            maxFt: 3,
        },
        soil: {
            value: 'None — grown fully bare-root',
            detail: 'No bark, moss, or potting mix at all. Roots hang free in a slatted wooden basket or are mounted on a slab, relying entirely on ambient humidity and frequent watering rather than a moisture-holding medium.',
        },
        semiHydro: {
            value: 'Not applicable',
            detail: 'Already grown with zero substrate, which is a step beyond semi-hydroponics rather than a fit for it.',
            compatible: false,
        },
        fertilizer: {
            value: 'Weak liquid feed, applied to roots',
            detail: 'Since there is no medium to hold nutrients, mix a dilute balanced fertilizer directly into the daily watering or misting routine so roots absorb it on contact.',
            npk: '20-20-20',
        },
        fertilizerFrequency: {
            value: 'Weakly, with most daily waterings',
            detail: 'Feed at quarter-strength most days during active growth; use plain water alone every third or fourth watering to avoid salt buildup on exposed roots.',
        },
        nativeHabitat: {
            value: 'Himalayan foothills & Southeast Asia',
            detail: 'Grows high on tree branches in monsoon forests with intense wet-season rain and humidity, followed by a cooler, drier winter rest.',
        },
        humidity: {
            value: '70%+ ideal',
            detail: 'The highest humidity need of any common houseplant orchid — bare roots dry out fast without it. Greenhouse or bathroom growing suits it best.',
            minPct: 70,
        },
        temperature: {
            value: '65° – 90°F',
            detail: 'Tolerates real warmth well, mimicking its monsoon-forest origin, but dislikes drafts or temperatures dipping below 60°F.',
            minF: 65,
            maxF: 90,
        },
        growSeason: {
            value: 'Monsoon-timed: heavy growth in summer rains',
            detail: 'Growth and root production surge with summer heat and humidity, tapering into a cooler, drier winter rest that helps set flower spikes.',
        },
        dailyRhythm: {
            heading: 'A demanding, high-reward orchid built for daily attention.',
            body: 'With no medium to buffer moisture, Vanda asks for a real daily commitment — watering or misting every root, every day, in very bright light. In return it produces some of the largest and most vividly colored blooms of any orchid.',
            highlights: [
                'Roots turn bright green when wet and silvery-white when dry — they should cycle between the two within hours, not days.',
                'Never let roots stay bone-dry and shriveled for more than a day — that is a sign watering frequency needs to increase.',
                'A basket or slab, never a solid pot, is essential — the roots need constant air movement even while wet.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Water or mist every root thoroughly each morning (twice daily in low humidity or heat), letting them dry within a few hours rather than staying damp for days.',
            },
            {
                interval: 'weekly',
                task: 'Feed at quarter-strength with most waterings; use plain water alone once or twice a week.',
            },
            {
                interval: 'monthly',
                task: 'Check the basket or slab mount for stability as roots grow and thicken.',
            },
            {
                interval: 'seasonal',
                task: 'Ease back watering frequency slightly in winter to encourage a natural rest before the next bloom cycle.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Watering',
                stat: 'Daily, direct to roots',
                detail: 'No medium means no water reserve — bare roots need direct, frequent watering rather than a periodic soak.',
            },
            {
                label: 'Humidity',
                stat: '70%+ ideal',
                detail: 'High ambient humidity buys time between waterings and keeps roots from drying out too fast.',
            },
            {
                label: 'Light',
                stat: 'Very bright, near-direct',
                detail: 'The most light-hungry of the common orchid genera — insufficient light is the top reason for a Vanda that will not bloom.',
            },
            {
                label: 'Airflow',
                stat: 'Constant around roots',
                detail: 'A basket or slab mount plus a small fan keeps bare roots from staying wet long enough to rot.',
            },
        ],
        wateringRhythm: {
            heading: 'Wet every root daily, then let it dry within hours.',
            body: 'Drench or mist all the aerial roots thoroughly, ideally in the morning so they dry down by evening. Roots should flush bright green immediately after watering and fade back to silvery-white as they dry — that daily cycle, not a weekly schedule, is what this species is built around.',
            tips: [
                'In heated indoor air, count on watering twice a day rather than once.',
                'A humidity tray or nearby humidifier meaningfully extends how long roots stay hydrated between waterings.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Once or twice daily',
                tip: 'Peak growth and heat mean roots dry fastest — this is when the daily commitment matters most.',
            },
            {
                season: 'Autumn',
                cadence: 'Once daily',
                tip: 'Growth slows slightly with shorter days, but roots still need daily attention.',
            },
            {
                season: 'Winter / Rest',
                cadence: 'Every 1-2 days',
                tip: 'A slightly longer dry stretch and cooler temperatures help cue the next bloom spike.',
            },
        ],
        routines: [
            {
                interval: 'daily',
                steps: [
                    'Water or mist all exposed roots thoroughly.',
                    'Check that roots dried down by the following watering rather than staying damp.',
                ],
            },
            {
                interval: 'weekly',
                steps: [
                    'Feed at quarter-strength with most waterings; use plain water alone once or twice.',
                    'Rotate the basket for even light exposure on all sides of the stem.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Trim any fully dead, hollow roots back to healthy tissue.',
                    'Stake and support bloom spikes as they emerge from the upper stem.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Slatted wooden or wire basket',
                note: 'Standard bare-root housing that lets roots hang free with maximum airflow.',
            },
            {
                item: 'Humidifier or greenhouse cabinet',
                note: 'Bridges the gap between daily waterings so roots do not dry out too fast.',
            },
            {
                item: 'Fine mist sprayer',
                note: 'Delivers water and dilute fertilizer directly to exposed roots between full soakings.',
            },
            {
                item: 'Small circulating fan',
                note: 'Keeps wet roots drying evenly and helps prevent rot despite daily watering.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Shriveled, Silvery Roots That Won’t Green Up',
                description:
                    'Roots that stay shriveled even right after watering usually mean the daily routine has been missed too often.',
                actions: [
                    'Increase watering frequency to twice daily, especially in warm or dry indoor air.',
                    'Raise ambient humidity with a humidifier or by relocating to a naturally humid room.',
                ],
            },
            {
                title: 'Root Tips Turning Black or Mushy',
                description:
                    'Rot from roots stayed wet too long without enough airflow, often from low light slowing water uptake.',
                actions: [
                    'Trim affected root tips back to firm, healthy tissue with sterile scissors.',
                    'Increase air movement around the basket and confirm light levels are high enough to support normal water use.',
                ],
            },
            {
                title: 'No Blooms Despite Healthy Growth',
                description:
                    'Lush green roots and stem growth with no flower spikes almost always points to insufficient light.',
                actions: [
                    'Move to the brightest available spot, ideally with some gentle direct morning sun.',
                    'Consider a dedicated high-output grow light if no bright enough window is available.',
                ],
            },
        ],
        pests: [
            {
                name: 'Scale',
                signs: 'Small brown, dome-shaped bumps along the stem and leaf bases.',
                treatment:
                    'Scrape off manually and follow with horticultural oil every 1-2 weeks until clear.',
            },
            {
                name: 'Mealybugs',
                signs: 'Cottony clusters hidden where leaves meet the stem.',
                treatment:
                    'Dab with isopropyl alcohol, then treat with insecticidal soap weekly until no new clusters appear.',
            },
            {
                name: 'Spider Mites',
                signs: 'Fine stippling on leaves, more common in dry indoor air alongside the bright light this species needs.',
                treatment:
                    'Raise humidity and rinse foliage regularly; treat persistent infestations with insecticidal soap.',
            },
        ],
        stabilityChecklist: [
            'Commit to daily root watering — this is not a species that tolerates a weekly schedule.',
            'Keep humidity above 70% to buy time between waterings.',
            'Give it the brightest light of any orchid in the collection.',
            'Always grow in a basket or mounted, never in a solid pot with medium.',
        ],
    },
};
