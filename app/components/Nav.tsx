'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'green-guide-theme';

function applyTheme(mode: ThemeMode) {
    const root = document.documentElement;
    const isDark = mode === 'dark';

    root.classList.toggle('dark', isDark);
    root.classList.toggle('light', !isDark);
    root.style.colorScheme = isDark ? 'dark' : 'light';
}

function resolveInitialTheme(): ThemeMode {
    if (typeof window === 'undefined') {
        return 'light';
    }

    const stored = window.localStorage.getItem(
        THEME_STORAGE_KEY,
    ) as ThemeMode | null;

    if (stored === 'light' || stored === 'dark') {
        return stored;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
}

export default function Nav() {
    const { t } = useTranslation('translation', { keyPrefix: 'nav' });
    const [mode, setMode] = useState<ThemeMode>('light');

    useEffect(() => {
        const initial = resolveInitialTheme();
        setMode(initial);
        applyTheme(initial);
    }, []);

    const handleToggle = () => {
        setMode((prev) => {
            const next: ThemeMode = prev === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            window.localStorage.setItem(THEME_STORAGE_KEY, next);
            return next;
        });
    };

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 h-12 border-b border-stone-200/60 bg-white/70 px-4 py-2 backdrop-blur-md dark:border-stone-800/60 dark:bg-zinc-950/30 sm:px-10">
            <div className="mx-auto flex h-full max-w-6xl items-center justify-between">
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-[0.35em] text-stone-700 transition hover:text-stone-900 dark:text-stone-200 dark:hover:text-white"
                >
                    {t('brand')}
                </Link>

                <div className="flex items-center gap-2 sm:gap-5">
                    <Link
                        href="/#categories"
                        className="text-sm text-stone-600 transition hover:text-stone-900 max-sm:hidden dark:text-stone-300 dark:hover:text-white"
                    >
                        {t('links.categories')}
                    </Link>
                    <Link
                        href="/#common-plants"
                        className="text-sm text-stone-600 transition hover:text-stone-900 max-sm:hidden dark:text-stone-300 dark:hover:text-white"
                    >
                        {t('links.commonPlants')}
                    </Link>
                    <Link
                        href="/#search"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-200/80 bg-white/80 px-3 py-1 text-sm font-semibold text-stone-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-stone-700/70 dark:bg-zinc-900/70 dark:text-stone-100 dark:hover:bg-zinc-900"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5 fill-none stroke-current stroke-2"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                        </svg>
                        {t('links.search')}
                    </Link>
                    <button
                        type="button"
                        onClick={handleToggle}
                        aria-pressed={mode === 'dark'}
                        aria-label={
                            mode === 'dark' ? t('theme.dark') : t('theme.light')
                        }
                        className="inline-flex items-center rounded-full border border-stone-200/80 bg-white/80 px-2.5 py-1 text-xs shadow-sm backdrop-blur transition hover:bg-white dark:border-stone-700/70 dark:bg-zinc-900/70 dark:hover:bg-zinc-900"
                    >
                        <span aria-hidden="true">
                            {mode === 'dark' ? '🌙' : '☀️'}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
