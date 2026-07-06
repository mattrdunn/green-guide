'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import imageUrl from '@/app/lib/imageUrl';
import type { PlantCardData } from './types';

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-stone-200 px-3 py-2 dark:border-stone-800">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                {label}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-stone-800 dark:text-stone-100">
                {value}
            </p>
        </div>
    );
}

export default function PlantCard({ plant }: { plant: PlantCardData }) {
    const { t } = useTranslation('translation', { keyPrefix: 'home.plants' });
    const name = `${capitalize(plant.genus)} ${plant.species.replace(/-/g, ' ')}`;
    const commonName = plant.commonNames[0];
    const href = plant.variety
        ? `/${plant.genus}/${plant.species}/${plant.variety}`
        : `/${plant.genus}/${plant.species}`;

    return (
        <Link
            href={href}
            className="group overflow-hidden rounded-3xl border border-stone-200 bg-white transition hover:-translate-y-0.5 hover:border-emerald-600/40 hover:shadow-lg dark:border-stone-800 dark:bg-zinc-900/60 dark:hover:border-emerald-500/40"
        >
            <div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-emerald-950 via-emerald-900 to-zinc-950">
                {plant.imageKey ? (
                    <Image
                        src={imageUrl(plant.imageKey)}
                        alt={plant.imageAlt ?? name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-1">
                        <span
                            aria-hidden="true"
                            className="font-serif text-5xl text-emerald-200/40"
                        >
                            {capitalize(plant.genus).charAt(0)}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-200/50">
                            {t('imageComing')}
                        </span>
                    </div>
                )}
            </div>
            <div className="p-5">
                <h3 className="font-serif text-lg text-stone-900 dark:text-white">
                    {name}
                </h3>
                {commonName && (
                    <p className="mt-0.5 text-sm italic text-stone-500 dark:text-stone-400">
                        {commonName}
                    </p>
                )}
                <div className="mt-4 grid grid-cols-2 gap-2">
                    <Stat label={t('lightLabel')} value={plant.light} />
                    <Stat label={t('careLabel')} value={plant.care} />
                </div>
            </div>
        </Link>
    );
}
