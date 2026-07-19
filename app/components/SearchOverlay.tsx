'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { pestMatchesQuery } from '@/app/lib/searchPests';
import { plantMatchesQuery } from '@/app/lib/searchPlants';
import {
    useGetPestSummariesQuery,
    useGetPlantSummariesQuery,
} from '@/store/api/greenGuideApi';
import SearchResults from './SearchResults';

const MAX_PLANT_RESULTS = 5;
const MAX_PEST_RESULTS = 3;

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
    const { data: pests } = useGetPestSummariesQuery(undefined, {
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
    const plantMatches = useMemo(() => {
        if (!plants || !needle) {
            return [];
        }
        return plants
            .filter((plant) => plantMatchesQuery(plant, needle))
            .slice(0, MAX_PLANT_RESULTS);
    }, [plants, needle]);
    const pestMatches = useMemo(() => {
        if (!pests || !needle) {
            return [];
        }
        return pests
            .filter((pest) => pestMatchesQuery(pest, needle))
            .slice(0, MAX_PEST_RESULTS);
    }, [pests, needle]);

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
                    {needle && (
                        <SearchResults
                            query={query.trim()}
                            plantMatches={plantMatches}
                            pestMatches={pestMatches}
                            isError={Boolean(isError)}
                            onNavigate={onClose}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
