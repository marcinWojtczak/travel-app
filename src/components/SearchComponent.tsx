import Search from "@components/Search";
import { useRef, useState, useEffect } from "react";
import SearchMenu from "@components/SearchMenu";


export default function SearchComponent() {
    const menuRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const menuData = [
        { placeholder: 'Place to go, things to do, hotels...', header: 'Where to?'},
        { placeholder: 'Hotel name or destination', header: 'Stay somewhere great'},
        { placeholder: 'Attraction, activity or destination', header: 'Do something fun'},
        { placeholder: 'Restaurant or destination', header: 'Find places to eat'}
    ]

    const { placeholder, header } = menuData[activeIndex]
    
    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging = true
        startX = e.pageX - (menuRef.current?.offsetLeft || 0)
        scrollLeft = menuRef.current?.scrollLeft || 0
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return; // Exit if not dragging
        e.preventDefault(); // Prevent default behavior (e.g., text selection)
    
        const x = e.pageX - (menuRef.current?.offsetLeft || 0); // Calculate the new mouse position
        const walk = (x - startX) * 1; // Calculate the distance moved from startX
        if (menuRef.current) {
          menuRef.current.scrollLeft = scrollLeft - walk; // Update scroll position based on mouse movement
        }
      };

      const handleMouseUp = () => {
        isDragging = false; // Set dragging to false to stop the drag action
      };


  return (
    <div className='flex flex-col gap-5 mb-10 max-w-[1136px]' >
        <h1 className='mx-auto font-bold'>{header}</h1>
        <div
            ref={menuRef}
            className="overflow-x-auto whitespace-nowrap cursor-grab md:cursor-default hide-scrollbar "
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ userSelect: 'none' }} 
        
        >
           <SearchMenu activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
        </div>
        <Search 
             type='text' 
             label="search"
             id="search"
             placeholder={placeholder}
             className='relative flex items-center h-14 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto'
        />
    </div>
  )
}
