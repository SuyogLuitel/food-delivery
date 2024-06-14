import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('home')
    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="logo" className='logo' />
            <ul className='navbar-menu' >
                <Link to='/'><li onClick={() => setMenu('home')} className={menu === "home" ? 'active' : ''}>Home</li></Link>
                <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === "menu" ? 'active' : ''}>Menu</a>
                <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === "mobile-app" ? 'active' : ''}>Mobile-App</a>
                <a href='#footer' onClick={() => setMenu('contact')} className={menu === "contact" ? 'active' : ''}>Contact</a>
            </ul >
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="cart" /></Link>
                    <div className={getTotalCartAmount() ? 'dot' : ''}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div >
    )
}

export default Navbar
