import './App.css'
import { Splash } from './components/splash/Splash'
import { Header } from './components/home/Header/Header'
import { Carousel } from './components/Carousel/Carousel'

function App() {
  return (
    <>
      {/* <div className='Splash'>
        < Splash />
      </div> */}
      <div className='CloneTV'>
        {/* < Header /> */}

        <h2>Your apps</h2>
        < Carousel />
        
      </div>
    </>
  )
}

export default App