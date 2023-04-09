import './PasswordField.css'

export const PasswordField = () => {
    return(
        <div className='PasswordField'>
            <form>
                <label className='label' htmlFor="password">Password:</label>
                <input className='input' id="password" type="password" placeholder='Password placeholder' />
            </form>
        </div>
    )
}