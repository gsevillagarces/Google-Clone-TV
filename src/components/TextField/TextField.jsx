import './TextField.css'

export const TextField = () =>{
    return(
        <div className='TextField'>
            <form>
                <label className='label' htmlFor="input">Text:</label>
                <input className='input' id="input" type="text" placeholder='Text placeholder' />
            </form>
        </div>
    )
}