import './SearchSuggestions.css'

export const SearchSuggestions = () => {
    return(
        <div className='SearchSuggestions'>
            <div className='SearchSuggestions-leftContent'>
                <h4 className='SearchSuggestions-h4'>Show me movies by Spike Lee</h4>
            </div>
            <div className='SearchSuggestions-rightContent'>
                <img src="assets/icons/add.svg" alt="Search suggestions image" />
            </div>

        </div>
    )
}