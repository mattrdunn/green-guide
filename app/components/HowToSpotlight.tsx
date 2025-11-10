'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { howtoGuides } from '../lib/howtoGuides';

const spotlightOptions = howtoGuides.filter((guide) => guide.spotlight);

export default function HowToSpotlight() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (spotlightOptions.length === 0) {
            return undefined;
        }

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % spotlightOptions.length);
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, [spotlightOptions.length]);

    if (spotlightOptions.length === 0) {
        return null;
    }

    const activeGuide = spotlightOptions[index % spotlightOptions.length];

    return (
        <article className="flex h-full flex-col justify-between rounded-[32px] border border-emerald-900/40 bg-emerald-950/70 p-6 text-white shadow-2xl shadow-emerald-950/40">
            <header className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    {activeGuide.spotlight?.badge ?? 'How-To'}
                </span>
                <div className="flex items-center gap-2">
                    {spotlightOptions.map((guide, guideIndex) => (
                        <button
                            key={guide.id}
                            type="button"
                            aria-label={`Show ${guide.title}`}
                            onClick={() => setIndex(guideIndex)}
                            className={`h-2 w-6 rounded-full transition ${
                                guideIndex === index
                                    ? 'bg-white'
                                    : 'bg-white/30 hover:bg-white/60'
                            }`}
                        />
                    ))}
                </div>
            </header>
            <div className="space-y-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                        How-to spotlight
                    </p>
                    <h3 className="mt-2 text-3xl font-serif">
                        {activeGuide.title}
                    </h3>
                    <p className="text-sm text-white/80">
                        {activeGuide.spotlight?.summary ?? activeGuide.description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-white/80">
                    <span className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 uppercase tracking-[0.3em]">
                        {activeGuide.focus}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 uppercase tracking-[0.3em]">
                        {activeGuide.duration}
                    </span>
                </div>
            </div>
            <Link
                href={activeGuide.path}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-900 transition hover:bg-lime-100"
            >
                {activeGuide.spotlight?.cta ?? 'Open guide'}
            </Link>
        </article>
    );
}
