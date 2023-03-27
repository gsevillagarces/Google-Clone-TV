import './AppCard.css'

export const AppCard = ({id, appName, logoApp, appColor, href}) => {
    return (
        <div className='AppCard-container' key={id}>
            <div className='AppCard'
                 style = {{ backgroundColor: `${ appColor }`}} >
                <img className= "{appName}" src={`${ logoApp }`} />
            </div>
            <h4 className='AppCard-h4'>
                {appName}
            </h4>
        </div>
    )
}