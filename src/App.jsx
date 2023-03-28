import './App.css'
import { Splash } from './components/loading/Splash/Splash'
import { Header } from './components/home/Header/Header'
import { CarouselApps } from './components/CarouselApps/CarouselApps'
import { CarouselMovies } from './components/CarouselMovies/CarouselMovies'
import { Slider } from './components/home/Slider/Slider'
import { TextField } from './components/TextField/TextField'
import { EmailField } from './components/EmailField/EmailField'
import { PasswordField } from './components/PasswordField/PasswordField'
import { LoginForm } from './components/login/LoginForm/LoginForm'

function App() {
  return (
    <>

      {/* <div className='Splash'>
        < Splash />
      </div> */}

      <div className='CloneTV'>
        {/* < Header /> */}
        {/* < Slider /> */}
        {/* <h2 className='CloneTV-h2'>Top picks</h2> */}
        {/* < CarouselMovies /> */}
        {/* <h2 className='CloneTV-h2'>Your apps</h2> */}
        {/* < CarouselApps /> */}
        {/* <h2 className='CloneTV-h2'>Keep watching</h2> */}
        {/* < CarouselMovies /> */}
        {/* <h2 className='CloneTV-h2'>On your watchlist</h2> */}
        {/* < CarouselMovies /> */}
        {/* <h2 className='CloneTV-h2'>Suggested</h2> */}
        {/* < CarouselMovies /> */}

        < LoginForm />

      </div>

    </>
  )
}

export default App