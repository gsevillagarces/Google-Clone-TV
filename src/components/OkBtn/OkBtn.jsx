import './OkBtn.css'

export const OkBtn = () => {
    return(
        <div className='OkBtn'>
            <button className='OkBtn-button' type="Button">Click Me!
                <span className='Button-span'>
                    <img className='Button-span-img' src="/assets/icons/arrow_forward.svg" alt="" />
                </span>
            </button>
        </div>
    )
}