'use client';

import GreenCard from '@/app/components/GreenCard';
import { useTranslation } from 'react-i18next';
import ImageCarousel from './ImageCarousel';
import VitalMeter from '@/app/components/VitalMeter';
import waterDropIcon from '@/public/icons/water-drop.svg';
import sunnyIcon from '@/public/icons/sunny.svg';
import meterIcon from '@/public/icons/speed.svg';
import petsIcon from '@/public/icons/pets.svg';
import Image from 'next/image';
import imageUrl from '@/app/lib/imageUrl';
import type { PlantData } from '@/store/api/greenGuideApi';

type HeaderCardProps = {
    genus: string;
    species: string;
    variety?: string;
    plant: PlantData;
};

/** Toxicity has no stored score — derive meter fill from the 3-step level. */
const toxicitySeverity = {
    'non-toxic': 0,
    'mildly-toxic': 1,
    toxic: 3,
} as const;

export default function HeaderCard({
    genus,
    species,
    variety,
    plant,
}: HeaderCardProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'speciesClient' });

    const quickFacts = [
        {
            icon: sunnyIcon,
            label: t('facts.light'),
            value: plant.vitals.light.value,
            score: plant.vitals.light.score,
            max: 5,
        },
        {
            icon: waterDropIcon,
            label: t('facts.water'),
            value: plant.vitals.watering.value,
            score: plant.vitals.watering.score,
            max: 5,
        },
        {
            icon: meterIcon,
            label: t('facts.difficulty'),
            value: plant.vitals.difficulty.value,
            score: plant.vitals.difficulty.score,
            max: 5,
        },
        {
            icon: petsIcon,
            label: t('facts.toxicity'),
            value: plant.vitals.toxicity.value,
            score: toxicitySeverity[plant.vitals.toxicity.level],
            max: 3,
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

                    <div className="rounded-[30px]">
                        <ImageCarousel
                            images={plant.images.map((image) =>
                                imageUrl(image.url),
                            )}
                        />
                    </div>

                    <div className="space-y-6 pb-2 sm:pb-0">
                        <div>
                            <p className="text-sm uppercase tracking-[0.6em] text-white/60">
                                {plant.commonNames.join(', ')}
                            </p>
                            <h1 className="mt-2 flex flex-wrap items-end gap-4 font-serif text-4xl leading-tight sm:text-5xl">
                                <span className="capitalize font-bold">
                                    {genus}
                                </span>
                                <span className="capitalize font-light">
                                    {species}
                                </span>
                                {variety && (
                                    <span className="capitalize font-light italic text-white/80">
                                        &apos;{variety.replace(/-/g, ' ')}&apos;
                                    </span>
                                )}
                            </h1>
                            <p className="mt-4 max-w-3xl text-base text-white/90 sm:text-lg">
                                {plant.description}
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
                                    <VitalMeter
                                        variant="hero"
                                        score={fact.score}
                                        max={fact.max}
                                    />
                                    <p className="text-sm text-white/85">
                                        {fact.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </GreenCard>

            <ul className="space-y-3 rounded-3xl border border-stone-200/80 bg-white/90 p-6 text-sm text-stone-700 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40 dark:text-stone-200">
                {plant.highlights.map((note) => (
                    <li key={note} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                        <p>{note}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
