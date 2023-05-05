import './ForYou.css'

import { Slider } from '../../components/home/Slider/Slider'
import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselApps } from '../../components/CarouselApps/CarouselApps'
import { useEffect, useState } from 'react'

export const ForYou = ( ) => {

  const [ content, setContent ] = useState([])
  const [ apps, setApps ] = useState([])

  useEffect ( () => {

    let controller = new AbortController()

    let options = {
      method: "get",
      signal : controller.signal,
      headers : {
        "Content-type" : "application/json"
      } 
    }

    // fetch de contenido para filtrar por serie, película y sus varios props, como category, suggested, watche, etc.
    fetch( 'http://localhost:4002/content', options )
    .then( res => res.json() )
    .then( data => setContent(data) )
    .catch( err => console.log(err) )
    .finally( () => controller.abort())
    
  }, [])

  useEffect ( () => {

    let controller = new AbortController()

    let options = {
      method: "get",
      signal : controller.signal,
      headers : {
          "Content-type" : "application/json"
      }
    }

    // fetch de contenido para filtrar apps varios props, como category, suggested, watched, etc.
    fetch( 'http://localhost:4002/apps', options )
    .then( res => res.json() )
    .then( data => setApps(data) )
    .catch( err => console.log(err) )
    .finally( () => controller.abort())
    
  }, [])

    return(
        <div className='ForYou'>
          < Slider />
          
          <h2 className='CloneTV-h2'>Top picks</h2>
            < CarouselMovies featured = "y" />
          
          {/* //Pintar las apps */}
          <h2 className='CloneTV-h2'>Your apps</h2>
            < CarouselApps apps = { apps } filter = "y" />

          {/* //Pintar las series y peliculas con watching */}
          <h2 className='CloneTV-h2'>Keep watching</h2>
            < CarouselMovies watching = "y" />

          {/* //Pintar las series y peliculas con watchlisted */}
          <h2 className='CloneTV-h2'>On your watchlist</h2>
            < CarouselMovies watchlisted = "y" />

          {/* //Pintar las series y peliculas con sugested */}
          <h2 className='CloneTV-h2'>Suggested</h2>
            < CarouselMovies suggested = "y" />
        </div>
    )
}