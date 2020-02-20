import React from 'react'
import './navBar.css'
import {Link} from 'react-router-dom'
import logoKimEvents from '../../assets/logo/kimEventsLogo.png'


const NavBar =() => {
    return (
        <header>
            <div className='logo-container'>
               <img className='header-logo' src={logoKimEvents} alt='logo kim events'/>
            </div>
            <div className='menu-container'>
                <Link className="menu-link" to='/home'> Acceuil </Link>
                <Link className="menu-link" to='/events'> Evenements </Link>
                <Link className="menu-link" to='/sponsors'> Partenaires </Link>
                <Link className="menu-link" to='/contact'> Contact </Link>
            </div>
        </header>
    );
}

export default NavBar