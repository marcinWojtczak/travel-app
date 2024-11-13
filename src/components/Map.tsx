// import { GoogleMap,  useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import attractionData from '../data/attractionData.json'
import Search from './Search';
import { useState, useEffect } from 'react';
import { APIProvider, Map , AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';


export default function MapComponent() {
    const { lat, lon } = useSelector((state: RootState) => state.location)
    const [dataLoaded, setDataLoaded] = useState(false);
    const [openId, setOpenId] = useState<string | null>(null)

    useEffect(() => {
        // Simulate loading data from a file
        setTimeout(() => {
            // Normally, load your data here
            setDataLoaded(true); // Set to true when data is ready
        }, 1000); // Simulate a delay for loading data
    }, []);

 
 
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: 'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y',
    //     libraries: ['marker']
    // })
    
    const isValidLatLon = lat !== null && lon !== null && !isNaN(lat) && !isNaN(lon);
    const center = { lat: lat, lng: lon}

    const handleOpen = (id: string) => {
        setOpenId(id)
    }

   
    console.log(attractionData)
    return isValidLatLon ? (
        <APIProvider apiKey={'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y'}>
        <div className='w-full'>
            <Map  
                defaultZoom={10}
                defaultCenter={center}
                className='w-full h-[500px]'
                mapId={'9a37ce782307cf10'}
                
            >
                {dataLoaded && attractionData.map((attraction) => (
                    <div key={attraction.location_id}>
                        <AdvancedMarker 
                            position={{lat: parseFloat(attraction.latitude), lng: parseFloat(attraction.longitude)}} 
                            // onClick={() => handleOpen(attraction.location_id)}
                            onMouseEnter={() => handleOpen(attraction.location_id)}
                           
                        >
                            <Pin 
                        
                            />
                        </AdvancedMarker>
                        {openId === attraction.location_id && 
                            <InfoWindow 
                                position={{lat: parseFloat(attraction.latitude), lng: parseFloat(attraction.longitude)}} 
                                onCloseClick={() => setOpenId(null)}
                            >
                                <div  className='flex flex-col gap-4 w-[320px]'>
                                    <img 
                                        src={attraction.photo.images.large.url}
                                        alt={attraction.name} 
                                        style={{ width: '100%', height: 'auto', objectFit: 'contain'}}  
                                    />
                                    <div>
                                        <h5 className='pb-2 font-semibold'>{attraction.name}</h5>
                                        <p>{attraction.descriptions}</p>
                                    </div>
                                </div>
                            </InfoWindow>
                        }
                    </div>
                ))}
                
            </Map>
        </div>
        </APIProvider>
    ) : <></>
}
