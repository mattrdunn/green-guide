'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'green-guide-theme';
const NAV_LINKS = [
    {
        href: '/',
        label: 'Home',
        description: 'Search, field notes, and knowledge stacks.',
    },
    {
        href: '/howto',
        label: 'How-To Library',
        description: 'Browse the latest hands-on guides.',
    },
    {
        href: '/repotting',
        label: 'Repotting Lab',
        description: 'Full workflow, toolkit, and aftercare.',
    },
    {
        href: '/monstera/deliciosa',
        label: 'Species demo',
        description: 'Sample a living profile today.',
    },
];

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

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as
        | ThemeMode
        | null;

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
    const [panelOpen, setPanelOpen] = useState(false);

    useEffect(() => {
        const initial = resolveInitialTheme();
        setMode(initial);
        applyTheme(initial);
    }, []);

    useEffect(() => {
        if (!panelOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setPanelOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [panelOpen]);

    const handleToggle = () => {
        setMode((prev) => {
            const next: ThemeMode = prev === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            window.localStorage.setItem(THEME_STORAGE_KEY, next);
            return next;
        });
    };

    return (
        <>
            <nav className="fixed left-0 right-0 top-0 z-50 h-12 border-b border-stone-200/60 bg-white/70 px-4 py-2 backdrop-blur-md dark:border-stone-800/60 dark:bg-zinc-950/30 sm:px-10">
                <div className="relative flex h-full items-center justify-center">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <button
                            type="button"
                            onClick={() => setPanelOpen(true)}
                            aria-label="Open site navigation"
                            aria-expanded={panelOpen}
                            aria-controls="site-nav-panel"
                            className="inline-flex flex-col justify-center rounded-full border border-stone-200/70 bg-white/80 px-3 py-2 text-stone-800 shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 dark:border-stone-700/70 dark:bg-zinc-900/70 dark:text-stone-100"
                        >
                            <span className="my-0.5 h-0.5 w-5 rounded-full bg-current" />
                            <span className="my-0.5 h-0.5 w-5 rounded-full bg-current" />
                            <span className="my-0.5 h-0.5 w-5 rounded-full bg-current" />
                        </button>
                    </div>

                    <Link
                        href="/"
                        className="text-sm font-semibold tracking-[0.35em] text-stone-700 transition hover:text-stone-900 dark:text-stone-200 dark:hover:text-white"
                    >
                        {t('brand')}
                    </Link>

                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <button
                            type="button"
                            onClick={handleToggle}
                            aria-pressed={mode === 'dark'}
                            className="inline-flex items-center gap-2 rounded-full border border-stone-200/80 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-800 shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 dark:border-stone-700/70 dark:bg-zinc-900/70 dark:text-stone-100 dark:hover:bg-zinc-900"
                        >
                            <span aria-hidden="true">
                                {mode === 'dark' ? '🌙' : '☀️'}
                            </span>
                            <span className="max-sm:hidden">
                                {mode === 'dark'
                                    ? t('theme.dark')
                                    : t('theme.light')}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {panelOpen && (
                <aside
                    id="site-nav-panel"
                    aria-label="Site navigation"
                    className="fixed bottom-0 left-0 top-12 z-40 w-72 overflow-y-auto border-r border-stone-200 bg-white p-6 shadow-2xl shadow-stone-900/10 dark:border-stone-800 dark:bg-zinc-950"
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="text-xs font-semibold uppercase tracking-[0.4em] text-stone-700 dark:text-stone-100"
                            onClick={() => setPanelOpen(false)}
                        >
                            {t('brand')}
                        </Link>
                        <button
                            type="button"
                            onClick={() => setPanelOpen(false)}
                            className="inline-flex items-center justify-center rounded-full border border-stone-200 px-2 py-1 text-sm text-stone-700 transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-800"
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                    </div>
                    <ul className="mt-6 space-y-3 text-sm">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="block rounded-2xl border border-stone-200/80 bg-white/90 px-4 py-3 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-stone-700/80 dark:bg-zinc-900 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/30"
                                    onClick={() => setPanelOpen(false)}
                                >
                                    <p className="text-base font-semibold text-stone-900 dark:text-stone-100">
                                        {link.label}
                                    </p>
                                    <p className="text-xs text-stone-500 dark:text-stone-300">
                                        {link.description}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </>
    );
}
