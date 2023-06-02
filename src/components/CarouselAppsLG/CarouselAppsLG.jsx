import './CarouselAppsLG.css'
import { AppCardLG } from '../home/cards/AppCardLG/AppCardLG'
import { useEffect, useState, useRef } from 'react'

export const CarouselAppsLG = ( { apps, filter } ) => {

    const [ filtrar, setFiltrar ] = useState( [] )

    // Constantes para poder arrastrar el carousel y no solo hacer scroll
    const carouselRef = useRef(null)
    const [dragging, setDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    // randomizar el orden de las apps en el carousel
    useEffect (() => {
        const filterType = apps.filter (eachApp => eachApp.featured === filter).sort(() => Math.random() - 0.5)
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
        <div className='CarouselAppsLG-container'>
            <div
                className    = 'CarouselAppsLG'
                ref          =  {carouselRef}
                onMouseDown  =  {handleMouseDown}
                onMouseMove  =  {handleMouseMove}
                onMouseUp    =  {handleMouseUp}
                onMouseLeave =  {handleMouseLeave}
                onTouchStart =  {handleMouseDown}
                onTouchMove  =  {handleMouseMove}
                onTouchEnd   =  {handleMouseUp}
            >
                { filtrar && filtrar.map( eachApp =>
                    < AppCardLG key = {eachApp._id} {...eachApp} />    
                )}
            </div>
        </div>
    )
}