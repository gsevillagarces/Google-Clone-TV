import { CarouselApps } from '../../components/CarouselApps/CarouselApps'
import { CarouselAppsLG } from '../../components/CarouselAppsLG/CarouselAppsLG'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import './Apps.css'

export const Apps = () => {
    return(
        <div className='Apps'>
            < CarouselAppsLG />
            <h2 className='CloneTV-h2'>Your apps</h2>
            < CarouselApps />
            < SearchBar />
        </div>
    )
}