import './CancelBtn.css'

export const CancelBtn = () => {
    return(
        <div className='CancelBtn'>
            <button className='CancelBtn-button' type="Button">
                <span className='Button-span'>
                    <img className='Button-span-img' src="/assets/icons/arrow_back.svg" alt="" />
                </span>Click Me!
            </button>
        </div>
    )
}