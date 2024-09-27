import { Search as SearchIcon } from 'lucide-react';
import { InputHTMLAttributes } from 'react';

type SearchType = {
    placeholder: string,
    type: string,
    className: string,
} & InputHTMLAttributes<HTMLInputElement> 

export default function Search({ placeholder, type, className, ...props }: SearchType) {
  return (
    <div className={`${className} relative flex items-center lg:w-[360px]`}>
    <label htmlFor='search' className='sr-only'>Search</label>
    <input
        id='search'
        className='p-[10px] border rounded-2xl pl-10 outline-none w-full' 
        placeholder={placeholder}
        type={type}
        {...props}
    />
    <SearchIcon className='absolute pl-4 w-9 pointer-events-none bottom-[9px]'/> 
    </div>
  )
}
