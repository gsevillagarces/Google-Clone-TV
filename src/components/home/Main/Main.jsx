import './Main.css'

export const Main = () => {
    return(
        <div className='Main'>
            <div className="Main-left">
                <h1 className='Main-h1'>Mandalorian</h1>
                <h2 className='Main-h2'>
                    <span className='Main-span'>Google TV Staff Pick</span>
                    A lone gunfighter makes his way through the outer reaches of the galaxy.
                </h2>
            </div>
            <div className="Main-right">
                <ul className='Main-indicators'>
                    <li className='Main-indicators--ellipse'></li>
                    <li className='Main-indicators--ellipse'></li>
                    <li className='Main-indicators--ellipse'></li>
                    <li className='Main-indicators--ellipse'></li>
                    <li className='Main-indicators--ellipse'></li>
                </ul>
            </div>
        </div>
    )
}