import React from 'react';
import { Link } from 'react-router-dom';

// Import components
import Navigation from '../navigation/navigation.component';

// Import style and images
import './header.styles.css';
import LeafLogo from '../../img/leaf.svg';

const Header = () => (
    <header className='header'>
        <Link className='header__branding' to='/'>
            <img src={LeafLogo} alt='Leaf logo'/>
            <h2>Planteen</h2>
        </Link>
        <Navigation 
            type='text' 
            addClass = 'header__nav--1'
            navItems={[['Plants', '/shop/plants'], 
                    ['Accessories', '/shop/accessories'], 
                    ['Gifts', '/shop/gifts'], 
                    ['Contact Us', '/contact-us']]}/>
        <Navigation 
            type='image'
            addClass='header__nav--2'
            navItems={[['Sign In', '/sign-in-up', 'profile.svg'],
                    ['Cart', '/checkout', 'cart.svg']]}/>
    </header>);

export default Header;