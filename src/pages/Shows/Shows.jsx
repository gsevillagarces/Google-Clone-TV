import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselMoviesLG } from '../../components/CarouselMoviesLG/CarouselMoviesLG'
import './Shows.css'

export const Shows = () => {
    return(
        <div className='Shows'>
            < CarouselMoviesLG />
            <h2 className='CloneTV-h2'>Popular shows</h2>
            < CarouselMovies />
            <h2 className='CloneTV-h2'>Mistery</h2>
            < CarouselMovies />
            <h2 className='CloneTV-h2'>Thriller</h2>
            < CarouselMovies />
        </div>
    )
}