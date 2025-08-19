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
      </div>
    )
  }
  
  export default Footer