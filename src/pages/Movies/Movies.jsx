import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselMoviesLG } from '../../components/CarouselMoviesLG/CarouselMoviesLG'
import './Movies.css'

export const Movies = () => {
    return(
        <div className='Movies'>
            < CarouselMoviesLG type="movie" featured="y" />
            
            {/* Pintar las películas más populares */}
            <h2 className='CloneTV-h2'>Popular movies</h2>
            < CarouselMovies type="movie" suggested="y"/>

            {/* Pintar las películas de Drama */}
            <h2 className='CloneTV-h2'>Dramas</h2>
            < CarouselMovies type="movie" category="Drama" />

            {/* Pintar las películas de Comedia */}
            <h2 className='CloneTV-h2'>Comedy</h2>
            < CarouselMovies type="movie" category="Comedy" />
        </div>
    )
}