import type { Plant } from '../../lib/db/models/Plant';

export const sarraceniaFlava: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'sarracenia',
    species: 'flava',
    commonNames: ['Yellow Pitcher Plant', 'Trumpet Pitcher Plant'],
    description:
        "The tallest and most classically 'trumpet-shaped' of the North American pitcher plants, growing narrow upright pitchers topped with a hood-like lid that keeps rain from diluting the digestive fluid pooled inside. Where the low, squat S. purpurea relies on rainwater and drowning, S. flava lures flying insects with nectar and scent to a slick, downward-facing trap — a taller, more dramatic look, but one that needs a milder winter than its cold-hardiest relative.",
    images: [],
    tags: [
        'carnivorous',
        'pitcher-plant',
        'dormancy-required',
        'non-toxic',
        'full-sun',
        'bog-plant',
    ],
    highlights: [
        "Forms tall, narrow trumpet pitchers up to 3 ft, each capped with an arching hood (operculum) that shields the trap from rain and diluted digestive fluid.",
        'Lures prey with nectar glands and scent along the pitcher rim and hood rather than relying on rainwater to passively drown insects.',
        'Coppery red veining develops on the hood and throat in strong sun — the deepest color of any commonly grown Sarracenia.',
    ],
    vitals: {
        hardinessZone: {
            value: '6-9 outdoors year-round',
            caption:
                'Native to the southeastern US coastal plain from Virginia to Florida — hardy outdoors through zone 6-9, but needing more winter protection than the far hardier S. purpurea in colder zones.',
            zoneMin: 6,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun, 6+ hours direct',
            caption:
                'Needs as much direct sun as possible — the coppery red veining on the hood and throat only develops under strong light, and shaded plants stay green and floppy.',
        },
        watering: {
            score: 5,
            value: 'Constantly moist, tray or bog method',
            caption:
                'Sits in a shallow tray of distilled or rainwater, or planted directly in a bog garden, year-round.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Straightforward once given full sun and mineral-free water, but the tall, hollow pitchers are more prone to wind damage and need a real, if milder, winter dormancy.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                "Safe around pets and kids — its nectar and digestive fluid are only a hazard to the insects it's built to attract.",
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '1-3 ft, upright trumpets',
            detail: 'Pitchers stand tall and narrow rather than sprawling like S. purpurea; a single yellow, downward-nodding flower rises on its own stalk in early spring, ahead of the new pitchers.',
            minFt: 1,
            maxFt: 3,
        },
        soil: {
            value: 'Peat-based bog mix, nutrient-free',
            detail: 'A 1:1 blend of peat moss and perlite or coarse sand, or a live sphagnum moss bog — never potting soil, compost, or fertilizer additives.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Grown in peat-based mix or a true bog planting kept standing in water, rather than an inert semi-hydro medium.',
            compatible: false,
        },
        fertilizer: {
            value: 'No fertilizer — prey only',
            detail: 'Never fertilize the soil. Outdoors the plant lures and catches its own flying insects; indoors or in a screened setting, an occasional small freeze-dried insect dropped into a mature pitcher substitutes.',
        },
        fertilizerFrequency: {
            value: 'Monthly at most, growing season only',
            detail: 'Feed at most one or two pitchers a month through spring and summer — plants kept outdoors in full sun rarely need any supplemental feeding.',
        },
        nativeHabitat: {
            value: 'Southeastern US coastal plain bogs and wet pine savannas',
            detail: 'Grows in full-sun, acidic, nutrient-poor wetlands from Virginia to Florida and west to Alabama, often the tallest plant in low, open bog vegetation.',
        },
        humidity: {
            value: 'Average outdoor or room humidity is fine',
            detail: 'Tolerates typical outdoor and indoor humidity well; consistent soil moisture and sun matter far more than air humidity.',
        },
        temperature: {
            value: '60° – 90°F in summer; cool but milder winter dormancy than S. purpurea',
            detail: 'Thrives in warm, humid Southeastern summers and requires a genuine winter dormancy, but is less freeze-tolerant than S. purpurea — in colder parts of its hardiness range, a thick mulch layer or unheated cold frame protects the rhizome.',
            minF: 25,
            maxF: 90,
        },
        growSeason: {
            value: 'Spring–Fall, dormant in winter',
            detail: "The single flower and a flush of new pitchers appear in early spring ahead of most foliage; growth continues through summer before the plant goes dormant for winter.",
        },
        dailyRhythm: {
            heading: 'A tall, sun-hungry trumpet that trades rainwater traps for scent and nectar.',
            body: "Yellow Pitcher Plant asks for the same full sun and constant moisture as its relatives, but its height and hooded trumpets mean airflow and light exposure matter more day to day — a crowded or shaded plant quickly loses the upright form and rich coloring that make it distinctive.",
            highlights: [
                'A slight sweet smell near open pitchers is normal — it\'s part of how the plant lures flying insects toward the trap.',
                'The single nodding yellow flower opens before most new pitchers form each spring; this sequence keeps pollinators and prey apart.',
                'Tall pitchers flopping over in strong wind or heavy rain is common and rarely fatal — trim only once a pitcher has fully browned.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check that the tray or bog planting is still standing in water; top up with distilled or rainwater.',
            },
            {
                interval: 'monthly',
                task: 'Top off pitcher fluid with a few drops of distilled water if a pitcher has dried out.',
            },
            {
                interval: 'seasonal',
                task: 'Provide a cool winter dormancy (mulching the rhizome in colder parts of its range), then trim dead pitchers back in early spring before new growth appears.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Full sun, 6+ hrs direct',
                detail: 'Strong sun is what produces the coppery red hood veining and keeps tall pitchers upright rather than floppy.',
            },
            {
                label: 'Winter Protection',
                stat: 'Milder dormancy than S. purpurea',
                detail: 'Needs a real winter rest, but less extreme cold tolerance — mulch or move to a cold frame in colder parts of its range.',
            },
            {
                label: 'Water Quality',
                stat: 'Distilled or rainwater only',
                detail: 'Mineral buildup from tap water is the main non-seasonal cause of decline.',
            },
            {
                label: 'Feeding',
                stat: 'Self-sufficient outdoors',
                detail: 'Nectar and scent do the work of attracting prey — plants grown outdoors in full sun rarely need supplemental feeding.',
            },
        ],
        wateringRhythm: {
            heading: 'Standing water year-round, eased back slightly in winter.',
            body: "Keep the pot standing in a tray of distilled, reverse-osmosis, or rainwater at all times, or plant directly into a live bog garden — this species is adapted to permanently saturated soil and doesn't need the medium to ever dry between waterings.",
            tips: [
                'A bog garden or large shared tray is easier to keep consistently wet than a small single pot.',
                'Tall pitchers catch more wind than squat species — a partially sheltered spot reduces flopping without cutting light.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Tray or bog kept fully saturated',
                tip: 'Peak growth and the early spring flower — this is when new pitchers form fastest.',
            },
            {
                season: 'Autumn',
                cadence: 'Keep saturated as growth slows',
                tip: 'The plant is preparing for dormancy; continue normal watering rather than tapering it off.',
            },
            {
                season: 'Winter (dormancy)',
                cadence: 'Keep the bog or tray from drying, mulch the rhizome in cold climates',
                tip: 'Less freeze-tolerant than S. purpurea — a mulch layer or unheated shelter protects the rhizome from hard, prolonged freezes.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Confirm the tray or bog planting is still holding water.',
                    'Check pitcher fluid levels on especially hot or dry days.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Provide a cool winter dormancy, mulching or sheltering the rhizome in colder parts of its range.',
                    'Cut back fully dead pitchers in early spring before new growth emerges.',
                    'Divide congested clumps or repot into fresh peat-based mix every couple of years.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Distilled, reverse-osmosis, or rainwater',
                note: 'Non-negotiable long-term — tap water minerals accumulate in the peat and burn the roots.',
            },
            {
                item: 'Peat moss and perlite (or sand) mix, or a live bog planting',
                note: 'Acidic, nutrient-free medium that mirrors native sphagnum bog soil.',
            },
            {
                item: 'Large saucer, tub, or dedicated bog garden bed',
                note: 'Easier to keep consistently saturated than a single small pot.',
            },
            {
                item: 'Mulch or an unheated cold frame for winter',
                note: 'Protects the rhizome through hard freezes in the colder parts of its hardiness range.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Green, Floppy Pitchers With No Red Veining',
                description:
                    'Pitchers that stay uniformly green and lean or flop over almost always mean the plant is getting less direct sun than it needs.',
                actions: [
                    'Move to the sunniest available spot, ideally 6+ hours of direct outdoor sun.',
                    'Stake or shelter tall pitchers from wind while increasing light, rather than cutting them back.',
                ],
            },
            {
                title: 'Rhizome Damage After a Hard Freeze',
                description:
                    'Unlike S. purpurea, S. flava is more vulnerable to prolonged hard freezes without protection, which can kill the rhizome outright.',
                actions: [
                    'Mulch heavily over the rhizome before winter in colder parts of its range.',
                    'Move potted plants into an unheated garage or cold frame during the coldest stretches.',
                ],
            },
            {
                title: 'Dried-Out Bog or Tray',
                description:
                    'Wilting pitchers or a collapsed rosette typically trace back to the tray or bog planting drying out at some point, even briefly.',
                actions: [
                    'Refill with distilled or rainwater immediately and check the tray more frequently going forward.',
                    'Consider moving to a larger tray or a true bog garden bed for a bigger moisture buffer.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small clustered insects on the spring flower stalk and new pitcher growth.',
                treatment:
                    'Rinse gently with water and apply insecticidal soap for persistent infestations, keeping it out of open pitchers.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white residue at the base of pitchers or along rhizomes.',
                treatment:
                    'Dab clusters with isopropyl alcohol on a cotton swab and follow with insecticidal soap for repeat infestations.',
            },
            {
                name: 'Slugs and Snails',
                pestSlug: 'slugs-and-snails',
                signs: 'Ragged chew marks low on pitcher walls, especially on outdoor or bog garden plantings.',
                treatment:
                    'Hand-pick at night or use pet-safe iron phosphate bait around the planting.',
            },
        ],
        stabilityChecklist: [
            'Water only with distilled, reverse-osmosis, or rainwater — never tap.',
            'Give it as much direct sun as possible, ideally 6+ hours a day.',
            'Provide a genuine but milder winter dormancy, mulching the rhizome in colder climates.',
            'Keep the tray, saucer, or bog planting saturated at all times, even through winter.',
        ],
    },
};
