import './App.css'
import { Splash } from './components/Splash/Splash'
import { Header } from './components/home/Header/Header'
import { Main } from './components/home/Main/Main'
import { TopPicks } from './components/home/Main/TopPicks/TopPicks'
import { YourApps } from './components/home/Main/YourApps/YourApps'

function App() {

  return (
    <>
      {/* <div className='Splash'>
        < Splash />
      </div> */}
      <div className='Clone-TV'>
        < Header />
        < Main />
        < TopPicks />
        < YourApps />
      </div>
    </>
  )
}

export default App