import React from 'react';
import Navigation from '../navigation/navigation.component';

// Import images and style
import './footer.styles.css';
import InstaIcon from '../../assets/insta-icon.png';
import FacebookIcon from '../../assets/facebook-icon.png';

const Footer = () => (
    <div className='footer'>
        <Navigation 
            type='text' 
            className ='footer-links-left'
            navItems={[['About Us', '/about-us'], 
                    ['Contacts', '/contacts'], 
                    ['Plant Night', '/plant-night'], 
                    ['Plant Delivery', '/plant-delivery'], 
                    ['Become a Host', '/become-a-host']]}/>
        <div className='footer-mid'>
            <h2 className='footer-title'>
                Be the first to know about our latest workshops and newest plants
            </h2>
            <form className='subcribe-box'>
                <input type='email' className='subscribe-email' placeholder='Email Address'/>
                <input type='submit' className='subscribe-button' value='Subscribe'/>
            </form>
            <div className='social-media-links'>
                <a href='https://www.facebook.com/JOMO-Studio-568104506970827'>
                    <img src={FacebookIcon} alt='JOMO Facebook Link'/>
                </a>
                <a href='https://www.instagram.com/jomostudio/'>
                    <img src={InstaIcon} alt='JOMO Insta Link'/>
                </a>
            </div>
            <span className='footer-subtext'>
                © 2020, JOMO Studio Inc. Accessibility
            </span>
        </div>
        <Navigation 
            type='text'
            className ='footer-links-right'
            navItems={[['FAQs', '/faqs'], 
                    ['Refund Policy', '/refund-policy'], 
                    ['Privacy Policy', '/privacy-policy'], 
                    ['Terms of Service', '/terms-of-service'], 
                    ['Guest Release & Waiver', '/guest-release-and-waiver']]}/>
    </div>


);
export default Footer;