import './AppCard.css'
import { NavLink } from 'react-router-dom'

// Pintar la ficha con todos los props traídos de apps
export const AppCard = ({_id, appName, logoApp, appColor}) => {
    return (
        <div className='AppCard-container' key={_id}>
            < NavLink to={`/details/app-details/${_id}`} className='MovieCard-a'>
                <div className='AppCard'
                    style = {{ backgroundColor: `${ appColor }`}} >
                    <img className="AppCard-img" alt={`${appName}`} src={`${ logoApp }`} />
                </div>
            </ NavLink >

            <h4 className='AppCard-h4'>
                {appName}
            </h4>
        </div>
    )
}