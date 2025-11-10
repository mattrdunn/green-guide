'use client';

const stressSignals = [
    {
        title: 'Yellow Leaves',
        description:
            'One or two older leaves aging to yellow is normal shed, but new growth or multiple leaves yellowing at once points to trouble.',
        actions: [
            'Check moisture: soggy soil means ease off watering and add airflow; bone-dry soil needs a deep soak.',
            'Filter harsh light or pull the plant a few feet back from bright windows to prevent sun stress.',
            'Trim only fully spent leaves to redirect energy to healthy foliage.',
        ],
    },
    {
        title: 'Drooping or Curling',
        description:
            'Tired, floppy petioles or inward curling edges typically signal root stress from watering swings or compacted soil.',
        actions: [
            'Feel the potting mix: rehydrate evenly if dry pockets remain, or repot into chunkier mix if water lingers.',
            'Confirm the plant is not root-bound; upgrade 1–2" in diameter if roots circle the pot.',
            'Support large vines with a moss pole so foliage is not dragging under its own weight.',
        ],
    },
    {
        title: 'Brown Tips & Edges',
        description:
            'Low humidity or salt buildup from fertilizer concentrates crisp leaf margins.',
        actions: [
            'Mist leaves or run a humidifier to keep humidity above 50–60%.',
            'Flush the pot monthly with lukewarm water to rinse fertilizer residues.',
            'Wipe leaves with a damp microfiber cloth so stomata can breathe.',
        ],
    },
];

const pests = [
    {
        name: 'Spider Mites',
        signs: 'Dusty webbing on undersides, stippled leaves losing color.',
        treatment:
            'Shower foliage, then treat weekly with neem oil or insecticidal soap until no new damage appears.',
    },
    {
        name: 'Thrips',
        signs: 'Silvery streaks and distorted new leaves; black specks (frass) nearby.',
        treatment:
            'Isolate the plant, prune the worst leaves, and alternate systemic granules with contact sprays for 4–6 weeks.',
    },
    {
        name: 'Fungus Gnats',
        signs: 'Tiny flies hovering near soil, larvae feeding on fine roots.',
        treatment:
            'Let the top 2" of mix dry, add a sand topdress, and water in Bacillus thuringiensis israelensis (BTI) or mosquito bits.',
    },
    {
        name: 'Scale & Mealybugs',
        signs: 'Sticky residue, cottony clusters in leaf nodes, or dome-like shells on stems.',
        treatment:
            'Swab insects with alcohol, then follow with horticultural oil coverage every 7–10 days until clean.',
    },
];

const quickChecklist = [
    'Inspect leaves weekly with a flashlight to catch pests before populations explode.',
    'Refresh potting mix every 18–24 months to prevent compaction and fungus gnat hotels.',
    'Rotate the plant quarterly to keep growth symmetrical and avoid one-sided light stress.',
    'Use a moisture meter or chopstick test instead of calendar watering for better accuracy.',
];

export default function Issues() {
    return (
        <div className="space-y-8">
            <section className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                    Troubleshooting
                </p>
                <h2 className="mt-2 text-2xl font-serif">
                    Decode common stress signals
                </h2>
                <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                    Start with light, water, and airflow—small tweaks often stop
                    decline before it spreads plant-wide.
                </p>
                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    {stressSignals.map((issue) => (
                        <article
                            key={issue.title}
                            className="rounded-2xl border border-stone-200/70 bg-white/80 p-5 dark:border-stone-700/70 dark:bg-zinc-900/40"
                        >
                            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                                {issue.title}
                            </h3>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                                {issue.description}
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-stone-700 dark:text-stone-200">
                                {issue.actions.map((action) => (
                                    <li key={action} className="flex gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        <span>{action}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl border border-amber-200/60 bg-amber-50/70 p-6 shadow-sm dark:border-amber-400/20 dark:bg-amber-950/30">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-700 dark:text-amber-200">
                    Common Pests
                </p>
                <h2 className="mt-2 text-2xl font-serif text-amber-900 dark:text-amber-100">
                    Identify & treat infestations early
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {pests.map((pest) => (
                        <article
                            key={pest.name}
                            className="rounded-2xl border border-amber-200/70 bg-white/80 p-4 dark:border-amber-400/30 dark:bg-amber-950/40"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100">
                                    {pest.name}
                                </h3>
                                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-900/60 dark:text-amber-200">
                                    Monitor
                                </span>
                            </div>
                            <p className="mt-3 text-sm text-stone-700 dark:text-stone-200">
                                <strong className="font-semibold">
                                    Signs:
                                </strong>{' '}
                                {pest.signs}
                            </p>
                            <p className="mt-2 text-sm text-stone-700 dark:text-stone-200">
                                <strong className="font-semibold">
                                    Treatment:
                                </strong>{' '}
                                {pest.treatment}
                            </p>
                        </article>
                    ))}
                </div>
                <p className="mt-4 text-sm text-amber-900/80 dark:text-amber-100/90">
                    Always treat 2–3 times to catch newly hatched pests and keep
                    infected plants quarantined from the rest of your collection.
                </p>
            </section>

            <section className="rounded-3xl border border-stone-200/80 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-6 shadow-sm dark:border-stone-700/70 dark:from-emerald-900/20 dark:via-zinc-900 dark:to-emerald-900/10">
                <h2 className="text-2xl font-serif text-stone-900 dark:text-white">
                    Quick stability checklist
                </h2>
                <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                    Run through these steps when something feels off to rule out
                    the most common culprits before escalating to repotting or
                    propagation.
                </p>
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                    {quickChecklist.map((item) => (
                        <li
                            key={item}
                            className="rounded-2xl border border-stone-200/70 bg-white/80 px-4 py-3 text-sm text-stone-700 dark:border-stone-700/70 dark:bg-zinc-900/40 dark:text-stone-200"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
