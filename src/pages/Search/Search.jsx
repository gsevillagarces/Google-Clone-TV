import './Search.css'
import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselSearchSuggestions } from '../../components/CarouselSearchSuggestions/CarouselSearchSuggestions'
import { SearchBar } from '../../components/SearchBar/SearchBar'

export const Search = () => {
    return(
        <div className='Search'>
            < SearchBar />
            <h2 className='CloneTV-h2'>Try saying</h2>

            {/* Carousel de sugerencias de búsqueda con sus respectivos textos e imgs */}
            < CarouselSearchSuggestions />

            {/* Películas y series sugeridas */}
            <h2 className='CloneTV-h2'>Let's find something to watch</h2>
            < CarouselMovies suggested="y" />
        </div>
    )
}