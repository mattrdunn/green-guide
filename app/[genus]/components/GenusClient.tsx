'use client';

import { MouseEvent, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import cn from '@/app/lib/cn';
import type { GenusDetailDoc } from '@/lib/db/genus';
import GenusHero from './GenusHero';
import GenusOverview from './GenusOverview';
import GenusSpecies from './GenusSpecies';
import GenusTaxonomy from './GenusTaxonomy';
import type { GenusSpeciesItem } from './types';

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

const tabs = ['overview', 'species', 'taxonomy'] as const;
type TabKey = (typeof tabs)[number];

export default function GenusClient({
    genus,
    species,
}: {
    genus: GenusDetailDoc;
    species: GenusSpeciesItem[];
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'genusClient' });
    const [activeTab, setActiveTab] = useState<TabKey>('overview');
    const tabListRef = useRef<HTMLDivElement | null>(null);

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

    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-2 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-0 lg:px-0">
            <nav className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                <Link
                    href="/"
                    className="hover:text-stone-900 dark:hover:text-white"
                >
                    {t('breadcrumb.home')}
                </Link>
                <span>/</span>
                <span className="font-semibold text-stone-900 dark:text-white">
                    {capitalize(genus.genus)}
                </span>
            </nav>

            <GenusHero genus={genus} species={species} />

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
                        <GenusOverview genus={genus} />
                    )}
                    {activeTab === 'species' && (
                        <GenusSpecies species={species} />
                    )}
                    {activeTab === 'taxonomy' && (
                        <GenusTaxonomy genus={genus} />
                    )}
                </div>
            </section>
        </div>
    );
}
