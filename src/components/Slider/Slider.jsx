import './Slider.css'
import { googleClone } from '../../bbdd'

const {main}   = googleClone
const {movies} = main

export const Slider = () => {
    return(
        <div className='Slider'>
            {movies.map ( eachMovie =>
                <div className='Slider-container' key={eachMovie.id}>
                    <div className='Slide'
                            style = {{ backgroundImage: `url(${ eachMovie.bgSlide })`}}>
                            <h1>Hola</h1>          
                    </div>
                </div>
            )}

                <div className="Slider-content">
                    <div className='Slider-left'>
                        <div className="Slider-info Slider-link">
                            <img className='Slider-img-provider'/>
                            <h1 className='Slider-h1'>h1</h1>
                            <span className='Slider-meta'>
                                <h2 className='Slider-h2'>Provider</h2>
                                <span className='Slider-meta-divider'></span>
                                <h2 className='Slider-p'>description</h2>
                            </span>
                            <button className='Slider-button'>
                                Play on
                            </button>
                        </div>
                    </div>

                    <div className="Slider-right">
                        <div className='Slider-indicators'>
                            <div className='Slider-indicators--ellipse'></div>
                            <div className='Slider-indicators--ellipse'></div>
                            <div className='Slider-indicators--ellipse'></div>
                        </div>
                    </div>
                </div>
                        
        </div>
    )
}