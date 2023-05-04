import './Header.css'
import { NavLink }     from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(true)
    const [menu, setMenu] = useState([])
    const [h1, setH1] = useState({});
    const [avatar, setAvatar] = useState({});

    useEffect(() => {

        // fetch de logo y título
        fetch('mongodb+srv://gsevillagarces:test123@cluster0.ty0etsd.mongodb.net/test/google-clone-tv/h1')
            .then((response) => response.json())
            .then((data) => setH1(data[0]))
            .catch((error) => console.error(error));
        
        // fetch de avatar para el menú
        fetch('mongodb+srv://gsevillagarces:test123@cluster0.ty0etsd.mongodb.net/test/google-clone-tv/avatar')
            .then((response) => response.json())
            .then((data) => setAvatar(data[0]))
            .catch((error) => console.error(error));

        // fetch de todo lo que compone el menú
        fetch('mongodb+srv://gsevillagarces:test123@cluster0.ty0etsd.mongodb.net/test/google-clone-tv/menu')
            .then(response => response.json())
            .then(data => setMenu(data))
            .catch(error => console.log(error))
    }, [])

    // para el logout de usuarios, eliminando users de localStorage
    const logout = () => {
        localStorage.removeItem('users')
        navigate("/")
    }
    
    return(
        <div className='Header'>
            {/* Difererrncias en menús desktop y respnsive */}
            <nav className="Nav-responsive">
                <button
                    className={ isMobile ? 'Nav-responsive-button' : 'Nav-responsive-button-close'} 
                    onClick={ () => {setIsMobile( !isMobile ) } } > 
                    <img className='Nav-responsive-img' src="/assets/icons/menu.svg" alt="" />
                    <img className='Nav-responsive-img-close' src="/assets/icons/close.svg" alt="" />
                </button>
                <NavLink to='/main/foryou'>
                    <h1 className="Header-h1">
                        <div className="Header-a">
                            <img 
                            src={ h1.src }
                            alt={ h1.alt }
                            className="Header-img" />
                        </div>
                    </h1>
                </NavLink>
            </nav>
            
            <nav className='Nav'>
                <ul
                    className={ isMobile ? 'Nav-ul' : 'Nav-ul expanded'}>
                    <NavLink to='/main/foryou'>
                        <h1 className="Header-h1">
                            <div className="Header-a">
                                <img 
                                src={ h1.src }
                                alt={ h1.alt }
                                className="Header-img" />
                            </div>
                        </h1>
                    </NavLink>
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

                <NavLink to='/login/select-profile' className="Nav-avatar">
                    <img
                    src={ avatar.img }
                    title={ avatar.title }
                    className= "Nav-avatar--img" />
                </NavLink>
            </div>
        </div>
    )
}