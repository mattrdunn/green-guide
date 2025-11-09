import cn from '@/app/lib/cn';

export default function GreenCard({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <section
            className={cn(
                'bg-linear-to-br from-emerald-800 via-emerald-700 to-green-700 dark:from-emerald-900/90 dark:via-emerald-800/90 dark:to-green-700 px-4 py-6 text-white shadow-none rounded-3xl sm:p-10 sm:shadow-2xl',
                className,
            )}
            {...props}
        >
            {children}
        </section>
    );
}
