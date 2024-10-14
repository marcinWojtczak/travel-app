import HeroSection from './HeroSection';
import NearbyAttractions from './NearbyAttractions';
import CountryDetails from './CountryDetails';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className='mx-auto flex flex-col gap-20 my-10 lg:my-20'>
        <NearbyAttractions />
        <CountryDetails />
      </div>
    </>
  );
};

export default HomePage;
