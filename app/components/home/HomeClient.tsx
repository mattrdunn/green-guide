'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GreenCard from '@/app/components/GreenCard';
import cn from '@/app/lib/cn';
import { categories, type CategoryId } from './categories';
import PlantCard from './PlantCard';
import type { PlantCardData } from './types';

type Filter = CategoryId | 'all';

export default function HomeClient({ plants }: { plants: PlantCardData[] }) {
    const { t } = useTranslation('translation', { keyPrefix: 'home' });
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState<Filter>('all');

    const filtered = useMemo(() => {
        const category = categories.find((entry) => entry.id === filter);
        const needle = query.trim().toLowerCase();

        return plants.filter((plant) => {
            if (category && !category.matches(plant.tags)) {
                return false;
            }
            if (!needle) {
                return true;
            }
            return [
                `${plant.genus} ${plant.species.replace(/-/g, ' ')}`,
                ...plant.commonNames,
            ]
                .join(' ')
                .toLowerCase()
                .includes(needle);
        });
    }, [plants, query, filter]);

    const scrollToPlants = () => {
        document
            .getElementById('common-plants')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const filterChips: Filter[] = ['all', ...categories.map((c) => c.id)];
    const chipLabel = (id: Filter) =>
        id === 'all' ? t('hero.filterAll') : t(`categories.items.${id}.title`);

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-2">
            <section id="search" className="scroll-mt-16">
                <GreenCard className="rounded-4xl p-8 sm:p-14 dark:from-emerald-950 dark:via-emerald-900/95 dark:to-emerald-950">
                    <div className="max-w-2xl space-y-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100">
                            <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                            {t('hero.badge', { count: plants.length })}
                        </span>
                        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
                            {t('hero.title')}
                        </h1>
                        <p className="max-w-xl text-base text-white/80">
                            {t('hero.subtitle')}
                        </p>
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                scrollToPlants();
                            }}
                            className="flex items-center gap-2 rounded-full border border-white/15 bg-emerald-950/50 p-1.5 pl-4 backdrop-blur"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-4 w-4 shrink-0 fill-none stroke-white/60 stroke-2"
                            >
                                <circle cx="11" cy="11" r="7" />
                                <path
                                    d="m20 20-3.5-3.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <input
                                type="search"
                                value={query}
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                placeholder={t('hero.searchPlaceholder')}
                                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="shrink-0 rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-lime-100"
                            >
                                {t('hero.searchButton')}
                            </button>
                        </form>
                        <div className="flex flex-wrap gap-2">
                            {filterChips.map((id) => (
                                <button
                                    key={id}
                                    type="button"
                                    onClick={() => setFilter(id)}
                                    aria-pressed={filter === id}
                                    className={cn(
                                        'rounded-full px-4 py-1.5 text-sm font-medium transition',
                                        filter === id
                                            ? 'bg-white text-emerald-950'
                                            : 'border border-white/20 text-white/85 hover:bg-white/10',
                                    )}
                                >
                                    {chipLabel(id)}
                                </button>
                            ))}
                        </div>
                    </div>
                </GreenCard>
            </section>

            <section id="categories" className="scroll-mt-16 space-y-8">
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">
                        {t('categories.eyebrow')}
                    </p>
                    <h2 className="max-w-md font-serif text-3xl sm:text-4xl">
                        {t('categories.title')}
                    </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            onClick={() => {
                                setFilter(category.id);
                                scrollToPlants();
                            }}
                            className="group overflow-hidden rounded-3xl border border-stone-200 bg-white text-left transition hover:-translate-y-0.5 hover:border-emerald-600/40 hover:shadow-lg dark:border-stone-800 dark:bg-zinc-900/60 dark:hover:border-emerald-500/40"
                        >
                            <div className="flex aspect-4/3 items-center justify-center bg-linear-to-br from-emerald-950 via-emerald-900 to-zinc-950">
                                <Image
                                    src={category.icon}
                                    alt=""
                                    width={36}
                                    height={36}
                                    className="opacity-50 transition group-hover:scale-110 group-hover:opacity-80"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-stone-900 dark:text-white">
                                    {t(`categories.items.${category.id}.title`)}
                                </h3>
                                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                                    {t(
                                        `categories.items.${category.id}.description`,
                                    )}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            <section id="common-plants" className="scroll-mt-16 space-y-8">
                <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">
                            {t('plants.eyebrow')}
                        </p>
                        <p className="text-xs text-stone-500 dark:text-stone-400">
                            {t('plants.count', { count: filtered.length })}
                        </p>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl">
                        {t('plants.title')}
                    </h2>
                </div>
                {filtered.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {filtered.map((plant) => (
                            <PlantCard
                                key={`${plant.genus}-${plant.species}`}
                                plant={plant}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-stone-300 px-6 py-16 text-center dark:border-stone-700">
                        <p className="max-w-sm text-sm text-stone-500 dark:text-stone-400">
                            {plants.length === 0
                                ? t('plants.dbEmpty')
                                : t('plants.empty')}
                        </p>
                        {plants.length > 0 && (
                            <button
                                type="button"
                                onClick={() => {
                                    setFilter('all');
                                    setQuery('');
                                }}
                                className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800"
                            >
                                {t('plants.reset')}
                            </button>
                        )}
                    </div>
                )}
            </section>
        </div>
    );
}
