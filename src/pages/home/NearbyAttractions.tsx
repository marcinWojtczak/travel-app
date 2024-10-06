import Slider from '@components/Slider';
import { useEffect, useState } from 'react';
import { useGetAttractionsQuery } from '@utils/api/fetch-travelAdvisor-data';
import SectionWithSlider from "@pages/home/SectionWithSlider";
import attractionsDataJson from '../../data/attractionData.json';

type Coordinates = {
  sw: { lat: number, lng: number},
  ne: { lat: number, lng: number},
}

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

type NormalizedItem = {
  imageUrl: string;
  title: string;
  rating?: string;
  num_reviews?: string;
  subcategory?: string;
};

export default function NearbyAtractions() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)
  const [attractionsData, setAttractionsData] = useState<AttractionsData[]>([])
    
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const sw = { lat: position.coords.latitude - 0.1, lng: position.coords.longitude - 0.1 };
          const ne = { lat: position.coords.latitude + 0.1, lng: position.coords.longitude + 0.1 }; 
          setCoordinates({ sw, ne });
      });
    }
    }, [])

    // const { isPending, isError, data } = useGetAttractionsQuery(coordinates)
    

    useEffect(() => {
      // Symulacja fetchowania danych z lokalnych plików JSON
      const fetchAttractions = async () => {
        try {
          setAttractionsData(attractionsDataJson);
        } catch (error) {
          console.error("Error fetching attractions:", error);
        }
      };

      fetchAttractions();
    }, []);

    const normalizedAttractionData = (attractionsData: AttractionsData[]): NormalizedItem[] => {
      return attractionsData.map(item => ({
        imageUrl: item.photo?.images?.large?.url || '',
        title: item.name || '',
        rating: item.rating || '',
        num_reviews: item.num_reviews || '',
        subcategory: item.subcategory ? item.subcategory[0]?.name : ''
      }));
    }
    
    // if (isPending) {
    //   return <h3>Is loading...</h3>
    // }

    // if (isError) {
    //   return <h3>Error occurred while fetching data.</h3>;
    // }
      const normalizeData = normalizedAttractionData(attractionsData);

      if (normalizeData.length === 0) {
        return <h3>Loading...</h3>; 
      }

    
        return (
            <SectionWithSlider 
                header="Discover Nearby Tourist Attractions"
                description="Explore amazing places waiting to be discovered just around the corner!"
                sliderData={normalizeData}
                sliderId="slider1"
            />
            
        )
      
}
