'use client';

import GreenCard from '@/app/components/GreenCard';
import { useTranslation } from 'react-i18next';
import ImageCarousel from './ImageCarousel';
import waterDropIcon from '@/public/icons/water-drop.svg';
import sunnyIcon from '@/public/icons/sunny.svg';
import meterIcon from '@/public/icons/speed.svg';
import petsIcon from '@/public/icons/pets.svg';
import Image from 'next/image';
import type { PlantData } from '@/store/api/templateApi';

type HeaderCardProps = {
    genus: string;
    species: string;
    plant: PlantData;
};

export default function HeaderCard({ genus, species, plant }: HeaderCardProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'speciesClient' });

    const quickFacts = [
        { icon: sunnyIcon, value: plant.vitals.light.value },
        { icon: waterDropIcon, value: plant.vitals.watering.value },
        { icon: meterIcon, value: plant.vitals.difficulty.value },
        { icon: petsIcon, value: plant.vitals.toxicity.value },
    ];

    return (
        <GreenCard>
            <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                    {t('badge')}
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-200" />
                </div>

                <div className="rounded-[30px]">
                    <ImageCarousel
                        images={plant.images.map((image) => image.url)}
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
                        </h1>
                        <p className="mt-4 max-w-3xl text-base text-white/90 sm:text-lg">
                            {plant.description}
                        </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {quickFacts.map((fact) => (
                            <div
                                key={fact.value}
                                className="flex  items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-4"
                            >
                                <Image
                                    src={fact.icon}
                                    alt=""
                                    className="size-7"
                                />
                                <p className="mt-1 text-xl font-semibold">
                                    {fact.value}
                                </p>
                            </div>
                        ))}
                    </div>
                    <ul className="space-y-3 rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-white/90">
                        {plant.highlights.map((note) => (
                            <li key={note} className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-lime-200" />
                                <p>{note}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </GreenCard>
    );
}
