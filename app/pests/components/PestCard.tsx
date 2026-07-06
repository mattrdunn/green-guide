'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import VitalMeter from '@/app/components/VitalMeter';
import type { PestSummaryData } from '../types';

function BugIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <ellipse
                cx="12"
                cy="13"
                rx="5"
                ry="6"
                stroke="currentColor"
                strokeWidth={1.4}
            />
            <path
                d="M12 7V4M9 5.5 10.5 7M15 5.5 13.5 7M4 11l3 1M20 11l-3 1M4 17l3-1M20 17l-3-1"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function PestCard({ pest }: { pest: PestSummaryData }) {
    const { t } = useTranslation('translation', { keyPrefix: 'pests' });

    return (
        <Link
            href={`/pests/${pest.slug}`}
            className="group flex flex-col gap-4 overflow-hidden rounded-3xl border border-stone-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-emerald-600/40 hover:shadow-lg dark:border-stone-800 dark:bg-zinc-900/60 dark:hover:border-emerald-500/40"
        >
            <div className="flex items-start justify-between gap-3">
                <span className="inline-flex shrink-0 rounded-xl bg-emerald-50 p-2.5 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300">
                    <BugIcon className="size-6" />
                </span>
                <span className="rounded-full border border-stone-200 px-2.5 py-1 text-xs font-semibold text-stone-600 dark:border-stone-700 dark:text-stone-300">
                    {pest.categoryLabel}
                </span>
            </div>
            <div>
                <h3 className="font-serif text-xl text-stone-900 dark:text-white">
                    {pest.name}
                </h3>
                <span className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                    <span className="size-1.5 rounded-full bg-amber-500" />
                    {pest.tag}
                </span>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-300">
                {pest.signs}
            </p>
            <div>
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">
                    {t('severityLabel')}
                </p>
                <VitalMeter score={pest.severity} />
            </div>
        </Link>
    );
}
