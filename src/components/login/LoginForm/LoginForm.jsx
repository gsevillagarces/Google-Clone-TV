import './LoginForm.css'
import { PasswordField } from '../../PasswordField/PasswordField'
import { TextField } from '../../TextField/TextField'
import { OkBtn } from '../../OkBtn/OkBtn'
import { CancelBtn } from '../../CancelBtn/CancelBtn'

export const LoginForm = () => {
    return(
        <div className='LoginForm'>
            <div className='LoginForm-container LoginForm-username'>
                <h2 className='LoginForm-h2'>Ingresa tu usuario para iniciar…</h2>
                <div className='LoginForm-form'>
                    < TextField />
                </div>
            </div>

            <div className='LoginForm-container LoginForm-password'>
                <h2 className='LoginForm-h2'>Ahora ingresa tu contraseña para continuar:</h2>
                <div className='LoginForm-form'>
                    < PasswordField />
                </div>
            </div>

            <div className='LoginForm-btnContainer'>
                < CancelBtn />
                < OkBtn />
            </div>
        </div>
    )
}