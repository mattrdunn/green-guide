import type { Pest } from '../../../lib/db/models/Pest';

export const whiteflies: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'whiteflies',
    name: 'Whiteflies',
    category: 'sap-sucker',
    categoryLabel: 'Sap-sucker',
    tag: 'Clouds when disturbed',
    severity: 3,
    signs: 'Tiny white moth-like insects that flutter up in a cloud when the plant is brushed.',
    identification:
        'Adults are small, moth-like, and pure white — brushing the foliage sends up a visible cloud. Nymphs are flat, translucent ovals fixed to leaf undersides, feeding steadily and excreting honeydew.',
    lifeCycle:
        'Eggs are laid on leaf undersides and hatch into crawling nymphs that soon settle in place to feed. A full life cycle runs 3–4 weeks, and overlapping generations make single treatments ineffective.',
    treatmentOrganic: [
        'Vacuum adults in the early morning when they are sluggish and slow to fly.',
        'Spray horticultural oil or insecticidal soap on leaf undersides weekly for a month.',
        'Hang yellow sticky traps near affected plants to catch adults.',
    ],
    treatmentChemical: [
        'Use a systemic insecticide to reach nymphs that contact sprays miss.',
        'Repeat treatments on a 7-day cycle to catch newly hatched generations.',
    ],
    prevention: [
        'Inspect leaf undersides on any new plant before it joins your collection.',
        'Avoid crowding plants — whiteflies spread quickly between touching foliage.',
        'Keep an eye on outdoor patio plants in late summer, their peak season.',
    ],
};
