import React from 'react';
import Slider from '@components/Slider'

type SliderData = {
  imageUrl: string;
  title: string;
  rating?: string;
  num_reviews?: string;
  subcategory?: string;
}

type SectionWithSliderProps = {
  header: string;
  description: string;
  sliderData: SliderData[];
  sliderId: string 
}

export default function SectionWithSlider({ header, description, sliderId, sliderData}: SectionWithSliderProps) {
  
  return (
    <div className='w-full max-w-[1250px] flex flex-col mx-auto p-6 bg-green/10 rounded-xl'>
      <h3 className='font-semibold'>{header}</h3>
      <p className="text-gray-700">{description}</p>
      <Slider data={sliderData} sliderId={sliderId}/>
    </div>
  )
}
