import HeroSection from './HeroSection';
import NearbyAttractions from '@pages/home/NearbyAttractions';
import Restaurants from '@pages/home/Restaurants';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className='mx-auto flex flex-col gap-20 my-10 lg:my-20'>
        <NearbyAttractions />
        <Restaurants />
      </div>
    </>
  );
};

export default HomePage;
