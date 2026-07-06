'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import imageUrl from '@/app/lib/imageUrl';
import type { PlantCardData } from '@/app/components/home/types';

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

/**
 * Matches list + empty state shared by every quick-search surface (the
 * mobile nav's overlay and the desktop sidebar's inline dropdown) so both
 * agree on how a result and a miss are presented.
 */
export default function SearchResults({
    query,
    matches,
    isError,
    onNavigate,
}: {
    query: string;
    matches: PlantCardData[];
    isError: boolean;
    onNavigate: () => void;
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'nav.search' });

    if (matches.length === 0) {
        return (
            <p className="mt-3 rounded-3xl border border-dashed border-stone-300 px-5 py-6 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-400">
                {isError ? t('error') : t('noResults', { query })}
            </p>
        );
    }

    return (
        <ul className="mt-3 overflow-hidden rounded-3xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-zinc-900">
            {matches.map((plant) => {
                const name = `${capitalize(plant.genus)} ${plant.species.replace(/-/g, ' ')}`;
                const href = plant.variety
                    ? `/${plant.genus}/${plant.species}/${plant.variety}`
                    : `/${plant.genus}/${plant.species}`;
                return (
                    <li key={`${plant.genus}-${plant.species}-${plant.variety ?? ''}`}>
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
            })}
        </ul>
    );
}
