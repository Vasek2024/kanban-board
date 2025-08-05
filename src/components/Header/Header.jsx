import React from 'react';
// import logo from '../../components/Header/user-avatar.svg';
// import './arrow-down.svg'
// import './Vector.svg'
import './Header.css'

function Header() {

  return (
    <div className='header'>
        <div className='header__title'>Awesome Kanban Board</div>
        <div className='header__burger'>
            <div className='burger__icon'>
                <img className='burger__icon-avatar' src="/public/user-avatar.svg" alt="Логотип компании"></img>
                <img className='burger__icon-closed' src="/public/closed.svg" alt="Развернуть"></img>
                <img className='burger__icon-open' src="/public/open.svg" alt="Свернуть"></img>
            </div>
            <div className='burger__registration'>
                <ul className='burger__registration-profile'>
                    <img className='burger__registration-rectangle' src="/public/Rectangle 27.svg" alt="Свернуть"></img>
                    <li className='burger__registration-profile'>Profile</li>
                    <li className='burger__registration-log'>Log Out</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
