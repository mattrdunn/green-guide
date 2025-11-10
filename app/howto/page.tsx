import Link from 'next/link';
import type { Metadata } from 'next';
import GreenCard from '../components/GreenCard';
import { howtoGuides } from '../lib/howtoGuides';

const guideSections = howtoGuides;

const quickLinks = guideSections.map((guide) => ({
    href: `#${guide.id}`,
    title: guide.title,
    description: guide.description,
}));

export const metadata: Metadata = {
    title: 'How-To Library | Green Guide',
    description:
        'Actionable walkthroughs for repotting, moving into LECA, and decoding soil moisture—so every plant task feels calm and confident.',
};

export default function HowToLanding() {
    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-2">
            <GreenCard className="flex flex-col gap-8 p-8 text-white">
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                        How-To Library
                    </p>
                    <h1 className="text-4xl font-serif leading-tight sm:text-5xl">
                        Hands-on playbooks for the tasks plant parents ask
                        about most.
                    </h1>
                    <p className="max-w-3xl text-base text-white/90 sm:text-lg">
                        Each workflow is built from horticulture best practices,
                        lab testing, and the routines that keep our own
                        collections thriving. Jump straight to a section or skim
                        the table of contents below.
                    </p>
                </div>
                <div className="grid gap-4 text-sm sm:grid-cols-3">
                    {quickLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-2xl border border-white/30 bg-white/5 px-4 py-3 transition hover:bg-white/15"
                        >
                            <p className="font-semibold text-white">
                                {link.title}
                            </p>
                            <p className="text-white/80 text-xs">
                                {link.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </GreenCard>

            <section className="grid gap-6 rounded-3xl border border-emerald-100/70 bg-white/80 p-6 shadow-lg shadow-emerald-900/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/60 dark:shadow-black/30">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-200">
                            Field notes
                        </p>
                        <h2 className="text-2xl font-semibold text-emerald-900 dark:text-emerald-100">
                            What you&apos;ll find in every guide
                        </h2>
                    </div>
                    <p className="max-w-xl text-sm text-stone-600 dark:text-stone-300">
                        Structured checklists, context on when to act, and
                        sensory cues so you can adapt to your space, climate, or
                        plant collection.
                    </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                    {[
                        {
                            title: 'Signals to watch',
                            detail: 'Learn the visual and tactile cues that tell you when it is actually time to act.',
                        },
                        {
                            title: 'Step-by-step flows',
                            detail: 'Clear sequencing helps you prep, move with intention, and wrap up without loose ends.',
                        },
                        {
                            title: 'Time + focus',
                            detail: 'Know how long to budget and which skills you will be exercising before you begin.',
                        },
                    ].map((item) => (
                        <article
                            key={item.title}
                            className="rounded-2xl border border-emerald-100/70 bg-white/90 p-4 text-sm text-stone-700 dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:text-stone-200"
                        >
                            <h3 className="text-base font-semibold text-emerald-900 dark:text-emerald-100">
                                {item.title}
                            </h3>
                            <p>{item.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <div className="flex flex-col gap-10">
                {guideSections.map((guide, index) => (
                    <section
                        id={guide.id}
                        key={guide.id}
                        className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-lg shadow-stone-900/5 dark:border-zinc-800/70 dark:bg-zinc-950/60 dark:shadow-black/30"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100/70 pb-4 dark:border-zinc-800">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-300">
                                    Guide {String(index + 1).padStart(2, '0')}
                                </p>
                                <h2 className="text-2xl font-semibold text-stone-900 dark:text-white">
                                    {guide.title}
                                </h2>
                                <p className="max-w-3xl text-sm text-stone-600 dark:text-stone-300">
                                    {guide.description}
                                </p>
                            </div>
                            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-stone-200">
                                <p>
                                    <span className="font-semibold">
                                        Duration:
                                    </span>{' '}
                                    {guide.duration}
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Focus:
                                    </span>{' '}
                                    {guide.focus}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="space-y-4">
                                {guide.steps.map((step) => (
                                    <article
                                        key={step.title}
                                        className="rounded-2xl border border-stone-200/80 bg-white/80 p-4 text-sm text-stone-700 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:text-stone-200"
                                    >
                                        <h3 className="text-base font-semibold text-stone-900 dark:text-white">
                                            {step.title}
                                        </h3>
                                        <p>{step.detail}</p>
                                    </article>
                                ))}
                            </div>
                            <aside className="rounded-2xl border border-emerald-100/80 bg-emerald-50/70 p-4 text-sm text-emerald-900 shadow-inner dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-100">
                                <p className="text-xs font-semibold uppercase tracking-[0.35em]">
                                    When to use this
                                </p>
                                <ul className="mt-3 space-y-2">
                                    {guide.signals.map((signal) => (
                                        <li
                                            key={signal}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-300" />
                                            <p>{signal}</p>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
