'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import AccordionItem from './AccordionItem';
import globeIcon from '@/public/icons/globe.svg';
import waterDropIcon from '@/public/icons/water-drop.svg';
import sunnyIcon from '@/public/icons/sunny.svg';
import heightIcon from '@/public/icons/height.svg';
import meterIcon from '@/public/icons/speed.svg';
import pottedPlantIcon from '@/public/icons/potted-plant.svg';
import globeSearchIcon from '@/public/icons/globe-search.svg';
import calendarMonthIcon from '@/public/icons/calendar-month.svg';
import eventRepeatIcon from '@/public/icons/event-repeat.svg';

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
        label: 'Watering',
        value: 'Soak & dry out',
        caption: 'Water until runoff, then wait for the top 2" to dry.',
        icon: waterDropIcon,
    },
    {
        label: 'Difficulty',
        value: 'Easy',
        caption: 'Perfect for confident beginners.',
        icon: meterIcon,
    },
];

const accordionSections = [
    {
        icon: eventRepeatIcon,
        label: 'Watering Frequency',
        value: '7 to 14 days',
        body: 'Water demand will fluctuate based on a variety of factors, including season, humidity, and temperature.',
    },
    {
        icon: heightIcon,
        label: 'Height',
        value: '3-10 ft indoors',
        body: 'Expect the plant to climb once given a moss pole or trellis; prune vines above 10 ft to keep fenestrations manageable.',
    },
    {
        icon: pottedPlantIcon,
        label: 'Soil',
        value: 'Light & airy mix',
        body: 'Blend chunky bark, perlite, and coco coir for a well-draining aroid mix that still holds gentle moisture.',
    },
    {
        icon: waterDropIcon,
        label: 'Semi-hydro Compatible',
        value: 'Yes',
        body: 'Switch to LECA or pon with a mild nutrient solution after roots are acclimated to passive hydro.',
    },
    {
        icon: meterIcon,
        label: 'Fertilizer',
        value: '4N-2P-1K',
        body: 'Balanced, foliage-forward fertilizers keep steady growth without leaf burn.',
    },
    {
        icon: calendarMonthIcon,
        label: 'Fertilizer Frequency',
        value: 'Every 3 months',
        body: 'Feed lightly during the growing season and pause when light levels dip in winter.',
    },
    {
        icon: globeSearchIcon,
        label: 'Native Habitat',
        value: 'Southern Mexico',
        body: 'Epiphytic vines climbing jungle canopies—mimic with totems or trellises indoors.',
    },
    {
        icon: waterDropIcon,
        label: 'Humidity',
        value: '60%+ ideal',
        body: 'Leaf edges crisp below 40%; humidifiers or clustering plants together helps.',
    },
    {
        icon: sunnyIcon,
        label: 'Temperature',
        value: '65° – 85°F',
        body: 'Protect from drafts and sudden drops below 55°F.',
    },
    {
        icon: globeIcon,
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

            <div className="grid gap-4">
                {accordionSections.map((section) => (
                    <AccordionItem
                        key={section.label}
                        label={section.label}
                        value={section.value}
                        icon={section.icon}
                    >
                        {section.body}
                    </AccordionItem>
                ))}
            </div>
        </div>
    );
}
