import type { Pest } from '../../../lib/db/models/Pest';

export const scale: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'scale',
    name: 'Scale Insects',
    category: 'sap-sucker',
    categoryLabel: 'Sap-sucker',
    tag: 'Slow but stubborn',
    severity: 3,
    signs: 'Dome-like brown or waxy shells fixed along stems and leaf veins, sticky residue nearby.',
    identification:
        "Scale look more like small bumps than insects — brown, tan, or waxy domes clustered along stems and the midribs of leaves. Once mature, they don't move, but they keep feeding and secreting honeydew underneath them.",
    lifeCycle:
        'Only the young "crawler" stage moves; once settled, scale forms a protective shell that most sprays can\'t penetrate. Crawlers emerge over several weeks, so single treatments rarely clear an infestation.',
    treatmentOrganic: [
        'Scrape or swab visible shells off with alcohol on a cotton swab.',
        'Follow with a horticultural oil spray every 7–10 days to catch crawlers before they harden.',
        'Prune heavily infested stems where practical.',
    ],
    treatmentChemical: [
        'Use a systemic insecticide, since sprays struggle to penetrate the waxy shell.',
        'Continue treatment for at least a month to cover multiple crawler emergences.',
    ],
    prevention: [
        'Inspect stems and leaf veins on new plants closely — scale hitchhikes easily.',
        'Keep plants unstressed; scale often targets already-weakened specimens.',
        'Wipe down stems periodically as part of routine cleaning.',
    ],
};
