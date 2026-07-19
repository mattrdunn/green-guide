import type { PestSummaryData } from '@/app/pests/types';

/**
 * Case-insensitive substring match against a pest's name, quick tag, and
 * category label — mirrors `plantMatchesQuery` so plant and pest results
 * can share the same quick-search surfaces.
 */
export function pestMatchesQuery(
    pest: PestSummaryData,
    query: string,
): boolean {
    const needle = query.trim().toLowerCase();
    if (!needle) {
        return true;
    }
    return [pest.name, pest.tag, pest.categoryLabel].some((value) =>
        value.toLowerCase().includes(needle),
    );
}
