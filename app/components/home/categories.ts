export type CategoryId = 'indoor' | 'succulents' | 'patio' | 'garden';

export interface Category {
    id: CategoryId;
    icon: string;
    image: string;
    matches: (tags: string[]) => boolean;
}

const hasAny = (tags: string[], wanted: string[]) =>
    wanted.some((tag) => tags.includes(tag));

/**
 * Browse categories are derived from the free-form `tags` on each plant
 * document rather than stored in MongoDB, so a species can appear in more
 * than one category and new tags don't require a migration.
 */
export const categories: Category[] = [
    {
        id: 'indoor',
        icon: '/icons/house.svg',
        image: 'plants/categories/indoor.png',
        matches: (tags) => !tags.includes('full-sun'),
    },
    {
        id: 'succulents',
        icon: '/icons/sunny.svg',
        image: 'plants/categories/succulents.png',
        matches: (tags) =>
            hasAny(tags, [
                'succulent',
                'succulent-like',
                'cactus',
                'euphorbia',
            ]),
    },
    {
        id: 'patio',
        icon: '/icons/patio.svg',
        image: 'plants/categories/patio.png',
        matches: (tags) =>
            hasAny(tags, ['full-sun', 'drought-tolerant', 'patio']),
    },
    {
        id: 'garden',
        icon: '/icons/landscape.svg',
        image: 'plants/categories/landscaping.png',
        matches: (tags) =>
            hasAny(tags, ['hardy', 'perennial', 'landscape', 'garden']),
    },
];
