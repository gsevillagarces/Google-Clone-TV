import './EditProfile.css'
import { CancelBtn } from '../../CancelBtn/CancelBtn'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditProfile = () => {

    const navigate = useNavigate()

    const { user } = useParams()
    const [ users, setUsers ] = useState ([])

    const gotoProfiles = () => {
        navigate("/login/select-profile")
    }

    // fetch para precargar el contenido del login en el form y poder editarlo
    useEffect ( () => {
        let controller = new AbortController()
        let options = {
            method : 'get' ,
            signal : controller.signal,
            headers: {
                "Content-type" : "application/json"
            }
        }   
        fetch( `http://localhost:4002/users/${user}`, options )
            .then( res => res.json())
            .then( data => setLogin (data[0] ))
            .catch( err => console.log( err ) )
            .finally( () => controller.abort() )
    }, [])

    const [ login , setLogin ] = useState ({
        name : '',
        username : '' ,
        password : '' 
    })

    const inputHandler = ({ target }) => {
        const { name, value } = target
        setLogin ({ ...login, [ name ] : value })
    }

    const formHandler = (e) => {
        let options = {
        method : 'put' ,
        body    : JSON.stringify( login ),
        headers : {
            "Content-type" : "application/json"
        }
    }
        e.preventDefault()
        fetch( `http://localhost:4002/users/`, options )
        .then( res => res.json())
        .then( data => setUsers (data))
        .catch( err => console.log( err ) )
        .finally( () => controller.abort() )

        gotoProfiles()
    }

    // fetch para saber qué usuario borrar y volver a perfiles
    const deleteUser = () => {
        let options = {
            method : 'delete' ,
            headers : {
                "Content-type" : "application/json"
            }
        }
        
        fetch( `http://localhost:4002/users/${user}`, options )
        .then( res => res.json())
        .then( data => setUsers (data))
        .catch( err => console.log( err ) )
        .finally( () => controller.abort() )

        gotoProfiles()
    }

    return(
        <div className='EditProfile'>
            <div className='EditProfileInfo'>
                <div className='EditProfileInfo-upper'>
                    <div className='EditProfileInfo-user'>
                        <div className='EditProfileInfo-avatar'>
                            <img className='EditProfileInfo-img' src='/assets/imgs/user@2x.jpg' alt='avatar' />
                        </div>
                        <h2 className='EditProfileInfo-h2'>
                            {login && login.name}
                        </h2>
                    </div>

                    <div className='EditProfileInfo-icon-buttons'>
                        <button className='EditProfile-icon-button' onPointerDown={deleteUser} >
                            <div className='EditProfileInfo-icon EditProfileInfo-trash'>
                                <img src="/assets/icons/delete.svg" alt="Delete" />
                            </div>
                        </button>
                    </div>
                </div>

                <div className='EditProfile-divider'>
                    <h4 className='EditProfile-divider-h4'>
                        Edit your profile below:
                    </h4>
                </div>
                
                <form className='Login-Form-form' onSubmit={formHandler}>

                    <div className='TextField'>
                        <label className='TextField-label' htmlFor='input'>Name:</label>
                        <input
                            className='TextField-input'
                            type="text"
                            name="name"
                            placeholder="Your name..."
                            value={login.name}
                            onChange={ e => inputHandler(e)}
                            />
                    </div>
                    
                    <div className='TextField'>
                        <label className='TextField-label' htmlFor='input'>Username:</label>
                        <input
                            className='TextField-input'
                            type="text"
                            name="username"
                            placeholder="Your username..."
                            value={login.username}
                            onChange={ e => inputHandler(e)}
                            />
                    </div>

                    <div className='PasswordField'>
                        <label className='PasswordField-label' htmlFor='password'>Password:</label>
                        <input
                            className='PasswordField-input'
                            type="password"
                            name="password"
                            placeholder="Your password..."
                            value={login.password}
                            onChange={ e => inputHandler(e)}
                            />
                    </div>
                    <div className='LoginForm-btnContainer AddProfileInfo-butons'>
                        < CancelBtn />
                        <button
                            className='OkBtn-button'
                            type="submit">
                            <span className='Button-span'>
                                <img className='Button-span-img-arrow' src="/assets/icons/arrow_forward.svg" alt="" />
                            </span>
                        </button>
                    </div>
                </form>
            </div>          
        </div>
    )
}