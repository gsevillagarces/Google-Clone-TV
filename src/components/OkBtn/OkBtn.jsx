import './OkBtn.css'

export const OkBtn = ({text}) => {
    return(
        <div className='OkBtn'>
            <button className='OkBtn-button' type="Button">
                { text }
                <span className='Button-span'>
                    <img className='Button-span-img-arrow' src="/assets/icons/arrow_forward.svg" alt="" />
                </span>
            </button>
        </div>
    )
}