import { NavLink } from 'react-router-dom'
import './MovieCardLG.css'

export const MovieCardLG = ({id, provider, alt, logoProvider, bgSlide, bgSmall, title, summary, btnText, rating, restriction, category, years, watchlisted, watched, href}) => {
    return(
        <div className='MovieCardLG-container'>
            < NavLink >
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