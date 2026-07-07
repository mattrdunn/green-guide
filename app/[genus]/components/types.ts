/**
 * Slim, serializable projection of a Plant document for the genus page's
 * Species & Varieties grid — safe to pass from a server component into the
 * client shell. Mirrors `app/components/home/types.ts`'s PlantCardData.
 */
export interface GenusSpeciesItem {
    genus: string;
    species: string;
    variety: string | null;
    type: 'species' | 'cultivar';
    commonName: string | null;
    description: string;
    imageKey: string | null;
    imageAlt: string | null;
    light: string;
    watering: string;
    humidity: string;
    zone: string;
    origin: string;
}
