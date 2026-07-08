'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import GreenCard from '@/app/components/GreenCard';
import VitalMeter from '@/app/components/VitalMeter';
import ImageLightbox from '@/app/components/ImageLightbox';
import imageUrl from '@/app/lib/imageUrl';
import globeIcon from '@/public/icons/globe.svg';
import waterDropIcon from '@/public/icons/water-drop.svg';
import sunnyIcon from '@/public/icons/sunny.svg';
import meterIcon from '@/public/icons/speed.svg';
import type { GenusDetailDoc } from '@/lib/db/genus';
import type { GenusSpeciesItem } from './types';

const capitalize = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

/** Up to 3 hero photo slots — real genus photography first, falling back to a
 * lead species' own photo when the genus has none, then a designed initial
 * tile so the strip is never empty. */
function usePhotoSlots(
    images: GenusDetailDoc['images'],
    species: GenusSpeciesItem[],
) {
    const slots: { key: string; imageKey?: string; alt?: string; initial: string }[] = [];

    for (let i = 0; i < 3; i += 1) {
        const image = images[i];
        const lead = species[i];
        const imageKey = image?.url ?? lead?.imageKey ?? undefined;
        const alt = image?.url ? image.alt : (lead?.imageAlt ?? lead?.commonName ?? lead?.species);
        slots.push({
            key: imageKey ?? `${lead?.species ?? 'slot'}-${i}`,
            imageKey,
            alt,
            initial: (lead?.species ?? lead?.commonName ?? '?')
                .charAt(0)
                .toUpperCase(),
        });
    }

    return slots;
}

export default function GenusHero({
    genus,
    species,
}: {
    genus: GenusDetailDoc;
    species: GenusSpeciesItem[];
}) {
    const { t } = useTranslation('translation', { keyPrefix: 'genusClient' });

    const photoSlots = usePhotoSlots(genus.images, species);
    const photos = photoSlots.filter((slot) => slot.imageKey);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const quickFacts = [
        {
            icon: globeIcon,
            label: t('facts.species'),
            value: t('facts.speciesValue', { count: genus.speciesEstimate }),
        },
        {
            icon: sunnyIcon,
            label: t('facts.light'),
            value: genus.vitals.light.value,
            score: genus.vitals.light.score,
        },
        {
            icon: waterDropIcon,
            label: t('facts.water'),
            value: genus.vitals.watering.value,
            score: genus.vitals.watering.score,
        },
        {
            icon: meterIcon,
            label: t('facts.difficulty'),
            value: genus.vitals.difficulty.value,
            score: genus.vitals.difficulty.score,
        },
    ];

    return (
        <div className="space-y-6">
            <GreenCard>
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                        {t('badge')}
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-200" />
                    </div>

                    <div className="flex gap-4 overflow-hidden">
                        {photoSlots.map((slot) => {
                            const photoIndex = slot.imageKey
                                ? photos.findIndex((p) => p.key === slot.key)
                                : -1;
                            return (
                                <div
                                    key={slot.key}
                                    className="relative aspect-10/9 w-full max-w-80 shrink-0 overflow-hidden rounded-3xl border border-white/25 bg-linear-to-br from-emerald-950 via-emerald-900 to-zinc-950 shadow-lg"
                                >
                                    {slot.imageKey ? (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setLightboxIndex(photoIndex)
                                            }
                                            className="absolute inset-0 cursor-zoom-in"
                                        >
                                            <Image
                                                src={imageUrl(slot.imageKey)}
                                                alt={slot.alt ?? ''}
                                                fill
                                                sizes="320px"
                                                className="object-cover"
                                            />
                                        </button>
                                    ) : (
                                        <div className="flex h-full items-center justify-center">
                                            <span
                                                aria-hidden="true"
                                                className="font-serif text-6xl text-emerald-200/40"
                                            >
                                                {slot.initial}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.06em] text-white/72">
                            {t('familyLine', {
                                family: genus.taxonomy.family,
                                count: genus.speciesEstimate,
                            })}
                        </p>
                        <h1 className="mt-2 font-serif text-4xl leading-tight font-bold italic sm:text-5xl">
                            {capitalize(genus.genus)}
                        </h1>
                        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
                            {genus.description}
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {quickFacts.map((fact) => (
                            <div
                                key={fact.label}
                                className="space-y-3 rounded-2xl border border-white/20 bg-white/10 p-4"
                            >
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={fact.icon}
                                        alt=""
                                        className="size-6"
                                    />
                                    <p className="text-base font-semibold">
                                        {fact.label}
                                    </p>
                                </div>
                                {fact.score !== undefined && (
                                    <VitalMeter variant="hero" score={fact.score} />
                                )}
                                <p className="text-sm text-white/85">
                                    {fact.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </GreenCard>

            <ul className="space-y-3 rounded-3xl border border-stone-200/80 bg-white/90 p-6 text-sm text-stone-700 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40 dark:text-stone-200">
                {genus.highlights.map((note) => (
                    <li key={note} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                        <p>{note}</p>
                    </li>
                ))}
            </ul>

            <ImageLightbox
                images={photos.map((photo) => ({
                    src: imageUrl(photo.imageKey!),
                    alt: photo.alt ?? '',
                }))}
                index={lightboxIndex}
                onClose={() => setLightboxIndex(null)}
                onIndexChange={setLightboxIndex}
            />
        </div>
    );
}
