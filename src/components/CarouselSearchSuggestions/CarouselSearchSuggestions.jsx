import './CarouselSearchSuggestions.css';
import { SearchSuggestions } from '../home/cards/SearchSuggestions/SearchSuggestions'
import { useEffect, useState } from 'react'

export const CarouselSearchSuggestions = ( { filter, category } ) => {

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

        fetch( 'mongodb+srv://gsevillagarces:test123@cluster0.ty0etsd.mongodb.net/test/google-clone-tv/suggestions', options )
        .then( res => res.json() )
        .then( data => setContent(data) )
        .catch( err => console.log(err) )
        .finally( () => controller.abort() )
        
    }, [])

    return(
        <div className='ShowsCarousel'>
            < SearchSuggestionsC content = { content } category = { category } filter = { filter } />
        </div>
    )
}

const SearchSuggestionsC = ( { content , filter , category } ) => {

    const [ filtrar, setFiltrar ] = useState( [] )

    useEffect (() => {
        const filterType = content.filter (eachCard => eachCard[category] === filter)
        setFiltrar(filterType)
    }, [content] )

    return(
        <div className='CarouselSearchSuggestions-container'>
            <div className='CarouselSearchSuggestions'>
                { filtrar && filtrar.map( eachSearchSuggestion =>
                    < SearchSuggestions key = { eachSearchSuggestion._id} {...eachSearchSuggestion} />
                )}
            </div>
        </div>
    )
}