import type { Pest } from '../../../lib/db/models/Pest';

export const vineWeevil: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'vine-weevil',
    name: 'Vine Weevil',
    category: 'soil-dweller',
    categoryLabel: 'Soil-dweller',
    tag: 'Root damage strikes first',
    severity: 4,
    signs: 'Notched, scalloped edges chewed into leaves overnight; wilting or sudden collapse from larvae feeding on roots below.',
    identification:
        'Adult vine weevils are dark, flightless beetles that feed at night, leaving characteristic C-shaped notches along leaf edges — cosmetic but a clear warning sign. The real damage comes from their C-shaped white larvae, which live in the soil and chew through roots and crowns, often going unnoticed until the plant wilts or collapses despite moist soil.',
    lifeCycle:
        'Adults emerge in late spring and summer, feeding on foliage at night and hiding in soil or debris by day. Females lay eggs in the soil near host plants; larvae hatch and feed on roots through autumn and winter, doing the most damage just as the plant is least able to compensate.',
    treatmentOrganic: [
        'Check pots at night with a flashlight and hand-pick adult weevils.',
        'Apply beneficial nematodes to the soil in late summer to target larvae before winter.',
        'Repot and inspect roots if a plant wilts without an obvious watering cause; remove any grubs found.',
    ],
    treatmentChemical: [
        'Drench the soil with an insecticide labeled for vine weevil larvae if nematodes are impractical.',
    ],
    prevention: [
        'Use fresh, weevil-free potting mix when repotting.',
        'Keep containers off the ground and away from mulch where adults hide during the day.',
        'Inspect the root ball of new plants before adding them near vulnerable species.',
    ],
};
