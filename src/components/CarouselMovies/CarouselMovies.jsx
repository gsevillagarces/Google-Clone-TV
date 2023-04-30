import './CarouselMovies.css'
import { MovieCard } from '../home/cards/MovieCard/MovieCard'
import { useEffect, useState } from 'react'

export const CarouselMovies = ({ type, category, watchlisted, featured, watched, suggested, watching }) => {

    const [ content, setContent ] = useState([])

    useEffect(() => {

        let controller = new AbortController()

        let options = {
            method: "get",
            signal: controller.signal,
            headers: {
                "Content-type": "application/json"
            }
        }

        fetch('http://localhost:4002/content', options)
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())

    }, [])

    return (
        <div className='ShowsCarousel'>
            < CarouselMoviesC content={content}
                              type        = {type}
                              category    = {category}
                              watchlisted = {watchlisted}
                              featured    = {featured} 
                              watched     = {watched} 
                              suggested   = {suggested}
                              watching    = {watching}  />
        </div>
    )
}

const CarouselMoviesC = ({ content, category, type, watchlisted, featured, watched, suggested, watching }) => {

    const [ filtrar, setFiltrar ] = useState([])

    useEffect(() => {
        const filteredContent = content.filter((eachCard) => {
            // Filtrar por tipo. Película o serie
            if (type && eachCard.type !== type) {
            return false
            }

            // Filtrar por categoría de película o serie
            if (category && eachCard.category !== category) {
            return false
            }

            return true
        })
    
        // Filtrar si tiene o no watchlisted
        const filteredByWatchlisted = watchlisted
            ? filteredContent.filter((eachCard) => eachCard.watchlisted === watchlisted)
            : filteredContent
    
        // Filtrar si tiene o no watched
        const filteredByWatched = watched
        ? filteredByWatchlisted.filter((eachCard) => eachCard.watched === watched)
        : filteredByWatchlisted;

        // Filtrar si tiene o no suggested
        const filteredBySuggested = suggested
        ? filteredByWatched.filter((eachCard) => eachCard.suggested === suggested)
        : filteredByWatched;

        // Filtrar si tiene o no watching
        const filteredByWatching = watching
        ? filteredBySuggested.filter((eachCard) => eachCard.watching === watching)
        : filteredBySuggested;

        // Filtrar si tiene o no featured
        const filteredByFeatured = featured
        ? filteredByWatching.filter((eachCard) => eachCard.featured === featured)
        : filteredByWatching;

        setFiltrar(filteredByFeatured);
      }, [content, type, category, watchlisted, featured, watched, suggested, watching, watching])
      

    // Devolver el componente MovieCard con los datos ya filtrados
    return (
        <div className='CarouselMovies-container'>
            <div className='CarouselMovies'>
                {filtrar && filtrar.map(eachCard =>
                    < MovieCard key={eachCard._id} {...eachCard} />
                )}
            </div>
        </div>
    )
}