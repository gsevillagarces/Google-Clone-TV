import './ForYou.css'

import { Slider } from '../../components/home/Slider/Slider'
import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselApps } from '../../components/CarouselApps/CarouselApps'

export const ForYou = () => {
    return(
        <div className='ForYou'>
          < Slider />
          <h2 className='CloneTV-h2'>Top picks</h2>
            < CarouselMovies />
          <h2 className='CloneTV-h2'>Your apps</h2>
            < CarouselApps />
          <h2 className='CloneTV-h2'>Keep watching</h2>
            < CarouselMovies />
          <h2 className='CloneTV-h2'>On your watchlist</h2>
            < CarouselMovies />
          <h2 className='CloneTV-h2'>Suggested</h2>
            < CarouselMovies />
        </div>
    )
}