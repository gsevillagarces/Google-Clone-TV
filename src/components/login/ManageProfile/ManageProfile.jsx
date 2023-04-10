import { CancelBtn } from '../../CancelBtn/CancelBtn'
import { OkBtn } from '../../OkBtn/OkBtn'
import './ManageProfile.css'

export const ManageProfile = () => {
    return(
        <div className='ManageProfile'>

            <div className='ManageProfile-info'>
                <img className='ManageProfile-logo' src="/assets/clone-logo-header.svg" alt="Clone TV Logo" />
                <h2 className='ManageProfile-h2'>Manage your profiles</h2>

                <div className='ManageProfile-container'>
                    <div className='ManageProfile-profiles'>
                        <div className='ManageProfile-profile'>
                            <img className='ManageProfile-profile-img' src="/assets/imgs/user@2x.jpg" alt="Google Clone Profile" />
                            <h3 className='ManageProfile-profile-name'>Dad</h3>
                        </div>
                        <div className='ManageProfile-profile'>
                            <img className='ManageProfile-profile-img' src="/assets/imgs/user@2x.jpg" alt="Google Clone Profile" />
                            <h3 className='ManageProfile-profile-name'>Mom</h3>
                        </div>
                    </div>
                    <div className='ManageProfile-profile ManageProfile-addProfile'>
                        <img className='ManageProfile-addProfile-img' src="/assets/icons/add.svg" alt="Add User" />
                        <h3 className='ManageProfile-profile-name'>+ Add profile</h3>
                    </div>
                </div>
            </div>

            <div className='ManageProfileInfo-butons'>
                < CancelBtn />
            </div>

        </div>
    )
}