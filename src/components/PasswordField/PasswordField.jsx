import './PasswordField.css'

export const PasswordField = () => {
    return(
        <div className='PasswordField'>
            <form>
                <label className='label' for="password">Contraseña:</label>
                <input className='input' id="password" type="password" placeholder='Soy un input de contraseña' />
            </form>
        </div>
    )
}