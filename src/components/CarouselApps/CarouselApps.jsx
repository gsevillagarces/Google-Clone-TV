import './CarouselApps.css'
import { AppCard } from '../home/cards/AppCard/AppCard'
import { useEffect, useState } from 'react'
// import { googleClone } from '../../bbdd'

// const {content} = googleClone
// const {apps} = content

export const CarouselApps = ({ apps, filter }) => {
    
    const [ filtrar, setFiltrar ] = useState( [] )

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