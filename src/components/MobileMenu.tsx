import { useEffect } from 'react';
import { X } from 'lucide-react';

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {

    useEffect(() => {
      if (isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      
      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    }, [isOpen]);

    return (
      <>
        {isOpen && (
        <div 
            className="md:hidden fixed inset-0 bg-steelBlue bg-opacity-40 z-40" 
            onClick={onClose} 
        />
            )}

        <div className={`md:hidden fixed top-0 left-0 h-screen w-[90%] bg-deepBlue z-50 p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out`}
        >
            <div className='flex justify-end'>
            <X className='cursor-pointer text-white' onClick={onClose} />
            </div>
            <nav>
            <ul className='flex flex-col h-screen justify-center items-center gap-8 font-bold text-white'>
                <li onClick={onClose} className='border-b w-full border-steelBlue hover:text-steelBlue '><h6>Home</h6></li>
                <li onClick={onClose} className='border-b w-full border-steelBlue hover:text-steelBlue'><h6>Discover</h6></li>
                <li onClick={onClose} className='border-b w-full border-steelBlue hover:text-steelBlue'><h6>More</h6></li>
            </ul>
            </nav>
        </div>
      </>
  )
}
