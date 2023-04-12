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
            
            <div className='LoginForm-container LoginForm-username'>
                <h2 className='LoginForm-h2'>To begin we need your username and password:</h2>
                <div className='LoginForm-form'>
                    < TextField
                        label = "Username:"
                        placeholder  = "Your username..." />
                    < PasswordField 
                        label = "Password:"
                        placeholder = "Your password..." />
                </div>
            </div>

            <div className='LoginForm-btnContainer'>
                < OkBtn />
            </div>


<form onSubmit={handleSubmit}>
    <label>
        Username:
        <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
    </label>
    <br />
    <label>
        Password:
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
    </label>
    <br />
    <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
        
    </button>
    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
</form>



        </div>
    )
}