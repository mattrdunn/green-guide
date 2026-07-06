'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SideNavContent from './SideNavContent';

/** Three animated bars that morph into an X when the drawer is open. */
export function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <span
            aria-hidden="true"
            className="relative flex h-3.5 w-[18px] flex-col justify-between"
        >
            {[0, 1, 2].map((index) => (
                <motion.span
                    key={index}
                    className="h-[1.5px] w-full rounded-full bg-current"
                    animate={
                        index === 1
                            ? { opacity: open ? 0 : 1 }
                            : {
                                  rotate: open ? (index === 0 ? 45 : -45) : 0,
                                  y: open ? (index === 0 ? 6 : -6) : 0,
                              }
                    }
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                />
            ))}
        </span>
    );
}

/**
 * Mobile-only slide-out drawer holding the same brand/search/nav/appearance
 * content as the desktop `SideNav`, opened from `Nav`'s hamburger button.
 */
export default function MobileSideNavDrawer({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    useEffect(() => {
        if (!open) {
            return;
        }
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = overflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.button
                        type="button"
                        aria-label="Close menu"
                        onClick={onClose}
                        className="fixed inset-0 z-40 cursor-default bg-black/30 sm:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.aside
                        className="fixed left-0 top-0 z-50 flex h-full w-[260px] max-w-[80vw] flex-col gap-7 overflow-y-auto bg-white p-6 shadow-2xl sm:hidden dark:bg-zinc-950"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{
                            type: 'tween',
                            duration: 0.25,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                    >
                        <SideNavContent onNavigate={onClose} />
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
