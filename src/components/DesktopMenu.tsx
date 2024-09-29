type DesktopMenuProps = {
  border: boolean
}

export default function DesktopMenu({ border }: DesktopMenuProps) {
  return (
    <nav className={`hidden lg:inline border ${border ? 'border-dark-green' : 'border-white'} bg-white rounded-full px-8 py-3`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
        <ul className='flex gap-8 '>
        <li className='font-medium'>Home</li>
        <li className='font-medium'>Discover</li>
        <li className='font-medium'>More</li>
        </ul>
    </nav>
  )
}
