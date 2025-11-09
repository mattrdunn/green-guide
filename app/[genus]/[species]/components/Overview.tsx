'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import AccordionItem from './AccordionItem';
import globeIcon from '@/public/icons/globe.svg';
import heightIcon from '@/public/icons/height.svg';
import sunnyIcon from '@/public/icons/sunny.svg';
import meterIcon from '@/public/icons/speed.svg';

const vitals = [
    {
        label: 'USDA Zone',
        value: '9-11',
        caption: 'Keep above 60°F year-round.',
        icon: globeIcon,
    },
    {
        label: 'Light',
        value: 'Bright, indirect',
        caption: 'Morning sun, filtered afternoons.',
        icon: sunnyIcon,
    },
    {
        label: 'Height',
        value: '3-10 ft indoors',
        caption: 'Provide a moss pole for climbing.',
        icon: heightIcon,
    },
    {
        label: 'Difficulty',
        value: 'Easy',
        caption: 'Perfect for confident beginners.',
        icon: meterIcon,
    },
];

const careHighlights = [
    'Rotate the pot every week for even fenestration.',
    'Water thoroughly, then allow the top 2" of soil to dry.',
    'Monthly misting or pebble trays keep humidity above 60%.',
];

const accordionSections = [
    {
        label: 'Soil',
        value: 'Light & airy mix',
        body: 'Blend chunky bark, perlite, and coco coir for a well-draining aroid mix that still holds gentle moisture.',
    },
    {
        label: 'Semi-hydro Compatible',
        value: 'Yes',
        body: 'Switch to LECA or pon with a mild nutrient solution after roots are acclimated to passive hydro.',
    },
    {
        label: 'Fertilizer',
        value: '4N-2P-1K',
        body: 'Balanced, foliage-forward fertilizers keep steady growth without leaf burn.',
    },
    {
        label: 'Fertilizer Frequency',
        value: 'Every 3 months',
        body: 'Feed lightly during the growing season and pause when light levels dip in winter.',
    },
    {
        label: 'Native Habitat',
        value: 'Southern Mexico',
        body: 'Epiphytic vines climbing jungle canopies—mimic with totems or trellises indoors.',
    },
    {
        label: 'Humidity',
        value: '60%+ ideal',
        body: 'Leaf edges crisp below 40%; humidifiers or clustering plants together helps.',
    },
    {
        label: 'Temperature',
        value: '65° – 85°F',
        body: 'Protect from drafts and sudden drops below 55°F.',
    },
    {
        label: 'Grow Season',
        value: 'Spring–Fall',
        body: 'Expect largest jumps in size when daylight exceeds 12 hours.',
    },
];

export default function Overview() {
    const { t } = useTranslation('translation', { keyPrefix: 'overview' });
    const weeklyChecklistItems = t('weeklyChecklist.items', {
        returnObjects: true,
    }) as string[];

    return (
        <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {vitals.map((vital) => (
                    <article
                        key={vital.label}
                        className="rounded-3xl border border-stone-200/80 bg-white/90 p-4 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40"
                    >
                        <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-emerald-50 p-2 dark:bg-emerald-900/30">
                                <Image
                                    src={vital.icon}
                                    alt={vital.label}
                                    className="h-8 w-8"
                                />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                                    {vital.label}
                                </p>
                                <p className="text-lg font-semibold">
                                    {vital.value}
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
                            {vital.caption}
                        </p>
                    </article>
                ))}
            </div>

            <div className="grid gap-6 rounded-[28px] border border-stone-200/80 bg-white/90 p-6 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-300">
                        {t('dailyRhythm.label')}
                    </p>
                    <h3 className="text-2xl font-serif">
                        {t('dailyRhythm.heading')}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-300">
                        {t('dailyRhythm.body')}
                    </p>
                    <ul className="space-y-3 text-sm text-stone-700 dark:text-stone-200">
                        {careHighlights.map((tip) => (
                            <li key={tip} className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                                {tip}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-3xl border border-stone-200/80 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-6 dark:border-stone-700/70 dark:from-emerald-900/20 dark:via-zinc-900 dark:to-emerald-900/10">
                    <h4 className="text-sm uppercase tracking-[0.4em] text-stone-500">
                        {t('weeklyChecklist.title')}
                    </h4>
                    <ul className="mt-4 space-y-4 text-sm text-stone-700 dark:text-stone-200">
                        {weeklyChecklistItems.map((item) => (
                            <li
                                key={item}
                                className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3 dark:border-stone-700/70 dark:bg-zinc-900/40"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="grid gap-4">
                {accordionSections.map((section) => (
                    <AccordionItem
                        key={section.label}
                        label={section.label}
                        value={section.value}
                    >
                        {section.body}
                    </AccordionItem>
                ))}
            </div>
        </div>
    );
}
