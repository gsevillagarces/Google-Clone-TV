import './ManageProfile.css'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { CancelBtn2 } from '../../CancelBtn/CancelBtn2'

export const ManageProfile = () => {
    const [users, setUsers] = useState([])
  
    useEffect ( () => {

        let controller = new AbortController()
        console.log( controller )

        let options = {
            method: "get",
            signal : controller.signal,
            headers : {
                "Content-type" : "application/json"
            } 
        }

        fetch( 'http://localhost:4002/users', options )
        .then( res => res.json() )
        .then( data => setUsers(data) )
        .catch( err => console.log(err) )
        .finally( () => controller.abort() )
        
    }, [])


    return(
        <div className='ManageProfile'>

            <div className='ManageProfile-info'>
                <img className='ManageProfile-logo' src="/assets/clone-logo-header.svg" alt="Clone TV Logo" />
                <h2 className='ManageProfile-h2'>Manage your profiles</h2>

                <div className='ManageProfile-container'>
                    <div className='ManageProfile-profiles'>
                        {users.map((user) => (
                            <NavLink to={`/login/edit-profile/${user._id}`} className="ManageProfile-edit-profile">
                                < ManageProfileP key={user._id} {...user} />
                            </NavLink>
                        ))}
                    </div>
                    <NavLink to='/login/add-profile' className="ManageProfile-add-link">
                        <button className='ManageProfile-profile ManageProfile-addProfile'>
                            <img className='ManageProfile-addProfile-img' src="/assets/icons/add.svg" alt="Add User" />
                            <h3 className='ManageProfile-profile-name'>+ Add profile</h3>
                        </button>
                    </NavLink>
                </div>
            </div>

            <div className='ManageProfileInfo-butons'>
                < CancelBtn2 />
            </div>

        </div>
    )
}

export const ManageProfileP = ({_id, name, username, password}) => {
    return(
        <div className='ManageProfile-profile'>
            <img
            className='ManageProfile-profile-img'
            src="/assets/imgs/user@2x.jpg"
            alt="Google Clone Profile" />
            <h3 className='ManageProfile-profile-name'>
                {name}
            </h3>
        </div>
    )
}