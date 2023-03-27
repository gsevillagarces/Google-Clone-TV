import './Carousel.css'
import { AppCard } from '../home/main/appCard/AppCard'
import { googleClone } from '../../bbdd'

const {main} = googleClone
const {apps} = main

// const openApp = () => {
//     console.log("Listo para abrir app...")
// }

export const Carousel = () => {
    return(
        <div className='Carousel'>
            { apps.map( eachApp => 
                < AppCard key = { eachApp.id} {...eachApp} />
            )}
        </div>
    )
}