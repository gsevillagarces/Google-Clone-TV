import './AppCard.css'
import { NavLink } from 'react-router-dom'

export const AppCard = ({_id, appName, logoApp, appColor, href}) => {
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