import type { PlantCardData } from '@/app/components/home/types';

/** Lets the nav search button find and focus the hero input on the home page. */
export const HERO_SEARCH_INPUT_ID = 'hero-search-input';

/**
 * Case-insensitive substring match against the botanical name and every
 * common name — shared by the home page grid filter and the nav search
 * overlay so both surfaces agree on what a query matches. Each name is
 * matched individually, so a query never matches across the boundary
 * between two names.
 */
export function plantMatchesQuery(
    plant: PlantCardData,
    query: string,
): boolean {
    const needle = query.trim().toLowerCase();
    if (!needle) {
        return true;
    }
    return [
        `${plant.genus} ${plant.species.replace(/-/g, ' ')}`,
        ...plant.commonNames,
    ].some((name) => name.toLowerCase().includes(needle));
}
