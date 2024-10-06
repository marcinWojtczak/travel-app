import HeroSection from '@pages/home/HeroSection';
import NearbyAtractions from '@pages/home/NearbyAttractions';
import CountryDetail from './pages/home/CountryDetail';


function App() {
  
  return (
    <div >
       <HeroSection />
       <div className=' mx-auto flex flex-col gap-20 my-10 lg:my-20'> 
          <CountryDetail />
          <NearbyAtractions />
       </div>
    </div>
  )
}

export default App
