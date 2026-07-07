import type { Pest } from '../../../lib/db/models/Pest';

export const leafminers: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'leafminers',
    name: 'Leafminers',
    category: 'tunneler',
    categoryLabel: 'Tunneler',
    tag: 'Tunnels invisible until late',
    severity: 2,
    signs: 'Winding silvery or pale trails tunneled through leaf tissue, most visible on new flush growth.',
    identification:
        'Leafminer larvae feed inside the leaf itself, carving thin, winding tunnels that show up as silvery or translucent trails just under the surface. Damage is cosmetic at first but heavy mining on young leaves can stunt new growth, especially on citrus where the tender spring flush is a favorite target.',
    lifeCycle:
        'Adult moths or flies lay eggs directly into leaf tissue; larvae hatch and tunnel as they feed, pupating either inside the mine or in nearby soil before emerging to start the next generation. Warm weather speeds up the cycle, so pressure builds fastest on flushes of soft new growth.',
    treatmentOrganic: [
        'Pinch off and discard heavily mined leaves before larvae pupate.',
        'Apply neem oil to new flush growth to disrupt egg-laying.',
        'Encourage parasitic wasps, which target leafminer larvae naturally outdoors.',
    ],
    treatmentChemical: [
        'Apply a systemic insecticide timed to new flush growth for recurring outbreaks.',
    ],
    prevention: [
        'Avoid heavy nitrogen feeding that pushes a flush of soft, vulnerable new growth.',
        'Inspect new growth weekly during active flushing periods.',
        'Prune and dispose of severely mined leaves rather than composting them.',
    ],
};
