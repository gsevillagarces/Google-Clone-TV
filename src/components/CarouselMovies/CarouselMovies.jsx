import './CarouselMovies.css'
import { MovieCard } from '../home/cards/MovieCard/MovieCard'
import { useEffect, useState, useRef } from 'react'

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

    // devolver contenido de acuerdo a varios filtros
    return (
        <div className='ShowsCarousel'>
            < CarouselMoviesC content     ={content}
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

    // Constantes para poder arrastrar el carousel y no solo hacer scroll
    const carouselRef = useRef(null)
    const [dragging, setDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

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
        : filteredByWatchlisted

        // Filtrar si tiene o no suggested
        const filteredBySuggested = suggested
        ? filteredByWatched.filter((eachCard) => eachCard.suggested === suggested)
        : filteredByWatched

        // Filtrar si tiene o no watching
        const filteredByWatching = watching
        ? filteredBySuggested.filter((eachCard) => eachCard.watching === watching)
        : filteredBySuggested

        // Filtrar si tiene o no featured
        const filteredByFeatured = featured
        ? filteredByWatching.filter((eachCard) => eachCard.featured === featured)
        : filteredByWatching

        setFiltrar(filteredByFeatured)
        }, [content, type, category, watchlisted, featured, watched, suggested, watching, watching])

        const handleMouseDown = (e) => {
          setDragging(true)
          setStartX(e.pageX - carouselRef.current.offsetLeft)
          setScrollLeft(carouselRef.current.scrollLeft)
        }
    
        const handleMouseMove = (e) => {
            if (!dragging) return
            e.preventDefault()
            const x = e.pageX - carouselRef.current.offsetLeft
            const walk = (x - startX) * 2 // Adjust the scroll speed by multiplying a factor
            carouselRef.current.scrollLeft = scrollLeft - walk
        }
        
        const handleMouseUp = () => {
            setDragging(false)
        }
        
        const handleMouseLeave = () => {
            setDragging(false)
        }

    // Devolver el componente MovieCard con los datos ya filtrados
    return (
        <div className='CarouselMovies-container'>
            <div
                className    = 'CarouselMovies'
                ref          = {carouselRef}
                onMouseDown  = {handleMouseDown}
                onMouseMove  = {handleMouseMove}
                onMouseUp    = {handleMouseUp}
                onMouseLeave = {handleMouseLeave}
                onTouchStart = {handleMouseDown}
                onTouchMove  = {handleMouseMove}
                onTouchEnd   = {handleMouseUp}
            >
                {filtrar && filtrar.map(eachCard =>
                    < MovieCard key={eachCard._id} {...eachCard} />
                )}
            </div>
        </div>
    )
}