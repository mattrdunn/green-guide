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

/**
 * Shared light/dark toggle logic — persists to localStorage and flips the
 * `html.dark`/`html.light` classes. Used by both the mobile nav bar and the
 * desktop sidebar so the two surfaces can't drift out of sync in behavior.
 */
export function useThemeMode() {
    const [mode, setMode] = useState<ThemeMode>('light');

    useEffect(() => {
        const initial = resolveInitialTheme();
        setMode(initial);
        applyTheme(initial);
    }, []);

    const setThemeMode = (next: ThemeMode) => {
        applyTheme(next);
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
        setMode(next);
    };

    const toggle = () => setThemeMode(mode === 'dark' ? 'light' : 'dark');

    return { mode, setThemeMode, toggle };
}
