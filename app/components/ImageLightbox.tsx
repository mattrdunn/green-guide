'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export type LightboxImage = {
    src: string;
    alt: string;
};

type ImageLightboxProps = {
    images: LightboxImage[];
    index: number | null;
    onClose: () => void;
    onIndexChange: (index: number) => void;
};

/** Full-screen photo viewer with keyboard/backdrop dismissal and prev/next
 * navigation, shared by the genus hero strip and species image carousel. */
export default function ImageLightbox({
    images,
    index,
    onClose,
    onIndexChange,
}: ImageLightboxProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'imageLightbox' });
    const open = index !== null;
    const total = images.length;

    const showPrevious = useCallback(() => {
        if (index === null) return;
        onIndexChange((index - 1 + total) % total);
    }, [index, total, onIndexChange]);

    const showNext = useCallback(() => {
        if (index === null) return;
        onIndexChange((index + 1) % total);
    }, [index, total, onIndexChange]);

    useEffect(() => {
        if (!open) {
            return;
        }
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            } else if (event.key === 'ArrowLeft') {
                showPrevious();
            } else if (event.key === 'ArrowRight') {
                showNext();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = overflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, onClose, showPrevious, showNext]);

    const current = index !== null ? images[index] : null;

    return (
        <AnimatePresence>
            {open && current && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                >
                    <button
                        type="button"
                        aria-label={t('close')}
                        onClick={onClose}
                        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-6 sm:top-6"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            className="size-5"
                        >
                            <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>

                    {total > 1 && (
                        <button
                            type="button"
                            aria-label={t('previous')}
                            onClick={(event) => {
                                event.stopPropagation();
                                showPrevious();
                            }}
                            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:left-6"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-6"
                            >
                                <path d="M15 6l-6 6 6 6" />
                            </svg>
                        </button>
                    )}

                    {total > 1 && (
                        <button
                            type="button"
                            aria-label={t('next')}
                            onClick={(event) => {
                                event.stopPropagation();
                                showNext();
                            }}
                            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-6"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-6"
                            >
                                <path d="M9 6l6 6-6 6" />
                            </svg>
                        </button>
                    )}

                    <motion.div
                        key={current.src}
                        className="relative flex h-full max-h-[85vh] w-full max-w-4xl items-center justify-center"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={current.src}
                            alt={current.alt}
                            fill
                            sizes="(max-width: 896px) 100vw, 896px"
                            className="rounded-2xl object-contain"
                            priority
                        />
                    </motion.div>

                    {total > 1 && (
                        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70 sm:bottom-6">
                            {t('counter', { current: index! + 1, total })}
                        </p>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
