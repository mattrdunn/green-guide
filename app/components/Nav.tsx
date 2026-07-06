'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HERO_SEARCH_INPUT_ID } from '@/app/lib/searchPlants';
import { useThemeMode } from '@/app/lib/useThemeMode';
import MobileSideNavDrawer, { HamburgerIcon } from './MobileSideNavDrawer';
import SearchOverlay from './SearchOverlay';

export default function Nav() {
    const { t } = useTranslation('translation', { keyPrefix: 'nav' });
    const { mode, toggle } = useThemeMode();
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const onHomePage = pathname === '/';

    // Leaving the page (e.g. via a nav link) should never strand the overlay/drawer.
    useEffect(() => {
        setSearchOpen(false);
        setMenuOpen(false);
    }, [pathname]);

    const handleSearchClick = () => {
        if (!onHomePage) {
            setMenuOpen(false);
            setSearchOpen((prev) => !prev);
            return;
        }
        // The home page already has the hero search bar — jump to it instead
        // of stacking a second input on top.
        document
            .getElementById('search')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const input = document.getElementById(HERO_SEARCH_INPUT_ID);
        if (input instanceof HTMLInputElement) {
            input.focus({ preventScroll: true });
        }
    };

    const closeSearch = useCallback(() => setSearchOpen(false), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);

    const handleMenuClick = () => {
        setSearchOpen(false);
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <nav className="fixed left-0 right-0 top-0 z-50 h-12 border-b border-stone-200/60 bg-white/70 px-4 py-2 backdrop-blur-md dark:border-stone-800/60 dark:bg-zinc-950/30 sm:hidden">
                <div className="mx-auto flex h-full max-w-6xl items-center justify-between">
                    <Link
                        href="/"
                        className="text-sm font-semibold tracking-[0.35em] text-stone-700 transition hover:text-stone-900 dark:text-stone-200 dark:hover:text-white"
                    >
                        {t('brand')}
                    </Link>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={handleSearchClick}
                            aria-expanded={onHomePage ? undefined : searchOpen}
                            className="inline-flex items-center gap-2 rounded-full border border-stone-200/80 bg-white/80 px-3 py-1 text-sm font-semibold text-stone-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-stone-700/70 dark:bg-zinc-900/70 dark:text-stone-100 dark:hover:bg-zinc-900"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-3.5 w-3.5 fill-none stroke-current stroke-2"
                            >
                                <circle cx="11" cy="11" r="7" />
                                <path
                                    d="m20 20-3.5-3.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            {t('links.search')}
                        </button>
                        <button
                            type="button"
                            onClick={toggle}
                            aria-pressed={mode === 'dark'}
                            aria-label={
                                mode === 'dark'
                                    ? t('theme.dark')
                                    : t('theme.light')
                            }
                            className="inline-flex items-center rounded-full border border-stone-200/80 bg-white/80 px-2.5 py-1 text-xs shadow-sm backdrop-blur transition hover:bg-white dark:border-stone-700/70 dark:bg-zinc-900/70 dark:hover:bg-zinc-900"
                        >
                            <span aria-hidden="true">
                                {mode === 'dark' ? '🌙' : '☀️'}
                            </span>
                        </button>
                        <button
                            type="button"
                            onClick={handleMenuClick}
                            aria-expanded={menuOpen}
                            aria-label={
                                menuOpen ? t('menu.close') : t('menu.open')
                            }
                            className="inline-flex items-center justify-center rounded-full border border-stone-200/80 bg-white/80 p-2 text-stone-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-stone-700/70 dark:bg-zinc-900/70 dark:text-stone-100 dark:hover:bg-zinc-900"
                        >
                            <HamburgerIcon open={menuOpen} />
                        </button>
                    </div>
                </div>
            </nav>
            <SearchOverlay open={searchOpen} onClose={closeSearch} />
            <MobileSideNavDrawer open={menuOpen} onClose={closeMenu} />
        </>
    );
}
