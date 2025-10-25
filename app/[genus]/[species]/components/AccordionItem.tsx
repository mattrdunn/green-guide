import { useState } from 'react';

type AccordionItemProps = {
    label: string;
    value: string;
    children: React.ReactNode;
};

const AccordionItem = ({ label, value, children }: AccordionItemProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-stone-300 dark:border-stone-300">
            <button
                className="flex justify-between w-full py-3 px-2 border-b font-medium cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <span className="font-bold">{label}</span>
                <span className="text-right">{value}</span>
            </button>
            {open && (
                <div className="accordion-content px-4 py-2 text-zinc-500 border-b">
                    {children}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
