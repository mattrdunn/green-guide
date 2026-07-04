/**
 * Slim, serializable projection of a Plant document — only what the home
 * page cards and filters need, safe to pass from a server component into
 * the client shell.
 */
export interface PlantCardData {
    genus: string;
    species: string;
    commonNames: string[];
    imageKey: string | null;
    imageAlt: string | null;
    tags: string[];
    light: string;
    care: string;
}
