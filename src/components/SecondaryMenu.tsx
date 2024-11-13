import { NavLink } from 'react-router-dom'

export default function SecondaryMenu() {
    const menuItem = ['Warsaw', 'Hotels', 'Things to Do', 'Restaurants'];

  return (
    <nav className='w-full border-b border-slate-300 pb-2'>
        <ul className='flex gap-8'>
            {menuItem.map((item) => (
                <li>
                    <NavLink
                        to='/hotels-warsaw'
                        className={({isActive}) => isActive ? 'underline underline-offset-4 decoration-2 decoration-green' : ''}
                    >
                        {item}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
  )
}
