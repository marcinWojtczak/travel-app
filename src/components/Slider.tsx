import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
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
  sliderId: string
};

export default function Slider({ data, sliderId }: SliderProps) {
  const [slidesPerView, setSlidesPerView] = useState<number>(4);

  console.log(sliderId)

  useEffect(() => {
    function handleResize() {
      let width = window.innerWidth
      if (width >= 1200) {
        setSlidesPerView(4)
      } else if (width >= 768) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [slidesPerView])

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
          slidesPerView={slidesPerView}
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
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
