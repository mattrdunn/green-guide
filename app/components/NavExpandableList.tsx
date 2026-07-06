'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import cn from '@/app/lib/cn';

export interface NavExpandableListItem {
    key: string;
    href: string;
    label: string;
    isCurrent: boolean;
}

/**
 * Collapsible, alphabetized list nested under a sidebar nav link (e.g. every
 * species under "Home", every pest under "Pests") — centers the current item
 * in view on open instead of leaving the scrollable list sitting at the top.
 * Shared so the species and pest dropdowns in `SideNavContent` can't drift
 * out of sync in behavior or animation.
 */
export default function NavExpandableList({
    open,
    items,
    onNavigate,
}: {
    open: boolean;
    items: NavExpandableListItem[];
    onNavigate?: () => void;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const activeItemRef = useRef<HTMLLIElement>(null);
    const currentKey = items.find((item) => item.isCurrent)?.key ?? null;

    useEffect(() => {
        if (!open || !currentKey) {
            return;
        }
        const container = containerRef.current;
        const activeItem = activeItemRef.current;
        if (!container || !activeItem) {
            return;
        }
        // offsetTop is relative to the nearest positioned ancestor (the
        // sticky sidebar), not this container, so measure via bounding
        // boxes instead of trusting it directly.
        const itemOffset =
            activeItem.getBoundingClientRect().top -
            container.getBoundingClientRect().top +
            container.scrollTop;
        container.scrollTop =
            itemOffset - container.clientHeight / 2 + activeItem.clientHeight / 2;
    }, [open, currentKey]);

    return (
        <AnimatePresence initial={false}>
            {open && (
                <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                >
                    <div
                        ref={containerRef}
                        className="ml-4 max-h-64 overflow-y-auto border-l border-stone-200 py-1 dark:border-stone-800"
                    >
                        <ul className="flex flex-col">
                            {items.map((item) => (
                                <li
                                    key={item.key}
                                    ref={
                                        item.isCurrent
                                            ? activeItemRef
                                            : undefined
                                    }
                                >
                                    <Link
                                        href={item.href}
                                        onClick={onNavigate}
                                        aria-current={
                                            item.isCurrent
                                                ? 'page'
                                                : undefined
                                        }
                                        className={cn(
                                            'block truncate px-3 py-1.5 text-sm transition',
                                            item.isCurrent
                                                ? 'font-semibold text-emerald-700 dark:text-emerald-300'
                                                : 'text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-zinc-900',
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
