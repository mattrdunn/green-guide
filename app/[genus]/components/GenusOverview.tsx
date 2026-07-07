'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import VitalMeter from '@/app/components/VitalMeter';
import cn from '@/app/lib/cn';
import globeIcon from '@/public/icons/globe.svg';
import waterDropIcon from '@/public/icons/water-drop.svg';
import sunnyIcon from '@/public/icons/sunny.svg';
import petsIcon from '@/public/icons/pets.svg';
import type { GenusCareCadenceItem } from '@/lib/db/models/Genus';
import type { GenusDetailDoc } from '@/lib/db/genus';

/** Toxicity has no stored score — derive meter fill from the 3-step level,
 * same convention as the species HeaderCard. */
const toxicitySeverity = {
    'non-toxic': 0,
    'mildly-toxic': 1,
    toxic: 3,
} as const;

const intervalChipStyles: Record<GenusCareCadenceItem['interval'], string> = {
    weekly:
        'bg-emerald-500/15 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300',
    monthly:
        'bg-indigo-500/15 text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-300',
    seasonal:
        'bg-violet-500/15 text-violet-700 dark:bg-violet-400/15 dark:text-violet-300',
    'as-needed':
        'bg-amber-500/15 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300',
};

export default function GenusOverview({ genus }: { genus: GenusDetailDoc }) {
    const { t } = useTranslation('translation', { keyPrefix: 'genusClient' });
    // Interval labels (Weekly/Monthly/…) are shared with the species Overview tab.
    const { t: tShared } = useTranslation('translation', {
        keyPrefix: 'overview.careCadence',
    });

    const vitalCards = [
        {
            label: t('vitals.zone'),
            icon: globeIcon,
            value: genus.vitals.hardinessZone.value,
            caption: genus.vitals.hardinessZone.caption,
            score: undefined,
            max: 5,
        },
        {
            label: t('vitals.light'),
            icon: sunnyIcon,
            value: genus.vitals.light.value,
            caption: genus.vitals.light.caption,
            score: genus.vitals.light.score,
            max: 5,
        },
        {
            label: t('vitals.watering'),
            icon: waterDropIcon,
            value: genus.vitals.watering.value,
            caption: genus.vitals.watering.caption,
            score: genus.vitals.watering.score,
            max: 5,
        },
        {
            label: t('vitals.toxicity'),
            icon: petsIcon,
            value: genus.vitals.toxicity.value,
            caption: genus.vitals.toxicity.caption,
            score: toxicitySeverity[genus.vitals.toxicity.level],
            max: 3,
        },
    ];

    return (
        <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {vitalCards.map((vital) => (
                    <article
                        key={vital.label}
                        className="rounded-3xl border border-stone-200/80 bg-white/90 p-5 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40"
                    >
                        <div className="inline-flex rounded-2xl bg-emerald-50 p-2 dark:bg-emerald-900/30">
                            <Image src={vital.icon} alt="" className="h-7 w-7" />
                        </div>
                        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-stone-500">
                            {vital.label}
                        </p>
                        <p className="mt-1 text-xl font-semibold">
                            {vital.value}
                        </p>
                        {vital.score !== undefined && (
                            <div className="mt-3">
                                <VitalMeter score={vital.score} max={vital.max} />
                            </div>
                        )}
                        {vital.caption && (
                            <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                                {vital.caption}
                            </p>
                        )}
                    </article>
                ))}
            </div>

            <section className="space-y-4 rounded-[28px] border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                    {t('nativeRange.title')}
                </p>
                <p className="max-w-3xl text-sm leading-relaxed text-stone-700 dark:text-stone-200">
                    {genus.nativeRange.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {genus.nativeRange.regions.map((region) => (
                        <span
                            key={region}
                            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                        >
                            {region}
                        </span>
                    ))}
                </div>
                <div className="flex aspect-16/6 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-950 via-emerald-900 to-zinc-950">
                    <div className="flex flex-col items-center gap-1">
                        <span
                            aria-hidden="true"
                            className="font-serif text-4xl text-emerald-200/40"
                        >
                            ○
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-200/50">
                            {t('nativeRange.mapComing')}
                        </span>
                    </div>
                </div>
            </section>

            <section>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                    {t('careCadence.title')}
                </p>
                <ul className="mt-4 space-y-2 rounded-[28px] border border-stone-200/80 bg-white/90 p-4 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40 sm:p-6">
                    {genus.careCadence.map((item) => (
                        <li
                            key={item.task}
                            className="flex items-center gap-4 rounded-2xl px-2 py-2.5"
                        >
                            <span className="size-2 shrink-0 rounded-full bg-emerald-500" />
                            <span
                                className={cn(
                                    'rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide whitespace-nowrap',
                                    intervalChipStyles[item.interval],
                                )}
                            >
                                {tShared(`intervals.${item.interval}`)}
                            </span>
                            <p className="text-sm text-stone-700 dark:text-stone-200">
                                {item.task}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
