/**
 * Slim, serializable projection of a Pest document — only what the hub grid
 * and filters need, safe to pass from a server component into the client
 * shell. Mirrors `app/components/home/types.ts`'s PlantCardData.
 */
export interface PestSummaryData {
    slug: string;
    name: string;
    category: string;
    categoryLabel: string;
    tag: string;
    severity: number;
    signs: string;
}
