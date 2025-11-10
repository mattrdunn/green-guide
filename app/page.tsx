import Link from 'next/link';
import GreenCard from './components/GreenCard';
import HowToSpotlight from './components/HowToSpotlight';
import SearchBar from './components/SearchBar';

const searchExamples = [
    'repotting monstera deliciosa',
    'pet-safe floor plants',
    'switching to semi-hydro',
];

const quickDestinations = [
    {
        badge: 'Library',
        title: 'Browse a living species profile',
        description:
            'Start with Monstera deliciosa while we finish indexing the full collection.',
        href: '/monstera/deliciosa',
    },
    {
        badge: 'How-To',
        title: 'Open the task catalog',
        description:
            'Step-by-step flows for repotting, LECA, soil sensing, and more.',
        href: '/howto',
    },
    {
        badge: 'Workshop',
        title: 'Visit the repotting lab',
        description:
            'Follow the workflow, toolkit, and aftercare timeline start to finish.',
        href: '/repotting',
    },
];

const fieldNotes = [
    {
        title: 'Run a root audit each season',
        detail:
            'Gently slide plants from their nursery pots and look for circling roots, hydrophobic soil, or salt crust on the rim.',
    },
    {
        title: 'Dial in a breathable mix',
        detail:
            'Blend chunky aroid mix with bark, perlite, and a touch of compost so water can move without starving roots of oxygen.',
    },
    {
        title: 'Let the plant settle in',
        detail:
            'Keep fresh transplants out of direct sun for a week, mist aerial roots, and hold fertilizer until new growth returns.',
    },
];

const knowledgeStacks = [
    {
        title: 'Care fundamentals',
        description:
            'Daily rhythms, watering cues, and seasonal checklists pulled from our flagship species profiles.',
        items: [
            { label: 'Monstera daily rhythm', href: '/monstera/deliciosa' },
            { label: 'Moisture gut-check', href: '/howto#soil-check' },
        ],
    },
    {
        title: 'Task workshops',
        description:
            'Hands-on flows for when you want a reliable process to follow step-by-step.',
        items: [
            { label: 'Repotting lab', href: '/repotting' },
            { label: 'Semi-hydro shift', href: '/howto#leca' },
        ],
    },
    {
        title: 'Community cues',
        description:
            'Beta testers drop their weekly routines here so you can borrow what works right now.',
        items: [
            { label: 'Dust and inspect day', href: '/monstera/deliciosa' },
            { label: 'Care question dropbox', href: '/howto' },
        ],
    },
];

export default function Home() {
    const searchPlaceholder =
        searchExamples[Math.floor(Math.random() * searchExamples.length)];

    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-2">
            <GreenCard className="grid gap-10 p-8 text-white shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                        What plant question can we answer today?
                    </p>
                    <h1 className="text-4xl font-serif leading-tight sm:text-5xl">
                        Explore species intel, how-to workflows, and care cues in one place.
                    </h1>
                    <p className="max-w-3xl text-base text-white/90 sm:text-lg">
                        Green Guide is shifting from pitch decks to practical tooling. Use the search sandbox
                        and quick links to jump straight into the knowledge that keeps your collection steady.
                    </p>
                    <SearchBar
                        placeholder={searchPlaceholder}
                        suggestions={['repotting', 'semi-hydro', 'pet safety']}
                    />
                </div>
                <div className="grid gap-4">
                    {quickDestinations.map((destination) => (
                        <Link
                            key={destination.href}
                            href={destination.href}
                            className="rounded-[28px] border border-white/20 bg-white/10 p-4 transition hover:bg-white/20"
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                                {destination.badge}
                            </span>
                            <p className="mt-2 text-xl font-semibold">
                                {destination.title}
                            </p>
                            <p className="mt-1 text-sm text-white/80">
                                {destination.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </GreenCard>

            <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
                <article className="rounded-[32px] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-zinc-950/50">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500 dark:text-stone-300">
                        Field notes
                    </p>
                    <h2 className="mt-2 text-3xl font-serif">
                        Small cues that tell you what your plants need.
                    </h2>
                    <ul className="mt-6 space-y-4 text-sm text-stone-700 dark:text-stone-200">
                        {fieldNotes.map((note) => (
                            <li
                                key={note.title}
                                className="rounded-3xl border border-stone-200/80 bg-white/90 p-4 dark:border-stone-700/80 dark:bg-zinc-900"
                            >
                                <p className="text-base font-semibold text-stone-900 dark:text-stone-100">
                                    {note.title}
                                </p>
                                <p className="text-sm text-stone-600 dark:text-stone-300">
                                    {note.detail}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3 text-sm">
                        <Link
                            href="/howto"
                            className="inline-flex items-center justify-center rounded-full border border-stone-300 px-4 py-2 font-semibold uppercase tracking-wide text-stone-800 transition hover:bg-stone-100 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-800"
                        >
                            Browse more how-to topics
                        </Link>
                        <Link
                            href="/repotting"
                            className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 font-semibold uppercase tracking-wide text-emerald-900 transition hover:bg-emerald-100 dark:border-emerald-500/60 dark:bg-emerald-900/20 dark:text-emerald-200"
                        >
                            Jump to repotting
                        </Link>
                    </div>
                </article>
                <HowToSpotlight />
            </section>

            <section className="rounded-[32px] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-zinc-950/50">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500 dark:text-stone-300">
                            Knowledge stacks
                        </p>
                        <h2 className="text-3xl font-serif">
                            Pick a lane and start exploring.
                        </h2>
                    </div>
                    <p className="max-w-md text-sm text-stone-600 dark:text-stone-300">
                        These stacks link directly into the parts of the product that are already live so you can
                        poke around while we wire up the rest of the catalog.
                    </p>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {knowledgeStacks.map((stack) => (
                        <article
                            key={stack.title}
                            className="rounded-3xl border border-stone-200/80 bg-white/90 p-5 text-sm text-stone-700 shadow-sm dark:border-stone-700/80 dark:bg-zinc-900 dark:text-stone-200"
                        >
                            <p className="text-xs uppercase tracking-[0.35em] text-stone-500 dark:text-stone-300">
                                {stack.title}
                            </p>
                            <p className="mt-2 text-base font-semibold text-stone-900 dark:text-stone-100">
                                {stack.description}
                            </p>
                            <div className="mt-4 space-y-2">
                                {stack.items.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-2 font-semibold text-stone-800 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-stone-700 dark:text-stone-100 dark:hover:border-emerald-600 dark:hover:bg-emerald-900/30"
                                    >
                                        <span>{item.label}</span>
                                        <span className="text-xs uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">
                                            Open
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
