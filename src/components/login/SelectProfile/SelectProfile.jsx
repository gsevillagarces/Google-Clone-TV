import { CancelBtn } from '../../CancelBtn/CancelBtn'
import './SelectProfile.css'

export const SelectProfile = () => {
    return(
        <div className='SelectProfile'>
            <div className='SelectProfile-profiles'>
                <div className='SelectProfile-profile' src="/assets/providers/primevideo.svg" alt="Google Clone Profile"></div>
                <div className='SelectProfile-profile' src="/assets/providers/primevideo.svg" alt="Google Clone Profile"></div>
                <div className='SelectProfile-profile' src="/assets/providers/primevideo.svg" alt="Google Clone Profile"></div>
            </div>

            <div className='SelectProfile-footer'>
                < CancelBtn />
            </div>
        </div>
    )
}