import './Main.css'
import { googleClone } from '../../../bbdd'

const { main } = googleClone
const { slides } = main

export const Main = () => {
    return(
        <>
        {slides.map( eachSlide =>
        <div className='Main' style = {{ backgroundImage: `url(${ eachSlide.bg })`
        }}>
                <div key={ eachSlide.id}>
                    <div className="Main-left">
                        <h1 className='Main-h1'>{ eachSlide.h1 }</h1>
                        <h2 className='Main-h2'>{ eachSlide.h2 }</h2>
                    </div>
                </div>
        </div>
            )}
        </>

        // <div className='Main'>
        //     <div className="Main-left">
        //         <h1 className='Main-h1'>Mandalorian</h1>
        //         <h2 className='Main-h2'>
        //             <span className='Main-span'>Google TV Staff Pick</span>
        //             A lone gunfighter makes his way through the outer reaches of the galaxy.
        //         </h2>
        //         <p className='Main-p'>
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut alias quam nesciunt id doloremque laudantium, error voluptatum incidunt aliquid. Natus culpa dolorum provident error iusto quo, dolorem cumque perferendis?
        //         </p>
        //     </div>
        //     <div className="Main-right">
        //         <ul className='Main-indicators'>
        //             <li className='Main-indicators--ellipse'></li>
        //             <li className='Main-indicators--ellipse'></li>
        //             <li className='Main-indicators--ellipse'></li>
        //             <li className='Main-indicators--ellipse'></li>
        //             <li className='Main-indicators--ellipse'></li>
        //         </ul>
        //     </div>
        // </div>
    )
}