import React from 'react';
import { Link } from 'react-router-dom';

// Import components
import NavigationBar from '../navigation-bar/navigation-bar.component';

// Import style and images
import './header.styles.css';
import JomoLogo from '../../assets/jomo-logo.png';

const Header = () => (
    <div className='header'>
        <Link className='branding' to='/'>
            <img src={JomoLogo} alt='JOMO logo'/>
        </Link>
        <NavigationBar className ='pageLinks'
                        navItems={[['Plants', '/plants'], 
                                ['Accessories', '/accessories'], 
                                ['Gifts', '/gifts'], 
                                ['Offices', '/offices'], 
                                ['Services', '/services']]}/>
        <NavigationBar type={'image'}
                        navItems={[['Search', '/search', 'search-icon.svg'],
                                ['Profile', '/profile', 'profile-icon.svg'],
                                ['Cart', '/checkout', 'cart-icon.svg']]}/>
    </div>);

export default Header;