import type { Pest } from '../../../lib/db/models/Pest';

export const mealybugs: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'mealybugs',
    name: 'Mealybugs',
    category: 'sap-sucker',
    categoryLabel: 'Sap-sucker',
    tag: 'Slow but stubborn',
    severity: 3,
    signs: 'Cottony white clusters in leaf joints and along stems, sticky residue below.',
    identification:
        "Mealybugs form soft, cottony white masses tucked into leaf axils, stem joints, and along roots. The waxy coating repels water, so a light misting rarely dislodges them — you'll need direct contact.",
    lifeCycle:
        'Females lay eggs in that cottony mass, and nymphs crawl to new feeding sites before settling. A generation completes in about a month, and root-dwelling mealybugs can persist unnoticed in the soil.',
    treatmentOrganic: [
        'Dab visible clusters with a cotton swab dipped in isopropyl alcohol.',
        'Follow with horticultural oil coverage every 7–10 days until no new clusters appear.',
        'Unpot suspect plants to check roots for mealybugs hiding below the soil line.',
    ],
    treatmentChemical: [
        'Apply a systemic insecticide for infestations that keep returning from the root zone.',
        'Treat soil and foliage together for root-dwelling colonies.',
    ],
    prevention: [
        'Quarantine new plants and check leaf joints before adding them to a shelf.',
        'Avoid overwatering — soft, overwatered tissue is easier for mealybugs to colonize.',
        'Check root balls at each repotting for early signs.',
    ],
};
