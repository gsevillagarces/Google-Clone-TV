import { BrowserRouter, Routes, Route, NavLink  } from 'react-router-dom'
import './App.css'

// import { Header } from './components/home/Header/Header'
import { Search } from './pages/Search/Search'
// import { Splash } from './components/loading/Splash'
import { ForYou } from './pages/ForYou/ForYou'
import { Movies } from './pages/Movies/Movies'
import { Shows } from './pages/Shows/Shows'
import { Apps } from './pages/Apps/Apps'
import { Library } from './pages/Library/Library'
import { Profile } from './pages/Profile/Profile'
import { MovieDetails } from './pages/details/MovieDetails/MovieDetails'
import { Plantilla } from './components/Plantilla/Plantilla'

function App() {
  return (
<BrowserRouter>
      <div className='App'>
        {/* <div className='Splash'>
          < Splash />
        </div> */}

        <div className='CloneTV'>   
          <Routes>
          <Route path='/'             element={ < ForYou /> }  />
            <Route path='/plantilla'    element={ <Plantilla /> }  >
                <Route path='foryou'       element={ < ForYou /> }  />
                <Route path='Search'       element={ < Search /> }  />
                <Route path='Movies'       element={ < Movies /> }  />
                <Route path='Shows'        element={ < Shows /> }   />
                <Route path='Apps'         element={ < Apps /> }    />
                <Route path='Library'      element={ < Library /> } />
                <Route path='Profile'      element={ < Profile /> } />
            </Route>
            <Route path='/MovieDetails' element={ < MovieDetails /> } />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  )
}

export default App