import './Library.css'
import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'

export const Library = () => {
    return(
        <div className='Library'>

            {/* Elelemtos fijos, que son parte de la estructura de la app */}
            <h2 className='CloneTV-h2'>Movies & shows</h2>
            <div className='Library-Manage'>
                <div className='Library-Manage-container'>
                    <div className='Library-Manage-left'>
                        <h2 className='Library-Manage-h2'>
                            Manage purchases and rentals
                        </h2>
                        <h3 className='Library-Manage-h3'>
                            Content rented or purchased on Clone TV will be available here
                        </h3>
                    </div>
                    <div className='Library-Manage-right'>
                        <img className='Library-Manage-img' src="/assets/imgs/manageMovies.svg" alt="Manage movies and apps" />
                    </div>
                </div>
            </div>

            <h2 className='CloneTV-h2'>On your watchlist</h2>

            {/* Pintar el contenido de Watchlisted */}
            < CarouselMovies watchlisted="y" />

            {/* Elelemtos fijos, que son parte de la estructura de la app */}
            <div className='Library-Disclaimer'>
                <div className='Library-Disclaimer-container'>
                    <h3 className='Library-Disclaimer-h3'>
                        Rotten Tomatoes scores are not verified
                    </h3>
                </div>
            </div>
        </div>
    )
}