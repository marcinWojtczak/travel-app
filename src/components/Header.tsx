import Search from '@components/Search'
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import UserAccount from '@components/UserAccount';
import DesktopMenu from '@components/DesktopMenu';
import MobileMenu from '@components/MobileMenu';


export default function Navbar() {
  const [showBorder, setShowBorder] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const border = () => {
      if(window.scrollY > 20) {
        setShowBorder(true)
      } else {
        setShowBorder(false)
      }
    }
      
    window.addEventListener('scroll', border)

    return () => {
      window.removeEventListener('scroll', border)
    }

  }, [])

  return (
    <>
      <header 
        className={`flex justify-center py-4 pr-6 w-full fixed top-0 left-0 ${showBorder && 'border-b border-light-green shadow-lg '}`}
        style={{ backgroundColor: showBorder ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0)' }}
      >
        <div className='w-full flex items-center justify-between gap-2 pl-6'>
            <Menu 
              className='md:hidden' 
              onClick={() => setIsMenuOpen(true)} 
            />
            <div className='flex items-center justify-around w-full gap-2'>
              <div className='flex items-center'>
                <h3 className='hidden md:inline font-bold '>Travel Advisor</h3>
              </div>
              <DesktopMenu border={showBorder}/>
              <Search 
                type='text' 
                placeholder='search' 
                customWidth="lg:min-w-[360px]"
                border={showBorder}
              />
              <UserAccount />
            </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
    </>
  )
}


