import './SearchSuggestions.css'

// Pintar la ficha con todos los props traídos de suggestions
export const SearchSuggestions = ({id, txt, image, alt, href }) => {
    return(
        <div className='SearchSuggestions-container'>
            <div className='SearchSuggestions'>
                <div className='SearchSuggestions-leftContent'>
                    <h4 className='SearchSuggestions-h4'>
                        {txt}
                    </h4>
                </div>
                <div className='SearchSuggestions-rightContent'>
                    <img
                        src={ image }
                        alt={ alt }
                        className="SearchSuggestions-img" />
                </div>
            </div>
        </div>
    )
}