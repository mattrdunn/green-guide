import AccordionItem from './AccordionItem';

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

            <div className="mt-4 mb-1 border-t border-stone-300" />

            <AccordionItem label="Soil" value="Well Draining">
                Details about the best soil types and mixes for this plant will be available soon.
            </AccordionItem>
            <AccordionItem label="Lecca Compatible" value="Yes">
                Lecca compatibility details coming soon.
            </AccordionItem>
            <AccordionItem label="Fertilizer" value="4N-2P-1K">
                Fertilizer recommendations and tips will be added soon.
            </AccordionItem>
            <AccordionItem label="Fertilizer Frequency" value="Every 3 Months">
                Frequency and seasonal feeding info coming soon.
            </AccordionItem>
            <AccordionItem label="Native Habitat" value="South Africa">
                Learn more about the plant's natural habitat and ecological requirements.
            </AccordionItem>
            <AccordionItem label="Humidity" value="Bushy">
                Humidity care instructions will be available soon.
            </AccordionItem>
            <AccordionItem label="Temperature" value="40 - 95°F">
                Advice on ideal temperature ranges will be included here.
            </AccordionItem>
            <AccordionItem label="Grow Season" value="Fall">
                More grow season specifics coming soon.
            </AccordionItem>
        </div>
    );
}
