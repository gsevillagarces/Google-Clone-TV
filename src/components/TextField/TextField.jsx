import './TextField.css'

export const TextField = ({label, placeholder, value}) =>{
    return(
        <div className='TextField'>
            <label className='label' htmlFor="input">{ label }</label>
            <input className='input' id="input" type="text" placeholder={placeholder} value={value} />
        </div>
    )
}