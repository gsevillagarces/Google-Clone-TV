import './CarouselMovies.css'
import { MovieCard } from '../home/main/MovieCard/MovieCard'
import { googleClone } from '../../bbdd'

const {main} = googleClone
const {movies} = main

export const CarouselMovies = () => {
    return(
        <div className='CarouselMovies-container'>
            <div className='CarouselMovies'>
                { movies.map( eachMovie => 
                    < MovieCard key = { eachMovie.id} {...eachMovie} />
                )}
            </div>
        </div>
    )
}