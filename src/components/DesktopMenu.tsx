import { NavLink } from 'react-router-dom'

type DesktopMenuProps = {
  border: boolean
}

export default function DesktopMenu({ border }: DesktopMenuProps) {
  return (
    <nav className={`hidden lg:inline border ${border ? 'border-dark-green' : 'border-white'} bg-white rounded-full px-8 py-3`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
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
