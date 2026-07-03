'use client';

import type { PlantIssues } from '@/lib/db/models/Plant';

export default function Issues({ issues }: { issues: PlantIssues }) {
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
                    {issues.stressSignals.map((issue) => (
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
                    {issues.pests.map((pest) => (
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
                    {issues.stabilityChecklist.map((item) => (
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
