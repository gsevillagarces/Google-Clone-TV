import './AppDetails.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CancelBtn } from "../../../components/CancelBtn/CancelBtn"

export const AppDetails = () => {

    const { appId } = useParams()
    const [ apps, setApps ] = useState([])
  
    useEffect(() => {

        let controller = new AbortController()
        let options = {
            method : 'get' ,
            signal : controller.signal,
            headers: {
                "Content-type" : "application/json"
            }
        }

        fetch( `http://localhost:4002/apps/${appId}`, options)
            .then( (res) => res.json() )
            .then( (data) => setApps(data[0]) )
            .catch( (err) => console.log(err) )
            .finally( () => controller.abort() )
    }, [])

    return(
        <div className='AppDetails'
             style={{ backgroundColor: apps.appColor }}
        >
            <div className='AppDetails-provider'>
                <img className='AppDetails-provider-img'
                     src={`${apps.logoApp}`}
                     alt="{apps.appName}" />
            </div>


            <div className='Loading-bar'>
                <span className='Loaded'></span>
            </div>
                
            <div className='AppDetails-footer'>
                < CancelBtn />
            </div>
        </div>
    )
}