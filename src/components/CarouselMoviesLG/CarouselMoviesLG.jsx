import './CarouselMoviesLG.css'
import { MovieCardLG } from '../home/main/MovieCardLG/MovieCardLG'
import { googleClone } from '../../bbdd'

const {main} = googleClone
const {movies} = main

export const CarouselMoviesLG = () => {
    return(
        <div className='CarouselMoviesLG-container'>
            <div className='CarouselMoviesLG'>
                { movies.map( eachMovie => 
                    < MovieCardLG key = { eachMovie.id} {...eachMovie} />
                )}
            </div>
        </div>
    )
}