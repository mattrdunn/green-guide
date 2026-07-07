import type { Pest } from '../../../lib/db/models/Pest';

export const rootAphids: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'> = {
    slug: 'root-aphids',
    name: 'Root Aphids',
    category: 'soil-dweller',
    categoryLabel: 'Soil-dweller',
    tag: 'Hides below the soil line',
    severity: 3,
    signs: "Slow decline and yellowing despite normal watering, with pale or tan aphid clusters visible on roots at repotting.",
    identification:
        "Unlike their foliage-dwelling relatives, root aphids feed unseen on roots just below the soil surface, appearing as small pale, tan, or waxy-coated insects clustered where roots meet potting mix. Above ground the only clues are unexplained wilting, stunted growth, or a general decline that doesn't match the plant's watering or light conditions.",
    lifeCycle:
        "Root aphids reproduce continuously without mating, so a small colony can build up in the root zone over several weeks before symptoms appear above ground. They spread readily between pots via shared soil, tools, or ants that farm them for honeydew underground.",
    treatmentOrganic: [
        'Bare-root the plant, rinse soil from the roots, and dispose of the old potting mix.',
        'Soak the root ball in insecticidal soap solution before repotting into fresh mix.',
        'Isolate affected plants until the root system is confirmed clean.',
    ],
    treatmentChemical: [
        'Drench the soil with a systemic insecticide if colonies keep returning after repotting.',
    ],
    prevention: [
        'Inspect roots when repotting mature or rootbound plants.',
        'Avoid reusing potting mix between plants without sterilizing it.',
        'Keep new arrivals isolated for a few weeks before placing them near established plants.',
    ],
};
