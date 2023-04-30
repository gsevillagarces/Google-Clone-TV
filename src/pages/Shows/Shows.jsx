import './Shows.css'

import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselMoviesLG } from '../../components/CarouselMoviesLG/CarouselMoviesLG'

export const Shows = ( ) => {
    
    return(
        <div className='Shows'>

            {/* Pintar el carousel de shows grandes, tipo serie y con el atributo featured */}
            < CarouselMoviesLG  type="serie" featured="y" />
            
            {/* Pintar los shows más populares */}
            <h2 className='CloneTV-h2'>Popular shows</h2>
            < CarouselMovies type="serie" suggested="y" />

            {/* Pintar los shows de Drama */}
            <h2 className='CloneTV-h2'>Dramas</h2>
            < CarouselMovies type="serie" category="Drama" />

            {/* Pintar los shows de Sci-Fi */}
            <h2 className='CloneTV-h2'>Sci-Fi series</h2>
            < CarouselMovies type="serie" category="Sci-Fi" />
        </div>
    )
}