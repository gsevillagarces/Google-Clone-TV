import './LoginForm.css'
import { useState } from 'react';

import { PasswordField } from '../../PasswordField/PasswordField'
import { TextField } from '../../TextField/TextField'
import { OkBtn } from '../../OkBtn/OkBtn'
import { CancelBtn } from '../../CancelBtn/CancelBtn'

export const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
    
        const allowedUsers = [
          { username: 'admin1', password: 'pass1' },
          { username: 'admin2', password: 'pass2' },
          { username: 'admin3', password: 'pass3' },
        ];
        
        const user = allowedUsers.find((u) => u.username === username && u.password === password);
    
        if (user) {
          // Redirect user to dashboard or home page
          console.log('Login successful');
        } else {
          setIsLoading(false);
          setErrorMessage('Invalid username or password');
        }
    };

    return(
        <div className='LoginForm'>
            
            <div className='LoginForm-container'>
                <h2 className='LoginForm-h2'>To begin, please enter your username and password:</h2>
                
                <form className='Login-Form-form' onSubmit={handleSubmit}>

                    <div className='PasswordField'>
                        <label className='TextField-label' htmlFor='input'>Username:</label>
                        <input
                            className='TextField-input'
                            type="text"
                            placeholder="Your username..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    </div>

                    <div className='PasswordField'>
                        <label className='PasswordField-label' htmlFor='password'>Password:</label>
                        <input
                            className='PasswordField-input'
                            type="password"
                            placeholder="Your password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>

                    <div className='Error-container'>
                        {errorMessage && <div style={{ color: 'red' }}><p>{errorMessage}</p></div>}
                    </div>

                    <div className='LoginForm-btnContainer'>
                        <button
                            className='OkBtn-button'
                            type="submit" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Continue'}
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