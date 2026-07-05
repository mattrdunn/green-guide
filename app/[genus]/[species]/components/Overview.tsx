'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import AccordionItem from './AccordionItem';
import VitalMeter from './VitalMeter';
import cn from '@/app/lib/cn';
import globeIcon from '@/public/icons/globe.svg';
import waterDropIcon from '@/public/icons/water-drop.svg';
import sunnyIcon from '@/public/icons/sunny.svg';
import meterIcon from '@/public/icons/speed.svg';
import type {
    PlantVitals,
    PlantOverview,
    CareCadenceItem,
} from '@/lib/db/models/Plant';

type OverviewProps = {
    vitals: PlantVitals;
    overview: PlantOverview;
};

const ZONE_MIN = 1;
const ZONE_MAX = 13;

const intervalChipStyles: Record<CareCadenceItem['interval'], string> = {
    weekly: 'bg-emerald-500/15 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300',
    monthly:
        'bg-indigo-500/15 text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-300',
    seasonal:
        'bg-violet-500/15 text-violet-700 dark:bg-violet-400/15 dark:text-violet-300',
    'as-needed':
        'bg-amber-500/15 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300',
};

function ZoneRangeBar({
    zoneMin,
    zoneMax,
    coldestLabel,
    warmestLabel,
}: {
    zoneMin: number;
    zoneMax: number;
    coldestLabel: string;
    warmestLabel: string;
}) {
    const span = ZONE_MAX - ZONE_MIN + 1;
    const left = ((zoneMin - ZONE_MIN) / span) * 100;
    const width = ((zoneMax - zoneMin + 1) / span) * 100;

    return (
        <div>
            <div className="relative h-1.5 rounded-full bg-stone-200 dark:bg-stone-700">
                <span
                    className="absolute inset-y-0 rounded-full bg-emerald-500 dark:bg-emerald-400"
                    style={{ left: `${left}%`, width: `${width}%` }}
                />
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-stone-500 dark:text-stone-400">
                <span>{coldestLabel}</span>
                <span>{warmestLabel}</span>
            </div>
        </div>
    );
}

export default function Overview({ vitals, overview }: OverviewProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'overview' });

    const vitalCards = [
        { label: 'USDA Zone', icon: globeIcon, fact: vitals.hardinessZone },
        {
            label: 'Light',
            icon: sunnyIcon,
            fact: vitals.light,
            score: vitals.light.score,
        },
        {
            label: 'Watering',
            icon: waterDropIcon,
            fact: vitals.watering,
            score: vitals.watering.score,
        },
        {
            label: 'Difficulty',
            icon: meterIcon,
            fact: vitals.difficulty,
            score: vitals.difficulty.score,
        },
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
                        className="rounded-3xl border border-stone-200/80 bg-white/90 p-5 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40"
                    >
                        <div className="inline-flex rounded-2xl bg-emerald-50 p-2 dark:bg-emerald-900/30">
                            <Image
                                src={vital.icon}
                                alt=""
                                className="h-7 w-7"
                            />
                        </div>
                        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-stone-500">
                            {vital.label}
                        </p>
                        <p className="mt-1 text-xl font-semibold">
                            {vital.fact.value}
                        </p>
                        <div className="mt-3">
                            {vital.score !== undefined ? (
                                <VitalMeter score={vital.score} />
                            ) : (
                                vitals.hardinessZone.zoneMin !== undefined &&
                                vitals.hardinessZone.zoneMax !== undefined && (
                                    <ZoneRangeBar
                                        zoneMin={vitals.hardinessZone.zoneMin}
                                        zoneMax={vitals.hardinessZone.zoneMax}
                                        coldestLabel={t('zoneScale.coldest')}
                                        warmestLabel={t('zoneScale.warmest')}
                                    />
                                )
                            )}
                        </div>
                        <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                            {vital.fact.caption}
                        </p>
                    </article>
                ))}
            </div>

            <section>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                    {t('careCadence.title')}
                </p>
                <ul className="mt-4 space-y-2 rounded-[28px] border border-stone-200/80 bg-white/90 p-4 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40 sm:p-6">
                    {overview.careCadence.map((item) => (
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
                                {t(`careCadence.intervals.${item.interval}`)}
                            </span>
                            <p className="text-sm text-stone-700 dark:text-stone-200">
                                {item.task}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            <div className="space-y-4 rounded-[28px] border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
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
