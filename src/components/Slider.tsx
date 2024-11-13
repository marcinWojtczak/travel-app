import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type SliderDataProps = {
  imageUrl: string;
  title: string;
  rating?: string;
  num_reviews?: string;
  subcategory?: string;
}

type SliderProps = {
  data: SliderDataProps[];
  sliderId: string;
  countryName?: string
};

export default function Slider({ data, sliderId, countryName }: SliderProps) {

  // const filteredAttractions = data.filter(attr => 
  //   attr.photo?.images?.large?.url
  // );

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-end gap-4'>
        <div className={`button-prev-${sliderId} rounded-full text-white bg-brown n px-5 py-1`}>
          <ArrowLeft  className='h-6 w-6' strokeWidth={2}/>
        </div>
        <div className={`button-next-${sliderId} rounded-full text-white bg-brown px-5 py-1`}>
          <ArrowRight className='h-6 w-6' strokeWidth={2}/>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            nextEl: `.button-next-${sliderId}`,
            prevEl: `.button-prev-${sliderId}`,
          }}
          scrollbar={{ draggable: true }}
          loop={true}
        >
          {data?.map((attraction, index) => {
            // const subcategory = attraction.subcategory ? attraction.subcategory?.[0] : ''
            const title = attraction.title ? attraction.title.replace(/,\s*Poland/g, '') : attraction.title 
            return (
              <SwiperSlide key={index}>
                
                <Link to={sliderId === 'slider1' ? `things-to-do/${title}` : `explore-country/${countryName}`}>
                <div className='rounded-2xl flex flex-col gap-4'>
                  <img 
                    src={attraction?.imageUrl} 
                    alt={title} 
                    className='rounded-xl w-full h-[280px] object-cover'
                  />
                  <div className='rounded-xl' >
                    <p className='font-bold'>{title}</p>
                    <small className='font-medium'>{attraction.subcategory}</small>
                    {attraction.rating ?
                      <div className='flex items-center gap-2'>
                        <ReactStars
                          count={5}
                          isHalf={true}
                          size={16}
                          value={parseFloat(attraction.rating) || 0}
                          activeColor="#d15712"
                          edit={false}
                        />
                        {attraction.num_reviews ? <small>({attraction.num_reviews})</small> : ''}
                      </div>
                      : ""
                    }
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
