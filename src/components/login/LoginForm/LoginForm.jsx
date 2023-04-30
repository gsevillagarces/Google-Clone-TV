import './LoginForm.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {

    const navigate = useNavigate()
    const [ login , setLogin ] = useState ({
        username : '' ,
        password : '' 
    })

    // Revisar si existe ya users en local y sino pasar por Login
    useEffect (() => {
        const  checkLocal = JSON.parse(localStorage.getItem( 'users' ))
        if(checkLocal){
            navigate("main/foryou" , { replace: true} )
        } 
    },[])

    const [ logged, setLogged ] = useState ( '' )

    // Poder usar los inputs
    const inputHandler = ({ target }) => {
        const { name, value } = target
        setLogin ({ ...login, [ name ] : value })
    }

    // Qué hacer con el form al enviar
    const formHandler = (e) => {
        e.preventDefault()

        let controller = new AbortController()

        let options = {
            method : 'post' ,
            signal : controller.signal,
            body : JSON.stringify (login),
            headers: {
                "Content-type" : "application/json"
            }
        }

    // formulario de login con la validación de los usuarios dentro de la bbdd
    fetch( 'http://localhost:4002/login' , options)
        .then ( res => res.json ())
        .then ( data => {
            console.log (data)
            if(data.entrar){
                localStorage.setItem('users' , JSON.stringify(login))
                navigate("main/foryou" ,{ replace: true} )
            }else{
                setLogged(data.mensaje)
            }
        })
        .catch ( err => console.log (err))
        .finally ( () => controller.abort ())
    }
    return(
        <div className='LoginForm'>
            <div className='LoginForm-container'>
                <h2 className='LoginForm-h2'>To begin, please enter your username and password:</h2>
                <form className='Login-Form-form' onSubmit={formHandler}>
                    <div className='TextField'>
                        <label className='TextField-label' htmlFor='input'>Username:</label>
                        <input
                            className='TextField-input'
                            type="text"
                            name="username"
                            placeholder="Your username..."
                            value={login.username || ''}
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
                            value={login.password || ''}
                            onChange={ e => inputHandler(e)}
                            />
                    </div>
                    <div className='LoginForm-btnContainer'>
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