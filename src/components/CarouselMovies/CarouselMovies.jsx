import './CarouselMovies.css'
import { MovieCard } from '../home/cards/MovieCard/MovieCard'
import { googleClone } from '../../bbdd'

const {content} = googleClone
const {movies} = content

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