import type { Pest } from '../../../lib/db/models/Pest';

export const caterpillars: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'caterpillars',
    name: 'Caterpillars',
    category: 'grazer',
    categoryLabel: 'Grazer',
    tag: 'Chews fast, hides well',
    severity: 3,
    signs: 'Ragged chewed leaf margins or holes, dark droppings (frass) on foliage below, and caterpillars matching foliage color hiding along stems.',
    identification:
        'Caterpillars chew large, irregular holes through leaves and can strip a plant of foliage quickly once they mature. Many species camouflage well against stems and leaf veins, so the dark, pellet-like frass they leave behind is often the first clue, along with sudden leaf loss overnight.',
    lifeCycle:
        'Moths or butterflies lay eggs on host foliage; larvae hatch and feed voraciously through several growth stages before dropping to the soil to pupate. A single generation can strip a plant within a couple of weeks under warm conditions, and several generations often overlap through the growing season.',
    treatmentOrganic: [
        'Hand-pick caterpillars off in the early morning or evening when they are most active.',
        'Apply Bacillus thuringiensis (Bt), a bacterial spray that targets caterpillars without harming other insects.',
        'Check leaf undersides regularly for egg clusters and remove them before hatching.',
    ],
    treatmentChemical: [
        'Use a targeted insecticide labeled for caterpillars if hand-picking and Bt fall behind the infestation.',
    ],
    prevention: [
        'Inspect new growth and leaf undersides weekly during the growing season.',
        'Attract predatory wasps and birds, which help keep populations in check outdoors.',
        'Remove garden debris where pupae can overwinter.',
    ],
};
