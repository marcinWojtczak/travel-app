import Search from '@components/Search'
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import UserAccount from '@components/UserAccount';
import DesktopMenu from '@components/DesktopMenu';
import MobileMenu from '@components/MobileMenu';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function Navbar() {
  const [showBorder, setShowBorder] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathName = useLocation()

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

  const headerClass = `${pathName.pathname === '/' ? (showBorder ? 'border-b border-light-green shadow-lg z-50' : '') : 'border-b border-light-green shadow-lg z-50'}`;
  const backgroundColor = showBorder  ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)';

  return (
    <>
        <header 
          className={`flex justify-center bg-white py-4 w-full fixed top-0 left-0 ${headerClass}`}
           style={{ backgroundColor }}
        >
          <div className='w-full max-w-[1250px] flex items-center justify-between gap-2 px-8 lg:px-4 xl:px-0'>
            <Menu 
              className='lg:hidden' 
              onClick={() => setIsMenuOpen(true)} 
            />
              <div className='flex items-center'>
                <NavLink to="/">
                  <h3 className='hidden md:inline font-bold '>Travel Advisor</h3>
                </NavLink>
              </div>
              <DesktopMenu border={showBorder} pathName={pathName}/>
              <Search 
                type='text' 
                placeholder='search' 
                customWidth="lg:min-w-[360px]"
                border={showBorder}
              />
              <UserAccount />
          </div>
        </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
    </>
  )
}


