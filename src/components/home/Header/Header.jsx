import './Header.css'
import { googleClone } from '../../../bbdd'


const { header } = googleClone
const { h1, menu, avatar } = header

export const Header = () => {
    return(
        <nav className='Nav'>
            <ul className='Nav-ul'>
                <h1 className="Header-h1">
                <a href={ h1.href } className="Header-a">
                    <img 
                    src={ h1.src }
                    alt={ h1.alt }
                    className="Header-img" />
                </a>
                </h1>

            {menu.map( eachMenu =>
                <li key={ eachMenu.id }
                    className ='Nav-li' >
                
                    <a href="" className='Nav-a'>
                        { eachMenu.icono && <img
                        src= { eachMenu.icono }
                        alt= { eachMenu.alt }
                        className = 'Header-icon' /> }
                            <span className='Nav-span'>
                                { eachMenu.texto }
                            </span>
                    </a>
                </li>
            )}

            </ul>
            
            <a href={ avatar.href } className="Nav-avatar">
                <img
                src={ avatar.img }
                alt={ avatar.alt }
                className= "Nav-avatar--img" />
            </a>
        </nav>
    )
}