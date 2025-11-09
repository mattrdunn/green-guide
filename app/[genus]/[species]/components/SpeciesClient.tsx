'use client';

import { MouseEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageCarousel from './ImageCarousel';
import Overview from './Overview';
import Care from './Care';
import GreenCard from '@/app/components/GreenCard';
import cn from '@/app/lib/cn';

const tabs = ['overview', 'care', 'issues', 'getStarted'] as const;
type TabKey = (typeof tabs)[number];
type SecondaryTab = Extract<TabKey, 'issues' | 'getStarted'>;

const quickFacts = [
    { label: 'Light', value: 'Bright, dappled' },
    { label: 'Water', value: 'When top 2" dry' },
    { label: 'Difficulty', value: 'Easy going' },
    { label: 'Pet safe', value: 'Toxic if chewed' },
];

const highlightNotes = [
    'Native to the tropical rainforests of Southern Mexico.',
    'Fenestrations form once plants reach 3+ years old.',
    'Thrives with humidity above 60% and weekly misting.',
];

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
            <GreenCard>
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                        {t('badge')}
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-200" />
                    </div>

                    <div className="rounded-[30px]">
                        <ImageCarousel
                            images={[
                                '/images/monstera-img-1.jpeg',
                                '/images/monstera-img-2.jpeg',
                            ]}
                        />
                    </div>

                    <div className="space-y-6 pb-2 sm:pb-0">
                        <div>
                            <p className="text-sm uppercase tracking-[0.6em] text-white/60">
                                {t('commonName')}
                            </p>
                            <h1 className="mt-2 flex flex-wrap items-end gap-4 font-serif text-4xl leading-tight sm:text-5xl">
                                <span className="capitalize font-bold">
                                    {genus}
                                </span>
                                <span className="capitalize font-light">
                                    {species}
                                </span>
                            </h1>
                            <p className="mt-4 max-w-3xl text-base text-white/90 sm:text-lg">
                                {t('description')}
                            </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {quickFacts.map((fact) => (
                                <div
                                    key={fact.label}
                                    className="rounded-2xl border border-white/20 bg-white/10 p-4"
                                >
                                    <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                                        {fact.label}
                                    </p>
                                    <p className="mt-1 text-xl font-semibold">
                                        {fact.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <ul className="space-y-3 rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-white/90">
                            {highlightNotes.map((note) => (
                                <li key={note} className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-lime-200" />
                                    <p>{note}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </GreenCard>

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
