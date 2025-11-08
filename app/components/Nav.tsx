'use client';

import { useEffect, useState } from 'react';

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
        <nav className="absolute left-0 right-0 top-0 h-12 px-4 py-2 sm:px-10">
            <div className="relative flex h-full items-center justify-center">
                <p className="text-sm font-semibold tracking-[0.35em] text-stone-700 dark:text-stone-200">
                    GREEN GUIDE
                </p>

                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                        type="button"
                        onClick={handleToggle}
                        aria-pressed={mode === 'dark'}
                        className="inline-flex items-center gap-2 rounded-full border border-stone-200/80 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-stone-700/70 dark:bg-zinc-900/70 dark:text-stone-100 dark:hover:bg-zinc-900"
                    >
                        <span aria-hidden="true">
                            {mode === 'dark' ? '🌙' : '☀️'}
                        </span>
                        <span className='max-sm:hidden'>{mode === 'dark' ? 'Dark' : 'Light'} mode</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
