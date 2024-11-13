import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGeolocation } from "../../features/location/locationSlice"
import { useGetRestaurantsQuery } from "@utils/api/fetch-travelAdvisor-data"
import { RootState } from '../../store/store';
import { normalizeAttractionData } from '@utils/normalizeData/normalizeData';
import SectionWithSlider from "./SectionWithSlider";
import { normalizeRestaurantData } from "../../utils/normalizeData/normalizeData";
import restaurantsDataJson from '../../data/restaurantsData.json';

type Coordinates = {
    sw: { lat: number, lng: number},
    ne: { lat: number, lng: number},
  }
  

export default function Restaurants() {
    const dispatch = useDispatch()
    // const { lat, lon, status } = useSelector((state: RootState) => state.location)
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null)

    // useEffect(() => {
    //     dispatch(fetchGeolocation())
    // }, [dispatch])

    // useEffect(() => {
    //     if (lat !== null && lon !== null) {
    //         const sw = { lat: lat - 0.1, lng: lon - 0.1 };
    //         const ne = { lat: lat + 0.1, lng: lon + 0.1 };
    //         setCoordinates({ sw, ne });
    //     }
    // }, [lat, lon]);

    
    // const { isPending, isError, data } = useGetRestaurantsQuery(coordinates , {
    //     skip:!coordinates,
    //     refetchOnMountOrArgChange: true,
    // })

    // console.log(data)

    // if (isPending) {
    //     return <h3>Is loading...</h3>
    // }

    // if (isError) {
    //     return console.error("Error fetching attractions:", isError);;
    // }

    const normalizedData = restaurantsDataJson ? normalizeRestaurantData(restaurantsDataJson) : []

    // const normalizedData = data ? normalizeRestaurantData(data) : [];
    console.log(normalizedData)

  return (
    <SectionWithSlider 
        header="Discover Nearby Tourist Attractions"
        description="Explore amazing places waiting to be discovered just around the corner!"
        sliderData={normalizedData}
        sliderId="slider2"
    />
  )
}
