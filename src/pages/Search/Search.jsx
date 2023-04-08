import { CarouselMovies } from '../../components/CarouselMovies/CarouselMovies'
import { CarouselSearchSuggestions } from '../../components/CarouselSearchSuggestions/CarouselSearchSuggestions'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import './Search.css'

export const Search = () => {
    return(
        <div className='Search'>
            < SearchBar />
            <h2 className='CloneTV-h2'>Try saying</h2>
            < CarouselSearchSuggestions />
            <h2 className='CloneTV-h2'>Let's find something to watch</h2>
            < CarouselMovies />
        </div>
    )
}