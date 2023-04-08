import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselMoviesLG } from '../../components/CarouselMoviesLG/CarouselMoviesLG'
import './Movies.css'

export const Movies = () => {
    return(
        <div className='Movies'>
            < CarouselMoviesLG />
            <h2 className='CloneTV-h2'>Popular movies</h2>
            < CarouselMovies />
            <h2 className='CloneTV-h2'>Dramas</h2>
            < CarouselMovies />
            <h2 className='CloneTV-h2'>Comedy</h2>
            < CarouselMovies />
        </div>
    )
}