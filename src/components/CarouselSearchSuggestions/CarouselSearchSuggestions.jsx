import './CarouselSearchSuggestions.css';
import { SearchSuggestions } from '../home/main/SearchSuggestions/SearchSuggestions';
import { googleClone } from '../../bbdd'

const {main} = googleClone
const {searchSuggestions} = main

export const CarouselSearchSuggestions = () => {
    return(
        <div className='CarouselSearchSuggestions-container'>
            <div className='CarouselSearchSuggestions'>
                { searchSuggestions.map( eachSearchSuggestion =>
                    < SearchSuggestions key = { eachSearchSuggestion.id} {...eachSearchSuggestion} />
                )}
            </div>
        </div>
    )
}