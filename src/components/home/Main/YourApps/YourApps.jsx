import './YourApps.css'
import { googleClone } from '../../../../bbdd'

const { main } = googleClone
const { yourApps } = main

export const YourApps = () => {
    return (
        <div className='YourApps'>
            <h3 className='YourApps-h3'>Your Apps</h3>
            <div className='YourApps-cards'>
                {yourApps.map(eachYourApp =>               
                    <div className='YourApps-cards-movie' key={eachYourApp.id}
                         style={{ background: `${ eachYourApp.appColor }`  }}>
                    </div>
                )}
            </div>
        </div>
    )
}