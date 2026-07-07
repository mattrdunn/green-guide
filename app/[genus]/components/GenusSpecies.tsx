'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import cn from '@/app/lib/cn';
import imageUrl from '@/app/lib/imageUrl';
import type { GenusSpeciesItem } from './types';

type Filter = 'all' | 'species' | 'cultivar';

function StatTile({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-stone-200 px-3 py-2 dark:border-stone-800">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                {label}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-stone-800 dark:text-stone-100">
                {value}
            </p>
        </div>
    );
}

const itemKey = (item: GenusSpeciesItem) => `${item.species}-${item.variety ?? ''}`;

export default function GenusSpecies({
    species,
}: {
    species: GenusSpeciesItem[];
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'genusClient' });
    const [filter, setFilter] = useState<Filter>('all');
    const [expandedKey, setExpandedKey] = useState<string | null>(null);

    const filtered = useMemo(
        () =>
            species.filter(
                (item) => filter === 'all' || item.type === filter,
            ),
        [species, filter],
    );

    const filterChips: { id: Filter; label: string }[] = [
        { id: 'all', label: t('speciesGrid.filterAll') },
        { id: 'species', label: t('speciesGrid.filterSpecies') },
        { id: 'cultivar', label: t('speciesGrid.filterCultivar') },
    ];

    if (species.length === 0) {
        return (
            <div className="rounded-3xl border border-dashed border-stone-300 px-6 py-16 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-400">
                {t('speciesGrid.empty')}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm text-stone-500 dark:text-stone-400">
                    {t('speciesGrid.shown', { count: filtered.length })}
                </span>
                <div className="flex gap-2">
                    {filterChips.map((chip) => (
                        <button
                            key={chip.id}
                            type="button"
                            onClick={() => setFilter(chip.id)}
                            aria-pressed={filter === chip.id}
                            className={cn(
                                'rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition',
                                filter === chip.id
                                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200'
                                    : 'border-stone-200/80 text-stone-700 hover:bg-stone-100 dark:border-stone-700/70 dark:text-stone-200 dark:hover:bg-stone-800',
                            )}
                        >
                            {chip.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((item) => {
                    const key = itemKey(item);
                    const expanded = expandedKey === key;
                    const name = `${item.species}${item.variety ? ` '${item.variety.replace(/-/g, ' ')}'` : ''}`;
                    const href = item.variety
                        ? `/${item.genus}/${item.species}/${item.variety}`
                        : `/${item.genus}/${item.species}`;

                    return (
                        <div
                            key={key}
                            className={cn(
                                'overflow-hidden rounded-3xl border border-stone-200/80 bg-white/90 transition dark:border-stone-700/70 dark:bg-zinc-900/40',
                                expanded &&
                                    'border-emerald-600/40 shadow-lg dark:border-emerald-500/40 sm:col-span-2 lg:col-span-3',
                            )}
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setExpandedKey(expanded ? null : key)
                                }
                                aria-expanded={expanded}
                                className={cn(
                                    'flex w-full cursor-pointer text-left',
                                    expanded
                                        ? 'flex-col gap-6 p-5 sm:flex-row sm:items-stretch'
                                        : 'flex-col',
                                )}
                            >
                                <div
                                    className={cn(
                                        'relative shrink-0 overflow-hidden bg-linear-to-br from-emerald-950 via-emerald-900 to-zinc-950',
                                        expanded
                                            ? 'aspect-square w-full rounded-2xl sm:w-60'
                                            : 'aspect-4/3 w-full',
                                    )}
                                >
                                    {item.imageKey ? (
                                        <Image
                                            src={imageUrl(item.imageKey)}
                                            alt={item.imageAlt ?? name}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center">
                                            <span
                                                aria-hidden="true"
                                                className="font-serif text-5xl text-emerald-200/40"
                                            >
                                                {item.species
                                                    .charAt(0)
                                                    .toUpperCase()}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div
                                    className={cn(
                                        expanded ? 'flex-1 py-1' : 'p-5',
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
                                            item.type === 'species'
                                                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                                                : 'bg-indigo-500/15 text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-300',
                                        )}
                                    >
                                        {item.type === 'species'
                                            ? t('speciesGrid.badgeSpecies')
                                            : t('speciesGrid.badgeCultivar')}
                                    </span>
                                    <h3 className="mt-2.5 font-serif text-lg text-stone-900 italic dark:text-white">
                                        {name}
                                    </h3>
                                    {item.commonName && (
                                        <p className="mt-0.5 text-sm text-stone-500 italic dark:text-stone-400">
                                            {item.commonName}
                                        </p>
                                    )}
                                    <p
                                        className={cn(
                                            'mt-2.5 text-sm text-stone-600 dark:text-stone-300',
                                            !expanded && 'line-clamp-2',
                                        )}
                                    >
                                        {item.description}
                                    </p>

                                    <div className="mt-4 grid grid-cols-2 gap-2">
                                        <StatTile
                                            label={t('speciesGrid.light')}
                                            value={item.light}
                                        />
                                        <StatTile
                                            label={t('speciesGrid.water')}
                                            value={item.watering}
                                        />
                                    </div>

                                    {expanded && (
                                        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-dashed border-stone-200/80 pt-4 dark:border-stone-700/70">
                                            <StatTile
                                                label={t(
                                                    'speciesGrid.humidity',
                                                )}
                                                value={item.humidity}
                                            />
                                            <StatTile
                                                label={t('speciesGrid.zone')}
                                                value={item.zone}
                                            />
                                            <StatTile
                                                label={t('speciesGrid.origin')}
                                                value={item.origin}
                                            />
                                        </div>
                                    )}
                                </div>
                            </button>

                            {expanded && (
                                <div className="border-t border-stone-200/80 px-5 py-3 dark:border-stone-700/70">
                                    <Link
                                        href={href}
                                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200"
                                    >
                                        {t('speciesGrid.viewProfile')} →
                                    </Link>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
