import './Shows.css'

import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselMoviesLG } from '../../components/CarouselMoviesLG/CarouselMoviesLG'

export const Shows = ( ) => {
    
    return(
        <div className='Shows'>
            < CarouselMoviesLG  type="serie" featured="y" />
            <h2 className='CloneTV-h2'>Popular shows</h2>
            < CarouselMovies type="serie" />
            <h2 className='CloneTV-h2'>Dramas</h2>
            < CarouselMovies type="serie" category="Drama" />
            <h2 className='CloneTV-h2'>Sci-Fi series</h2>
            < CarouselMovies type="serie" category="Sci-Fi" />
        </div>
    )
}