import { describe, expect, it } from 'vitest';

import { toPestSummaries, type PestSummaryDoc } from '@/lib/db/pests';

const doc = (overrides: Partial<PestSummaryDoc> = {}): PestSummaryDoc => ({
    slug: 'spider-mites',
    name: 'Spider Mites',
    category: 'sap-sucker',
    categoryLabel: 'Sap-sucker',
    tag: 'Spreads fast',
    severity: 4,
    signs: 'Dusty webbing on undersides, stippled leaves losing color.',
    ...overrides,
});

describe('toPestSummaries', () => {
    it('projects a full document onto summary data', () => {
        expect(toPestSummaries([doc()])).toEqual([
            {
                slug: 'spider-mites',
                name: 'Spider Mites',
                category: 'sap-sucker',
                categoryLabel: 'Sap-sucker',
                tag: 'Spreads fast',
                severity: 4,
                signs: 'Dusty webbing on undersides, stippled leaves losing color.',
            },
        ]);
    });

    it('fills sparse documents with safe defaults', () => {
        const [summary] = toPestSummaries([{ slug: 'thrips', name: 'Thrips' }]);
        expect(summary).toEqual({
            slug: 'thrips',
            name: 'Thrips',
            category: 'other',
            categoryLabel: 'Other',
            tag: '',
            severity: 1,
            signs: '',
        });
    });
});
