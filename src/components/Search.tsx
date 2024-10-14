import { Search as SearchIcon } from 'lucide-react';
import { InputHTMLAttributes, useState } from 'react';

type SearchType = {
    placeholder: string,
    type: string,
    customWidth: string,
    border: boolean
} & InputHTMLAttributes<HTMLInputElement> 

export default function Search({ placeholder, type, customWidth, border, ...props }: SearchType) {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [hasText, setHasText] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasText(e.target.value.length > 0)
  }

  return (
    <div className={`relative flex items-center h-12 ${customWidth}`}>
      <label htmlFor='search' className='sr-only'>Search</label>
      <input
          id='search'
          className={`p-[10px] h-full border border-dark-green rounded-full pl-14 outline-none w-full ${hasText ? '' : 'placeholder-visible'}`}
          placeholder={placeholder}
          style={{ backgroundColor: isFocused ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0)' }} 
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange} 
          {...props}
      />
      <div className='absolute bg-brown h-9 w-9 rounded-full flex items-center justify-center pointer-events-none ml-2'>
        <SearchIcon className='h-4 w-4 text-white'/> 
      </div>
    </div>
  )
}
