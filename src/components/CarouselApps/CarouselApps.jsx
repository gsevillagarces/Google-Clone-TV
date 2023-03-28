import './CarouselApps.css'
import { AppCard } from '../home/main/appCard/AppCard'
import { googleClone } from '../../bbdd'

const {main} = googleClone
const {apps} = main

// const openApp = () => {
//     console.log("Listo para abrir app...")
// }

export const CarouselApps = () => {
    return(
        <div className='CarouselApps-container'>
                <h2 className='CarouselApps-h2'>Your apps</h2>
            <div className='CarouselApps'>
                { apps.map( eachApp => 
                    < AppCard key = { eachApp.id} {...eachApp} />
                )}
            </div>
        </div>
    )
}