"use client"
import { useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function Accordion({ items }) {
  const [selected, setSelected] = useState(null);

  const handleItemClick = (index) => {
    setSelected(index === selected ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          expanded={index === selected}
          onItemClicked={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, expanded, onItemClicked }) {
  return (
    <div className={`accordion-item ${expanded && "bg-[#F9FAFB] rounded-xl"}`}>
      <div className='flex items-center justify-between'>
        <button
          className="accordion-button font-semibold text-[#101828]"
          onClick={onItemClicked}
        >
          {item.title}
        </button>
        {expanded ? (
          <CiCircleMinus
            className='text-[24px] text-[#98A2B3]'
            onClick={onItemClicked}
          />
        ) : (
          <CiCirclePlus
            className='text-[24px] text-[#98A2B3]'
            onClick={onItemClicked}
          />
        )}
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
