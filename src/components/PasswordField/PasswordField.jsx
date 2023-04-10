import './PasswordField.css'

export const PasswordField = ({label, placeholder, value}) => {
    return(
        <div className='PasswordField'>
            <form>
                <label className='label' htmlFor="password">{label}</label>
                <input className='input' id="password" type="password" placeholder={placeholder} value={value} />
            </form>
        </div>
    )
}