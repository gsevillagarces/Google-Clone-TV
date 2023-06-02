import './CarouselMoviesLG.css'
import { MovieCardLG } from '../home/cards/MovieCardLG/MovieCardLG'
import { useEffect, useState, useRef } from 'react'

export const CarouselMoviesLG = ({ type, category, featured }) => {

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
            < CarouselMoviesLGC content={content}
                                type        = {type}
                                category    = {category}
                                featured    = {featured} />
        </div>
    )
}

const CarouselMoviesLGC = ({ content, category, type, featured }) => {

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
        
        // Filtrar si tiene o no featured
        const filteredByFeatured = featured
        ? filteredContent.filter((eachCard) => eachCard.featured === featured)
        : filteredContent;

        setFiltrar(filteredByFeatured);
        }, [content, type, category, featured])

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

    // Devolver el componente MovieCardLG con los datos ya filtrados
    return (
        <div className='CarouselMoviesLG-container'>
            <div className='CarouselMoviesLG'
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
                    < MovieCardLG key={eachCard._id} {...eachCard} />
                )}
            </div>
        </div>
    )
}