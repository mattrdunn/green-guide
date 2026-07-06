import type { Pest } from '../../../lib/db/models/Pest';

export const fungusGnats: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'fungus-gnats',
    name: 'Fungus Gnats',
    category: 'soil-dweller',
    categoryLabel: 'Soil-dweller',
    tag: 'Mostly a nuisance',
    severity: 2,
    signs: 'Tiny flies hovering near soil, larvae feeding on fine roots.',
    identification:
        'Adults are small, dark, mosquito-like flies that hover near the soil surface and scatter when disturbed. Larvae are translucent with dark heads, living in the top inch of consistently moist potting mix and feeding on organic matter and fine roots.',
    lifeCycle:
        'Eggs are laid in moist soil and hatch within days; larvae feed for 1–2 weeks before pupating in the mix. The whole cycle repeats every 3–4 weeks, so a persistently damp pot never runs out of gnats.',
    treatmentOrganic: [
        'Let the top 2" of soil dry out fully between waterings to disrupt egg-laying.',
        "Top-dress with sand or fine gravel so adults can't lay eggs at the surface.",
        'Set out yellow sticky traps to catch adults and gauge population size.',
    ],
    treatmentChemical: [
        'Water in Bacillus thuringiensis israelensis (BTI), sold as "mosquito bits," to kill larvae without harming the plant.',
        'Reserve broader soil drenches for severe, repeated outbreaks.',
    ],
    prevention: [
        'Avoid letting saucers hold standing water.',
        'Use well-draining mix so the surface dries between waterings.',
        "Inspect new plants' soil before adding them near others.",
    ],
};
