import { CancelBtn } from '../../CancelBtn/CancelBtn'
import { OkBtn } from '../../OkBtn/OkBtn'
import { TextField } from '../../TextField/TextField'
import './EditProfile.css'

export const EditProfile = () => {
    return(
        <div className='Profile'>
            <div className='ProfileInfo'>
                <div className='ProfileInfo-upper'>
                    <div className='ProfileInfo-user'>
                        <div className='ProfileInfo-avatar'>
                            <img className='ProfileInfo-img' src='/assets/imgs/user@2x.jpg' alt='avatar' />
                        </div>
                        <h2 className='ProfileInfo-h2'>
                            test123
                        </h2>
                    </div>

                    <div className='ProfileInfo-icon-buttons'>
                        <button className='Profile-icon-button'>
                            <div className='ProfileInfo-icon ProfileInfo-trash'>
                                <img src="/assets/icons/delete.svg" alt="Delete" />
                            </div>
                        </button>
                    </div>
                </div>

                <div className='ProfileEdit'>
                    <h4 className='ProfileEdit-h4'>
                        Edit your profile below:
                    </h4>
                </div>
                
                <div className='ProfileForm'>
                    < TextField />
                    < TextField />
                    < TextField />
                </div>
            </div>

            <div className='ProfileInfo-butons'>
                < CancelBtn />
                < OkBtn />
            </div>

        </div>
    )
}