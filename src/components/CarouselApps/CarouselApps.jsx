import './CarouselApps.css'
import { AppCard } from '../home/cards/AppCard/AppCard'
import { googleClone } from '../../bbdd'

const {main} = googleClone
const {apps} = main

export const CarouselApps = () => {
    return(
        <div className='CarouselApps-container'>
            <div className='CarouselApps'>
                { apps.map( eachApp => 
                    < AppCard key = { eachApp.id} {...eachApp} />
                )}
            </div>
        </div>
    )
}