'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from '@/app/lib/cn';
import { plantMatchesQuery } from '@/app/lib/searchPlants';
import { useThemeMode } from '@/app/lib/useThemeMode';
import { useGetPlantSummariesQuery } from '@/store/api/templateApi';
import SearchResults from './SearchResults';

const MAX_RESULTS = 8;

function LeafIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M5 19c7 0 13-5.5 13-13.5V5c-8 0-13 5-13 13v1Z"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinejoin="round"
            />
            <path
                d="M6 18c2-4 5-7 10-9"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
            />
        </svg>
    );
}

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

/**
 * Brand, quick search, primary nav, and appearance toggle — the sidebar's
 * actual content, shared by the persistent desktop `SideNav` and the mobile
 * drawer so neither can drift out of sync in behavior.
 */
export default function SideNavContent({
    onNavigate,
}: {
    /** Called after any link is followed — lets the mobile drawer close itself. */
    onNavigate?: () => void;
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'sideNav' });
    const { t: tSearch } = useTranslation('translation', {
        keyPrefix: 'nav.search',
    });
    const { mode, toggle } = useThemeMode();
    const pathname = usePathname();
    const [query, setQuery] = useState('');

    const { data: plants, isError } = useGetPlantSummariesQuery();

    const needle = query.trim().toLowerCase();
    const matches = useMemo(() => {
        if (!plants || !needle) {
            return [];
        }
        return plants
            .filter((plant) => plantMatchesQuery(plant, needle))
            .slice(0, MAX_RESULTS);
    }, [plants, needle]);

    // Navigating away (e.g. via a result click) should close the dropdown.
    useEffect(() => {
        setQuery('');
    }, [pathname]);

    const handleNavigate = () => {
        setQuery('');
        onNavigate?.();
    };

    const pestsActive = pathname === '/pests' || pathname.startsWith('/pests/');
    const homeActive = !pestsActive;

    const navLinkClass = (active: boolean) =>
        cn(
            'flex items-center gap-2.5 rounded-full px-3 py-2.5 text-sm transition',
            active
                ? 'bg-emerald-50 font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                : 'font-medium text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-zinc-900',
        );

    return (
        <>
            <Link
                href="/"
                onClick={onNavigate}
                className="text-sm font-semibold tracking-[0.35em] text-stone-700 transition hover:text-stone-900 dark:text-stone-200 dark:hover:text-white"
            >
                {t('brand')}
            </Link>

            <div className="relative">
                <form
                    role="search"
                    onSubmit={(event) => event.preventDefault()}
                    className="flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 transition focus-within:border-emerald-600/60 dark:border-stone-700 dark:bg-zinc-900"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 shrink-0 fill-none stroke-stone-400 stroke-2"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                    </svg>
                    <input
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={tSearch('placeholder')}
                        className="w-full bg-transparent py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none dark:text-white"
                    />
                </form>
                {needle && (
                    <div className="absolute inset-x-0 top-full z-40 mt-2 max-h-[60vh] overflow-y-auto">
                        <SearchResults
                            query={query.trim()}
                            matches={matches}
                            isError={Boolean(isError)}
                            onNavigate={handleNavigate}
                        />
                    </div>
                )}
            </div>

            <nav className="flex flex-col gap-1">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500">
                    {t('browse')}
                </p>
                <Link
                    href="/"
                    onClick={onNavigate}
                    className={navLinkClass(homeActive)}
                >
                    <LeafIcon className="size-[18px]" />
                    {t('home')}
                </Link>
                <Link
                    href="/pests"
                    onClick={onNavigate}
                    className={navLinkClass(pestsActive)}
                >
                    <BugIcon className="size-[18px]" />
                    {t('pests')}
                </Link>
            </nav>

            <div className="mt-auto flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500">
                    {t('appearance')}
                </p>
                <div className="flex gap-1 rounded-full bg-stone-100 p-1 dark:bg-zinc-900">
                    <button
                        type="button"
                        onClick={() => mode !== 'light' && toggle()}
                        aria-pressed={mode === 'light'}
                        className={cn(
                            'flex flex-1 items-center justify-center gap-1.5 rounded-full py-1.5 text-xs font-medium transition',
                            mode === 'light'
                                ? 'bg-white text-stone-900 shadow-sm'
                                : 'text-stone-500 dark:text-stone-400',
                        )}
                    >
                        <span aria-hidden="true">☀️</span> {t('light')}
                    </button>
                    <button
                        type="button"
                        onClick={() => mode !== 'dark' && toggle()}
                        aria-pressed={mode === 'dark'}
                        className={cn(
                            'flex flex-1 items-center justify-center gap-1.5 rounded-full py-1.5 text-xs font-medium transition',
                            mode === 'dark'
                                ? 'bg-white text-stone-900 shadow-sm dark:bg-zinc-800 dark:text-white'
                                : 'text-stone-500 dark:text-stone-400',
                        )}
                    >
                        <span aria-hidden="true">🌙</span> {t('dark')}
                    </button>
                </div>
            </div>
        </>
    );
}
