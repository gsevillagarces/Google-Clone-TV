import { CancelBtn } from '../../components/CancelBtn/CancelBtn'
import { OkBtn } from '../../components/OkBtn/OkBtn'
import { TextField } from '../../components/TextField/TextField'
import './Profile.css'

export const Profile = () => {
    return(
        <div className='Profile'>
            <div className='ProfileInfo'>
                <div className='ProfileInfo-upper'>
                    <div className='ProfileInfo-user'>
                        <div className='ProfileInfo-avatar'>
                            <img className='ProfileInfo-img' src='/assets/imgs/user@2x.jpg' alt='avatar' />
                        </div>
                        <h2 className='ProfileInfo-h2'>
                            Hi, <span className='ProfileInfo-h2-username'>test123</span>
                        </h2>
                    </div>

                    <div className='ProfileInfo-icon-buttons'>
                        <button className='Profile-icon-button'>
                            <div className='ProfileInfo-icon ProfileInfo-trash'>
                                    <img src="/assets/icons/delete.svg" alt="Delete" />
                            </div>
                        </button>
                        <button className='Profile-icon-button'>
                            <div className='ProfileInfo-icon ProfileInfo-logout'>
                                    <img src="/assets/icons/logout.svg" alt="Logout" />
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