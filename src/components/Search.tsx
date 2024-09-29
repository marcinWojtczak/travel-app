import { Search as SearchIcon } from 'lucide-react';
import { InputHTMLAttributes, useState } from 'react';

type SearchType = {
    placeholder: string,
    type: string,
    customWidth: string,
    border: boolean
} & InputHTMLAttributes<HTMLInputElement> 

export default function Search({ placeholder, type, customWidth, border, ...props}: SearchType) {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <div className={`relative flex items-center b h-12 ${customWidth}`}>
      <label htmlFor='search' className='sr-only'>Search</label>
      <input
          id='search'
          className={`p-[10px] h-full border ${border ? 'border-dark-green' : 'border-white' } rounded-full pl-14 outline-none w-full`} 
          placeholder={placeholder}
          style={{ backgroundColor: isFocused ? 'rgba(255, 255, 255, 1.0)' : 'rgba(255, 255, 255, 0.4)'}}
          type={type}
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)}
          {...props}
      />
      <div className='absolute bg-brown h-9 w-9 rounded-full flex items-center justify-center pointer-events-none ml-2'>
        <SearchIcon className='h-4 w-4 text-white'/> 
      </div>
      
    </div>
  )
}
