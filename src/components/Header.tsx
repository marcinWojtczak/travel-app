import Search from '@components/Search'
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import UserAccount from '@components/UserAccount';
import DesktopMenu from '@components/DesktopMenu';
import MobileMenu from './MobileMenu';
import logo from '@public/logo.png'

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
      <header className={`flex justify-center py-1 w-full fixed top-0 bg-white ${showBorder && 'border-b shadow-lg'}`}>
        <div className='w-full lg:w-[1300px] flex items-center justify-between px-4 gap-2'>
            <Menu className='md:hidden' onClick={() => setIsMenuOpen(true)} />
            <div className='flex items-center md:justify-around justify-center w-full gap-2'>
              <div className='flex items-center'>
                <img src={logo} className='w-[70px] md:w-[65px]'/>
                <h4 className='hidden md:inline font-medium'>Travel Advisor</h4>
              </div>
              <DesktopMenu />
              <Search type='text' placeholder='search'/>
            </div>
            <UserAccount />
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
    </>
  )
}


