'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ImageLightbox from '@/app/components/ImageLightbox';

export default function ImageCarousel({ images }: { images: string[] }) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    return (
        <>
            <motion.div
                className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-[28px] pb-2 pr-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {images.map((src, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setLightboxIndex(i)}
                        className="basis-[85%] shrink-0 snap-start cursor-zoom-in sm:basis-[320px]"
                    >
                        <Image
                            loading="eager"
                            src={src}
                            alt={`Plant image ${i + 1}`}
                            width={640}
                            height={640}
                            className="h-64 w-full rounded-3xl border border-white/25 object-cover shadow-lg sm:h-72"
                        />
                    </button>
                ))}
            </motion.div>

            <ImageLightbox
                images={images.map((src, i) => ({
                    src,
                    alt: `Plant image ${i + 1}`,
                }))}
                index={lightboxIndex}
                onClose={() => setLightboxIndex(null)}
                onIndexChange={setLightboxIndex}
            />
        </>
    );
}
