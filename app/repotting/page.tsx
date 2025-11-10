import Link from 'next/link';
import type { Metadata } from 'next';
import GreenCard from '../components/GreenCard';
import { howtoGuides } from '../lib/howtoGuides';

const repottingGuide = howtoGuides.find(
    (guide) => guide.id === 'repotting',
);

if (!repottingGuide) {
    throw new Error('Repotting guide is missing from the library.');
}

const toolkit = [
    {
        label: 'Tools',
        items: ['Tarp or tray', 'Root rake or chopstick', 'Snips + alcohol', 'Moisture meter (optional)'],
    },
    {
        label: 'Ingredients',
        items: ['Chunky aroid mix', 'Extra perlite or pumice', 'Coco chips or bark', 'Mycorrhizae or rooting powder'],
    },
];

const timeline = [
    {
        title: 'Prep window',
        detail: 'Water the plant 18–24 hours ahead of time and pre-hydrate your new mix so it sticks together when squeezed.',
    },
    {
        title: 'Move day',
        detail: 'Work in bright, indirect light. Support the stem base as you tip the pot and keep roots shaded while exposed.',
    },
    {
        title: 'Aftercare',
        detail: 'Park the plant out of harsh light for 5–7 days, mist aerial roots, and hold fertilizer until you see new growth.',
    },
];

const aftercare = [
    {
        title: 'Day 1',
        note: 'Water through until runoff and let excess drain completely. Wipe leaves to remove dust from the move.',
    },
    {
        title: 'Week 1',
        note: 'Check moisture two inches down. If cool and slightly damp, wait. If dry, water slowly to avoid channeling.',
    },
    {
        title: 'Week 3',
        note: 'Resume light feeding and rotate the pot so new growth tracks the light evenly.',
    },
];

export const metadata: Metadata = {
    title: 'Repotting Lab | Green Guide',
    description: repottingGuide.description,
};

export default function RepottingPage() {
    const { title, description, duration, focus, signals, steps } =
        repottingGuide;

    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-2">
            <GreenCard className="grid gap-10 p-8 text-white lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                        Repotting lab
                    </p>
                    <h1 className="text-4xl font-serif leading-tight sm:text-5xl">
                        {title}
                    </h1>
                    <p className="max-w-2xl text-base text-white/90 sm:text-lg">
                        {description}
                    </p>
                    <div className="grid gap-3 text-sm sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/20 p-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                                Duration
                            </p>
                            <p className="text-2xl font-semibold">{duration}</p>
                        </div>
                        <div className="rounded-2xl border border-white/20 p-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                                Focus
                            </p>
                            <p className="text-2xl font-semibold">{focus}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <Link
                            href="/howto"
                            className="inline-flex items-center justify-center rounded-full border border-white/50 px-4 py-2 font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
                        >
                            Browse the full library
                        </Link>
                        <Link
                            href="/monstera/deliciosa"
                            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 font-semibold uppercase tracking-wide text-emerald-900 transition hover:bg-lime-100"
                        >
                            Jump to a live species
                        </Link>
                    </div>
                </div>
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm text-white/90 shadow-2xl shadow-emerald-950/20 backdrop-blur">
                    <h2 className="text-xl font-semibold text-white">
                        Signals it is time to repot
                    </h2>
                    <ul className="mt-4 space-y-3">
                        {signals.map((signal) => (
                            <li
                                key={signal}
                                className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3"
                            >
                                <span className="mt-1 h-2 w-2 rounded-full bg-lime-200" />
                                <p>{signal}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </GreenCard>

            <section className="grid gap-8 rounded-[32px] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-zinc-950/40 md:grid-cols-[0.85fr_1.15fr]">
                <article className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500 dark:text-stone-300">
                        Prep timeline
                    </p>
                    <ul className="space-y-4 text-sm text-stone-700 dark:text-stone-200">
                        {timeline.map((entry) => (
                            <li
                                key={entry.title}
                                className="rounded-3xl border border-stone-200/70 bg-white/90 p-4 dark:border-stone-700 dark:bg-zinc-900"
                            >
                                <p className="text-xs uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">
                                    {entry.title}
                                </p>
                                <p className="mt-2 text-base">{entry.detail}</p>
                            </li>
                        ))}
                    </ul>
                </article>
                <article className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500 dark:text-stone-300">
                        Guided flow
                    </p>
                    <ol className="space-y-4">
                        {steps.map((step, index) => (
                            <li
                                key={step.title}
                                className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-sm dark:border-emerald-900/40 dark:bg-zinc-900"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600/10 text-sm font-semibold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-100">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <p className="text-base font-semibold">
                                            {step.title}
                                        </p>
                                        <p className="text-sm text-stone-600 dark:text-stone-300">
                                            {step.detail}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </article>
            </section>

            <section className="grid gap-6 rounded-[32px] border border-stone-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-zinc-950/50 md:grid-cols-2">
                {toolkit.map((section) => (
                    <article
                        key={section.label}
                        className="rounded-3xl border border-stone-200 bg-white/90 p-6 text-sm text-stone-700 shadow-sm dark:border-stone-700 dark:bg-zinc-900 dark:text-stone-200"
                    >
                        <p className="text-xs uppercase tracking-[0.35em] text-stone-500 dark:text-stone-300">
                            {section.label}
                        </p>
                        <ul className="mt-4 space-y-2">
                            {section.items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-2 dark:border-stone-700"
                                >
                                    <span>{item}</span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            <section className="rounded-[32px] border border-emerald-100 bg-emerald-50/80 p-8 text-emerald-950 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-50">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em]">
                            Aftercare
                        </p>
                        <h2 className="mt-2 text-3xl font-serif">
                            Keep stress low after the move.
                        </h2>
                    </div>
                    <Link
                        href="/howto#soil-check"
                        className="inline-flex items-center justify-center rounded-full border border-emerald-200/70 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-900 transition hover:bg-emerald-100 dark:border-emerald-400/50 dark:text-emerald-50 dark:hover:bg-emerald-900/40"
                    >
                        Check moisture cues
                    </Link>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {aftercare.map((entry) => (
                        <article
                            key={entry.title}
                            className="rounded-3xl border border-emerald-100/70 bg-white/80 p-5 text-sm shadow-sm dark:border-emerald-900/50 dark:bg-emerald-900/50"
                        >
                            <p className="text-xs uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
                                {entry.title}
                            </p>
                            <p className="mt-2 text-base">{entry.note}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
