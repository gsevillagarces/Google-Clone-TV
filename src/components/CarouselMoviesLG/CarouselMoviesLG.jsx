import './CarouselMoviesLG.css'
import { MovieCardLG } from '../home/cards/MovieCardLG/MovieCardLG'
import { googleClone } from '../../bbdd'

const {content} = googleClone
const {series} = content

export const CarouselMoviesLG = () => {
    return(
        <div className='CarouselMoviesLG-container'>
            <div className='CarouselMoviesLG'>
                { series.map( eachMovie => 
                    < MovieCardLG key = { eachMovie.id} {...eachMovie} />
                )}
            </div>
        </div>
    )
}