import './Recommended.css'
import { googleClone } from '../../../../bbdd'

const { main } = googleClone
const { recommended } = main

const blurBackground = () => {
    console.log("blur")
}

export const Recommended = () => {
    return( 
        <div className='Recommended'>
            <h3 className='Recommended-h3'>Recommended</h3>
            <div className='Recommended-cards'>
                {recommended.map(eachRecommended =>               
                    <div className='Recommended-cards-movie' key={eachRecommended.id}
                         onMouseOver={blurBackground}
                         style={{ backgroundImage: `url(${ eachRecommended.movieBg })`  }}>
                    </div>
                )}
            </div>
        </div>
    )
}