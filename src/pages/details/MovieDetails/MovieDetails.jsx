import './MovieDetails.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CancelBtn } from '../../../components/CancelBtn/CancelBtn'

export const MovieDetails = () => {

        const { _id } = useParams();
        const [movie, setMovie] = useState(null);
      
        useEffect(() => {
          fetch(`http://localhost:4002/content/${_id}`)
            .then((res) => res.json())
            .then((data) => setMovie(data))
            .catch((err) => console.log(err));
        }, [_id]);

    return(
        <div className='MovieDetails'>
            
            <div className="MovieDetails-container">
                <h1 className='MovieDetails-h1'> Undone </h1>
                <div className='MovieDetails-rating'>
                    <h4 className='MovieDetails-h4 MovieDetails-Rating'     > <span> 🍅 </span> 97% </h4>
                    <h4 className='MovieDetails-h4 MovieDetails-Restriction'> <span> 16 </span> </h4>
                    <h4 className='MovieDetails-h4 MovieDetails-Category'   > Comedy-drama series </h4>
                    <h4 className='MovieDetails-h4 MovieDetails-Years'      > 2019 - Present </h4>
                </div>

                <div className='MovieDetails-description'>
                    <p className='MovieDetails-description-p'>
                        After 28-year-old Alma nearly dies in a car accident, she finds that she has a new relationship with time. She develops this newfound relationship to find out the truth a…
                    </p>
                </div>
                
                <div className='MovieDetails-buttons'>
                    <button className='MovieDetails-buton'>
                        <span> 
                            <img className='Button-span-img Button-span-provider' src="/assets/providers/primevideo.svg" alt="Provider" />
                        </span>
                    </button>
                    <button className='MovieDetails-buton'>
                        <span className='Inverted-icon'> 
                            <img className='Button-span-img' src="/assets/icons/bookmark_border.svg" alt="Watchlisted" />
                        </span> Watchlisted
                    </button>
                    <button className='MovieDetails-buton'>
                        <span className='Inverted-icon'>
                            <img className='Button-span-img' src="/assets/icons/radio_button_uncheck.svg" alt="Watched" />
                        </span> Watched
                    </button>
                    <button className='MovieDetails-buton'>
                        <span className='Inverted-icon'>
                            <img className='Button-span-img' src="/assets/icons/thumbs_up_down.svg" alt="Thumbs" />
                        </span>
                    </button>
                </div>
                
                <div className='MovieDetails-footer'>
                    < CancelBtn />
                </div>
            </div>
        </div>
    )
}