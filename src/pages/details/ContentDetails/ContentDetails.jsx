import './ContentDetails.css'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { CancelBtn } from '../../../components/CancelBtn/CancelBtn'

export const ContentDetails = () => {

        const { movie } = useParams()
        const [ movies, setMovies ] = useState([])
        const [ isWatchlisted, setIsWatchlisted] = useState(false)
        const [ isWatched, setIsWatched] = useState(false)
      
        useEffect(() => {

            let controller = new AbortController()
            let options = {
                method : 'get' ,
                signal : controller.signal,
                headers: {
                    "Content-type" : "application/json"
                }
            }
            
            fetch(`http://localhost:4002/content/${movie}`, options)
                .then((res) => res.json())
                .then((data) => {
                  setMovies(data[0])
                  setIsWatchlisted(data[0].watchlisted === "y")
                  setIsWatched(data[0].watched === "y")
                })
                .catch((err) => console.log(err))
      
          return () => {
            controller.abort()
          }
        }, [movie])

        const handleToggleWatchlisted = () => {
            setIsWatchlisted(!isWatchlisted)
        }

        const handleToggleWatched = () => {
            setIsWatched(!isWatched)
        }

    return(
        <div className='ContentDetails'
              style={{backgroundImage: `url(${movies.bgSlide})`}}  >
            
            <div className="ContentDetails-container">
                <h1 className='ContentDetails-h1'> {movies.title} </h1>
                <div className='ContentDetails-rating'>
                    <h4 className='ContentDetails-h4 ContentDetails-Rating'     > {movies.rating}</h4>
                    <h4 className='ContentDetails-h4 ContentDetails-Restriction'> <span> {movies.restriction} </span> </h4>
                    <h4 className='ContentDetails-h4 ContentDetails-Category'   > {movies.category} </h4>
                    <h4 className='ContentDetails-h4 ContentDetails-Years'      > {movies.years} </h4>
                </div>

                <div className='ContentDetails-description'>
                    <p className='ContentDetails-description-p'>
                        {movies.summary}
                    </p>
                </div>
                
                <div className='ContentDetails-buttons'>
                    < NavLink to={`/app/${movies.provider}`} className='ContentDetails-a'>
                    <button className='ContentDetails-buton'>
                        <span> 
                            <img className='Button-span-img Button-span-provider' src={`${movies.logoProvider}`} alt="Provider" />
                        </span>
                    </button>
                    </ NavLink >
                    {movies.seasons && (
                    <button className='ContentDetails-buton seasons-button'>
                        {movies.seasons} seasons
                    </button>
                    )}
                    <button className={`ContentDetails-buton watchlisted-button ${ isWatchlisted ? 'active' : '' }`} onClick={handleToggleWatchlisted}>
                        <span className='Inverted-icon'> 
                            <img className='Button-span-img' src="/assets/icons/bookmark_border.svg" alt="Watchlisted" />
                        </span> Watchlisted
                    </button>
                    <button className={`ContentDetails-buton watched-button ${ isWatched ? 'active' : '' }`} onClick={handleToggleWatched}>
                        <span className='Inverted-icon'>
                            <img className='Button-span-img' src="/assets/icons/radio_button_uncheck.svg" alt="Watched" />
                        </span> Watched
                    </button>
                    <button className='ContentDetails-buton thumbs-button'>
                        <span className='Inverted-icon'>
                            <img className='Button-span-img' src="/assets/icons/thumbs_up_down.svg" alt="Thumbs" />
                        </span>
                    </button>
                </div>
                
                <div className='ContentDetails-footer'>
                    < CancelBtn />
                </div>
            </div>
        </div>
    )
}