import React, { useState } from 'react';

type AccordionItemProps = {
  label: string;
  value: string;
  children: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ label, value, children }) => {
const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-300 dark:border-stone-300">
      <button
        className="accordion-title flex justify-between w-full py-3 px-2 border-b font-medium text-md"
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: 'none',
          width: '100%',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span className="font-bold">{label}</span>
        <span className="text-right">{value}</span>
      </button>
      {open && (
        <div className="accordion-content px-4 py-2 text-gray-500 border-b">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
