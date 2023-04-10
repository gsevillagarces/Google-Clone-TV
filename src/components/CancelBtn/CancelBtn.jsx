import './CancelBtn.css'

export const CancelBtn = ({text}) => {
    return(
        <div className='CancelBtn'>
            <button className='CancelBtn-button' type="Button">
                <span className='Button-span'>
                    <img className='Button-span-img' src="/assets/icons/arrow_back.svg" />
                </span>
                { text }
            </button>
        </div>
    )
}