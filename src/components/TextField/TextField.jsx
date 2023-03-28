import './TextField.css'

export const TextField = () =>{
    return(
        <div className='TextField'>
            <form>
                <label className='label' for="input">Ingresa un texto:</label>
                <input className='input' id="input" type="text" placeholder='Soy un input de texto' />
            </form>
        </div>
    )
}