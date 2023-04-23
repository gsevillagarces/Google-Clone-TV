import './ForYou.css'

import { Slider } from '../../components/home/Slider/Slider'
import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselApps } from '../../components/CarouselApps/CarouselApps'
import { useEffect, useState } from 'react'

export const ForYou = ( filter ) => {

  const [ apps, setApps ] = useState([])

  useEffect ( () => {

      let controller = new AbortController()
      console.log( controller )

      let options = {
          method: "get",
          signal : controller.signal,
          headers : {
              "Content-type" : "application/json"
          } 
      }

      fetch( 'http://localhost:4002/apps', options )
      .then( res => res.json() )
      .then( data => setApps(data) )
      .catch( err => setApps(err) )
      .finally( () => controller.abort() )

      console.log(apps)
      
  }, [])

    return(
        <div className='ForYou'>
          < Slider />
          <h2 className='CloneTV-h2'>Top picks</h2>
            < CarouselMovies />
          <h2 className='CloneTV-h2'>Your apps</h2>
            < CarouselApps apps = { apps } filter = "y" />
          <h2 className='CloneTV-h2'>Keep watching</h2>
            < CarouselMovies />
          <h2 className='CloneTV-h2'>On your watchlist</h2>
            < CarouselMovies />
          <h2 className='CloneTV-h2'>Suggested</h2>
            < CarouselMovies />
        </div>
    )
}