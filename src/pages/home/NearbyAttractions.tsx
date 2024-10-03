import Slider from '@components/Slider';
import { useEffect, useState } from 'react';
import { useGetAttractionsQuery } from '@utils/api/fetch-travelAdvisor-data';


type Coordinates = {
  sw: { lat: number, lng: number},
  ne: { lat: number, lng: number},
}

export default function NearbyAtractions() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)
    

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const sw = { lat: position.coords.latitude - 0.1, lng: position.coords.longitude - 0.1 };
          const ne = { lat: position.coords.latitude + 0.1, lng: position.coords.longitude + 0.1 }; 
          setCoordinates({ sw, ne });
      });
    }
    }, [])

    const { isPending, isError, data } = useGetAttractionsQuery(coordinates)
  
    
    if (isPending) {
      return <h3>Is loading...</h3>
    }

    if (isError) {
      return <h3>Error occurred while fetching data.</h3>;
    }

    if (data) {
      return (
        <div className='w-full max-w-[1250px] flex flex-col mx-auto x-4 lg:p-6 2xl:p-8 bg-green/10 rounded-xl'>
            <h3 className='font-semibold'>Discover Nearby Tourist Attractions</h3>
            <p>Explore amazing places waiting to be discovered just around the corner!</p>
            <Slider attractions={data?.data || []} />
        </div>
      )
  } 
}
