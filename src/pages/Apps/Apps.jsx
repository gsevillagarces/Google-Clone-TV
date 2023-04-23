import './Apps.css'

import { useEffect, useState } from 'react'
import { CarouselApps } from '../../components/CarouselApps/CarouselApps'
import { CarouselAppsLG } from '../../components/CarouselAppsLG/CarouselAppsLG'
import { SearchBar } from '../../components/SearchBar/SearchBar'

export const Apps = () => {

    const [ apps, setApps ] = useState([])

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

        fetch( 'http://localhost:4002/apps', options )
        .then( res => res.json() )
        .then( data => setApps(data) )
        .catch( err => console.log(err) )
        .finally( () => controller.abort() )
        
    }, [])

    return(
        <div className='Apps'>
            < CarouselAppsLG apps = { apps } filter = "y" />
            <h2 className='CloneTV-h2'>Your apps</h2>
            < CarouselApps apps = { apps } filter = "y" />
            < SearchBar />
        </div>
    )
}