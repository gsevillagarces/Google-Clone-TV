import './Watchlisted.css'
import { googleClone } from '../../../../bbdd'

const { main } = googleClone
const { watchlisted } = main

const blurBackground = () => {
    console.log("blur")
}

export const Watchlisted = () => {
    return( 
        <div className='Watchlisted'>
            <h3 className='Watchlisted-h3'>Watchlisted</h3>
            <div className='Watchlisted-cards'>
                {watchlisted.map(eachWatchlisted =>               
                    <div className='Watchlisted-cards-movie' key={eachWatchlisted.id}
                         onMouseOver={blurBackground}
                         style={{ backgroundImage: `url(${ eachWatchlisted.movieBg })`  }}>
                    </div>
                )}
            </div>
        </div>
    )
}