'use client';

import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from '@/app/lib/cn';
import PestCard from './PestCard';
import type { PestSummaryData } from '../types';

type Filter = string | 'all';

export default function PestsClient({ pests }: { pests: PestSummaryData[] }) {
    const { t } = useTranslation('translation', { keyPrefix: 'pests' });
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState<Filter>('all');

    const searching = query.trim().length > 0;

    const categories = useMemo(() => {
        const seen = new Map<string, string>();
        for (const pest of pests) {
            if (!seen.has(pest.category)) {
                seen.set(pest.category, pest.categoryLabel);
            }
        }
        return Array.from(seen, ([id, label]) => ({ id, label }));
    }, [pests]);

    const filtered = useMemo(() => {
        const needle = query.trim().toLowerCase();
        return pests.filter((pest) => {
            const matchesCategory =
                filter === 'all' || pest.category === filter;
            const matchesQuery =
                !needle ||
                pest.name.toLowerCase().includes(needle) ||
                pest.tag.toLowerCase().includes(needle) ||
                pest.signs.toLowerCase().includes(needle);
            return matchesCategory && matchesQuery;
        });
    }, [pests, query, filter]);

    const chips: { id: Filter; label: string }[] = [
        { id: 'all', label: t('filterAll') },
        ...categories,
    ];

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-2">
            <div className="flex max-w-2xl flex-col gap-4">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {t('badge', { count: pests.length })}
                </span>
                <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
                    {t('title')}
                </h1>
                <p className="text-base text-stone-600 dark:text-stone-300">
                    {t('subtitle')}
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <form
                    onSubmit={(event) => event.preventDefault()}
                    className="flex w-full max-w-lg items-center gap-3 rounded-full border border-stone-300 bg-white px-5 transition focus-within:border-emerald-600/60 dark:border-stone-700 dark:bg-zinc-900"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 shrink-0 fill-none stroke-stone-400 stroke-2"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                    </svg>
                    <input
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={t('searchPlaceholder')}
                        className="w-full bg-transparent py-3 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none dark:text-white"
                    />
                </form>
                <div className="flex flex-wrap gap-2">
                    {chips.map((chip) => (
                        <button
                            key={chip.id}
                            type="button"
                            onClick={() => setFilter(chip.id)}
                            aria-pressed={filter === chip.id}
                            className={cn(
                                'rounded-full px-4 py-1.5 text-sm font-medium transition',
                                filter === chip.id
                                    ? 'bg-emerald-600 text-white'
                                    : 'border border-stone-200 text-stone-600 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-zinc-800',
                            )}
                        >
                            {chip.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-stone-700 dark:text-stone-200">
                    {searching
                        ? t('searchTitle', { query: query.trim() })
                        : t('resultsTitle')}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                    {t('count', { count: filtered.length })}
                </p>
            </div>

            {filtered.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((pest) => (
                        <PestCard key={pest.slug} pest={pest} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-stone-300 px-6 py-16 text-center dark:border-stone-700">
                    <p className="max-w-sm text-sm text-stone-500 dark:text-stone-400">
                        {pests.length === 0 ? t('dbEmpty') : t('empty')}
                    </p>
                    {pests.length > 0 && (
                        <button
                            type="button"
                            onClick={() => {
                                setFilter('all');
                                setQuery('');
                            }}
                            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800"
                        >
                            {t('reset')}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
