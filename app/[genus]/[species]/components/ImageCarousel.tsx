'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageCarousel({ images }: { images: string[] }) {
    return (
        <motion.div
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-[28px] pb-2 pr-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {images.map((src, i) => (
                <Image
                    loading="eager"
                    key={i}
                    src={src}
                    alt={`Plant image ${i + 1}`}
                    width={640}
                    height={640}
                    className="h-64 basis-[85%] shrink-0 snap-start rounded-3xl border border-white/25 object-cover shadow-lg sm:h-72 sm:basis-[320px]"
                />
            ))}
        </motion.div>
    );
}
