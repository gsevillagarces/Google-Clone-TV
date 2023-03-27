import './App.css'
import { Splash } from './components/splash/Splash'
import { Header } from './components/home/Header/Header'
import { CarouselApps } from './components/CarouselApps/CarouselApps'
import { CarouselMovies } from './components/CarouselMovies/CarouselMovies'
import { Slider } from './components/Slider/Slider'

function App() {
  return (
    <>

      {/* <div className='Splash'>
        < Splash />
      </div> */}

      <div className='CloneTV'>

        {/* < Header /> */}

        <Slider />

        <h2>Top picks</h2>
        < CarouselMovies />

        <h2>Your apps</h2>
        < CarouselApps />
        
      </div>

    </>
  )
}

export default App