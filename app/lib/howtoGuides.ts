export type GuideStep = {
    title: string;
    detail: string;
};

export type Guide = {
    id: string;
    path: string;
    title: string;
    description: string;
    duration: string;
    focus: string;
    steps: GuideStep[];
    signals: string[];
    spotlight?: {
        badge: string;
        summary: string;
        cta: string;
    };
};

export const howtoGuides: Guide[] = [
    {
        id: 'repotting',
        path: '/repotting',
        title: 'Repot without shocking the plant',
        description:
            'Refresh tired soil, size up a pot correctly, and support roots so they settle in instead of stalling out.',
        duration: '20–30 minutes',
        focus: 'Structure + root support',
        steps: [
            {
                title: 'Stage your workspace',
                detail:
                    'Water 24 hours beforehand so roots are pliable, line up your tools, and pre-moisten the new mix so it clumps lightly without dripping.',
            },
            {
                title: 'Loosen roots with intention',
                detail:
                    'Tip the plant out, tease circling roots apart with your fingers, and trim any mushy spots while keeping the root ball mostly intact.',
            },
            {
                title: 'Set, fill, and settle',
                detail:
                    'Hold the plant at the same soil line, backfill halfway, tap to remove air pockets, finish filling, then water through until runoff runs clear.',
            },
        ],
        signals: [
            'Roots are spiraling or pushing the plant up',
            'Water rushes straight through within seconds',
            'Soil surface is pulling away from the pot edges',
        ],
        spotlight: {
            badge: 'Root refresh',
            summary: 'Swap depleted mix for airy support without stressing those fresh water roots.',
            cta: 'Open repotting lab',
        },
    },
    {
        id: 'leca',
        path: '/howto#leca',
        title: 'Transition a soil plant to LECA',
        description:
            'Switching to lightweight expanded clay aggregate demands methodical cleaning, nutrient planning, and a stable reservoir.',
        duration: '45–60 minutes',
        focus: 'Hydro hygiene',
        steps: [
            {
                title: 'Deep-clean the root system',
                detail:
                    'Gently free the plant from soil, soak the roots, and rinse under lukewarm water until every trace of mix is gone.',
            },
            {
                title: 'Prep the LECA',
                detail:
                    'Rinse, boil, or soak the clay balls to remove dust, then condition them in a cal-mag solution so they do not wick nutrients out of the plant.',
            },
            {
                title: 'Build the passive hydro setup',
                detail:
                    'Layer LECA, position the plant, and top off with more clay—keeping the nutrient solution slightly below the root collar to invite new water roots.',
            },
        ],
        signals: [
            'You need steadier moisture than soil can offer',
            'Space is too limited for messy potting sessions',
            'Pest pressure in soil keeps coming back',
        ],
        spotlight: {
            badge: 'Semi-hydro shift',
            summary: 'Dial in sterile clay media and nutrient mixes before moving roots out of soil.',
            cta: 'Preview the flow',
        },
    },
    {
        id: 'soil-check',
        path: '/howto#soil-check',
        title: 'Read soil moisture like a pro',
        description:
            'Combine tactile checks, pot weight, and observation so you water based on need—not the calendar.',
        duration: '5 minutes',
        focus: 'Moisture intuition',
        steps: [
            {
                title: 'Feel the top two inches',
                detail:
                    'Use a clean finger or chopstick. If it comes out dusty, you are safe to water. Gritty but cool means you can wait another day.',
            },
            {
                title: 'Weigh the pot in your hands',
                detail:
                    'Lift the planter right after watering once to learn its “full” weight, then compare on dry days to gauge how much moisture is left down low.',
            },
            {
                title: 'Cross-check with visual cues',
                detail:
                    'Droopy but firm leaves signal thirst; limp and soft leaves usually mean overwatering. Track symptoms in your journal to build pattern recognition.',
            },
        ],
        signals: [
            'You second-guess every watering decision',
            'Plants yellow from the bottom up',
            'Topsoil dries fast but lower roots stay soggy',
        ],
        spotlight: {
            badge: 'Water wisdom',
            summary: 'Pair tactile checks with pot weight to stop guessing about when to water.',
            cta: 'Start sensing',
        },
    },
];
