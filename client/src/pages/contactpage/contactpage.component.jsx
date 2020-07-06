import React from 'react';
import GoogleMap from '../../components/google-map/google-map.component';
import './contactpage.styles.css';

const ContactPage = () => (
    <div className='contactpage'>
        <GoogleMap/>
        <div className='contact-details'>
            <div className='location'>
                <h3>ADDRESS</h3>
                <span>Address Line 1</span>
                <span>Address Line 2</span>
                <span>Toronto, A1A 2B2 ON</span>
                <span>Canada</span>
            </div>
            <div className='online'>
                <h3>CONTACT</h3>
                <span>Tel: 123 456 7890</span>
                <span>Email: test@gmail.com</span>
            </div>
            <div className='social'>
                    <a href='https://www.facebook.com/'>
                        <img src={require('../../img/fb-logo.svg')} alt='Facebook Link'/>
                    </a>
                    <a href='https://www.instagram.com/'>
                        <img src={require('../../img/insta-logo.svg')} alt='Instagram Link'/>
                    </a>
                </div>
        </div>
    </div>
);

export default ContactPage;