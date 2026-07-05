import { describe, expect, it } from 'vitest';

import { categories, type CategoryId } from '@/app/components/home/categories';

const matcher = (id: CategoryId) => {
    const category = categories.find((c) => c.id === id);
    if (!category) {
        throw new Error(`missing category: ${id}`);
    }
    return category.matches;
};

describe('categories', () => {
    it('defines each category id exactly once', () => {
        const ids = categories.map((c) => c.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    describe('indoor', () => {
        it('includes any plant not needing full sun', () => {
            expect(matcher('indoor')(['low-light', 'aroid'])).toBe(true);
            expect(matcher('indoor')([])).toBe(true);
        });

        it('excludes full-sun plants', () => {
            expect(matcher('indoor')(['full-sun', 'hardy'])).toBe(false);
        });
    });

    describe('succulents', () => {
        it.each(['succulent', 'succulent-like', 'cactus', 'euphorbia'])(
            'matches the %s tag',
            (tag) => {
                expect(matcher('succulents')([tag])).toBe(true);
            },
        );

        it('rejects plants without a succulent tag', () => {
            expect(matcher('succulents')(['aroid', 'low-light'])).toBe(false);
        });
    });

    describe('patio', () => {
        it.each(['full-sun', 'drought-tolerant', 'patio'])(
            'matches the %s tag',
            (tag) => {
                expect(matcher('patio')([tag])).toBe(true);
            },
        );

        it('rejects indoor-only plants', () => {
            expect(matcher('patio')(['low-light'])).toBe(false);
        });
    });

    describe('garden', () => {
        it.each(['hardy', 'perennial', 'landscape', 'garden'])(
            'matches the %s tag',
            (tag) => {
                expect(matcher('garden')([tag])).toBe(true);
            },
        );

        it('rejects plants without a garden tag', () => {
            expect(matcher('garden')(['succulent'])).toBe(false);
        });
    });

    it('lets a species appear in more than one category', () => {
        const tags = ['full-sun', 'succulent', 'hardy'];
        const matched = categories.filter((c) => c.matches(tags));
        expect(matched.length).toBeGreaterThan(1);
    });
});
