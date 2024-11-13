import { useGetCountryDetailsQuery } from '@utils/api/fetch-tarvelInfo-data';
import Slider from '@components/Slider';
import SectionWithSlider from '@pages/home/SectionWithSlider';
import countryDataJson from '../../data/countryData.json';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
// import Spinner from 'react-bootstrap/Spinner';
import { normalizeCountryData } from '../../utils/normalizeData/normalizeData';

interface CountryImage {
  imageUrl: string; 
  title: string;    
}

interface CountryData {
  info: string;            
  image_url: string;       
  country_images: CountryImage[]; 
}

interface ApiResponse {
  data: CountryData;       
}



export default function CountryDetail() {
    const [countryData, setCountryData] = useState<ApiResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const { country } = useSelector((state: RootState) => state.location)

    const countryName = country?.plus_code?.compound_code?.split(',').pop()?.trim() || '';

    useEffect(() => {
      // Fetch simulation from file data
      const fetchCountryData = async () => {
        try {
          setCountryData(countryDataJson);
        } catch (error) {
          console.error("Error fetching country images:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCountryData();
    }, []);

    // const { data, isPending, isError } = useGetCountryDetailsQuery(countryName)
    // console.log(data)
  
    // if (isPending) {
    //     return <Spinner>
    //       <span className='bg-black'>Loading...</span>
    //     </Spinner>
    // }

    // if (isError) {
    //     return <h3>Error occurred while fetching data.</h3>
    // }
   
    // const countryData = data?.data?.country_images || []

    // if (countryData?.data.country_images.length === 0) {
    //   return <Spinner className='bg-black'><span>Loading...</span></Spinner>; 
    // }

  const countryImages = countryData?.data.country_images || [];
  
  const normalizedData = normalizeCountryData(countryImages)
    
  return (
    <SectionWithSlider 
      header="Explore Poland"
      description={countryData?.data.info}
      sliderData={normalizedData}
      sliderId="slider2"
      countryName={countryName}
    />   
  )
    
}
