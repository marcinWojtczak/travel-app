import { useGetCountyDetailsQuery } from '@utils/api/fetch-tarvelInfo-data';
import Slider from '@components/Slider';
import SectionWithSlider from '@pages/home/SectionWithSlider';
import countryDataJson from '../../data/countryData.json';
import { useState, useEffect } from 'react'

type CountryImageSource = {
  imageUrl: string;
  title: string;
  rating?: string;  
  num_reviews?: string; 
  subcategory?: string;
};

type NormalizedItem = {
  imageUrl: string;
  title: string;
  rating?: string;
  num_reviews?: string;
  subcategory?: string;
};

export default function CountryDetail() {
    // const { data, isPending, isError } = useGetCountyDetailsQuery('Poland')
    const [countryData, setCountryData] = useState<CountryImageSource[]>([])
    const [loading, setLoading] = useState<boolean>(true);

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

    const normalizeCountryData = (countryData: CountryImageSource[]): NormalizedItem[] => {
        return countryData.map((item) => ({
          imageUrl: item.imageUrl,
          title: item.title || '',
          rating: item.rating || '', 
          num_reviews: item.num_reviews || '',
          subcategory: item.subcategory || '', 
        }))
    }
    
    const normalizedData = normalizeCountryData(countryData)
    // if (isPending) {
    //     return <h3>is Loading...</h3>
    // }

    // if (isError) {
    //     return <h3>Error occurred while fetching data.</h3>
    // }
   
    // const countryData = data?.data?.country_images || []

  

    if (countryData.length === 0) {
      return <h3>Loading...</h3>; 
    }

    
        return (
            <SectionWithSlider 
                header="Explore Poland"
                description="Polska to kraj o bogatej historii, zróżnicowanej kulturze i przepięknych krajobrazach, co czyni ją atrakcyjnym celem turystycznym. Od tętniących życiem miast, jak Warszawa czy Kraków, po malownicze wioski i zamki rozsiane po całym kraju, każdy znajdzie tu coś dla siebie. Polska oferuje wyjątkowe zabytki, takie jak Zamek Królewski na Wawelu, Rynek Starego Miasta w Warszawie czy Wieliczkę z zabytkowymi kopalniami soli. Góry Tatry przyciągają miłośników wędrówek i narciarzy, a piękne wybrzeże Bałtyku zachęca do letniego wypoczynku."
                sliderData={normalizedData}
                sliderId="slider2"
            />
            
        )
    
}
