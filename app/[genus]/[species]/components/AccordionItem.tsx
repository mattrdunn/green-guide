'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type AccordionItemProps = {
    label: string;
    value: string;
    children: React.ReactNode;
};

const AccordionItem = ({ label, value, children }: AccordionItemProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 p-4 shadow-sm dark:border-stone-700/70 dark:bg-zinc-900/40">
            <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
            >
                <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-stone-500">
                        {label}
                    </p>
                    <p className="text-lg font-semibold text-stone-900 dark:text-white">
                        {value}
                    </p>
                </div>
                <span
                    className={`ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200/80 text-lg font-light text-stone-600 transition-transform duration-200 dark:border-stone-700/70 dark:text-stone-200 ${
                        open ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                >
                    +
                </span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="mt-4 border-t border-dashed border-stone-200/80 pt-4 text-sm text-stone-600 dark:border-stone-700/70 dark:text-stone-300">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;
