import './CarouselAppsLG.css'
import { AppCardLG } from '../home/cards/AppCardLG/AppCardLG'
import { useEffect, useState } from 'react'

export const CarouselAppsLG = ( { apps, filter } ) => {

    const [ filtrar, setFiltrar ] = useState( [] )

    // randomizar el orden de las apps en el carousel
    useEffect (() => {
        const filterType = apps.filter (eachApp => eachApp.featured === filter).sort(() => Math.random() - 0.5)
        setFiltrar(filterType)
    }, [apps] )

    return(
        <div className='CarouselAppsLG-container'>
            <div className='CarouselAppsLG'>
                { filtrar && filtrar.map( eachApp =>
                    < AppCardLG key = {eachApp._id} {...eachApp} />    
                )}
            </div>
        </div>
    )
}