import './Slider.css'
import { useEffect, useState } from 'react'
import { googleClone } from '../../../bbdd'

const {main}   = googleClone
const {movies} = main



export const Slider = () => {

    const [ activeSlide, setActiveSlide ] = useState(0)

    const updateSlide = (newIndex) => {
        if ( newIndex < 0 ) {
            newIndex = movies.length - 1;
        } else if ( newIndex > 2 ) {
            newIndex = 0;
        }

        setActiveSlide(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateSlide(activeSlide + 1)
        }, 6000)

        return () => clearInterval(interval)
    })



    return(
        <div className='Slider-container'>
            <div className='Slider'>
                <div className='Slides-container'>
                    {movies.slice(0,3).map( eachMovie =>
                    <div className='Slide'
                         key={eachMovie.id}
                         style = {{ backgroundImage: `url(${ eachMovie.bgSlide })`,
                                    opacity: `${ activeSlide === eachMovie.id ? '1' : '0' }`,
                                    scale: `${ activeSlide === eachMovie.id ? '1.1' : '1' }`,
                                }}
                    >
                    </div>
                    )}
                </div>
                <div className="Slide-content">
                    <div className='Slider-left'>
                    {movies.slice(0,3).map( eachMovie =>
                        <div className="Slider-info Slider-link"
                            key={eachMovie.id}
                            style = {{ transform: ` translateY(${ activeSlide === eachMovie.id ? '0' : '50%' })`,
                                       opacity: `${ activeSlide === eachMovie.id ? '1' : '0' }`,
                                    }} 
                            >
                            <img className='Slider-img-provider'
                                 src={`${eachMovie.logoProvider}`}
                                 alt={`${eachMovie.alt}`} />
                            <h1 className='Slider-h1'>{eachMovie.title}</h1>
                            <span className='Slider-meta'>
                                <h2 className='Slider-h2'>{eachMovie.provider}</h2>
                                <span className='Slider-meta-divider'></span>
                                <p className='Slider-p'>{eachMovie.summary}</p>
                            </span>
                            <button className='Slider-button'>
                                Play on {eachMovie.provider}
                            </button>
                        </div>
                    )}
                    </div>

                    <div className="Slider-right">
                        <div className='Slider-indicators'>
                            
                            {movies.slice(0,3).map( (eachMovie, index) =>
                                <div className={`${ activeSlide === index ? 'Slider-indicators--ellipse active' : 'Slider-indicators--ellipse' }`}
                                        key={eachMovie.id}
                                        onClick={() => updateSlide(index)}
                                >
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}