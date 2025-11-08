import Image from 'next/image';
import Link from 'next/link';

const featureHighlights = [
    {
        title: 'Guided care',
        description:
            'Seasonal reminders, soil tips, and confidence-boosting checklists so you always know the next move.',
        badge: 'Care plans',
    },
    {
        title: 'Visual IDs',
        description:
            'Upload a quick photo to log growth, spot pests, or compare variegation and instantly get context.',
        badge: 'Visual notes',
    },
    {
        title: 'Product picks',
        description:
            'Curated fertilizers, soil mixes, and grow lights sourced for your exact space and experience level.',
        badge: 'Shop smarter',
    },
    {
        title: 'Space planning',
        description:
            'Map light zones indoors or lay out landscape beds and match species that will thrive there.',
        badge: 'Design tools',
    },
];

const roadmap = [
    {
        title: 'Searchable library',
        detail:
            'Browse hundreds of species with filters for light, habit, pet safety, and difficulty.',
    },
    {
        title: 'Anys, your AI botanist',
        detail:
            'Chat about symptoms, diagnose pests, and get gentle nudges when it is time to repot.',
    },
    {
        title: 'Collaborative lists',
        detail:
            'Share wish lists, garden layouts, or gifting guides with friends and clients.',
    },
];

const previewTasks = [
    'Rinse foliage to keep fenestrations dust-free.',
    'Bottom-water for 15 minutes, drain completely.',
    'Add slow-release fertilizer to the top layer.',
];

export default function Home() {
    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-2">
            <section className="grid gap-10 rounded-[32px] bg-gradient-to-br from-emerald-900 via-emerald-700 to-lime-500 p-8 text-white shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                        Beta
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-200" />
                    </span>
                    <h1 className="text-4xl font-serif leading-tight sm:text-5xl">
                        Plant knowledge that grows with you.
                    </h1>
                    <p className="max-w-2xl text-base text-white/90 sm:text-lg">
                        Green Guide distills research, community wisdom, and AI
                        insights into care plans that fit your light, space, and
                        confidence level.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/monstera/deliciosa"
                            className="rounded-full bg-white px-5 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-900 transition hover:bg-lime-100"
                        >
                            Browse a live profile
                        </Link>
                        <Link
                            href="#waitlist"
                            className="rounded-full border border-white/60 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
                        >
                            Join the waitlist
                        </Link>
                    </div>
                    <div className="grid gap-4 text-sm text-white/90 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/20 p-4">
                            <p className="text-2xl font-bold">+1,200</p>
                            <p className="text-white/70">
                                Species on our research slate
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/20 p-4">
                            <p className="text-2xl font-bold">24/7</p>
                            <p className="text-white/70">
                                AI answers from Anys
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/20 p-4">
                            <p className="text-2xl font-bold">Zero guesswork</p>
                            <p className="text-white/70">
                                Personalized care routines
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-[28px] border border-white/20 bg-white/10 p-6 backdrop-blur">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/70">
                        <p>Today&apos;s care card</p>
                        <span className="rounded-full bg-white/10 px-3 py-1">
                            Preview
                        </span>
                    </div>
                    <div className="mt-4 flex flex-col gap-4 rounded-[22px] bg-white/10 p-4">
                        <div className="flex gap-4">
                            <div className="h-24 w-24 overflow-hidden rounded-2xl border border-white/20">
                                <Image
                                    src="/images/monstera-img-1.jpeg"
                                    alt="Monstera deliciosa leaf close-up"
                                    width={240}
                                    height={240}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                                    Spotlight
                                </p>
                                <p className="text-xl font-semibold">
                                    Monstera deliciosa
                                </p>
                                <p className="text-sm text-white/80">
                                    Swiss Cheese Plant
                                </p>
                            </div>
                        </div>
                        <ul className="space-y-3 text-sm text-white/80">
                            {previewTasks.map((task) => (
                                <li
                                    key={task}
                                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3"
                                >
                                    <span className="mt-1 h-2 w-2 rounded-full bg-lime-200" />
                                    <p>{task}</p>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/monstera/deliciosa"
                            className="inline-flex items-center justify-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-white"
                        >
                            Open profile
                        </Link>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                        Why green guide
                    </p>
                    <h2 className="text-3xl font-serif">
                        A single home for every plant question.
                    </h2>
                    <p className="max-w-2xl text-base text-stone-600 dark:text-stone-300">
                        We pair horticultural science with the lived experience
                        of plant parents to create a reference that feels as
                        friendly as your favorite nursery expert.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {featureHighlights.map((feature) => (
                        <article
                            key={feature.title}
                            className="rounded-3xl border border-stone-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-stone-800/60 dark:bg-zinc-900/60"
                        >
                            <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200">
                                {feature.badge}
                            </span>
                            <h3 className="mt-4 text-xl font-semibold">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                                {feature.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="grid gap-8 rounded-[28px] border border-stone-200 bg-white/60 p-8 shadow-sm dark:border-stone-700 dark:bg-zinc-900/40 md:grid-cols-2">
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                        Peek inside
                    </p>
                    <h2 className="text-3xl font-serif">
                        Species profiles built for action.
                    </h2>
                    <p className="text-base text-stone-600 dark:text-stone-300">
                        Every profile highlights at-a-glance vitals, deeper
                        context, and guided steps so you can stop doom-scrolling
                        forums and start caring with assurance.
                    </p>
                    <ul className="space-y-3 text-sm text-stone-700 dark:text-stone-200">
                        <li className="flex gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                            Light, humidity, soil, and fertilizer insights.
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                            Care timeline tailored to your season.
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                            Troubleshooting cues for pests or nutrient issues.
                        </li>
                    </ul>
                </div>
                <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-md dark:border-stone-700 dark:bg-zinc-900">
                    <div className="flex flex-col gap-4">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/images/monstera-img-2.jpeg"
                                alt="Monstera leaf detail"
                                width={640}
                                height={480}
                                className="h-48 w-full object-cover"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.4em] text-stone-500">
                                    Spotlight
                                </p>
                                <p className="text-2xl font-serif">
                                    Monstera deliciosa
                                </p>
                            </div>
                            <Link
                                href="/monstera/deliciosa"
                                className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-stone-700 transition hover:bg-stone-100 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800"
                            >
                                View
                            </Link>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-stone-200 p-4 text-sm dark:border-stone-700">
                                <p className="text-stone-500">Light</p>
                                <p className="text-lg font-semibold">
                                    Bright, indirect
                                </p>
                            </div>
                            <div className="rounded-2xl border border-stone-200 p-4 text-sm dark:border-stone-700">
                                <p className="text-stone-500">Difficulty</p>
                                <p className="text-lg font-semibold">
                                    Easy going
                                </p>
                            </div>
                            <div className="rounded-2xl border border-stone-200 p-4 text-sm dark:border-stone-700">
                                <p className="text-stone-500">Native range</p>
                                <p className="text-lg font-semibold">
                                    South America
                                </p>
                            </div>
                            <div className="rounded-2xl border border-stone-200 p-4 text-sm dark:border-stone-700">
                                <p className="text-stone-500">Ideal temp</p>
                                <p className="text-lg font-semibold">
                                    65° - 85°F
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="roadmap"
                className="rounded-[28px] border border-stone-200 bg-white/80 p-8 shadow-sm dark:border-stone-700 dark:bg-zinc-900/50"
            >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                    Coming soon
                </p>
                <h2 className="mt-2 text-3xl font-serif">
                    We&apos;re building the tools you asked for.
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {roadmap.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-700 dark:bg-zinc-900"
                        >
                            <h3 className="text-lg font-semibold">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                                {item.detail}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section
                id="waitlist"
                className="flex flex-col gap-4 rounded-[32px] bg-emerald-900 px-8 py-10 text-white shadow-lg md:flex-row md:items-center md:justify-between"
            >
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                        Stay in the loop
                    </p>
                    <h2 className="text-3xl font-serif">
                        Be first in line for beta invites.
                    </h2>
                    <p className="max-w-lg text-sm text-emerald-100">
                        We&apos;ll share early access, feature drops, and plant
                        care prompts straight to your inbox. No spam, promise.
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                        href="mailto:hello@greenguide.app"
                        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-emerald-900 transition hover:bg-lime-100"
                    >
                        Email us to join
                    </a>
                    <Link
                        href="/monstera/deliciosa"
                        className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
                    >
                        Explore a sample
                    </Link>
                </div>
            </section>
        </div>
    );
}
