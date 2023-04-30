import './SelectProfile.css'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export const SelectProfile = () => {
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
        <div className='SelectProfile'>

            <div className='SelectProfile-info'>

                <img className='SelectProfile-logo' src="/assets/clone-logo-header.svg" alt="Clone TV Logo" />
                <h2 className='SelectProfile-h2'>Choose a profile</h2>
        
                <div className='SelectProfile-container'>
                    <div className='SelectProfile-profiles'>
                        {users.map((user) => (
                            <NavLink to='/' className="ManageProfile-open-profile">
                                < SelectProfileP key={user._id} {...user} />
                            </NavLink>
                        ))}
                    </div>
                    <NavLink to='/login/add-profile' className="ManageProfile-add-link">
                        <button className='SelectProfile-profile SelectProfile-addProfile'>
                            <img className='SelectProfile-addProfile-img' src="/assets/icons/add.svg" alt="Add User" />
                            <h3 className='SelectProfile-profile-name'>+ Add profile</h3>
                        </button>
                    </NavLink>
                </div>

                <div className='SelectProfile-manage'>
                    <NavLink to='/login/manage-profile' className="SelectProfile-manage-link">
                        <button className='SelectProfile-manage-button'>
                            Manage profiles
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export const SelectProfileP = ({_id, name, username, password}) => {
    return(
        <div className='SelectProfile-profile'>
            <img
            className='SelectProfile-profile-img'
            src="/assets/imgs/user@2x.jpg"
            alt="Google Clone Profile" />
            <h3 className='SelectProfile-profile-name'>
                {name}
            </h3>
        </div>
    )
}