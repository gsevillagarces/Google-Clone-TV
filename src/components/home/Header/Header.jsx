import './Header.css'
import { NavLink  }     from 'react-router-dom'
import { googleClone }  from '../../../bbdd'


const { header } = googleClone
const { h1, menu, avatar } = header

export const Header = () => {
    return(
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

    </div>

    )
}