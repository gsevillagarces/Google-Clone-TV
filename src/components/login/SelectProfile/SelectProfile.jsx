import { CancelBtn } from '../../CancelBtn/CancelBtn'
import './SelectProfile.css'

export const SelectProfile = () => {
    return(
        <div className='SelectProfile'>
            <div className='SelectProfile-container'>
                <div className='SelectProfile-profiles'>
                    <img className='SelectProfile-profile' src="/assets/imgs/user.jpg" alt="Google Clone Profile" />
                    <img className='SelectProfile-profile' src="/assets/imgs/user.jpg" alt="Google Clone Profile" />
                </div>
                <div className='SelectProfile-addProfiles'>
                    <div className='SelectProfile-profile SelectProfile-addProfile' src="/assets/providers/primevideo.svg" alt="Google Clone Profile">
                    <span>
                        <img className='SelectProfile-addProfile-img' src="/assets/icons/add.svg" alt="Add User" />
                    </span>
                    </div>
                </div>
            </div>

            <div className='SelectProfile-footer'>
                < CancelBtn />
            </div>
        </div>
    )
}