import type { Plant } from '../../lib/db/models/Plant';

export const agaveAttenuata: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'agave',
    species: 'attenuata',
    commonNames: ['Foxtail Agave', "Lion's Tail", 'Swan Neck Agave'],
    description:
        'A spineless, soft-leaved agave prized for its silvery-green rosettes and curved flower spike. Foxtail Agave is a dramatic, low-fuss succulent for full-sun gardens and bright containers alike.',
    images: [
        {
            url: 'plants/agave/attenuata/img-1.png',
            alt: 'A large, silvery-green rosette of Foxtail Agave with a curved flower spike emerging from the center.',
        },
        {
            url: 'plants/agave/attenuata/img-2.png',
            alt: 'A close-up of the soft, smooth leaves of Foxtail Agave, showing their silvery-green color and lack of spines.',
        }
    ],
    tags: [
        'succulent',
        'rosette',
        'full-sun',
        'drought-tolerant',
        'mildly-toxic',
    ],
    highlights: [
        'One of the few agaves without sharp terminal spines — safer near paths and pets.',
        'Named for the arching, foxtail-shaped flower spike mature rosettes send up.',
        'Each rosette blooms once, then slowly declines while offsetting pups take over.',
    ],
    vitals: {
        hardinessZone: {
            value: '9-11',
            caption: 'Perennial outdoors in frost-free climates; container elsewhere.',
            zoneMin: 9,
            zoneMax: 11,
        },
        light: {
            score: 4,
            value: 'Full sun to bright light',
            caption: '6+ hours direct outdoors; brightest indoor window if potted.',
        },
        watering: {
            score: 1,
            value: 'Drought-tolerant',
            caption: 'Deep soak every 2-3 weeks; let the mix dry fully between.',
        },
        difficulty: {
            score: 1,
            value: 'Easy',
            caption: 'Nearly indestructible once sited in sun with sharp drainage.',
            level: 'easy',
        },
        toxicity: {
            value: 'Mildly toxic',
            caption:
                'Sap saponins irritate skin, mouths, and stomachs — keep pets from chewing leaves.',
            level: 'mildly-toxic',
        },
    },
    overview: {
        height: {
            value: '2-5 ft spread',
            detail: 'Rosettes stay low and wide, eventually clustering into a multi-headed clump as offsets mature.',
            minFt: 2,
            maxFt: 5,
        },
        soil: {
            value: 'Sandy, lean, sharp-draining',
            detail: 'A gritty cactus/succulent mix or amended native soil; standing water at the roots is the main killer.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Rot-prone crowns need real dry-down between waterings — passive hydro keeps roots too wet.',
            compatible: false,
        },
        fertilizer: {
            value: 'Low & balanced',
            detail: 'A dilute cactus/succulent feed supports steady, compact growth without pushing lanky leaves.',
            npk: '2-7-7',
        },
        fertilizerFrequency: {
            value: '1-2x per growing season',
            detail: 'A light feed in spring and again in early summer is plenty; skip it entirely in winter.',
        },
        nativeHabitat: {
            value: 'Central Mexico',
            detail: 'Rocky, arid slopes of Jalisco — full sun, minimal rainfall, and excellent drainage.',
        },
        humidity: {
            value: 'Low & dry',
            detail: 'Thrives in dry air; humid, stagnant conditions invite fungal rot at the base.',
            minPct: 10,
        },
        temperature: {
            value: '25° – 100°F',
            detail: 'Tolerates brief dips near freezing once mature, but protect from hard frost and prolonged cold.',
            minF: 25,
            maxF: 100,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'New leaves emerge from the rosette center; mature plants may send up a curved bloom spike in late spring.',
        },
        dailyRhythm: {
            heading: 'A desert rosette that thrives on neglect.',
            body: 'Foxtail Agave wants maximum light and minimal interference. The daily job is simply staying out of the way — the occasional job is a deep soak once the soil has gone bone dry and a quick check for pups worth separating.',
            highlights: [
                'Full sun keeps rosettes tight, silvery, and compact.',
                'Soft leaves still bruise easily — site away from high foot traffic.',
                'Offsets ("pups") can be separated and replanted once they have their own roots.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check the rosette center and base for soft, discolored tissue.',
            },
            {
                interval: 'weekly',
                task: 'Confirm the soil has dried fully since the last watering.',
            },
            {
                interval: 'as-needed',
                task: 'Give a deep, sparse soak only after the mix is completely dry.',
            },
            {
                interval: 'seasonal',
                task: 'Remove spent lower leaves and separate rooted pups for propagation.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6+ hrs direct',
                detail: 'Full sun keeps rosettes dense and silvery; shade produces stretched, floppy leaves.',
            },
            {
                label: 'Drought',
                stat: 'Water every 2-4 wks',
                detail: 'Err dry — soggy soil is the fastest route to crown rot.',
            },
            {
                label: 'Drainage',
                stat: 'Gritty mix only',
                detail: 'Sand, pumice, or coarse perlite blended into the mix keeps roots from sitting wet.',
            },
            {
                label: 'Handling',
                stat: 'Soft but bruisable',
                detail: 'No spines to worry about, but leaves scar permanently if knocked or scraped.',
            },
        ],
        wateringRhythm: {
            heading: 'Deep, infrequent soaks — then real drought.',
            body: 'Saturate the soil fully, let it drain completely, and wait until the mix is bone dry before watering again. In summer heat that is roughly every 2-4 weeks; in cooler or overcast stretches, stretch it further. Reduce to near-zero through winter dormancy.',
            tips: [
                'Check the rosette center after rain or watering — trapped moisture there invites rot.',
                'Potted plants dry faster than in-ground ones; adjust cadence by feel, not the calendar.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Every 2-3 weeks',
                tip: 'Resume regular soaks as new leaves emerge from the center.',
            },
            {
                season: 'Summer',
                cadence: 'Every 2-4 weeks',
                tip: 'Deep soak in real heat; potted plants dry out faster than ground-planted ones.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Monthly or less',
                tip: 'Cut back hard — cold, wet roots are the single biggest risk to overwintering.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Scan leaves for scale or mealybug clusters near the base.',
                    'Confirm the pot or bed has dried since the last watering.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Trim spent, browning lower leaves at the base with a clean blade.',
                    'Separate well-rooted pups and pot them into fresh gritty mix.',
                    'Top-dress with fresh grit if the surface has compacted.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Gritty succulent mix + pumice',
                note: 'Lean and fast-draining — the single biggest factor in avoiding rot.',
            },
            {
                item: 'Thick gloves',
                note: 'Leaves have no spines, but sap can irritate skin during handling or pruning.',
            },
            {
                item: 'Clean, sharp pruning knife',
                note: 'For removing spent leaves and dividing offsets without tearing tissue.',
            },
            {
                item: 'Moisture meter or wooden skewer',
                note: 'Confirms bone-dry soil before committing to the next soak.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Soft, Discolored Rosette Center',
                description:
                    'A mushy, darkening crown is the hallmark of rot from trapped moisture or overwatering.',
                actions: [
                    'Stop watering immediately and improve airflow around the base.',
                    'Cut away any soft, discolored tissue with a clean, sharp blade.',
                    'Repot into fresh, gritty mix if the rot reached the roots.',
                ],
            },
            {
                title: 'Stretched, Floppy Leaves',
                description:
                    'Elongated, pale, or reaching growth signals insufficient light.',
                actions: [
                    'Move to the sunniest spot available, transitioning gradually to avoid scorch.',
                    'Expect new growth to emerge tighter and more compact once light improves.',
                ],
            },
            {
                title: 'Bleached or Scarred Patches',
                description:
                    'Yellow-white sunscald appears when a shade-grown plant is moved abruptly into intense sun.',
                actions: [
                    'Shift to filtered light and reintroduce full sun gradually over 2-3 weeks.',
                    'Scarring is permanent but cosmetic — new leaves will be unaffected.',
                ],
            },
        ],
        pests: [
            {
                name: 'Agave Snout Weevil',
                signs: 'Sudden wilting and collapse of the whole rosette; grubs found at the rotted base.',
                treatment:
                    'Remove and destroy severely infested plants; drench soil with a labeled systemic insecticide preventively in high-risk areas.',
            },
            {
                name: 'Scale Insects',
                pestSlug: 'scale',
                signs: 'Hard, grey-brown discs along leaf undersides and bases.',
                treatment:
                    'Scrape off light infestations, then follow with horticultural oil applications every 1-2 weeks.',
            },
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white clusters tucked between tightly packed leaves.',
                treatment:
                    'Swab visible clusters with isopropyl alcohol and follow with neem oil sprays until clear.',
            },
        ],
        stabilityChecklist: [
            'Site it in the sunniest, best-drained spot available — light and drainage solve most problems here.',
            'Water only when the soil is completely dry; never on a fixed schedule.',
            'Check the rosette center after any rain for trapped moisture.',
            'Separate and repot pups once they have roots of their own to keep the clump manageable.',
        ],
    },
};
