import type { Pest } from '../../../lib/db/models/Pest';

export const aphids: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'aphids',
    name: 'Aphids',
    category: 'sap-sucker',
    categoryLabel: 'Sap-sucker',
    tag: 'Sticky honeydew',
    severity: 3,
    signs: 'Clusters of small pear-shaped insects on new growth and buds, sticky residue below.',
    identification:
        'Aphids cluster densely on tender new growth, flower buds, and stem tips. They range from green to black to pink and secrete a sticky honeydew that often attracts ants or grows sooty mold on leaves beneath.',
    lifeCycle:
        'Aphids reproduce asexually and can birth live young without mating, so a small cluster becomes a colony within days in warm weather. Outdoor plants see the heaviest pressure in spring flush.',
    treatmentOrganic: [
        'Blast colonies off with a strong stream of water every few days.',
        'Apply insecticidal soap directly to clusters, covering stem joints and bud tips.',
        'Introduce or encourage ladybugs and lacewings outdoors — both eat aphids readily.',
    ],
    treatmentChemical: [
        'Use a systemic insecticide for persistent indoor infestations that keep rebounding.',
        'Spot-treat with a contact spray rather than broadcasting over the whole plant.',
    ],
    prevention: [
        'Avoid excess nitrogen fertilizer, which produces the soft growth aphids prefer.',
        'Check new buds and stem tips weekly during active growth.',
        'Wipe away ants, which "farm" aphids for honeydew and protect them from predators.',
    ],
};
