import './CarouselAppsLG.css'
import { AppCardLG } from '../home/cards/AppCardLG/AppCardLG'
import { useEffect, useState } from 'react'
// import { googleClone } from '../../bbdd'

// const {main} = googleClone
// const {apps} = main

export const CarouselAppsLG = ( { apps, filter } ) => {

    const [ filtrar, setFiltrar ] = useState( [] )

    useEffect (() => {
        const filterType = apps.filter (eachApp => eachApp.type === filter)
        setFiltrar(filterType)
    }, [apps] )

    return(
        <div className='CarouselAppsLG-container'>
            <div className='CarouselAppsLG'>
                { filtrar && filtrar.map( eachApp =>
                    < AppCardLG key = {eachApp.id} {...eachApp} />    
                )}
            </div>
        </div>
    )
}