import './CarouselApps.css'
import { AppCard } from '../home/cards/AppCard/AppCard'
import { useEffect, useState } from 'react'

export const CarouselApps = ({ apps, filter }) => {
    
    const [ filtrar, setFiltrar ] = useState( [] )

    // Solo traer las apps instaladas
    useEffect (() => {
        const filterType = apps.filter (eachApp => eachApp.installed === filter)
        setFiltrar(filterType)
    }, [apps] )
        
    return(
        <div className='CarouselApps-container'>
            <div className='CarouselApps'>
                { filtrar && filtrar.map( eachApp =>
                    < AppCard key = { eachApp._id} {...eachApp} />
                )}
            </div>
        </div>
    )
}