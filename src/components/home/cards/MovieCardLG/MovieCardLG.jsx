import './MovieCardLG.css'
import { NavLink } from 'react-router-dom'

// Pintar la ficha con todos los props traídos de contenido, películas
export const MovieCardLG = ({_id, type, provider, alt, logoProvider, bgSlide, bgSmall, title, summary, btnText, rating, restriction, category, years, watchlisted, watched, featured, href}) => {
    return(
        <div className='MovieCardLG-container'>
            < NavLink to={`/details/content-details/${_id}`} className='MovieCard-a'>
                <div className='MovieCardLG'
                style = {{ backgroundImage: `url(${ bgSmall })`}} >
                    <div className='MovieCardLG-info'>
                        <img className='MovieCardLG-info-provider'
                            src={`${logoProvider}`}
                            alt={`${alt}`} />
                        <div className='MovieCardLG-movie-title'>
                            <h3 className='MovieCardLG-h3'>
                                {title}
                            </h3>
                            <h4 className='MovieCardLG-h4'>
                                {summary}
                            </h4>
                        </div>
                    </div>
                </div>
            </ NavLink >
        </div>
    )
}