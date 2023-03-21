import './Splash.css'

export const Splash = () => {
    return(
    <div className="Splash">
      <div className="Splash-main">
        <img src="assets/clone-logo.svg" alt="Logo Clone TV" />
        <div className='Loading-bar'>
          <span className='Loaded'></span>
        </div>
      </div>
      <div className='Splash-footer'>
        <h4 className='h4-splassh-footer'>
          A Google Home TV Clone App made in React
        </h4>
      </div>
    </div>
    )
}