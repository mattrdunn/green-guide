import type { Pest } from '../../../lib/db/models/Pest';

export const spiderMites: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'spider-mites',
    name: 'Spider Mites',
    category: 'sap-sucker',
    categoryLabel: 'Sap-sucker',
    tag: 'Spreads fast',
    severity: 4,
    signs: 'Dusty webbing on undersides, stippled leaves losing color.',
    identification:
        'Look for fine, silk-like webbing strung between leaves and stems, especially near new growth. Individual mites are barely visible without a loupe, but their feeding leaves a stippled, bronzed texture across leaf surfaces — hold a sheet of white paper under a leaf and tap; moving specks are mites.',
    lifeCycle:
        'Eggs hatch in as little as 3 days in warm, dry conditions, and a full generation can complete in under two weeks. Populations explode fastest below 40% humidity, which is why winter heating season is peak season.',
    treatmentOrganic: [
        'Shower foliage thoroughly to knock down active populations.',
        'Spray neem oil or insecticidal soap weekly, coating leaf undersides.',
        'Raise humidity with a pebble tray or humidifier to slow reproduction.',
    ],
    treatmentChemical: [
        'Rotate in a miticide labeled for spider mites if organic sprays stall after 2–3 weeks.',
        'Avoid broad-spectrum insecticides — they kill predatory mites that would otherwise help.',
    ],
    prevention: [
        'Keep humidity above 50% where possible; mites thrive in dry air.',
        'Quarantine new plants for two weeks before shelving them with your collection.',
        'Wipe down leaves monthly to disrupt colonies before they establish.',
    ],
};
