'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import imageUrl from '@/app/lib/imageUrl';
import type { PlantCardData } from '@/app/components/home/types';
import type { PestSummaryData } from '@/app/pests/types';

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

function BugIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <ellipse
                cx="12"
                cy="13"
                rx="5"
                ry="6"
                stroke="currentColor"
                strokeWidth={1.4}
            />
            <path
                d="M12 7V4M9 5.5 10.5 7M15 5.5 13.5 7M4 11l3 1M20 11l-3 1M4 17l3-1M20 17l-3-1"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
            />
        </svg>
    );
}

function PlantRow({
    plant,
    onNavigate,
}: {
    plant: PlantCardData;
    onNavigate: () => void;
}) {
    const name = `${capitalize(plant.genus)} ${plant.species.replace(/-/g, ' ')}`;
    const href = plant.variety
        ? `/${plant.genus}/${plant.species}/${plant.variety}`
        : `/${plant.genus}/${plant.species}`;
    return (
        <li>
            <Link
                href={href}
                onClick={onNavigate}
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-stone-50 dark:hover:bg-zinc-800/60"
            >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-linear-to-br from-emerald-950 via-emerald-900 to-zinc-950">
                    {plant.imageKey ? (
                        <Image
                            src={imageUrl(plant.imageKey)}
                            alt=""
                            fill
                            sizes="40px"
                            className="object-cover"
                        />
                    ) : (
                        <span
                            aria-hidden="true"
                            className="flex h-full items-center justify-center font-serif text-lg text-emerald-200/50"
                        >
                            {capitalize(plant.genus).charAt(0)}
                        </span>
                    )}
                </div>
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-stone-900 dark:text-white">
                        {name}
                    </p>
                    {plant.commonNames[0] && (
                        <p className="truncate text-xs italic text-stone-500 dark:text-stone-400">
                            {plant.commonNames[0]}
                        </p>
                    )}
                </div>
            </Link>
        </li>
    );
}

function PestRow({
    pest,
    onNavigate,
}: {
    pest: PestSummaryData;
    onNavigate: () => void;
}) {
    return (
        <li>
            <Link
                href={`/pests/${pest.slug}`}
                onClick={onNavigate}
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-stone-50 dark:hover:bg-zinc-800/60"
            >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300">
                    <BugIcon className="size-5" />
                </div>
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-stone-900 dark:text-white">
                        {pest.name}
                    </p>
                    <p className="truncate text-xs italic text-stone-500 dark:text-stone-400">
                        {pest.categoryLabel}
                    </p>
                </div>
            </Link>
        </li>
    );
}

/**
 * Matches list + empty state shared by every quick-search surface (the
 * mobile nav's overlay and the desktop sidebar's inline dropdown) so both
 * agree on how a result and a miss are presented. Searches across sections
 * — plants and pests — surfacing both when a query matches each.
 */
export default function SearchResults({
    query,
    plantMatches,
    pestMatches,
    isError,
    onNavigate,
}: {
    query: string;
    plantMatches: PlantCardData[];
    pestMatches: PestSummaryData[];
    isError: boolean;
    onNavigate: () => void;
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'nav.search' });

    if (plantMatches.length === 0 && pestMatches.length === 0) {
        return (
            <p className="mt-3 rounded-3xl border border-dashed border-stone-300 bg-white px-5 py-6 text-center text-sm text-stone-500 dark:border-stone-700 dark:bg-zinc-900 dark:text-stone-400">
                {isError ? t('error') : t('noResults', { query })}
            </p>
        );
    }

    const showSectionLabels = plantMatches.length > 0 && pestMatches.length > 0;

    return (
        <div className="mt-3 overflow-hidden rounded-3xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-zinc-900">
            {plantMatches.length > 0 && (
                <div>
                    {showSectionLabels && (
                        <p className="px-4 pt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">
                            {t('sectionPlants')}
                        </p>
                    )}
                    <ul>
                        {plantMatches.map((plant) => (
                            <PlantRow
                                key={`${plant.genus}-${plant.species}-${plant.variety ?? ''}`}
                                plant={plant}
                                onNavigate={onNavigate}
                            />
                        ))}
                    </ul>
                </div>
            )}
            {pestMatches.length > 0 && (
                <div>
                    {showSectionLabels && (
                        <p className="border-t border-stone-100 px-4 pt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 dark:border-stone-800 dark:text-stone-500">
                            {t('sectionPests')}
                        </p>
                    )}
                    <ul>
                        {pestMatches.map((pest) => (
                            <PestRow
                                key={pest.slug}
                                pest={pest}
                                onNavigate={onNavigate}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
