import './AddProfile.css'
import { CancelBtn } from '../../CancelBtn/CancelBtn'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddProfile = () => {

    const navigate = useNavigate()
    const [ login , setLogin ] = useState ({
        username : '' ,
        password : '' 
    })

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

    }


    return(
        <div className='AddProfile'>
            <div className='AddProfileInfo'>
                <div className='AddProfile-divider'>
                    <h4 className='AddProfile-divider-h4'>
                        Complete your info below:
                    </h4>
                </div>
                
                <form className='Login-Form-form' onSubmit={formHandler}>

                    <div className='TextField'>
                        <label className='TextField-label' htmlFor='input'>Name:</label>
                        <input
                            className='TextField-input'
                            type="text"
                            name="username"
                            placeholder="Your name..."
                            value={login.name || ''}
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