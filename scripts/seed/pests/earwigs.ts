import type { Pest } from '../../../lib/db/models/Pest';

export const earwigs: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'earwigs',
    name: 'Earwigs',
    category: 'grazer',
    categoryLabel: 'Grazer',
    tag: 'Feeds after dark',
    severity: 2,
    signs: 'Ragged holes chewed into petals and soft leaf tissue overnight, with pincer-tailed insects found hiding in blooms or mulch by day.',
    identification:
        'Earwigs chew irregular holes in flower petals and tender foliage overnight, then retreat to dark, damp hiding spots — curled leaves, mulch, or pot rims — by morning. Their reddish-brown bodies and rear pincers make them easy to identify once found, but daytime damage inspection alone often misses them entirely.',
    lifeCycle:
        'Earwigs overwinter in soil or debris and become active in spring, feeding through the growing season and often producing a second generation by late summer. Females guard their eggs and early nymphs in underground burrows, so populations can persist in undisturbed soil for years.',
    treatmentOrganic: [
        'Trap with a rolled, damp newspaper tube or a shallow oil-and-soy-sauce dish set out overnight, then discard in the morning.',
        'Clear mulch and debris a few inches back from stems to remove daytime hiding spots.',
        'Hand-pick at night with a flashlight when earwigs are actively feeding.',
    ],
    treatmentChemical: [
        'Apply a labeled insecticide dust or granule around the base of plants for heavy, recurring populations.',
    ],
    prevention: [
        'Reduce excess mulch and leaf litter near vulnerable blooms.',
        'Water in the morning so soil surfaces dry out before dusk, making conditions less inviting.',
        'Encourage natural predators like birds and ground beetles in the garden.',
    ],
};
