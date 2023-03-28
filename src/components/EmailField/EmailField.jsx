import './EmailField.css'

export const EmailField = () => {
    return(
        <div className='EmailField'>
            <form>
                <label className='label' for="email">Ingresa un correo:</label>
                <input className='input' id="email" type="email" placeholder='Soy un input de email' />
            </form>
        </div>
    )
}