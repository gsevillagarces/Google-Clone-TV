import { CancelBtn } from '../../../components/CancelBtn/CancelBtn'
import './SerieDetails.css'

export const SerieDetails = () => {
    return(
        <div className='SerieDetails'>
            <div className="SerieDetails-container">
                <h1 className='SerieDetails-h1'> Undone </h1>
                <div className='SerieDetails-rating'>
                    <h4 className='SerieDetails-h4 SerieDetails-Rating'     > <span> 🍅 </span> 97% </h4>
                    <h4 className='SerieDetails-h4 SerieDetails-Restriction'> <span> 16 </span> </h4>
                    <h4 className='SerieDetails-h4 SerieDetails-Category'   > Comedy-drama series </h4>
                    <h4 className='SerieDetails-h4 SerieDetails-Years'      > 2019 - Present </h4>
                </div>

                <div className='SerieDetails-description'>
                    <p className='SerieDetails-description-p'>
                        After 28-year-old Alma nearly dies in a car accident, she finds that she has a new relationship with time. She develops this newfound relationship to find out the truth a…
                    </p>
                </div>
                
                <div className='SerieDetails-buttons'>
                    <button className='SerieDetails-buton'>
                        <span> 
                            <img className='Button-span-img Button-span-provider' src="/assets/providers/primevideo.svg" alt="Provider" />
                        </span>
                    </button>
                    <button className='SerieDetails-buton'>
                        3 seasons
                    </button>
                    <button className='SerieDetails-buton'>
                        <span className='Inverted-icon'> 
                            <img className='Button-span-img' src="/assets/icons/bookmark_border.svg" alt="Watchlisted" />
                        </span> Watchlisted
                    </button>
                    <button className='SerieDetails-buton'>
                        <span className='Inverted-icon'>
                            <img className='Button-span-img' src="/assets/icons/radio_button_uncheck.svg" alt="Watched" />
                        </span> Watched
                    </button>
                    <button className='SerieDetails-buton'>
                        <span className='Inverted-icon'>
                            <img className='Button-span-img' src="/assets/icons/thumbs_up_down.svg" alt="Thumbs" />
                        </span>
                    </button>
                </div>
                
                <div className='SerieDetails-footer'>
                    < CancelBtn />
                </div>
            </div>
        </div>
    )
}