import { CancelBtn } from '../../CancelBtn/CancelBtn'
import './SelectProfile.css'

export const SelectProfile = () => {
    return(
        <div className='SelectProfile'>

            <img className='SelectProfile-logo' src="/assets/clone-logo-header.svg" alt="Clone TV Logo" />
            <h2 className='SelectProfile-h2'>Choose a profile</h2>

            <div className='SelectProfile-container'>
                <div className='SelectProfile-profiles'>
                    <div className='SelectProfile-profile'>
                        <img className='SelectProfile-profile-img' src="/assets/imgs/user@2x.jpg" alt="Google Clone Profile" />
                        <h3 className='SelectProfile-profile-name'>Dad</h3>
                    </div>
                    <div className='SelectProfile-profile'>
                        <img className='SelectProfile-profile-img' src="/assets/imgs/user@2x.jpg" alt="Google Clone Profile" />
                        <h3 className='SelectProfile-profile-name'>Mom</h3>
                    </div>
                </div>
                <div className='SelectProfile-profile SelectProfile-addProfile'>
                    <img className='SelectProfile-addProfile-img' src="/assets/icons/add.svg" alt="Add User" />
                    <h3 className='SelectProfile-profile-name'>+ Add profile</h3>
                </div>
            </div>

            <div className='SelectProfile-manage'>
                <button className='SelectProfile-manage-button'>
                    Manage profiles
                </button>
            </div>
        </div>
    )
}