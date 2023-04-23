import './Header.css'
import { NavLink }     from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { googleClone }  from '../../../bbdd'

// const { header } = googleClone
// const { h1, menu, avatar } = header

export const Header = () => {
    
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(true)
    const [menu, setMenu] = useState([])
    const [h1, setH1] = useState({});
    const [avatar, setAvatar] = useState({});

    useEffect(() => {

        fetch('http://localhost:4002/h1')
            .then((response) => response.json())
            .then((data) => setH1(data))
            .catch((error) => console.error(error));
        
        fetch('http://localhost:4002/avatar')
            .then((response) => response.json())
            .then((data) => setAvatar(data))
            .catch((error) => console.error(error));

        fetch('http://localhost:4002/menu')
            .then(response => response.json())
            .then(data => setMenu(data))
            .catch(error => console.log(error))
    }, [])

    const logout = () => {
        localStorage.removeItem('users')
        navigate("/")
    }
    
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
                <li key={ eachMenu._id }
                    className ='Nav-li' >
                    < NavLink to={ `/${eachMenu.href}` }
                              className='Nav-a'
                              title={eachMenu.title}
                              onClick={ () => {setIsMobile( !isMobile ) } } >
                    
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

        <div className='Nav-button-container'>
            <button className='Profile-icon-button Profile-icon-button' onPointerDown={logout}>
                <div className='ProfileInfo-icon ProfileInfo-logout'>
                    <img src="/assets/icons/logout.svg" alt="Logout" />
                </div>
            </button>

            <NavLink to={ `/${avatar.href}` } className="Nav-avatar">
                <img
                src={ avatar.img }
                title={ avatar.title }
                className= "Nav-avatar--img" />
            </NavLink>
        </div>
    </div>
    )
}