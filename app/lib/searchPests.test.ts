import { describe, expect, it } from 'vitest';

import type { PestSummaryData } from '@/app/pests/types';
import { pestMatchesQuery } from '@/app/lib/searchPests';

const pest = (overrides: Partial<PestSummaryData> = {}): PestSummaryData => ({
    slug: 'spider-mites',
    name: 'Spider Mites',
    category: 'insects',
    categoryLabel: 'Insects & Mites',
    tag: 'Common on dry, dusty foliage',
    severity: 3,
    signs: 'Fine webbing and stippled leaves',
    ...overrides,
});

describe('pestMatchesQuery', () => {
    it('matches every pest when the query is empty or whitespace', () => {
        expect(pestMatchesQuery(pest(), '')).toBe(true);
        expect(pestMatchesQuery(pest(), '   ')).toBe(true);
    });

    it('matches the name case-insensitively', () => {
        expect(pestMatchesQuery(pest(), 'Spider')).toBe(true);
        expect(pestMatchesQuery(pest(), 'MITES')).toBe(true);
    });

    it('matches the tag and category label case-insensitively', () => {
        expect(pestMatchesQuery(pest(), 'dusty foliage')).toBe(true);
        expect(pestMatchesQuery(pest(), 'insects & mites')).toBe(true);
    });

    it('ignores surrounding whitespace in the query', () => {
        expect(pestMatchesQuery(pest(), '  spider  ')).toBe(true);
    });

    it('rejects queries that match nothing', () => {
        expect(pestMatchesQuery(pest(), 'thrips')).toBe(false);
    });
});
