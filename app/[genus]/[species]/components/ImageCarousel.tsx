'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageCarousel({ images }: { images: string[] }) {
    return (
        <motion.div
            className="no-scrollbar flex overflow-x-auto gap-4 px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {images.map((src, i) => (
                <Image
                    loading="eager"
                    key={i}
                    src={src}
                    alt={`Plant image ${i + 1}`}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover"
                />
            ))}
        </motion.div>
    );
}
