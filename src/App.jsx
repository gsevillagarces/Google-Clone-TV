import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './App.css'

import { Splash } from './components/loading/Splash/Splash'
import { Header } from './components/home/Header/Header'
import { Search } from './pages/Search/Search'
import { ForYou } from './pages/ForYou/ForYou'
import { Movies } from './pages/Movies/Movies'
import { Shows } from './pages/Shows/Shows'
import { Apps } from './pages/Apps/Apps'
import { Library } from './pages/Library/Library'
import { Profile } from './pages/Profile/Profile'
import { MovieDetails } from './pages/details/MovieDetails/MovieDetails'
import { Template } from './components/Template/Template'
import { AppDetails } from './pages/details/AppDetails/AppDetails'

function App() {
  return (
      < BrowserRouter >
      <div className='App'>

        {/* <div className='Splash'>
          < Splash />
        </div> */}

          <div className='CloneTV'>

            < Routes >
              < Route path='/' element={ < ForYou /> } >
                < Route path='Template' element={ < Template /> } >
                      < Route path='foryou'  element={ < ForYou />  } />
                      < Route path='search'  element={ < Search />  } />
                      < Route path='movies'  element={ < Movies />  } />
                      < Route path='shows'   element={ < Shows />   } />
                      < Route path='apps'    element={ < Apps />    } />
                      < Route path='library' element={ < Library /> } />
                      < Route path='profile' element={ < Profile /> } />
                  </ Route >
                </ Route >
                < Route path='/movie-details' element={ < MovieDetails /> } />
                < Route path='/app-details'   element={ < AppDetails />   } />
            </ Routes >
          
          </div>
      </div>
      </ BrowserRouter >
  )
}

export default App