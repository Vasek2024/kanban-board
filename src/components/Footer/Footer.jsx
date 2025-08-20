import './Footer.css'

function Footer(props) {
    
    return (
      <div className='footer'>
        <ul className='footer__finished'>
            <li>Active tasks: &lt;{props.backlogCount}&gt;</li>
            <li>Finished tasks: &lt;{props.finishedCount}&gt;</li>
        </ul>
        <ul className='footer__kanban'>
            <li>Kanban board by &lt;inProgress&gt;, &lt;{props.inProgressCount}&gt;</li>
        </ul>
      </div>
    )
  }
  
  export default Footer