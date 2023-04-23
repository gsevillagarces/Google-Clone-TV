import './CarouselMoviesLG.css'
import { MovieCardLG } from '../home/cards/MovieCardLG/MovieCardLG'
import { useEffect, useState } from 'react'
// import { googleClone } from '../../bbdd'

// const {content} = googleClone
// const {series} = content

export const CarouselMoviesLG = ( { filter, category } ) => {

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
            < CarouselMoviesLGC content = { content } category = { category } filter = { filter } />
        </div>
    )
}

const CarouselMoviesLGC = ( { content , filter , category } ) => {

    const [ filtrar, setFiltrar ] = useState( [] )

    useEffect (() => {
        const filterType = content.filter (eachCard => eachCard[category] === filter)
        setFiltrar(filterType)
    }, [content] )

    return(
        <div className='CarouselMoviesLG-container'>
            <div className='CarouselMoviesLG'>
                { filtrar && filtrar.map( eachCard =>
                    < MovieCardLG key = { eachCard._id} {...eachCard} />
                )}
            </div>
        </div>
    )
}