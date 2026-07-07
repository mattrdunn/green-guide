import type { Pest } from '../../../lib/db/models/Pest';

export const broadMites: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'broad-mites',
    name: 'Broad & Cyclamen Mites',
    category: 'sap-sucker',
    categoryLabel: 'Sap-sucker',
    tag: 'Too small to see, easy to misdiagnose',
    severity: 4,
    signs: 'Distorted, curled, or brittle new growth and stunted buds, with no visible webbing or insects.',
    identification:
        'Broad and cyclamen mites are far smaller than spider mites and invisible to the naked eye, so the first sign is usually distorted new growth — leaves that curl, harden, or come in smaller and darker than normal, along with stunted or deformed flower buds. The absence of webbing or visible pests is what separates this from a spider mite infestation.',
    lifeCycle:
        'These mites complete their life cycle in just a few days in warm, humid conditions, hiding deep in unopened buds and growing points where they are protected from most contact treatments. Populations build unnoticed until the distorted growth they cause is already underway.',
    treatmentOrganic: [
        'Remove and discard the most severely distorted growth, since damaged tissue will not recover.',
        'Treat with a sulfur-based miticide labeled for broad or cyclamen mites, applied to growing points.',
        'Isolate affected plants immediately, since these mites spread easily via contact between touching leaves.',
    ],
    treatmentChemical: [
        'Apply a miticide specifically labeled for broad or cyclamen mites — most spider mite products are not effective against them.',
    ],
    prevention: [
        'Inspect new growth closely for subtle distortion before adding a plant to a collection.',
        'Avoid overcrowding where leaves from different plants touch.',
        'Quarantine any plant showing unexplained stunted or curled new growth.',
    ],
};
