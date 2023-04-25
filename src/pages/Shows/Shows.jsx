import './Shows.css'

import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselMoviesLG } from '../../components/CarouselMoviesLG/CarouselMoviesLG'

export const Shows = ( ) => {
    
    return(
        <div className='Shows'>
            < CarouselMoviesLG category = "category" filter = "Comedy-drama series" />
            <h2 className='CloneTV-h2'>Popular shows</h2>
            < CarouselMovies filter = "Drama" />
            <h2 className='CloneTV-h2'>Mistery</h2>
            < CarouselMovies filter = "Sci-Fi" />
            <h2 className='CloneTV-h2'>Thriller</h2>
            < CarouselMovies filter = "Serie" />
        </div>
    )
}