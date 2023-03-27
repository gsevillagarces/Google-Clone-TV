import './Carousel.css'
import { googleClone } from '../../../../bbdd'

const { main } = googleClone
const { slides } = main

const goToProvider = () => {
    console.log("Listo para abrir app...")
}

export const Carousel = () => {
    return(
        <div className='Carousel'>
            <div className='Main-container'>
                <div className='Slider-container'>
                    {slides.map( eachSlide =>
                        <div className='Slide'
                             key={eachSlide.id}
                             style = {{ backgroundImage: `url(${ eachSlide.bg })`}}>
                        </div>
                    )}
                </div>

                <div className="Slider-content">
                    <div className='Slider-left'>
                    {slides.map(eachSlide =>
                            <div className="Slider-info Slider-link" onClick={goToProvider}
                                key={eachSlide.id}>
                                <img className='Slider-img-provider'
                                    src={`${eachSlide.logoProvider}`}
                                    alt={`${eachSlide.provider}`} />
                                <h1 className='Slider-h1'>{eachSlide.h1}</h1>
                                <span className='Slider-meta'>
                                    <h2 className='Slider-h2'>{eachSlide.provider}</h2>
                                    <span className='Slider-meta-divider'></span>
                                    <h2 className='Slider-p'>{eachSlide.description}</h2>
                                </span>
                                <button className='Slider-button' onClick={goToProvider}>
                                    Play on {eachSlide.btnProvider}
                                </button>
                            </div>
                    )}
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
        </div>
    )
}