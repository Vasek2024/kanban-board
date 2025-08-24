import { React, useState } from 'react'
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {

    const [isOpen, setOpen] = useState(false) // Для бургера

  return (
    <div className='header'>
        <div className='header__title'>
            <NavLink to='/' className='header__title-hom'>
                Awesome Kanban Board
            </NavLink>
        </div>
        <div className='header__burger'>
            <div className='burger__icon'>
                <img className='burger__icon-avatar' onClick={() => setOpen(!isOpen)} src="/public/user-avatar.svg" alt="Логотип компании"></img>
                <img className={`burger__icon-closed ${isOpen ? 'active' : 'none'}`} src="/public/closed.svg" alt="Развернуть"></img>
                <img className={`burger__icon-open ${!isOpen ? 'active' : 'none'}`} src="/public/open.svg" alt="Свернуть"></img>
            </div>
            <div className= {`burger__registration ${isOpen ? 'active' : ''}`}>
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
