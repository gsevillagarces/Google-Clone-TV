import './Slider.css'
import { useState } from 'react'
import { googleClone } from '../../../bbdd'

const {main}   = googleClone
const {movies} = main



export const Slider = () => {

    const contador = useState(0)

    return(
        <div className='Slider-container'>
            <div className='Slider'>
                <div className='Slides-container'>
                    {movies.slice(0,3).map( eachMovie =>
                    <div className='Slide'
                         key={eachMovie.id}
                         style = {{ backgroundImage: `url(${ eachMovie.bgSlide })`,
                                    transform: `translateX(-${ 0 * 100}%)`}}
                    >
                    </div>
                    )}
                </div>
                <div className="Slide-content">
                    <div className='Slider-left'>
                    {movies.slice(0,3).map( eachMovie =>
                        <div className="Slider-info Slider-link"
                             key={eachMovie.id}>
                            <img className='Slider-img-provider'
                                 src={`${eachMovie.logoProvider}`}
                                 alt={`${eachMovie.alt}`} />
                            <h1 className='Slider-h1'>{eachMovie.title}</h1>
                            <span className='Slider-meta'>
                                <h2 className='Slider-h2'>{eachMovie.provider}</h2>
                                <span className='Slider-meta-divider'></span>
                                <h2 className='Slider-p'>{eachMovie.summary}</h2>
                            </span>
                            <button className='Slider-button'>
                                Play on {eachMovie.provider}
                            </button>
                        </div>
                    )}
                    </div>

                    <div className="Slider-right">
                        <div className='Slider-indicators'>
                            <div className={`${ contador === 0 ? 'Slider-indicators--ellipse' : 'Slider-indicators--ellipse active' }`}></div>
                            <div className='Slider-indicators--ellipse'></div>
                            <div className='Slider-indicators--ellipse'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}