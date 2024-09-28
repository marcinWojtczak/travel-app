import Header from '@components/Header'
import HeroSection from './pages/home/HeroSection'

function App() {
  

  return (
    <div>
      <Header />
      <div className='pt-[75px] flex flex-col justify-center px-4 mx-auto'>
        <HeroSection />
      </div>
      
    </div>
  )
}

export default App
