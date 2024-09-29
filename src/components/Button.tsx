type ButtonProps = {
    text: string,
    icon: React.ElementType,
    buttonColor: string,
}

export default function Button({ text, icon: Icon, buttonColor }: ButtonProps) {
  return (
    <button 
      className='w-fit flex items-center justify-between rounded-full bg-dark-green p-2 gap-8 hover:scale-105 transition-all ease-in-out'
      style={{ backgroundColor: buttonColor}}  
    >
        <h6 className='pl-4 font-bold'>
            {text}
        </h6>
        <div className='border border-brown rounded-full bg-brown p-[6px]'>
            <Icon className='w-6 h-6 text-white ' strokeWidth={1}/> 
        </div>      
    </button>
  )
}
