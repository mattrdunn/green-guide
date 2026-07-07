'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import type { GenusDetailDoc } from '@/lib/db/genus';

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

export default function GenusTaxonomy({ genus }: { genus: GenusDetailDoc }) {
    const { t } = useTranslation('translation', { keyPrefix: 'genusClient' });

    const rows = [
        { label: t('taxonomy.kingdom'), value: genus.taxonomy.kingdom },
        { label: t('taxonomy.order'), value: genus.taxonomy.order },
        { label: t('taxonomy.family'), value: genus.taxonomy.family },
    ];

    return (
        <div className="grid gap-5 lg:grid-cols-[340px_1fr]">
            <div className="rounded-[28px] border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                    {t('taxonomy.title')}
                </p>
                <div className="mt-4 flex flex-col">
                    {rows.map((row) => (
                        <div
                            key={row.label}
                            className="flex justify-between border-b border-dashed border-stone-200/80 py-3 text-sm last:border-b-0 dark:border-stone-700/70"
                        >
                            <span className="text-stone-500 dark:text-stone-400">
                                {row.label}
                            </span>
                            <span className="font-semibold text-stone-900 dark:text-white">
                                {row.value}
                            </span>
                        </div>
                    ))}
                    <div className="flex justify-between py-3 text-sm">
                        <span className="text-stone-500 dark:text-stone-400">
                            {t('taxonomy.genus')}
                        </span>
                        <span className="font-serif font-semibold text-stone-900 italic dark:text-white">
                            {capitalize(genus.genus)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="space-y-4 rounded-[28px] border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                    {t('taxonomy.relatedTitle')}
                </p>
                <p className="max-w-xl text-sm text-stone-700 dark:text-stone-200">
                    {t('taxonomy.relatedDescription')}
                </p>
                <div className="flex flex-wrap gap-2.5">
                    {genus.relatedGenera.map((related) => (
                        <Link
                            key={related}
                            href={`/${related}`}
                            className="rounded-full border border-stone-200 px-4 py-1.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-zinc-800"
                        >
                            {capitalize(related)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
