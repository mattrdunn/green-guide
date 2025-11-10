'use client';

import { MouseEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderCard from './HeaderCard';
import Overview from './Overview';
import Care from './Care';
import Issues from './Issues';
import cn from '@/app/lib/cn';

const tabs = ['overview', 'care', 'issues', 'getStarted'] as const;
type TabKey = (typeof tabs)[number];
type SecondaryTab = Extract<TabKey, 'issues' | 'getStarted'>;

export default function SpeciesClient({
    genus,
    species,
}: {
    genus: string;
    species: string;
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'speciesClient' });
    const [activeTab, setActiveTab] = useState<TabKey>('overview');
    const tabListRef = useRef<HTMLDivElement | null>(null);

    const tabCopy: Record<SecondaryTab, string> = {
        issues: t('tabCopy.issues'),
        getStarted: t('tabCopy.getStarted'),
    };

    const handleTabClick = (tab: TabKey, event: MouseEvent<HTMLButtonElement>) => {
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
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-2 pb-12 pt-0 sm:px-6 sm:pb-16 sm:pt-8 lg:px-0">
            <HeaderCard genus={genus} species={species} />

            <section className="rounded-none border-0 bg-transparent p-0 shadow-none dark:bg-transparent sm:rounded-[32px] sm:border sm:border-stone-200/70 sm:bg-white/80 sm:p-8 sm:shadow-sm sm:backdrop-blur sm:dark:border-stone-800/60 sm:dark:bg-zinc-900/40">
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
                    {activeTab === 'overview' && <Overview />}
                    {activeTab === 'care' && <Care />}
                    {activeTab === 'issues' && <Issues />}
                    {activeTab !== 'overview' && activeTab !== 'care' && (
                        <div className="rounded-3xl border border-dashed border-stone-300 px-6 py-16 text-center text-sm text-stone-500 dark:border-stone-700 dark:text-stone-300">
                            {tabCopy[activeTab as SecondaryTab] ??
                                t('emptyStates.default')}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
