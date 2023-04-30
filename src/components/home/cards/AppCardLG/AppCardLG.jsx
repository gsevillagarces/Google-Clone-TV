import './AppCardLG.css'
import { NavLink } from 'react-router-dom'

// Pintar la ficha con todos los props traídos de apps
export const AppCardLG = ({_id, appName, logoApp, appColor}) => {
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