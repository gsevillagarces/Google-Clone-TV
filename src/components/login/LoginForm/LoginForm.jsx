import './LoginForm.css'
import { PasswordField } from '../../PasswordField/PasswordField'
import { TextField } from '../../TextField/TextField'

export const LoginForm = () => {
    return(
        <div className='LoginForm'>
            < TextField />
            < PasswordField />
        </div>
    )
}