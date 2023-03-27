import './App.css'
import { Splash } from './components/splash/Splash'
import { Header } from './components/home/header/Header'
import { Carousel } from './components/home/main/carousel/Carousel'
import { TopPicks } from './components/home/main/topPicks/TopPicks'
import { YourApps } from './components/home/main/yourApps/YourApps'
import { Recommended } from './components/home/main/recommended/Recommended'
import { Watchlisted } from './components/home/main/watchlisted/Watchlisted'

function App() {
  return (
    <>
      <div className='Splash'>
        < Splash />
      </div>
      <div className='CloneTV'>
        < Header />
        < Carousel />
        < TopPicks />
        < YourApps />
        < Recommended />
        < Watchlisted />
      </div>
    </>
  )
}

export default App