import React from 'react'
import '../styles/Header.css'
import logo from '../../public/assets/logo.svg'
import icon_cart from '../../public/assets/icon-cart.svg'
import image_avatar from '../../public/assets/image-avatar.png'

function Header() {
  return (
    <header>
        <div className='header-menu'>
            <div className='header-logo'>
                <img src={logo} alt={logo}/>
            </div>
            <nav className='header-nav'>
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
        <div className='header-profile'>
            <img src={icon_cart} alt={icon_cart}/>
            <img src={image_avatar} alt={image_avatar}/>
        </div>
    </header>
  )
}

export default Header