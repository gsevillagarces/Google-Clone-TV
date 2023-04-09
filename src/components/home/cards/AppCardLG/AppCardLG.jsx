import './AppCardLG.css'

export const AppCardLG = ({id, appName, logoApp, appColor, type, href}) => {
    return (
        <div className='AppCardLG-container' key={id}>
            <div className='AppCardLG'
                 style = {{ backgroundColor: `${ appColor }`}} >
                <img className="AppCardLG-img" alt={`${appName}`} src={`${ logoApp }`} />
            </div>
        </div>
    )
}