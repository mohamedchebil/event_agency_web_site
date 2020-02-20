import React from 'react'
import './footer.css'
import logoKimEvents from '../../assets/logo/kimEventsLogo.png'
import logoFacebook from '../../assets/logo/facebookLogo.png'
import logoInsta from '../../assets/logo/instaLogo.png'


const Footer = () => {
    return (
        <footer>
            <div className='footer-top'>
                <div className='footer-top-logo-container'>
                    <img className='footer-top-logo' src={logoKimEvents} alt="logo Kim Events"/>
                </div>
                <div className='footer-top-social-media-container'>
                    <a href='http://www.facebook.com/KimEvents1/' target='blank'>
                        <img className='footer-top-social-media' src={logoFacebook} alt="logo facebook"/>
                    </a>
                    <a href='http://www.instagram.com/kim.events1/' target='blank'>
                        <img className='footer-top-social-media' src={logoInsta} alt="logo instagram"/>
                    </a>
                </div>
            </div>
            <div className='footer-bottom'> 
                Powered by Mohamed Chebil 2020 
            </div>
        </footer>
    )
}

export default Footer