import { CancelBtn } from '../../CancelBtn/CancelBtn'
import { OkBtn } from '../../OkBtn/OkBtn'
import { TextField } from '../../TextField/TextField'
import './AddProfile.css'

export const AddProfile = () => {
    return(
        <div className='Profile'>
                
                <div className='ProfileForm'>
                    < TextField />
                    < TextField />
                    < TextField />
                </div>

            <div className='ProfileInfo-butons'>
                < CancelBtn />
                < OkBtn />
            </div>

        </div>
    )
}