
import Button from '@components/Button';
import { Plane, BedDouble, Ticket, UtensilsCrossed } from 'lucide-react';
import Header from "@components/Header"


export default function HeroSection() {
  return (
    <>
    <div className='flex bg-fixed bg-parallax flex-col justify-center h-[650px] lg:h-screen gap-1 px-6 md:px-7 xl:px-10 2xl:px-[116px] bg-cover bg-center rounded-b-3xl'>
      <Header />
      <div className='mt-[82px] flex flex-col gap-4 lg:w-[75%]'>
        <h1 className='text-white font-black text-[40px] sm:text-[45px] md:text-[60px] lg:text-[75px] xl:text-[85px] leading-tight'>Find Your Next Destination and Let the Journey Begin</h1>
        <Button text="Let's start" icon={Plane} buttonColor='rgba(242, 238, 172, 0.7)'/>
      </div>
    </div>
    </>
  )
}
