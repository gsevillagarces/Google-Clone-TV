import './CarouselAppsLG.css'
import { AppCardLG } from '../home/main/AppCardLG/AppCardLG'
import { googleClone } from '../../bbdd'

const {main} = googleClone
const {apps} = main

export const CarouselAppsLG = () => {
    return(
        <div className='CarouselAppsLG-container'>
            <div className='CarouselAppsLG'>
                { apps.map( eachApp =>
                    < AppCardLG key = {eachApp.id} {...eachApp} />    
                )}
            </div>
        </div>
    )
}