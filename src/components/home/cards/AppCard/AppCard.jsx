import './AppCard.css'

export const AppCard = ({id, appName, logoApp, appColor, href}) => {
    return (
        <div className='AppCard-container' key={id}>

            <a href={`${href}`}>
                <div className='AppCard'
                    style = {{ backgroundColor: `${ appColor }`}} >
                    <img className="AppCard-img" alt={`${appName}`} src={`${ logoApp }`} />
                </div>
            </a>
            <h4 className='AppCard-h4'>
                {appName}
            </h4>
        </div>
    )
}