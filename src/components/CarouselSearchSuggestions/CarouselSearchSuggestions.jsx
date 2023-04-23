import './CarouselSearchSuggestions.css';
import { SearchSuggestions } from '../home/cards/SearchSuggestions/SearchSuggestions';
import { googleClone } from '../../bbdd'

const {content} = googleClone
const {searchSuggestions} = content

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