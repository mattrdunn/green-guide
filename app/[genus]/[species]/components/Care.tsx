'use client';

import { useTranslation } from 'react-i18next';

const carePillars = [
    {
        label: 'Hydration',
        stat: 'Deep soak every 7-10d',
        detail: 'Water until you see runoff, then drain thoroughly to avoid water-logged soiled.',
    },
    {
        label: 'Humidity',
        stat: '60%+ ideal',
        detail: 'Pair a tray of pebbles with a gentle fan to keep foliage crisp and pest-free.',
    },
    {
        label: 'Nutrition',
        stat: 'Low & steady',
        detail: 'Feed with a foliage-forward fertilizer at 1/2 strength during active growth.',
    },
    {
        label: 'Support',
        stat: 'Trellis or pole',
        detail: 'Secure aerial roots into a moss pole so leaves size up with every new node.',
    },
];

const wateringTimeline = [
    {
        season: 'Spring & Summer',
        cadence: 'Every 7 days',
        tip: 'Morning waterings keep foliage dry by night; check moisture 2" down before each soak.',
    },
    {
        season: 'Autumn',
        cadence: 'Every 10-12 days',
        tip: 'Light declines—allow the top half of the mix to dry before watering again.',
    },
    {
        season: 'Winter',
        cadence: 'Every 14+ days',
        tip: 'Brighten placement and mist weekly; resume feeding when new growth returns.',
    },
];

type RoutineTitleKey = 'routines.weekly' | 'routines.monthly';

const careRoutines: { titleKey: RoutineTitleKey; steps: string[] }[] = [
    {
        titleKey: 'routines.weekly',
        steps: [
            'Rotate the planter a quarter turn to share sunlight.',
            'Dust the newest leaves with a damp cloth so stomata stay open.',
            'Inspect petioles and soil surface for pests or fungus gnats.',
        ],
    },
    {
        titleKey: 'routines.monthly',
        steps: [
            'Flush the substrate with lukewarm water to clear mineral buildup.',
            'Trim yellowing foliage and reroute aerial roots into the support pole.',
            'Top-dress with fresh chunky mix if the soil has compacted.',
        ],
    },
] as const;

const toolkit = [
    {
        item: 'Moisture meter or wooden chopstick',
        note: 'Confirms dryness below the surface before every watering.',
    },
    {
        item: 'Humidifier with built-in hygrometer',
        note: 'Keeps the microclimate above 55% during drier months.',
    },
    {
        item: 'Neem + insecticidal soap duo',
        note: 'Alternate sprays ward off thrips, mites, and scale outbreaks.',
    },
    {
        item: 'Moss pole + soft ties',
        note: 'Anchors vines upright so each node develops larger fenestrations.',
    },
] as const;

export default function Care() {
    const { t } = useTranslation('translation', { keyPrefix: 'care' });
    const wateringTips = t('wateringRhythm.tips', {
        returnObjects: true,
    }) as string[];

    return (
        <div className="space-y-8">
            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {carePillars.map((pillar) => (
                    <article
                        key={pillar.label}
                        className="rounded-3xl border border-stone-200/80 bg-white/90 p-5 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40"
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                            {pillar.label}
                        </p>
                        <p className="mt-2 text-xl font-semibold text-stone-900 dark:text-stone-50">
                            {pillar.stat}
                        </p>
                        <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                            {pillar.detail}
                        </p>
                    </article>
                ))}
            </section>

            <section className="grid gap-6 rounded-[28px] border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40 md:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                        {t('wateringRhythm.label')}
                    </p>
                    <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-50">
                        {t('wateringRhythm.heading')}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        {t('wateringRhythm.body')}
                    </p>
                    <ul className="space-y-3 text-sm text-stone-700 dark:text-stone-200">
                        {wateringTips.map((tip) => (
                            <li key={tip} className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                                {tip}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-3xl border border-stone-200/80 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-6 dark:border-stone-700/70 dark:from-emerald-900/20 dark:via-zinc-900 dark:to-emerald-900/20">
                    <h4 className="text-sm uppercase tracking-[0.4em] text-stone-500">
                        {t('seasonalCadence')}
                    </h4>
                    <div className="mt-4 space-y-4">
                        {wateringTimeline.map((window) => (
                            <div
                                key={window.season}
                                className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/50"
                            >
                                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                                    {window.season}
                                </p>
                                <p className="mt-1 text-lg font-semibold text-stone-900 dark:text-stone-100">
                                    {window.cadence}
                                </p>
                                <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                                    {window.tip}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {careRoutines.map((routine) => (
                    <article
                        key={routine.titleKey}
                        className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40"
                    >
                        <h4 className="text-sm uppercase tracking-[0.4em] text-stone-500">
                            {t(routine.titleKey)}
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm text-stone-700 dark:text-stone-200">
                            {routine.steps.map((step) => (
                                <li key={step} className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}

                <article className="rounded-3xl border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
                    <h4 className="text-sm uppercase tracking-[0.4em] text-stone-500">
                        {t('toolkit')}
                    </h4>
                    <ul className="mt-4 space-y-4 text-sm text-stone-700 dark:text-stone-200">
                        {toolkit.map((tool) => (
                            <li
                                key={tool.item}
                                className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3 dark:border-stone-700/70 dark:bg-zinc-900/40"
                            >
                                <p className="font-semibold text-stone-900 dark:text-stone-50">
                                    {tool.item}
                                </p>
                                <p className="mt-1 text-xs text-stone-600 dark:text-stone-300">
                                    {tool.note}
                                </p>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </div>
    );
}
