import type { Pest } from '../../../lib/db/models/Pest';

export const slugsAndSnails: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> =
    {
        slug: 'slugs-and-snails',
        name: 'Slugs and Snails',
        category: 'grazer',
        categoryLabel: 'Grazer',
        tag: 'Active at night',
        severity: 2,
        signs: 'Ragged holes chewed through leaf edges and centers, silvery slime trails on soil and foliage.',
        identification:
            'Damage shows up overnight as irregular holes with smooth edges, often concentrated on the most tender new leaves and seedlings. Look for the telltale silvery slime trail leading back to a damp hiding spot — under mulch, pot rims, or leaf litter — since the culprits themselves feed mostly after dark.',
        lifeCycle:
            'Adults lay clusters of translucent eggs in moist soil or leaf litter, hatching in 2–4 weeks depending on temperature. They thrive in humid, shaded conditions and become far more active after rain or evening watering, retreating to shelter during the heat of the day.',
        treatmentOrganic: [
            'Hand-pick at night with a flashlight, or set out a shallow dish of beer as a trap.',
            'Ring vulnerable pots with a barrier of crushed eggshell, diatomaceous earth, or copper tape.',
            'Clear mulch and debris away from stems to remove daytime hiding spots.',
        ],
        treatmentChemical: [
            'Scatter iron phosphate slug bait around affected beds and containers — safer around pets than metaldehyde baits.',
            'Reapply bait after heavy rain or watering washes it away.',
        ],
        prevention: [
            'Water in the morning rather than evening so soil surfaces dry out before dusk.',
            'Keep mulch a few inches back from stems and avoid overwatering shaded beds.',
            'Encourage natural predators like birds and ground beetles in outdoor gardens.',
        ],
    };
