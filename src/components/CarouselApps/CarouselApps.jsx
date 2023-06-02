import './CarouselApps.css'
import { AppCard } from '../home/cards/AppCard/AppCard'
import { useEffect, useState, useRef } from 'react'

export const CarouselApps = ({ apps, filter }) => {
    
    const [ filtrar, setFiltrar ] = useState( [] )

    // Constantes para poder arrastrar el carousel y no solo hacer scroll
    const carouselRef = useRef(null)
    const [dragging, setDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    // Solo traer las apps instaladas
    useEffect (() => {
        const filterType = apps.filter (eachApp => eachApp.installed === filter)
        setFiltrar(filterType)
    }, [apps] )

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

    return(
        <div className='CarouselApps-container'>
            <div
                className    = 'CarouselApps'
                ref          = {carouselRef}
                onMouseDown  = {handleMouseDown}
                onMouseMove  = {handleMouseMove}
                onMouseUp    = {handleMouseUp}
                onMouseLeave = {handleMouseLeave}
                onTouchStart = {handleMouseDown}
                onTouchMove  = {handleMouseMove}
                onTouchEnd   = {handleMouseUp}
            >
                { filtrar && filtrar.map( eachApp =>
                    < AppCard key = { eachApp._id} {...eachApp} />
                )}
            </div>
        </div>
    )
}