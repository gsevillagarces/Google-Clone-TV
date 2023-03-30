import './Header.css'
import { BrowserRouter, Routes, Route, NavLink  } from 'react-router-dom'

import { googleClone }    from '../../../bbdd'
import { Library }        from '../../../pages/Library/Library'
import { Search }         from '../../../pages/Search/Search'
import { ForYou }         from '../../../pages/ForYou/ForYou'
import { Movies }         from '../../../pages/Movies/Movies'
import { Shows }          from '../../../pages/Shows/Shows'
import { Apps }           from '../../../pages/Apps/Apps'
import { Profile }        from '../../../pages/Profile/Profile'


const { header } = googleClone
const { h1, menu, avatar } = header

export const Header = () => {
    return(

    <BrowserRouter>

    <div className='Header'>

        <nav className='Nav'>
            <ul className='Nav-ul'>
                <h1 className="Header-h1">
                    <div className="Header-a">
                        <img 
                        src={ h1.src }
                        alt={ h1.alt }
                        className="Header-img" />
                    </div>
                </h1>

            {menu.map( eachMenu =>
                <li key={ eachMenu.id }
                    className ='Nav-li' >
                    < NavLink to={`/${eachMenu.href}`} className='Nav-a'>
                    
                        { eachMenu.icono && <img
                            src= { eachMenu.icono }
                            alt= { eachMenu.alt }
                            className = 'Header-icon' /> }

                        <span className='Nav-span'>
                            { eachMenu.texto }
                        </span>
                    </NavLink>
                </li>
            )}

            </ul>
            
            <NavLink to={ '/Profile' } className="Nav-avatar">
                <img
                src={ avatar.img }
                alt={ avatar.alt }
                className= "Nav-avatar--img" />
            </NavLink>

        </nav>

        <Routes>

            <Route path='/Search'  element={ < Search /> }  />
            <Route path='/ForYou'  element={ < ForYou /> }  />
            <Route path='/Movies'  element={ < Movies /> }  />
            <Route path='/Shows'   element={ < Shows /> }   />
            <Route path='/Apps'    element={ < Apps/> }     />
            <Route path='/Library' element={ < Library /> }  />
            <Route path='/Profile' element={ < Profile /> } />

          </Routes>

    </div>

    
    </BrowserRouter>

    )
}