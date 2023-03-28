import './MovieCard.css'

export const MovieCard = ({id, provider, alt, logoProvider, bgSlide, bgSmall, title, summary, btnText, rating, href}) => {
    return (
        <div className='MovieCard-container' key={id}>
            <div className='MovieCard'
                 style = {{ backgroundImage: `url(${ bgSmall })`}} >
            </div>
            <h4 className='MovieCard-h4'>
                {provider}
            </h4>
            <h3 className='MovieCard-h3'>
                {title} <span className='MovieCard-h3-rating'>{rating}</span>
            </h3>
        </div>
    )
}