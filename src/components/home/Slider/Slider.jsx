import './Slider.css'

import { useEffect, useState } from 'react'

export const Slider = () => {

    const [ content, setContent ] = useState([])
    const [ activeSlide, setActiveSlide ] = useState(0)

    const movies = content ? content : []

    //Crear una constante que contenga las 5 primeras series
    const moviesToUse = [...movies].slice(0,5)

    const updateSlide = (newIndex) => {
        if ( newIndex < 0 ) {
            newIndex = moviesToUse.length - 1;
        } else if ( newIndex > moviesToUse.length - 1 ) {
            newIndex = 0;
        }

        setActiveSlide(newIndex)
    }

    useEffect ( () => {

        let controller = new AbortController()
  
        let options = {
            method: "get",
            signal : controller.signal,
            headers : {
                "Content-type" : "application/json"
            } 
        }
  
        fetch("http://localhost:4002/content", options)
        .then((res) => res.json())
        .then((data) => {
            const moviesWithIndex = data.map((movie, index) => ({
                ...movie,
                index: index,
            }));
            setContent(moviesWithIndex);
        })
        .catch((err) => {
            console.log(err);
            controller.abort();
        });

        const interval = setInterval(() => {
            updateSlide(activeSlide + 1)
        }, 3000)

        return () => clearInterval(interval)
        
    }, [activeSlide])

    return(
        <div className='Slider-container'>
            <div className='Slider'>
                <div className='Slides-container'>
                    {moviesToUse.map( eachMovie =>
                    <div className='Slide'
                         key={eachMovie.index}
                         style = {{ backgroundImage: `url(${ eachMovie.bgSlide })`,
                                    opacity: `${ activeSlide === eachMovie.index ? '1' : '0' }`,
                                    scale: `${ activeSlide === eachMovie.index ? '1.1' : '1' }`,
                                }}
                    >
                    </div>
                    )}
                </div>
                <div className="Slide-content">
                    <div className='Slider-left'>
                    {moviesToUse.map( eachMovie =>
                        <div className="Slider-info Slider-link"
                            key={eachMovie.index}
                            style = {{ transform: ` translateY(${ activeSlide === eachMovie.index ? '0' : '50%' })`,
                                       opacity: `${ activeSlide === eachMovie.index ? '1' : '0' }`,
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
                            {moviesToUse.map( (eachMovie, index) =>
                                <div className={`${ activeSlide === index ? 'Slider-indicators--ellipse active' : 'Slider-indicators--ellipse' }`}
                                        key={eachMovie.index}
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