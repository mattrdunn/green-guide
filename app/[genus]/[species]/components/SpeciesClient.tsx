'use client';

import Link from 'next/link';
import { MouseEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPlantQuery } from '@/store/api/greenGuideApi';
import HeaderCard from './HeaderCard';
import Overview from './Overview';
import Care from './Care';
import Issues from './Issues';
import cn from '@/app/lib/cn';

const tabs = ['overview', 'care', 'issues', 'getStarted'] as const;
type TabKey = (typeof tabs)[number];

export default function SpeciesClient({
    genus,
    species,
    variety,
}: {
    genus: string;
    species: string;
    variety?: string;
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'speciesClient' });
    const [activeTab, setActiveTab] = useState<TabKey>('overview');
    const tabListRef = useRef<HTMLDivElement | null>(null);

    const {
        data: plant,
        isLoading,
        isError,
    } = useGetPlantQuery({ genus, species, variety });

    const handleTabClick = (
        tab: TabKey,
        event: MouseEvent<HTMLButtonElement>,
    ) => {
        setActiveTab(tab);

        const container = tabListRef.current;
        if (!container) {
            return;
        }

        const button = event.currentTarget;
        const buttonStart = button.offsetLeft;
        const buttonEnd = buttonStart + button.offsetWidth;
        const visibleStart = container.scrollLeft;
        const visibleEnd = visibleStart + container.clientWidth;

        if (buttonStart < visibleStart) {
            container.scrollTo({ left: buttonStart, behavior: 'smooth' });
        } else if (buttonEnd > visibleEnd) {
            container.scrollTo({
                left: buttonEnd - container.clientWidth,
                behavior: 'smooth',
            });
        }
    };

    if (isLoading) {
        return (
            <div className="mx-auto flex w-full max-w-5xl flex-col px-2 pb-12 pt-0 sm:px-6 sm:pb-16 sm:pt-0 lg:px-0">
                <div className="rounded-3xl border border-dashed border-stone-300 px-6 py-24 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-300">
                    {t('loading')}
                </div>
            </div>
        );
    }

    if (isError || !plant) {
        return (
            <div className="mx-auto flex w-full max-w-5xl flex-col px-2 pb-12 pt-0 sm:px-6 sm:pb-16 sm:pt-0 lg:px-0">
                <div className="rounded-3xl border border-dashed border-stone-300 px-6 py-24 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-300">
                    {t('loadError')}
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-2 pb-12 pt-0 sm:px-6 sm:pb-16 sm:pt-0 lg:px-0">
            <nav className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                <Link
                    href="/"
                    className="hover:text-stone-900 dark:hover:text-white"
                >
                    {t('breadcrumb.home')}
                </Link>
                <span>/</span>
                <Link
                    href={`/${genus}`}
                    className="capitalize hover:text-stone-900 dark:hover:text-white"
                >
                    {genus}
                </Link>
                <span>/</span>
                <span
                    className={cn(
                        'capitalize',
                        !variety &&
                            'font-semibold text-stone-900 dark:text-white',
                    )}
                >
                    {species.replace(/-/g, ' ')}
                </span>
                {variety && (
                    <>
                        <span>/</span>
                        <span className="font-semibold capitalize text-stone-900 dark:text-white">
                            {variety.replace(/-/g, ' ')}
                        </span>
                    </>
                )}
            </nav>

            <HeaderCard
                genus={genus}
                species={species}
                variety={variety}
                plant={plant}
            />

            <section>
                <nav
                    ref={tabListRef}
                    className="no-scrollbar flex gap-3 overflow-x-auto pb-3"
                >
                    {tabs.map((tab) => {
                        const isActive = tab === activeTab;
                        return (
                            <button
                                key={tab}
                                type="button"
                                onClick={(event) => handleTabClick(tab, event)}
                                className={cn(
                                    'rounded-full whitespace-nowrap border px-4 py-2 text-sm font-semibold uppercase tracking-wide text-stone-700 transition dark:text-stone-200',
                                    isActive
                                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200'
                                        : 'border-stone-200/80 hover:bg-stone-100 dark:border-stone-700/70 dark:hover:bg-stone-800',
                                )}
                            >
                                {t(`tabs.${tab}`)}
                            </button>
                        );
                    })}
                </nav>

                <div className="mt-6 sm:mt-6">
                    {activeTab === 'overview' && (
                        <Overview
                            vitals={plant.vitals}
                            overview={plant.overview}
                        />
                    )}
                    {activeTab === 'care' && <Care care={plant.care} />}
                    {activeTab === 'issues' && <Issues issues={plant.issues} />}
                    {activeTab === 'getStarted' && (
                        <div className="rounded-3xl border border-dashed border-stone-300 px-6 py-16 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-300">
                            {t('tabCopy.getStarted')}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
