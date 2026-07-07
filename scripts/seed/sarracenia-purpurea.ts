import type { Plant } from '../../lib/db/models/Plant';

export const sarraceniaPurpurea: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'sarracenia',
    species: 'purpurea',
    commonNames: ['Purple Pitcher Plant', 'Northern Pitcher Plant'],
    description:
        "The most cold-hardy of the North American pitcher plants and the widest-ranging true species in a genus where most nursery plants sold as \"Sarracenia\" are actually hybrids. Rather than the tall upright trumpets of species like S. flava or S. leucophylla, S. purpurea forms squat, coiled pitchers that lie close to the ground and fill with rainwater, hosting a small food web of insect larvae that help it digest prey. Its unmatched cold tolerance makes it the easiest Sarracenia to keep outdoors year-round across a wide range of climates.",
    images: [],
    tags: [
        'carnivorous',
        'pitcher-plant',
        'cold-hardy',
        'dormancy-required',
        'non-toxic',
        'full-sun',
        'bog-plant',
    ],
    highlights: [
        'The most cold-hardy pitcher plant species, surviving outdoors through frost and snow across a far wider range than its upright-trumpet relatives.',
        "Squat, coiled, rainwater-filled pitchers stay low to the ground rather than growing as tall upright trumpets like S. flava or S. leucophylla.",
        'Many pitcher plants sold in nurseries are hybrids of mixed parentage — S. purpurea is one of the few widely available true wild species.',
    ],
    vitals: {
        hardinessZone: {
            value: '3-9 outdoors year-round',
            caption:
                'Native from subarctic Canadian bogs down to the Gulf Coast — the widest natural range of any Sarracenia, and reliably grown outdoors in a bog garden or pot through winter across most temperate climates.',
            zoneMin: 3,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun, 6+ hours direct',
            caption:
                'Wants as much direct sun as it can get — strong light is what produces deep pitcher coloring and keeps growth compact rather than pale and floppy.',
        },
        watering: {
            score: 5,
            value: 'Constantly moist, tray or bog method',
            caption:
                'Sits in a shallow tray of distilled or rainwater, or planted directly in a bog garden, year-round; pitchers are also meant to stay naturally filled with water.',
        },
        difficulty: {
            score: 3,
            value: 'Moderate',
            caption:
                'Easier than most carnivorous plants outdoors thanks to its cold tolerance, but still needs full sun, mineral-free water, and a real winter dormancy.',
            level: 'moderate',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                "Safe around pets and kids — its digestive fluid only affects the insects and larvae living inside the pitchers.",
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '6-12 in, low rosette',
            detail: 'Pitchers splay outward close to the soil in a squat rosette rather than standing upright; a single flower stalk rises well above the foliage in spring.',
            minFt: 1,
            maxFt: 1,
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
            detail: 'Never fertilize the soil. Outdoors the plant catches its own insects; indoors or in a screened setting, an occasional small freeze-dried insect dropped into a mature pitcher substitutes.',
        },
        fertilizerFrequency: {
            value: 'Monthly at most, growing season only',
            detail: 'Feed at most one or two pitchers a month through spring and summer — plants kept outdoors in the sun rarely need any supplemental feeding at all.',
        },
        nativeHabitat: {
            value: 'North American sphagnum bogs and wet pine savannas',
            detail: 'Ranges from subarctic Canadian peat bogs to Gulf Coast wetlands, always in acidic, waterlogged, nutrient-poor soil under full open sun.',
        },
        humidity: {
            value: 'Average outdoor or room humidity is fine',
            detail: 'Tolerates typical outdoor and indoor humidity well; consistent soil moisture and sun matter far more than air humidity.',
        },
        temperature: {
            value: '60° – 90°F in summer; tolerates hard frost and snow cover during dormancy',
            detail: 'Thrives in warm, sunny summers and requires a genuinely cold winter dormancy — in its hardier northern range it survives being frozen solid under snow, and even in mild climates it should not be kept warm through winter.',
            minF: 20,
            maxF: 90,
        },
        growSeason: {
            value: 'Spring–Fall, dormant in winter',
            detail: 'New pitchers and the single spring flower form during the growing season; the plant then goes fully dormant through winter, with older pitchers persisting but no new growth.',
        },
        dailyRhythm: {
            heading: 'A cold-hardy bog plant built for sun and seasons, not daily fuss.',
            body: "Purple Pitcher Plant asks for very little day to day once it's planted in full sun with wet feet — its rhythm is dictated by the seasons, with a burst of new pitchers each spring and a genuine winter rest that its cold-hardiness makes easy to provide even outdoors.",
            highlights: [
                'Pitchers naturally hold rainwater and often host mosquito larvae or other small organisms — this is part of its normal digestive ecosystem, not a problem to fix.',
                'A single, oddly-shaped flower nodding above the pitchers each spring is normal — it blooms before the new season\'s pitchers fully form.',
                'Older pitchers browning and collapsing after a year or more is expected aging; new ones replace them each growing season.',
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
                task: 'Leave the plant outdoors (or move it somewhere unheated) for its winter dormancy, then trim dead pitchers back in early spring before new growth appears.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Light',
                stat: 'Full sun, 6+ hrs direct',
                detail: 'Strong sun keeps pitchers compact and richly colored instead of pale and stretched.',
            },
            {
                label: 'Cold Hardiness',
                stat: 'Survives outdoors to zone 3',
                detail: 'The trait that sets this species apart from most other pitcher plants — a real winter outdoors is a feature, not a risk.',
            },
            {
                label: 'Water Quality',
                stat: 'Distilled or rainwater only',
                detail: 'Mineral buildup from tap water is the main non-seasonal cause of decline.',
            },
            {
                label: 'Feeding',
                stat: 'Self-sufficient outdoors',
                detail: 'Plants grown outdoors in full sun typically catch all the prey they need on their own.',
            },
        ],
        wateringRhythm: {
            heading: 'Standing water year-round, even through winter.',
            body: "Keep the pot standing in a tray of distilled, reverse-osmosis, or rainwater at all times, or plant directly into a live bog garden — this species is adapted to permanently saturated soil and doesn't need the medium to ever dry between waterings.",
            tips: [
                'A bog garden or large shared tray is easier to keep consistently wet than a small single pot.',
                "Snow and ice sitting on a dormant outdoor planting is normal for this species and doesn't need to be cleared.",
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Tray or bog kept fully saturated',
                tip: 'Peak growth and the yearly flower — this is when new pitchers form fastest.',
            },
            {
                season: 'Autumn',
                cadence: 'Keep saturated as growth slows',
                tip: 'The plant is preparing for dormancy; continue normal watering rather than tapering it off.',
            },
            {
                season: 'Winter (dormancy)',
                cadence: 'Keep the bog or tray from drying, even if frozen',
                tip: 'Being frozen solid for stretches is tolerated in cold climates; the risk is drying out, not cold.',
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
                    'Leave the plant outdoors (or in an unheated space) for a full winter dormancy.',
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
                item: 'Outdoor spot or unheated space for winter',
                note: "Its cold-hardiness makes a genuine dormancy simple to provide without a fridge or cold frame.",
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Pale, Floppy, Elongated Pitchers',
                description:
                    'Washed-out color and weak, stretched pitchers almost always mean the plant is getting less direct sun than it needs.',
                actions: [
                    'Move to the sunniest available spot, ideally 6+ hours of direct outdoor sun.',
                    'Reduce shading from taller neighboring plants if grown in a mixed bog garden.',
                ],
            },
            {
                title: 'No Dormancy, Gradual Decline',
                description:
                    'A plant kept warm indoors year-round without a real winter rest weakens over successive years, producing smaller pitchers each season.',
                actions: [
                    'Move it outdoors, to an unheated garage, or another cold spot for a genuine winter dormancy.',
                    'Stop feeding and let growth slow naturally as temperatures drop in autumn.',
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
                signs: 'Ragged chew marks on pitcher walls, especially on outdoor or bog garden plantings.',
                treatment:
                    'Hand-pick at night or use pet-safe iron phosphate bait around the planting.',
            },
        ],
        stabilityChecklist: [
            'Water only with distilled, reverse-osmosis, or rainwater — never tap.',
            'Give it as much direct sun as possible, ideally 6+ hours a day.',
            'Provide a real winter dormancy every year — its cold-hardiness makes this easy outdoors.',
            'Keep the tray, saucer, or bog planting saturated at all times, even through winter.',
        ],
    },
};
