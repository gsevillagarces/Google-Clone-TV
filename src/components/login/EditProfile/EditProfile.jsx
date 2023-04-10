import { CancelBtn } from '../../CancelBtn/CancelBtn'
import { OkBtn } from '../../OkBtn/OkBtn'
import { PasswordField } from '../../PasswordField/PasswordField'
import { TextField } from '../../TextField/TextField'
import './EditProfile.css'

export const EditProfile = () => {
    return(
        <div className='EditProfile'>
            <div className='EditProfileInfo'>
                <div className='EditProfileInfo-upper'>
                    <div className='EditProfileInfo-user'>
                        <div className='EditProfileInfo-avatar'>
                            <img className='EditProfileInfo-img' src='/assets/imgs/user@2x.jpg' alt='avatar' />
                        </div>
                        <h2 className='EditProfileInfo-h2'>
                            test123
                        </h2>
                    </div>

                    <div className='EditProfileInfo-icon-buttons'>
                        <button className='EditProfile-icon-button'>
                            <div className='EditProfileInfo-icon EditProfileInfo-trash'>
                                <img src="/assets/icons/delete.svg" alt="Delete" />
                            </div>
                        </button>
                    </div>
                </div>

                <div className='EditProfile-divider'>
                    <h4 className='EditProfile-divider-h4'>
                        Edit your profile below:
                    </h4>
                </div>
                
                <div className='EditProfileForm'>
                    < TextField 
                        label="Name"
                        value="Carlos López" />
                    < TextField
                        label="Username"
                        value="text123" />
                    < PasswordField 
                        label="Password"
                        value="******" />
                </div>
            </div>

            <div className='EditProfileInfo-butons'>
                < CancelBtn />
                < OkBtn />
            </div>

        </div>
    )
}