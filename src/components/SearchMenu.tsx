import { useState, useEffect } from 'react'
import { Earth , BedDouble, Ticket, UtensilsCrossed  } from 'lucide-react';

type SerachMenuProps = {
    activeIndex: number 
    setActiveIndex: (index: number) => void
}

export default function SearchMenu({ activeIndex, setActiveIndex }: SerachMenuProps) {
    const menuItem = [
        { text: 'Search All', icon: Earth },
        { text: 'Hotels', icon: BedDouble },
        { text: 'Things to Do', icon: Ticket },
        { text: 'Restaurants', icon: UtensilsCrossed },
    ]
   
    const handleClick = (index: number) => {
        setActiveIndex(index)
    }
    
  return (
    <div className='flex items-center justify-center gap-10 px-4 py-2 font-bold w-full'>
        {menuItem.map((item, index) => (
            <div 
                className={`flex items-center gap-2 border-b-2  ${activeIndex === index ? 'border-b-2 border-green' : 'border-transparent'} pb-1`}
                onClick={() => handleClick(index)}
                key={index}
            >
                <item.icon strokeWidth={1}/>
                <button>
                    <span 
                        className={`text-[16px] md:text-[18px] font-bold text-black/70 `}
                    >
                        {item.text}
                    </span>
                </button>
           </div>
        ))}
    </div>
  )
}
