import './AppCardLG.css'
import { NavLink } from 'react-router-dom'

export const AppCardLG = ({_id, appName, logoApp, appColor, type, href}) => {
    return (
        <div className='AppCardLG-container' key={_id}>
            < NavLink to={`/details/app-details/${_id}`} className='MovieCard-a'>
                <div className='AppCardLG'
                     style = {{ backgroundColor: `${ appColor }`}} >
                    <img className="AppCardLG-img" alt={`${appName}`} src={`${ logoApp }`} />
                </div>
            </ NavLink >
        </div>
    )
}