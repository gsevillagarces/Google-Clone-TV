import { CancelBtn } from "../../../components/CancelBtn/CancelBtn"
import './AppDetails.css'

export const AppDetails = ({ id, appName, logoApp, appColor, href }) => {
    return(

        <div className='AppDetails' style={{ backgroundColor: appColor }}>
            <div className='AppDetails-provider'>
                < img className='AppDetails-provider-img' src={`${logoApp}`} alt="Provider" />
            </div>
                
            <div className='AppDetails-footer'>
                < CancelBtn />
            </div>
        </div>
    )
}