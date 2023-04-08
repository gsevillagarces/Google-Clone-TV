import './SearchBar.css'

export const SearchBar = () => {
    return(
        <div className='SearchBar'>
            
            <form id="form">
                <input type="search" className='SearchBar-input' placeholder='Search for apps and games...'>
                </input>
            </form>

        </div>
    )
}