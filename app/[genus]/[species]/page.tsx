'use client';

import React, { ButtonHTMLAttributes, useState } from 'react';
import { notFound } from 'next/navigation';
import ImageCarousel from './components/ImageCarousel';
import Overview from './components/Overview';

const tabs = ['Overview', 'Care', 'Issues', 'Get Started'];

export default function SpeciesPage({
    params,
}: {
    params: { genus: string; species: string };
}) {
    const { genus, species } = params;
    const [activeTab, setActiveTab] = useState('Overview');

    // Optional: validate or fetch plant data
    const scientificName = `${genus} ${species}`;

    // Example placeholder logic
    if (genus !== 'monstera' || species !== 'deliciosa') {
        notFound();
    }

    return (
        <div className="grid grid-cols-1 justify-center gap-6">
            <ImageCarousel
                images={[
                    '/images/monstera-img-1.jpeg',
                    '/images/monstera-img-2.jpeg',
                ]}
            />
            <header className="px-10 flex flex-col gap-1">
                <h1 className="capitalize font-serif text-3xl flex gap-3 items-end">
                    <span className="font-bold">{genus}</span>
                    <span className="font-medium">{species}</span>
                </h1>
                <h2 className="text-xl tracking-wide text-stone-600 dark:text-stone-300">
                    Swiss Cheese Plant
                </h2>
            </header>
            <nav className="px-10 flex gap-2 overflow-x-scroll">
                {tabs.map((tab) => (
                    <button
                        className="px-2 py-1 rounded-full border text-nowrap"
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            {activeTab === 'Overview' && <Overview />}
        </div>
    );
}
