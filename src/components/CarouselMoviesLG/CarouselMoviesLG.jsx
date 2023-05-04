import './CarouselMoviesLG.css'
import { MovieCardLG } from '../home/cards/MovieCardLG/MovieCardLG'
import { useEffect, useState } from 'react'

export const CarouselMoviesLG = ({ type, category, featured }) => {

    const [ content, setContent ] = useState([])

    useEffect(() => {

        let controller = new AbortController()

        let options = {
            method: "get",
            signal: controller.signal,
            headers: {
                "Content-type": "application/json"
            }
        }

        fetch('mongodb+srv://gsevillagarces:test123@cluster0.ty0etsd.mongodb.net/test/google-clone-tv/content', options)
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())

    }, [])

    return (
        <div className='ShowsCarousel'>
            < CarouselMoviesLGC content={content}
                                type        = {type}
                                category    = {category}
                                featured    = {featured} />
        </div>
    )
}

const CarouselMoviesLGC = ({ content, category, type, featured }) => {

    const [ filtrar, setFiltrar ] = useState([])

    useEffect(() => {
        const filteredContent = content.filter((eachCard) => {
            // Filtrar por tipo. Película o serie
            if (type && eachCard.type !== type) {
            return false
            }

            // Filtrar por categoría de película o serie
            if (category && eachCard.category !== category) {
            return false
            }

            return true
        })
        
        // Filtrar si tiene o no featured
        const filteredByFeatured = featured
        ? filteredContent.filter((eachCard) => eachCard.featured === featured)
        : filteredContent;

        setFiltrar(filteredByFeatured);
      }, [content, type, category, featured])
      

    // Devolver el componente MovieCardLG con los datos ya filtrados
    return (
        <div className='CarouselMoviesLG-container'>
            <div className='CarouselMoviesLG'>
                {filtrar && filtrar.map(eachCard =>
                    < MovieCardLG key={eachCard._id} {...eachCard} />
                )}
            </div>
        </div>
    )
}