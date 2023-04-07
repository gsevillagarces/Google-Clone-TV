import { CancelBtn } from "../../../components/CancelBtn/CancelBtn"
import './AppDetails.css'

export const AppDetails = () => {
    return(
        <div className='AppDetails'>
            <div className='AppDetails-provider'>
                <img className='AppDetails-provider-img' src="/assets/providers/primevideo.svg" alt="Provider" />
            </div>
                
            <div className='AppDetails-footer'>
                < CancelBtn />
            </div>
        </div>
    )
}