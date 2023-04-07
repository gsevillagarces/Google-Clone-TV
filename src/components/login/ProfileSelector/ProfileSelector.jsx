import './ProfileSelector.css'
import { CancelBtn } from '../../CancelBtn/CancelBtn'

export const ProfileSelector = () => {
    return(
        <div className='ProfileSelector'>
            <div className='ProfileSelector-profiles'>
                <div className='ProfileSelector-profile' src="/assets/providers/primevideo.svg" alt="Google Clone Profile"></div>
                <div className='ProfileSelector-profile' src="/assets/providers/primevideo.svg" alt="Google Clone Profile"></div>
                <div className='ProfileSelector-profile' src="/assets/providers/primevideo.svg" alt="Google Clone Profile"></div>
            </div>
                
            <div className='ProfileSelector-footer'>
                < CancelBtn />
            </div>
        </div>
    )
}