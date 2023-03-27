import './App.css'
import { Splash } from './components/Splash/Splash'
import { Header } from './components/home/Header/Header'
import { Carousel } from './components/home/Main/Carousel/Carousel'
import { TopPicks } from './components/home/Main/TopPicks/TopPicks'
import { YourApps } from './components/home/Main/YourApps/YourApps'

function App() {

  return (
    <>
      {/* <div className='Splash'>
        < Splash />
      </div> */}
      <div className='CloneTV'>
        < Header />
        < Carousel />
        < TopPicks />
        < YourApps />
        < TopPicks />
        < TopPicks />
      </div>
    </>
  )
}

export default App