import './LoginForm.css'
import { PasswordField } from '../../PasswordField/PasswordField'
import { TextField } from '../../TextField/TextField'
import { OkBtn } from '../../OkBtn/OkBtn'

export const LoginForm = () => {
    return(
        <div className='LoginForm'>
            <h2 className='LoginForm-h2'>Ingresa tu usuario para iniciar…</h2>
            <div className='LoginForm-form'>
                < TextField />
                < PasswordField />
            </div>
                < OkBtn />
        </div>
    )
}