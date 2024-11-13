import { useState, useEffect } from 'react'
import attractionsDataJson from '@data/attractionData.json';
import SecondaryMenu from '@components/SecondaryMenu';
import Map from '@components/Map';

type AttractionsData = {
  location_id: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  rating: string;
  photo: {
    images: {
      large: {
        url: string;
      };
    };
  };
  subcategory?: {
    name: string;
  }[];
};

export default function nerbyAttractionsPage() {


  return (
    <div className='mt-20 flex flex-col gap-20 items-start w-full px-8 lg:px-4 xl:px-0'>
      <SecondaryMenu />
      <div className='flex gap-4'>
        <div className='basis-1/3'>
          <h2>Header</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit amet quae in excepturi velit libero at voluptate veniam soluta rem inventore voluptas saepe ipsum incidunt eos, debitis error. Aut?</p>
        </div>
        <div className='basis-3/4'>
          <Map />
        </div>
      </div>
    </div>
  )
}
