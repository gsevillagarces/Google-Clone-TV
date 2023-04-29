import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselMoviesLG } from '../../components/CarouselMoviesLG/CarouselMoviesLG'
import './Movies.css'

export const Movies = () => {
    return(
        <div className='Movies'>
            < CarouselMoviesLG type="movie" featured="y" />
            <h2 className='CloneTV-h2'>Popular movies</h2>
            < CarouselMovies type="movie" />
            <h2 className='CloneTV-h2'>Dramas</h2>
            < CarouselMovies type="movie" />
            <h2 className='CloneTV-h2'>Comedy</h2>
            < CarouselMovies type="movie" />
        </div>
    )
}