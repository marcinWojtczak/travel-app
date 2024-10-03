import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Attraction = {
  name: string;
  description: string;
  rating: string,
  subcategory: {
    name: string
  }[],
  photo: {
    images: {
      large: {
        url: string
      }
    }
  };
};

type SliderProps = {
  attractions: Attraction[];
};

export default function Slider({ attractions }: SliderProps) {
  const [slidesPerView, setSlidesPerView] = useState<number>(4);

  console.log(attractions)

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

  const filteredAttractions = attractions.filter(attr => 
    attr.photo?.images?.large?.url
  );

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-end gap-4'>
        <div className=' button-prev rounded-full text-white bg-brown n px-5 py-1'>
          <ArrowLeft  className='h-6 w-6' strokeWidth={2}/>
        </div>
        <div className='button-next rounded-full text-white bg-brown px-5 py-1'>
          <ArrowRight className='h-6 w-6' strokeWidth={2}/>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: '.button-next',
            prevEl:'.button-prev',
          }}
          scrollbar={{ draggable: true }}
          loop={true}
        >
          {filteredAttractions.map((attraction, index) => {
            const subcategory = attraction.subcategory?.[0];
            return (
              <SwiperSlide key={index}>
                <div className='rounded-2xl flex flex-col gap-4'>
                  <img 
                    src={attraction?.photo?.images?.large?.url} 
                    alt={attraction.name} 
                    className='rounded-xl w-full h-[280px] object-cover'
                  />
                  <div className=' rounded-xl ' >
                    <p className='font-bold'>{attraction.name}</p>
                    <small className='font-medium'>{subcategory?.name}</small>
                    <ReactStars
                      count={5}
                      isHalf={true}
                      size={24}
                      value={parseFloat(attraction.rating) || 0}
                      activeColor="#d15712"
                      edit={false}
                    />
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
