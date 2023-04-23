import './CarouselMovies.css'
import { MovieCard } from '../home/cards/MovieCard/MovieCard'
import { useEffect, useState } from 'react'
// import { googleClone } from '../../bbdd'

// const {content} = googleClone
// const {series} = content

export const CarouselMovies = ( { filter } ) => {

    const [ content , setContent ] = useState([])

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

        fetch( 'http://localhost:4002/content', options )
        .then( res => res.json() )
        .then( data => setContent(data) )
        .catch( err => console.log(err) )
        .finally( () => controller.abort() )
        
    }, [])

    return(
        <div className='ShowsCarousel'>
            < CarouselMoviesC content = { content } filter = { filter } />
        </div>
    )
}

const CarouselMoviesC = ( { content , filter } ) => {

    const [ filtrar, setFiltrar ] = useState( [] )

    useEffect (() => {
        const filterType = content.filter (eachCard => eachCard.category === filter)
        setFiltrar(filterType)
    }, [content] )

    return(
        <div className='CarouselMovies-container'>
            <div className='CarouselMovies'>
                { filtrar && filtrar.map( eachCard =>
                    < MovieCard key = { eachCard._id} {...eachCard} />
                )}
            </div>
        </div>
    )
}