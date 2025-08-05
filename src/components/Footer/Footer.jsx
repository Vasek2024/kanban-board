import './Footer.css'

function Footer() {

    return (
      <div className='footer'>
        <ul className='footer__finished'>
            <li>Active tasks: &lt;N&gt;</li>
            <li>Finished tasks: &lt;M&gt;</li>
        </ul>
        <ul className='footer__kanban'>
            <li>Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;</li>
        </ul>
          {/* <div className='header__title'>Awesome Kanban Board</div>
          <div className='header__burger'>
              <div className='burger__icon'>
                  <image className='burger__icon-avatar'></image>
                  <image className='burger__icon-closed'></image>
                  <image className='burger__icon-open'></image>
              </div>
              <div className='burger__registration'>
                  <ul className='burger__registration-profile'>
                      <li className='burger__registration-profile'>Profile</li>
                      <li className='burger__registration-log'>Log Out</li>
                  </ul>
              </div>
          </div> */}
      </div>
    )
  }
  
  export default Footer