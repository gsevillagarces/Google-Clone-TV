import './LoginForm.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {

    const navigate = useNavigate()
    const [ login , setLogin ] = useState ({
        username : '' ,
        password : '' 
    })

    useEffect (() => {
        const  checkLocal = JSON.parse(localStorage.getItem( 'users' ))
        if(checkLocal){
            navigate("main/foryou" , { replace: true} )
        } 
    },[])

    const [ logged, setLogged ] = useState ( null )

    const inputHandler = ({ target }) => {
        const { name, value } = target
        setLogin ({ ...login, [ name ] : value })
    }

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

                    <div className='PasswordField'>
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

                    <div className='Error-container'>
                        {/* ERROR DEL FORM 
                        {data.mensaje && <div style={{ color: 'red' }}><p>data.mensaje</p></div>} */}
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