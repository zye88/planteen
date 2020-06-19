import React from 'react';
import Navigation from '../navigation/navigation.component';

// Import images and style
import './footer.styles.css';
import InstaIcon from '../../assets/insta-icon.svg';
import FacebookIcon from '../../assets/fb-icon.svg';

const Footer = () => (
    <div className='footer'>
        <Navigation 
            type='text' 
            addClass='nav--col'
            navItems={[['About Us', '/about-us'], 
                    ['Contacts', '/contacts'], 
                    ['Plant Night', '/plant-night'], 
                    ['Plant Delivery', '/plant-delivery'], 
                    ['Become a Host', '/become-a-host']]}/>
        <div className='footer__subscribe'>
            <h2>
                Be the first to know about our latest workshops and newest plants
            </h2>
            <form>
                <input type='email' className='subscribe__email' placeholder='Email Address'/>
                <input type='submit' className='subscribe__btn' value='Subscribe'/>
            </form>
            <div className='footer__social'>
                <a href='https://www.facebook.com/JOMO-Studio-568104506970827'>
                    <img src={FacebookIcon} alt='Facebook Link'/>
                </a>
                <a href='https://www.instagram.com/jomostudio/'>
                    <img src={InstaIcon} alt='Insta Link'/>
                </a>
            </div>
            <p>&#169; 2020, JOMO Studio Inc. Accessibility</p>
        </div>
        <Navigation 
            type='text'
            addClass='nav--col'
            navItems={[['FAQs', '/faqs'], 
                    ['Refund Policy', '/refund-policy'], 
                    ['Privacy Policy', '/privacy-policy'], 
                    ['Terms of Service', '/terms-of-service'], 
                    ['Guest Release and Waiver', '/guest-release-and-waiver']]}/>
    </div>


);
export default Footer;