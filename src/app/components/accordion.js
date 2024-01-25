"use client"
import  { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";

function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
}

function AccordionItem({ item }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`accordion-item ${expanded && "bg-[#F9FAFB] rounded-xl"}`}>
        <div className='flex items-center justify-between'>
            <button
                className="accordion-button font-semibold text-[#101828]"
                onClick={() => setExpanded(!expanded)}
            >
                {item.title}
            </button>
            <CiCirclePlus className='text-[24px] text-[#98A2B3]'/>
        </div>
      {expanded && 
        <div className='pl-2 text-[#475467] text-[14px] leading-[24px]'>
            {item.content}
        </div>
      }
     
    </div>
  );
}

export default Accordion;