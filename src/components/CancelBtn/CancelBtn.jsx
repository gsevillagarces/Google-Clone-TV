import './CancelBtn.css'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export const CancelBtn = ({ text }) => {
    const navigate = useNavigate()
  
    const goBack = () => {
        navigate(-1)
    }

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