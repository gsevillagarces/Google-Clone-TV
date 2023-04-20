import { CancelBtn } from "../../../components/CancelBtn/CancelBtn"
import './AppDetails.css'

export const AppDetails = () => {
    return(
        <div className='AppDetails'>
            <div className='AppDetails-provider'>
                <img className='AppDetails-provider-img' src="/assets/providers/appletv.svg"     alt="Provider" />
                {/* <img className='AppDetails-provider-img' src="/assets/providers/atresplayer.svg" alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/crunchyroll.svg" alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/disneyplus.svg"  alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/hbomax.svg"      alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/hulu.svg"        alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/netflix.svg"     alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/paramount.svg"   alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/plex.svg"        alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/primevideo.svg"  alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/soundcloud.svg"  alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/spotify.svg"     alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/starplus.svg"    alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/tunein.svg"      alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/twitch.svg"      alt="Provider" /> */}
                {/* <img className='AppDetails-provider-img' src="/assets/providers/youtube.svg"     alt="Provider" /> */}
            </div>
                
            <div className='AppDetails-footer'>
                < CancelBtn />
            </div>
        </div>
    )
}