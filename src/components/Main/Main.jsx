import './Main.css'
function Main() {

    return (
      <div className='main'>
            <div className='main__backlog'>
                <h2 className='main__backlog-h2'>Backlog</h2>
                <h3 className='main__backlog-h3'>Login page – performance issues</h3>
                <ul className='main__backlog-list'>
                    <li>Sprint bugfix</li>
                </ul>
            </div>

            <div className='main__ready'>
                <h2 className='main__ready-h2'>Ready</h2>
                <h3 className='main__ready-h3'>Shop page – performance issues</h3>
                <ul className='main__ready-list'>
                    <li>Checkout bugfix</li>
                    <li>Shop bug1</li>
                    <li>Shop bug2</li>
                    <li>Shop bug3</li>
                    <li>Shop bug4</li>
                    <li>Shop bug5</li>
                    <li>Shop bug6</li>
                    <li>Shop bug7</li>
                    <li>Shop page – performance issues</li>
                </ul>
            </div>

            <div className='main__progress'>
                <h2 className='main__progress-h2'>In Progress</h2>
                <h3 className='main__progress-h3'>User page – performance issues</h3>
                <ul className='main__progress-list'>
                    <li>Auth bugfix</li>
                </ul>
            </div>

            <div className='main__finished'>
                <h2 className='main__finished-h2'>Finished</h2>
                <h3 className='main__finished-h3'>Main page – performance issues</h3>
                <ul className='main__finished-list'>
                    <li>Main page bugfix</li>
                </ul>
            </div>
      </div>
    )
  }
  
  export default Main