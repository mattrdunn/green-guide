'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import imageUrl from '@/app/lib/imageUrl';
import { plantMatchesQuery } from '@/app/lib/searchPlants';
import { useGetPlantSummariesQuery } from '@/store/api/templateApi';

const MAX_RESULTS = 8;

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

/**
 * Drop-down search panel for pages without the hero search bar. Sits just
 * below the fixed nav, dims the rest of the page, and lists live matches
 * as the user types.
 */
export default function SearchOverlay({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'nav.search' });
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const { data: plants, isError } = useGetPlantSummariesQuery(undefined, {
        skip: !open,
    });

    useEffect(() => {
        if (!open) {
            return;
        }
        setQuery('');
        inputRef.current?.focus();
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = overflow;
        };
    }, [open]);

    useEffect(() => {
        if (!open) {
            return;
        }
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, onClose]);

    const needle = query.trim().toLowerCase();
    const matches = useMemo(() => {
        if (!plants || !needle) {
            return [];
        }
        return plants
            .filter((plant) => plantMatchesQuery(plant, needle))
            .slice(0, MAX_RESULTS);
    }, [plants, needle]);

    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-x-0 bottom-0 top-12 z-40">
            <button
                type="button"
                aria-label={t('close')}
                onClick={onClose}
                className="absolute inset-0 h-full w-full cursor-default bg-black/30"
            />
            <div className="relative border-b border-stone-200/60 bg-white/95 shadow-xl backdrop-blur-md dark:border-stone-800/60 dark:bg-zinc-950/95">
                <div className="mx-auto w-full max-w-2xl px-4 py-4">
                    <form
                        role="search"
                        onSubmit={(event) => event.preventDefault()}
                        className="flex items-center gap-3 rounded-full border border-stone-300 bg-white px-5 transition focus-within:border-emerald-600/60 dark:border-stone-700 dark:bg-zinc-900"
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
                            ref={inputRef}
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={t('placeholder')}
                            className="w-full bg-transparent py-3 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none dark:text-white"
                        />
                    </form>
                    {needle &&
                        (matches.length > 0 ? (
                            <ul className="mt-3 overflow-hidden rounded-3xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-zinc-900">
                                {matches.map((plant) => {
                                    const name = `${capitalize(plant.genus)} ${plant.species.replace(/-/g, ' ')}`;
                                    return (
                                        <li
                                            key={`${plant.genus}-${plant.species}`}
                                        >
                                            <Link
                                                href={`/${plant.genus}/${plant.species}`}
                                                onClick={onClose}
                                                className="flex items-center gap-3 px-4 py-3 transition hover:bg-stone-50 dark:hover:bg-zinc-800/60"
                                            >
                                                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-linear-to-br from-emerald-950 via-emerald-900 to-zinc-950">
                                                    {plant.imageKey ? (
                                                        <Image
                                                            src={imageUrl(
                                                                plant.imageKey,
                                                            )}
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
                                                            {capitalize(
                                                                plant.genus,
                                                            ).charAt(0)}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="truncate text-sm font-semibold text-stone-900 dark:text-white">
                                                        {name}
                                                    </p>
                                                    {plant.commonNames[0] && (
                                                        <p className="truncate text-xs italic text-stone-500 dark:text-stone-400">
                                                            {
                                                                plant
                                                                    .commonNames[0]
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p className="mt-3 rounded-3xl border border-dashed border-stone-300 px-5 py-6 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-400">
                                {isError
                                    ? t('error')
                                    : t('noResults', { query: query.trim() })}
                            </p>
                        ))}
                </div>
            </div>
        </div>
    );
}
