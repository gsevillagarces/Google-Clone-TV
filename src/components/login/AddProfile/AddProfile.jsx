import { CancelBtn } from '../../CancelBtn/CancelBtn'
import { OkBtn } from '../../OkBtn/OkBtn'
import { PasswordField } from '../../PasswordField/PasswordField'
import { TextField } from '../../TextField/TextField'
import './AddProfile.css'

export const AddProfile = () => {
    return(
        <div className='AddProfile'>
            <div className='AddProfileInfo'>
                <div className='AddProfile-divider'>
                    <h4 className='AddProfile-divider-h4'>
                        Complete your info below:
                    </h4>
                </div>
                
                <div className='AddProfileForm'>
                    < TextField 
                        label="Name"
                        placeholder="e.g. Jhon Smith" />
                    < TextField
                        label="Username"
                        placeholder="e.g. test123" />
                    < PasswordField 
                        label="Password"
                        placeholder="******" />
                </div>
            </div>

            <div className='AddProfileInfo-butons'>
                < CancelBtn />
                < OkBtn />
            </div>

        </div>
    )
}