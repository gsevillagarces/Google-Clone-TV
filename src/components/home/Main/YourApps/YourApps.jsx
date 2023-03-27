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
                <div className='YourApps-cards-movie'>            
                        <div className='YourApps-cards-app' key={eachYourApp.id}
                            style={{ background: `${ eachYourApp.appColor }`  }}>
                        </div>
                        <h4 className='YourApps-cards-h4'>
                            {eachYourApp.provider}
                        </h4>
                    </div>
                )}
            </div>
        </div>
    )
}