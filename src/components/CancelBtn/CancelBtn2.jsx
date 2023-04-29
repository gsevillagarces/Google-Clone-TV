import './CancelBtn.css'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export const CancelBtn2 = ({ text }) => {
    const navigate = useNavigate()
  

    const gotoProfiles = () => {
        navigate("/")
    }

    const goBack = () => {
        gotoProfiles()
    };

    return(
        <div className='CancelBtn'>
            <button className='CancelBtn-button' type="Button" onPointerDown={goBack}>
                <span className='Button-span'>
                    <img className='Button-span-img' src="/assets/icons/arrow_back.svg" />
                </span>
                { text }
            </button>
        </div>
    )
}