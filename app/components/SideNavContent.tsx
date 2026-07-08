'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from '@/app/lib/cn';
import { plantMatchesQuery } from '@/app/lib/searchPlants';
import { useThemeMode } from '@/app/lib/useThemeMode';
import {
    useGetPestSummariesQuery,
    useGetPlantSummariesQuery,
} from '@/store/api/greenGuideApi';
import DropdownToggle from './DropdownToggle';
import NavExpandableList from './NavExpandableList';
import NavGenusList, { NavGenusGroup } from './NavGenusList';
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

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

/** Route segments that own their own top-level page, never a genus slug. */
const RESERVED_TOP_LEVEL_SEGMENTS = new Set(['pests']);

/**
 * Matches a species (and optional variety) profile URL — `/[genus]/[species]`
 * or `/[genus]/[species]/[variety]` — and pulls out the natural-key segments
 * used to look up the corresponding plant, or `null` off any other route.
 */
function parseSpeciesRoute(
    pathname: string,
): { genus: string; species: string; variety: string | null } | null {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length < 2 || parts.length > 3) {
        return null;
    }
    if (RESERVED_TOP_LEVEL_SEGMENTS.has(parts[0])) {
        return null;
    }
    return {
        genus: parts[0],
        species: parts[1],
        variety: parts[2] ?? null,
    };
}

/** Matches a genus profile URL (`/[genus]`) and pulls out the slug. */
function parseGenusRoute(pathname: string): string | null {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length !== 1 || RESERVED_TOP_LEVEL_SEGMENTS.has(parts[0])) {
        return null;
    }
    return parts[0];
}

/** Matches a pest detail URL (`/pests/[slug]`) and pulls out the slug. */
function parsePestSlug(pathname: string): string | null {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length !== 2 || parts[0] !== 'pests') {
        return null;
    }
    return parts[1];
}

/**
 * Brand, quick search, primary nav, and appearance toggle — the sidebar's
 * actual content, shared by the persistent desktop `SideNav` and the mobile
 * drawer so neither can drift out of sync in behavior.
 */
export default function SideNavContent({
    onNavigate,
    showSearch = true,
}: {
    /** Called after any link is followed — lets the mobile drawer close itself. */
    onNavigate?: () => void;
    /**
     * Shows the inline quick-search box. Off by default in the mobile
     * drawer, where the nav bar's own search button/overlay is the single
     * search entry point — typing there and here at once meant the results
     * list could cover the input it belonged to.
     */
    showSearch?: boolean;
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'sideNav' });
    const { t: tSearch } = useTranslation('translation', {
        keyPrefix: 'nav.search',
    });
    const { mode, toggle } = useThemeMode();
    const pathname = usePathname();
    const [query, setQuery] = useState('');
    const [speciesListOpen, setSpeciesListOpen] = useState(false);
    const [pestsListOpen, setPestsListOpen] = useState(false);
    const [openGenera, setOpenGenera] = useState<Record<string, boolean>>({});

    const { data: plants, isError } = useGetPlantSummariesQuery();
    const { data: pests } = useGetPestSummariesQuery();

    const needle = query.trim().toLowerCase();
    const matches = useMemo(() => {
        if (!plants || !needle) {
            return [];
        }
        return plants
            .filter((plant) => plantMatchesQuery(plant, needle))
            .slice(0, MAX_RESULTS);
    }, [plants, needle]);

    const speciesRoute = useMemo(() => parseSpeciesRoute(pathname), [pathname]);
    const currentPlant = useMemo(() => {
        if (!plants || !speciesRoute) {
            return null;
        }
        return (
            plants.find(
                (plant) =>
                    plant.genus === speciesRoute.genus &&
                    plant.species === speciesRoute.species &&
                    (plant.variety ?? null) === speciesRoute.variety,
            ) ?? null
        );
    }, [plants, speciesRoute]);

    const currentGenus = useMemo(
        () => parseGenusRoute(pathname) ?? speciesRoute?.genus ?? null,
        [pathname, speciesRoute],
    );

    const genusGroups = useMemo<NavGenusGroup[]>(() => {
        if (!plants) {
            return [];
        }
        const groups = new Map<string, NavGenusGroup>();
        for (const plant of [...plants].sort((a, b) =>
            `${a.genus} ${a.species}`.localeCompare(`${b.genus} ${b.species}`),
        )) {
            if (!groups.has(plant.genus)) {
                groups.set(plant.genus, {
                    genus: plant.genus,
                    href: `/${plant.genus}`,
                    label: capitalize(plant.genus),
                    isCurrent: plant.genus === currentGenus,
                    items: [],
                });
            }
            groups.get(plant.genus)!.items.push({
                key: `${plant.genus}-${plant.species}-${plant.variety ?? ''}`,
                href: plant.variety
                    ? `/${plant.genus}/${plant.species}/${plant.variety}`
                    : `/${plant.genus}/${plant.species}`,
                label: plant.variety
                    ? `${capitalize(plant.genus)} ${plant.species.replace(/-/g, ' ')} '${capitalize(plant.variety.replace(/-/g, ' '))}'`
                    : `${capitalize(plant.genus)} ${plant.species.replace(/-/g, ' ')}`,
                isCurrent:
                    currentPlant != null &&
                    plant.genus === currentPlant.genus &&
                    plant.species === currentPlant.species &&
                    (plant.variety ?? null) === (currentPlant.variety ?? null),
            });
        }
        return [...groups.values()].sort((a, b) =>
            a.genus.localeCompare(b.genus),
        );
    }, [plants, currentPlant, currentGenus]);

    const pestSlug = useMemo(() => parsePestSlug(pathname), [pathname]);
    const currentPest = useMemo(() => {
        if (!pests || !pestSlug) {
            return null;
        }
        return pests.find((pest) => pest.slug === pestSlug) ?? null;
    }, [pests, pestSlug]);

    const pestItems = useMemo(() => {
        if (!pests) {
            return [];
        }
        return [...pests]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((pest) => ({
                key: pest.slug,
                href: `/pests/${pest.slug}`,
                label: pest.name,
                isCurrent: pest.slug === currentPest?.slug,
            }));
    }, [pests, currentPest]);

    // Navigating away (e.g. via a result click) should close the dropdown.
    useEffect(() => {
        setQuery('');
    }, [pathname]);

    // Loading (or navigating between) a genus/species/pest page opens its
    // list automatically so the currently-viewed entry is visible in it.
    useEffect(() => {
        if (currentGenus) {
            setSpeciesListOpen(true);
            setOpenGenera((prev) =>
                prev[currentGenus] ? prev : { ...prev, [currentGenus]: true },
            );
        }
    }, [currentGenus]);

    useEffect(() => {
        if (currentPest) {
            setPestsListOpen(true);
        }
    }, [currentPest]);

    const handleNavigate = () => {
        setQuery('');
        onNavigate?.();
    };

    const handleToggleGenus = (genus: string) => {
        setOpenGenera((prev) => ({ ...prev, [genus]: !prev[genus] }));
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

            {showSearch && (
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
            )}

            <nav className="flex flex-col gap-1">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500">
                    {t('browse')}
                </p>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                        <Link
                            href="/"
                            onClick={onNavigate}
                            className={cn(navLinkClass(homeActive), 'flex-1')}
                        >
                            <LeafIcon className="size-4.5" />
                            {t('home')}
                        </Link>
                        <DropdownToggle
                            open={speciesListOpen}
                            onClick={() =>
                                setSpeciesListOpen((prev) => !prev)
                            }
                            label={t('speciesList.toggle')}
                        />
                    </div>
                    <NavGenusList
                        open={speciesListOpen}
                        groups={genusGroups}
                        openGenera={openGenera}
                        onToggleGenus={handleToggleGenus}
                        onNavigate={onNavigate}
                        genusToggleLabel={(genus) =>
                            t('speciesList.genusToggle', { genus })
                        }
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                        <Link
                            href="/pests"
                            onClick={onNavigate}
                            className={cn(navLinkClass(pestsActive), 'flex-1')}
                        >
                            <BugIcon className="size-4.5" />
                            {t('pests')}
                        </Link>
                        <DropdownToggle
                            open={pestsListOpen}
                            onClick={() => setPestsListOpen((prev) => !prev)}
                            label={t('pestsList.toggle')}
                        />
                    </div>
                    <NavExpandableList
                        open={pestsListOpen}
                        items={pestItems}
                        onNavigate={onNavigate}
                    />
                </div>
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
