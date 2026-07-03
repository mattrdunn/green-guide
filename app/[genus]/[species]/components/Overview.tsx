'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import AccordionItem from './AccordionItem';
import globeIcon from '@/public/icons/globe.svg';
import waterDropIcon from '@/public/icons/water-drop.svg';
import sunnyIcon from '@/public/icons/sunny.svg';
import meterIcon from '@/public/icons/speed.svg';
import type { PlantVitals, PlantOverview } from '@/lib/db/models/Plant';

type OverviewProps = {
    vitals: PlantVitals;
    overview: PlantOverview;
};

export default function Overview({ vitals, overview }: OverviewProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'overview' });

    const vitalCards = [
        { label: 'USDA Zone', icon: globeIcon, fact: vitals.hardinessZone },
        { label: 'Light', icon: sunnyIcon, fact: vitals.light },
        { label: 'Watering', icon: waterDropIcon, fact: vitals.watering },
        { label: 'Difficulty', icon: meterIcon, fact: vitals.difficulty },
    ];

    const accordionSections = [
        { label: 'Height', entry: overview.height },
        { label: 'Soil', entry: overview.soil },
        { label: 'Semi-hydro Compatible', entry: overview.semiHydro },
        { label: 'Fertilizer', entry: overview.fertilizer },
        { label: 'Fertilizer Frequency', entry: overview.fertilizerFrequency },
        { label: 'Native Habitat', entry: overview.nativeHabitat },
        { label: 'Humidity', entry: overview.humidity },
        { label: 'Temperature', entry: overview.temperature },
        { label: 'Grow Season', entry: overview.growSeason },
    ];

    return (
        <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {vitalCards.map((vital) => (
                    <article
                        key={vital.label}
                        className="rounded-3xl border border-stone-200/80 bg-white/90 p-4 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40"
                    >
                        <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-emerald-50 p-2 dark:bg-emerald-900/30">
                                <Image
                                    src={vital.icon}
                                    alt={vital.label}
                                    className="h-8 w-8"
                                />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                                    {vital.label}
                                </p>
                                <p className="text-lg font-semibold">
                                    {vital.fact.value}
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
                            {vital.fact.caption}
                        </p>
                    </article>
                ))}
            </div>

            <div className="grid gap-6 rounded-[28px] border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                        {t('dailyRhythm.label')}
                    </p>
                    <h3 className="text-2xl font-serif">
                        {overview.dailyRhythm.heading}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        {overview.dailyRhythm.body}
                    </p>
                    <ul className="space-y-3 text-sm text-stone-700 dark:text-stone-200">
                        {overview.dailyRhythm.highlights.map((tip) => (
                            <li key={tip} className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                                {tip}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-3xl border border-stone-200/80 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-6 dark:border-stone-700/70 dark:from-emerald-900/20 dark:via-zinc-900 dark:to-emerald-900/10">
                    <h4 className="text-sm uppercase tracking-[0.4em] text-stone-500">
                        {t('weeklyChecklist.title')}
                    </h4>
                    <ul className="mt-4 space-y-4 text-sm text-stone-700 dark:text-stone-200">
                        {overview.weeklyChecklist.map((item) => (
                            <li
                                key={item}
                                className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3 dark:border-stone-700/70 dark:bg-zinc-900/40"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="grid gap-4">
                {accordionSections.map((section) => (
                    <AccordionItem
                        key={section.label}
                        label={section.label}
                        value={section.entry.value}
                    >
                        {section.entry.detail}
                    </AccordionItem>
                ))}
            </div>
        </div>
    );
}
