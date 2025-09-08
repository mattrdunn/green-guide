export default function Overview() {
    return (
        <div className="flex flex-col gap-1 px-10">
            <div className="flex gap-2">
                <div className="h-20 p-1 flex flex-col justify-center text-center rounded-lg bg-white dark:bg-zinc-700">
                    {/* icon pls */}
                    <p className="text-nowrap">Zone 9</p>
                </div>
                <div className="h-20 p-1 flex flex-col justify-center text-center rounded-lg bg-white dark:bg-zinc-700">
                    {/* icon pls */}
                    <p className="text-nowrap">Indirect Light</p>
                </div>
                <div className="h-20 p-1 flex flex-col justify-center text-center rounded-lg bg-white dark:bg-zinc-700">
                    {/* icon pls */}
                    <p className="text-nowrap">3-4 Ft Tall</p>
                </div>
                <div className="h-20 p-1 flex flex-col justify-center text-center rounded-lg bg-white dark:bg-zinc-700">
                    {/* icon pls */}
                    <p className="text-nowrap">Easy Care</p>
                </div>
            </div>
        </div>
    );
}
