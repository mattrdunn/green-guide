import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merges class names with clsx and resolves Tailwind class conflicts using tailwind-merge */
export default function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs));
}
