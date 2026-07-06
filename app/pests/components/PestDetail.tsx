'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import GreenCard from '@/app/components/GreenCard';
import VitalMeter from '@/app/components/VitalMeter';
import type { PlantCardData } from '@/app/components/home/types';
import type { PestDetailDoc } from '@/lib/db/pests';

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

export default function PestDetail({
    pest,
    plants,
}: {
    pest: PestDetailDoc;
    plants: PlantCardData[];
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'pestDetail' });

    const affectedPlants = pest.affects.map((ref) => {
        const plant = plants.find(
            (p) =>
                p.genus === ref.genus &&
                p.species === ref.species &&
                (p.variety ?? null) === (ref.variety ?? null),
        );
        const label = plant
            ? `${capitalize(plant.genus)} — ${plant.commonNames[0] ?? plant.species.replace(/-/g, ' ')}`
            : `${capitalize(ref.genus)} ${ref.species.replace(/-/g, ' ')}`;
        const href = ref.variety
            ? `/${ref.genus}/${ref.species}/${ref.variety}`
            : `/${ref.genus}/${ref.species}`;
        return { ...ref, label, href, clickable: Boolean(plant) };
    });

    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-2 pb-12 pt-0 sm:px-6 sm:pb-16 sm:pt-8 lg:px-0">
            <Link
                href="/pests"
                className="w-fit text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200"
            >
                ← {t('backLink')}
            </Link>

            <GreenCard>
                <div className="space-y-5">
                    <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                        {pest.categoryLabel}
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-200" />
                    </span>
                    <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
                        {pest.name}
                    </h1>
                    <p className="max-w-2xl text-base text-white/90 sm:text-lg">
                        {pest.signs}
                    </p>
                    <div className="flex max-w-xs items-center gap-4">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                            {t('severityLabel')}
                        </span>
                        <VitalMeter variant="hero" score={pest.severity} />
                    </div>
                </div>
            </GreenCard>

            <section className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                    {t('identification')}
                </p>
                <p className="mt-3 text-base text-stone-700 dark:text-stone-200">
                    {pest.identification}
                </p>
            </section>

            <section className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                    {t('lifeCycle')}
                </p>
                <p className="mt-3 text-base text-stone-700 dark:text-stone-200">
                    {pest.lifeCycle}
                </p>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
                <article className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                        {t('organicTreatment')}
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-stone-700 dark:text-stone-200">
                        {pest.treatmentOrganic.map((tip) => (
                            <li key={tip} className="flex gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                                {tip}
                            </li>
                        ))}
                    </ul>
                </article>
                <article className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                        {t('chemicalTreatment')}
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-stone-700 dark:text-stone-200">
                        {pest.treatmentChemical.map((tip) => (
                            <li key={tip} className="flex gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                                {tip}
                            </li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                    {t('prevention')}
                </p>
                <ul className="mt-4 space-y-3 text-sm text-stone-700 dark:text-stone-200">
                    {pest.prevention.map((tip) => (
                        <li key={tip} className="flex gap-3">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                            {tip}
                        </li>
                    ))}
                </ul>
            </section>

            {affectedPlants.length > 0 && (
                <section className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                        {t('commonlyAffects')}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {affectedPlants.map((plant) =>
                            plant.clickable ? (
                                <Link
                                    key={`${plant.genus}-${plant.species}-${plant.variety ?? ''}`}
                                    href={plant.href}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3.5 py-1.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
                                >
                                    {plant.label} →
                                </Link>
                            ) : (
                                <span
                                    key={`${plant.genus}-${plant.species}-${plant.variety ?? ''}`}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 px-3.5 py-1.5 text-sm font-medium text-stone-500 dark:border-stone-700 dark:text-stone-400"
                                >
                                    {plant.label}
                                </span>
                            ),
                        )}
                    </div>
                </section>
            )}
        </div>
    );
}
