'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import imageUrl from '@/app/lib/imageUrl';
import cn from '@/app/lib/cn';
import type { PlantIssues } from '@/lib/db/models/Plant';

function LeafIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <path
                d="M5 19c7 0 13-5.5 13-13.5V5c-8 0-13 5-13 13v1Z"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinejoin="round"
            />
            <path
                d="M6 18c2-4 5-7 10-9"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
            />
        </svg>
    );
}

function WiltIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <path
                d="M12 20V9c0-3 2.5-5 6-5"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
            />
            <path
                d="M9 14.5c-1.7 1-2.8 2.7-2.8 4.5"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
            />
        </svg>
    );
}

function DropletIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <path
                d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.6} />
            <path
                d="M8 12.5l2.5 2.5L16 9.5"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function BugIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <ellipse cx="12" cy="13" rx="5" ry="6" stroke="currentColor" strokeWidth={1.4} />
            <path
                d="M12 7V4M9 5.5 10.5 7M15 5.5 13.5 7M4 11l3 1M20 11l-3 1M4 17l3-1M20 17l-3-1"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
            />
        </svg>
    );
}

const STRESS_ICONS = [LeafIcon, WiltIcon, DropletIcon];

export default function Issues({ issues }: { issues: PlantIssues }) {
    const [openPests, setOpenPests] = useState<Record<number, boolean>>({});

    const allOpen =
        issues.pests.length > 0 &&
        issues.pests.every((_, index) => openPests[index]);

    function toggleAllPests() {
        const next = !allOpen;
        setOpenPests(
            Object.fromEntries(issues.pests.map((_, index) => [index, next])),
        );
    }

    function togglePest(index: number) {
        setOpenPests((prev) => ({ ...prev, [index]: !prev[index] }));
    }

    return (
        <div className="space-y-8">
            <section className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                    Troubleshooting
                </p>
                <h2 className="mt-2 text-2xl font-serif">
                    Decode common stress signals
                </h2>
                <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                    Start with light, water, and airflow—small tweaks often stop
                    decline before it spreads plant-wide.
                </p>
                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    {issues.stressSignals.map((issue, index) => {
                        const StressIcon =
                            STRESS_ICONS[index % STRESS_ICONS.length];
                        return (
                            <article
                                key={issue.title}
                                className="rounded-2xl border border-stone-200/70 bg-white/80 p-5 dark:border-stone-700/70 dark:bg-zinc-900/40"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="inline-flex shrink-0 rounded-xl bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300">
                                        <StressIcon className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                                            {issue.title}
                                        </h3>
                                        {issue.tag && (
                                            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500">
                                                {issue.tag}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                                    {issue.description}
                                </p>
                                <ul className="mt-4 space-y-2 border-t border-dashed border-stone-200/80 pt-4 text-sm text-stone-700 dark:border-stone-700/70 dark:text-stone-200">
                                    {issue.actions.map((action) => (
                                        <li key={action} className="flex gap-2">
                                            <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                                            <span>{action}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                            Common Pests
                        </p>
                        <h2 className="mt-2 text-2xl font-serif">
                            Identify & treat infestations early
                        </h2>
                        <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                            Match the damage to the culprit, then open the
                            treatment when you need it.
                        </p>
                    </div>
                    {issues.pests.length > 0 && (
                        <button
                            type="button"
                            onClick={toggleAllPests}
                            className="shrink-0 rounded-full border border-stone-200/80 px-4 py-2 text-xs font-semibold text-stone-600 transition hover:border-stone-300 hover:text-stone-900 dark:border-stone-700/70 dark:text-stone-300 dark:hover:text-white"
                        >
                            {allOpen ? 'Collapse all treatments' : 'Expand all treatments'}
                        </button>
                    )}
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {issues.pests.map((pest, index) => {
                        const open = Boolean(openPests[index]);
                        return (
                            <article
                                key={pest.name}
                                className="overflow-hidden rounded-2xl border border-stone-200/70 bg-white/80 dark:border-stone-700/70 dark:bg-zinc-900/40"
                            >
                                <div className="flex gap-4 p-4">
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-stone-100 dark:bg-zinc-800">
                                        {pest.image ? (
                                            <Image
                                                src={imageUrl(pest.image)}
                                                alt={pest.name}
                                                fill
                                                sizes="80px"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center text-stone-300 dark:text-stone-600">
                                                <BugIcon className="size-8" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                                                {pest.name}
                                            </h3>
                                            {pest.tag && (
                                                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                                    <span className="size-1.5 rounded-full bg-amber-500" />
                                                    {pest.tag}
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-1.5 text-sm text-stone-600 dark:text-stone-300">
                                            {pest.signs}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => togglePest(index)}
                                    aria-expanded={open}
                                    className="flex w-full items-center justify-between border-t border-dashed border-stone-200/80 px-4 py-3 text-left dark:border-stone-700/70"
                                >
                                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">
                                        Treatment
                                    </span>
                                    <span
                                        className={cn(
                                            'inline-flex size-6 items-center justify-center rounded-full border border-stone-200/80 text-base font-light text-stone-600 transition-transform duration-200 dark:border-stone-700/70 dark:text-stone-200',
                                            open && 'rotate-45',
                                        )}
                                        aria-hidden="true"
                                    >
                                        +
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            key="treatment"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.25,
                                                ease: [0.4, 0, 0.2, 1],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-4 pb-4 text-sm text-stone-600 dark:text-stone-300">
                                                {pest.treatment}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </article>
                        );
                    })}
                </div>
                <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
                    Treat 2–3 times to catch newly hatched pests, and quarantine
                    infected plants from the rest of your collection.
                </p>
            </section>

            <section className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                <h2 className="text-2xl font-serif text-stone-900 dark:text-white">
                    Quick stability checklist
                </h2>
                <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                    Run through these when something feels off, before
                    escalating to repotting or propagation.
                </p>
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                    {issues.stabilityChecklist.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-stone-200/70 bg-white/80 px-4 py-3.5 text-sm text-stone-700 dark:border-stone-700/70 dark:bg-zinc-900/40 dark:text-stone-200"
                        >
                            <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
