import cn from '@/app/lib/cn';

type VitalMeterProps = {
    score: number;
    max?: number;
    /** hero — dots on the green header card; card — bars on overview vital cards */
    variant?: 'hero' | 'card';
    className?: string;
};

export default function VitalMeter({
    score,
    max = 5,
    variant = 'card',
    className,
}: VitalMeterProps) {
    return (
        <div
            role="meter"
            aria-valuenow={score}
            aria-valuemin={0}
            aria-valuemax={max}
            className={cn('flex items-center gap-1.5', className)}
        >
            {Array.from({ length: max }, (_, index) => (
                <span
                    key={index}
                    className={cn(
                        'h-1.5 rounded-full',
                        variant === 'hero' ? 'w-5' : 'flex-1',
                        index < score
                            ? variant === 'hero'
                                ? 'bg-lime-200'
                                : 'bg-emerald-500 dark:bg-emerald-400'
                            : variant === 'hero'
                              ? 'bg-white/25'
                              : 'bg-stone-200 dark:bg-stone-700',
                    )}
                />
            ))}
        </div>
    );
}
