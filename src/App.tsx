import HeroSection from '@pages/home/HeroSection';
import NearbyAtractions from '@pages/home/NearbyAttractions';


function App() {
  
  return (
    <div >
       <HeroSection />
       <div className=' mx-auto flex flex-col my-10 lg:my-20'> 
         <NearbyAtractions />
       </div>
    </div>
  )
}

export default App
