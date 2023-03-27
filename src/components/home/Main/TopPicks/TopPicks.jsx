import './TopPicks.css'
import { googleClone } from '../../../../bbdd'

const { main } = googleClone
const { topPicks } = main

const blurBackground = () => {
    console.log("blur")
}

export const TopPicks = () => {
    return( 
        <div className='TopPicks'>
            <h3 className='TopPicks-h3'>Top picks for you</h3>
            <div className='TopPicks-cards'>
                {topPicks.map(eachTopPick =>               
                    <div className='TopPicks-cards-movie' key={eachTopPick.id}
                         onMouseOver={blurBackground}
                         style={{ backgroundImage: `url(${ eachTopPick.movieBg })`  }}>
                    </div>
                )}
            </div>
        </div>
    )
}


// import './TopPicks.css'
// import { Movie } from '../../../cards/Movies/Movie'
// import { googleClone } from '../../../../bbdd'

// const { main } = googleClone
// const { topPicks } = main

// const blurBackground = () => {
//     console.log("blur")
// }

// export const TopPicks = () => {
//     return( 
//         <div className='TopPicks'>
//             <h3 className='TopPicks-h3'>Top picks</h3>
//             < Movie />
//         </div>
//     )
// }