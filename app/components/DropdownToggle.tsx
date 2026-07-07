'use client';

import { motion } from 'framer-motion';

function ChevronIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="m7 10 5 5 5-5"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/** Chevron that animates its rotation with framer-motion as `open` flips. */
export default function DropdownToggle({
    open,
    onClick,
    label,
}: {
    open: boolean;
    onClick: () => void;
    label: string;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-expanded={open}
            aria-label={label}
            className="flex size-8 shrink-0 items-center justify-center rounded-full text-stone-500 transition hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-zinc-900"
        >
            <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="flex"
            >
                <ChevronIcon className="size-4" />
            </motion.span>
        </button>
    );
}
