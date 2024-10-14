import { NavLink } from 'react-router-dom'

export default function DesktopMenu() {


  return (
    <nav 
      className='hidden lg:inline  bg-white rounded-full px-8 py-3' 
      style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
        <ul className='flex gap-8 '>
          <li className='font-medium'>
            <NavLink 
              to='/'
              className={({isActive}) => isActive ? 'underline underline-offset-4 decoration-2 decoration-green' : ''}
              end
            >
              Home
            </NavLink>
          </li>
          <li className='font-medium'>
            <NavLink 
              to='things-to-do'
              className={({isActive}) => isActive ? 'underline underline-offset-4 decoration-2 decoration-green' : ''}
            >
              Things To Do
            </NavLink>
          </li>
          <li className='font-medium'>
            More
          </li>
        </ul>
    </nav>
  )
}
