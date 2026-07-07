'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import cn from '@/app/lib/cn';
import DropdownToggle from './DropdownToggle';
import NavExpandableList, { NavExpandableListItem } from './NavExpandableList';

export interface NavGenusGroup {
    genus: string;
    href: string;
    label: string;
    isCurrent: boolean;
    items: NavExpandableListItem[];
}

/**
 * Two-level collapsible species explorer nested under the sidebar's "Home"
 * link — genus rows expand to reveal the species/varieties within them, so
 * browsing scales past a single flat list of every seeded species.
 */
export default function NavGenusList({
    open,
    groups,
    openGenera,
    onToggleGenus,
    onNavigate,
    genusToggleLabel,
}: {
    open: boolean;
    groups: NavGenusGroup[];
    openGenera: Record<string, boolean>;
    onToggleGenus: (genus: string) => void;
    onNavigate?: () => void;
    genusToggleLabel: (genus: string) => string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const currentGenusRef = useRef<HTMLLIElement>(null);

    // Keeps the currently-viewed genus pinned to the top of the scroll
    // container instead of leaving the list wherever it happened to render
    // (which, before a species page had been visited, was just the top of
    // the alphabetical list).
    useLayoutEffect(() => {
        if (!open) {
            return;
        }
        const container = containerRef.current;
        const item = currentGenusRef.current;
        if (!container || !item) {
            return;
        }
        const containerRect = container.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        container.scrollTop += itemRect.top - containerRect.top;
    }, [open, groups]);

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
                        className="ml-4 max-h-96 overflow-y-auto border-l border-stone-200 py-1 dark:border-stone-800"
                    >
                        <ul className="flex flex-col">
                            {groups.map((group) => (
                                <li
                                    key={group.genus}
                                    ref={
                                        group.isCurrent
                                            ? currentGenusRef
                                            : undefined
                                    }
                                >
                                    <div className="flex items-center gap-1">
                                        <Link
                                            href={group.href}
                                            onClick={onNavigate}
                                            aria-current={
                                                group.isCurrent
                                                    ? 'page'
                                                    : undefined
                                            }
                                            className={cn(
                                                'flex-1 truncate rounded-full px-3 py-1.5 text-sm italic transition',
                                                group.isCurrent
                                                    ? 'font-semibold text-emerald-700 dark:text-emerald-300'
                                                    : 'text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-zinc-900',
                                            )}
                                        >
                                            {group.label}
                                        </Link>
                                        {group.items.length > 0 && (
                                            <DropdownToggle
                                                open={Boolean(
                                                    openGenera[group.genus],
                                                )}
                                                onClick={() =>
                                                    onToggleGenus(group.genus)
                                                }
                                                label={genusToggleLabel(
                                                    group.label,
                                                )}
                                            />
                                        )}
                                    </div>
                                    <NavExpandableList
                                        open={Boolean(
                                            openGenera[group.genus],
                                        )}
                                        items={group.items}
                                        onNavigate={onNavigate}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
