// import { useGetCountryActivitiesQuery, useGetCoutryInfoQuery } from '@utils/api/fetch-tarvelInfo-data'
import { useState } from 'react'
import countryInfoJson from '@data/countryInfo.json'
import countryActivitiesJson from '@data/countryActivities.json'
import countryDataJson from '@data/countryData.json'


type CountryInfo = {
    data: {
        capital: string,
        continent: string,
        countryName: string,
        government: string,
        neighborsList: string[],
        officialLanguages: string,
        population:  string,
    }
}

type CountryActivities = {
    title: string,
    activiy: string
}[]

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

export default function ExploreCountryPage() {
    // const countryActivities = useGetCountryActivitiesQuery('poland')
    // const countryInf = useGetCoutryInfoQuery('poland')
    const [countryInfo, setCountryInfo] = useState<CountryInfo>(countryInfoJson)
    const [countryActivities, setCountryActivities] = useState<CountryActivities>(countryActivitiesJson)
    const [countryData, setCountryData] = useState<ApiResponse>(countryDataJson)
    console.log(countryInfo)
  
    
  return (
    <div className='w-full h-[2000px] absolute top-32'>
        <div className='w-full max-w-[1250px] flex flex-col mx-auto p-6 rounded-xl gap-8'>
            <div className='grid grid-cols-5 grid-rows-4 gap-1'>
                <img src={countryData.data.image_url} 
                    alt={countryData.data.info} 
                    className="col-span-3 row-span-4 rounded-l-xl"
                />
                <img src={countryData.data.country_images[5].imageUrl} 
                    alt={countryData.data.info} 
                    className="col-span-2 row-span-2 rounded-tr-xl"
                />
                <img src={countryData.data.country_images[8].imageUrl} 
                    alt={countryData.data.info} 
                    className="col-span-2 row-span-2 rounded-br-xl"
                />
            </div>
            <div>
                <h4 className="font-bold">Explore {countryInfo.data.countryName}</h4>
                <p>{countryData.data.info}</p>
            </div>
            <div className='font-semibold'>
                <p>Population: {countryInfo?.data.capital}</p>
                <p>Population: {countryInfo?.data.population}</p>
                <p>Official Languages: {countryInfo?.data.officialLanguages} </p>
            </div>  
            <div>
                <h4 className='font-bold'>Things To Do</h4>
                <div className='flex flex-wrap w-[1200px] gap-3' >
                    {countryData.data.country_images.map((image, index) => (
                        <div key={index} className='flex flex-col mt-5 gap-2'>
                            <img src={image.imageUrl} alt={image.title} className='w-[370px] h-[300px] object-cover rounded-xl'/>
                            <p  className='text-[14px] font-semibold'>{image.title}</p>
                        </div>
                    ))}
                </div>
            </div>      
        </div>
    </div>
  )
}
