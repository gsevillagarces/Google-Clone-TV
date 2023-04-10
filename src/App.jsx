import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

import { Splash } from './components/loading/Splash/Splash'

import { LoginForm } from './components/login/LoginForm/LoginForm'
import { SelectProfile } from './components/login/SelectProfile/SelectProfile'

import { Search } from './pages/Search/Search'
import { ForYou } from './pages/ForYou/ForYou'
import { Movies } from './pages/Movies/Movies'
import { Shows } from './pages/Shows/Shows'
import { Apps } from './pages/Apps/Apps'
import { Library } from './pages/Library/Library'
import { EditProfile } from './components/login/EditProfile/EditProfile'

import { MovieDetails } from './pages/details/MovieDetails/MovieDetails'
import { AppDetails } from './pages/details/AppDetails/AppDetails'
import { SerieDetails } from './pages/details/SerieDetails/SerieDetails'

import { Main } from './components/Main/Main'
import { ManageProfile } from './components/login/ManageProfile/ManageProfile'
import { AddProfile } from './components/login/AddProfile/AddProfile'

function App() {
  return (
    < BrowserRouter >

      <div className='App'>

        {/* <div className='Splash'>
          < Splash />
        </div> */}

          <div className='CloneTV'>

            < Routes >

              < Route path='/' element={ < LoginForm /> } />
                < Route path='/main' element={ < Main /> } >
                    < Route path='foryou'  element={ < ForYou /> } />
                    < Route path='search'  element={ < Search />  } />
                    < Route path='movies'  element={ < Movies />  } />
                    < Route path='shows'   element={ < Shows />   } />
                    < Route path='apps'    element={ < Apps />    } />
                    < Route path='library' element={ < Library /> } />
                </ Route >
              < Route path='login/select-profile'   element={ < SelectProfile />} />
              < Route path='login/manage-profile'   element={ < ManageProfile />} />
              < Route path='login/edit-profile'     element={ < EditProfile /> } />
              < Route path='login/add-profile'      element={ < AddProfile /> } />
              
              < Route path='details/app-details'   element={ < AppDetails />   } />
              < Route path='details/movie-details' element={ < MovieDetails /> } />
              < Route path='details/serie-details' element={ < SerieDetails /> } />
            </ Routes >
            
          </div>
      </div>
      </ BrowserRouter >
  )
}

export default App