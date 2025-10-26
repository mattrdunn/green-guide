import Image from 'next/image';
import AccordionItem from './AccordionItem';
import globeIcon from '@/public/icons/globe.svg';
import heightIcon from '@/public/icons/height.svg';
import squareFootIcon from '@/public/icons/square-foot.svg';
import sunnyIcon from '@/public/icons/sunny.svg';
import meterIcon from '@/public/icons/speed.svg';

export default function Overview() {
    return (
        <div className="flex flex-col gap-1 px-10">
            <div className="flex gap-2">
                <div className="h-28 w-20 p-2 flex flex-col gap-2 justify-center items-center rounded-lg bg-white dark:bg-zinc-700">
                    <Image src={globeIcon} alt="globe" className="size-10" />
                    <p className="text-center p-1">Zone 9</p>
                </div>
                <div className="h-28 w-20 p-2 flex flex-col gap-2 justify-center items-center rounded-lg bg-white dark:bg-zinc-700">
                    <Image src={sunnyIcon} alt="sunny" className="size-10" />
                    <p className="text-center">Indirect Light</p>
                </div>
                <div className="h-28 w-20 p-2 flex flex-col gap-2 justify-center items-center rounded-lg bg-white dark:bg-zinc-700">                    
                    <Image src={squareFootIcon} alt="height" className="size-10" />
                    <p className="text-center">3-4 Ft Tall</p>
                </div>
                <div className="h-28 w-20 p-2 flex flex-col gap-2 justify-center items-center rounded-lg bg-white dark:bg-zinc-700">
                    <Image src={meterIcon} alt="height" className="size-10 transform scale-x-[-1]" />
                    <p className="text-center">Easy Care</p>
                </div>
            </div>

            <div className="mt-4 mb-1 border-t border-stone-300" />

            <AccordionItem label="Soil" value="Well Draining">
                Details about the best soil types and mixes for this plant will
                be available soon.
            </AccordionItem>
            <AccordionItem label="Semi-hydro Compatible" value="Yes">
                Semi-hydro compatibility details coming soon.
            </AccordionItem>
            <AccordionItem label="Fertilizer" value="4N-2P-1K">
                Fertilizer recommendations and tips will be added soon.
            </AccordionItem>
            <AccordionItem label="Fertilizer Frequency" value="Every 3 Months">
                Frequency and seasonal feeding info coming soon.
            </AccordionItem>
            <AccordionItem label="Native Habitat" value="South Africa">
                Learn more about the plant's natural habitat and ecological
                requirements.
            </AccordionItem>
            <AccordionItem label="Humidity" value="Bushy">
                Humidity care instructions will be available soon.
            </AccordionItem>
            <AccordionItem label="Temperature" value="50 - 95°F">
                Advice on ideal temperature ranges will be included here.
            </AccordionItem>
            <AccordionItem label="Grow Season" value="Fall">
                More grow season specifics coming soon.
            </AccordionItem>
        </div>
    );
}
