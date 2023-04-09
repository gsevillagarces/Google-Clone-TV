import './Header.css'
import { NavLink }     from 'react-router-dom'
import { googleClone }  from '../../../bbdd'
import { useState } from 'react'

const { header } = googleClone
const { h1, menu, avatar } = header


export const Header = () => {
    
    const [isMobile, setIsMobile] = useState(true)
    
    return(
    <div className='Header'>
            
        <nav className="Nav-responsive">
            <button
                className={ isMobile ? 'Nav-responsive-button' : 'Nav-responsive-button-close'} 
                onClick={ () => {setIsMobile( !isMobile ) } } > 
                <img className='Nav-responsive-img' src="/assets/icons/menu.svg" alt="" />
                <img className='Nav-responsive-img-close' src="/assets/icons/close.svg" alt="" />
            </button>

            <h1 className="Header-h1">
                <div className="Header-a">
                    <img 
                    src={ h1.src }
                    alt={ h1.alt }
                    className="Header-img" />
                </div>
            </h1>
        </nav>
        
        <nav className='Nav'>
            <ul
                className={ isMobile ? 'Nav-ul' : 'Nav-ul expanded'}>
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
                    < NavLink to={ `/${eachMenu.href}` }
                              className='Nav-a'
                              title={eachMenu.title} >
                    
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
        </nav>

        <NavLink to={ `/${avatar.href}` } className="Nav-avatar">
            <img
            src={ avatar.img }
            title={ avatar.title }
            className= "Nav-avatar--img" />
        </NavLink>

    </div>
    )
}