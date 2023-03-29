import './App.css'

import { BrowserRouter, Routes, Route, NavLink  } from 'react-router-dom'

import { Splash } from './components/loading/Splash/Splash'
import { Header } from './components/home/Header/Header'
import { CarouselApps } from './components/CarouselApps/CarouselApps'
import { CarouselMovies } from './components/CarouselMovies/CarouselMovies'
import { Slider } from './components/home/Slider/Slider'
import { TextField } from './components/TextField/TextField'
import { EmailField } from './components/EmailField/EmailField'
import { PasswordField } from './components/PasswordField/PasswordField'
import { LoginForm } from './components/login/LoginForm/LoginForm'
import { Watchlisted } from './pages/Watchlisted/Watchlisted'

function App() {
  return (
      <BrowserRouter>
      
      < div className='App'>

        {/* <div className='Splash'>
          < Splash />
        </div> */}

        <div className='CloneTV'>

{/* RUTAS Y MÁS */}
          {/* <Routes>

            <Route path='/watchlisted' element={ <Watchlisted /> } />

          </Routes> */}

          {/* <nav className='Nav'>
            <ul className='Nav-ul'>
                <li>
                  <NavLink to={'/ForYou'}>Search</NavLink>
                  <NavLink to={'/ForYou'}>ForYou</NavLink>
                  <NavLink to={'/ForYou'}>Movies</NavLink>
                </li>
            </ul>
          </nav> */}
{/* END RUTAS */}
          

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

          {/* < LoginForm /> */}

        </div>

      </div>

    </BrowserRouter>

  )
}

export default App