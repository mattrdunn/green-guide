import type { Pest } from '../../../lib/db/models/Pest';

export const thrips: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'thrips',
    name: 'Thrips',
    category: 'sap-sucker',
    categoryLabel: 'Sap-sucker',
    tag: 'Scars new growth',
    severity: 4,
    signs: 'Silvery streaks and distorted new leaves; black specks (frass) nearby.',
    identification:
        'Thrips are slender, fast-moving insects only a couple millimeters long. Damage shows as silvery, papery patches on leaves with tiny black frass (droppings) scattered across the scarring. New growth often emerges twisted or stunted.',
    lifeCycle:
        'Adults lay eggs inside leaf tissue; larvae drop to the soil to pupate before emerging as adults, which makes soil drenches useful alongside foliar treatment. A generation completes in 1–3 weeks depending on temperature.',
    treatmentOrganic: [
        'Isolate the plant immediately — thrips move readily between neighboring pots.',
        'Prune the most damaged leaves to remove larvae hiding in curled tissue.',
        'Hang blue sticky traps to monitor and reduce the flying adult population.',
    ],
    treatmentChemical: [
        'Alternate a systemic granule (taken up through the roots) with a contact spray for 4–6 weeks to break the life cycle.',
        'Treat soil and foliage together — thrips pupate below the surface.',
    ],
    prevention: [
        'Screen windows in growing season; thrips commonly blow in from outdoor plants.',
        'Inspect new nursery stock closely before bringing it inside.',
        'Avoid over-fertilizing with nitrogen, which produces the soft new growth thrips prefer.',
    ],
};
