'use client';

import { useTranslation } from 'react-i18next';
import type { PlantCare } from '@/lib/db/models/Plant';

export default function Care({ care }: { care: PlantCare }) {
    const { t } = useTranslation('translation', { keyPrefix: 'care' });

    return (
        <div className="space-y-8">
            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {care.pillars.map((pillar) => (
                    <article
                        key={pillar.label}
                        className="rounded-3xl border border-stone-200/80 bg-white/90 p-5 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40"
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                            {pillar.label}
                        </p>
                        <p className="mt-2 text-xl font-semibold text-stone-900 dark:text-stone-50">
                            {pillar.stat}
                        </p>
                        <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                            {pillar.detail}
                        </p>
                    </article>
                ))}
            </section>

            <section className="grid gap-6 rounded-[28px] border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40 md:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                        {t('wateringRhythm.label')}
                    </p>
                    <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-50">
                        {care.wateringRhythm.heading}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        {care.wateringRhythm.body}
                    </p>
                    <ul className="space-y-3 text-sm text-stone-700 dark:text-stone-200">
                        {care.wateringRhythm.tips.map((tip) => (
                            <li key={tip} className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                                {tip}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-3xl border border-stone-200/80 bg-linear-to-br from-emerald-50 via-white to-lime-50 p-6 dark:border-stone-700/70 dark:from-emerald-900/20 dark:via-zinc-900 dark:to-emerald-900/20">
                    <h4 className="text-sm uppercase tracking-[0.4em] text-stone-500">
                        {t('seasonalCadence')}
                    </h4>
                    <div className="mt-4 space-y-4">
                        {care.seasonalWatering.map((window) => (
                            <div
                                key={window.season}
                                className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/50"
                            >
                                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                                    {window.season}
                                </p>
                                <p className="mt-1 text-lg font-semibold text-stone-900 dark:text-stone-100">
                                    {window.cadence}
                                </p>
                                <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                                    {window.tip}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {care.routines.map((routine) => (
                    <article
                        key={routine.interval}
                        className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40"
                    >
                        <h4 className="text-sm uppercase tracking-[0.4em] text-stone-500">
                            {t(`routines.${routine.interval}`)}
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm text-stone-700 dark:text-stone-200">
                            {routine.steps.map((step) => (
                                <li key={step} className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}

                <article className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                    <h4 className="text-sm uppercase tracking-[0.4em] text-stone-500">
                        {t('toolkit')}
                    </h4>
                    <ul className="mt-4 space-y-4 text-sm text-stone-700 dark:text-stone-200">
                        {care.toolkit.map((tool) => (
                            <li
                                key={tool.item}
                                className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3 dark:border-stone-700/70 dark:bg-zinc-900/40"
                            >
                                <p className="font-semibold text-stone-900 dark:text-stone-50">
                                    {tool.item}
                                </p>
                                <p className="mt-1 text-xs text-stone-600 dark:text-stone-300">
                                    {tool.note}
                                </p>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </div>
    );
}
