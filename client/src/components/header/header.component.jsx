import React from 'react';
import { Link } from 'react-router-dom';

// Component imports
import TextNavigation from '../text-navigation/text-navigation.component';
import IconNavigation from '../icon-navigation/icon-navigation.component';

// Style and image imports
import './header.styles.css';

const Header = () => (
    <header className='header'>
        <Link className='header__branding' to='/'>
            <img src={require('../../img/leaf.svg')} alt='Leaf logo'/>
            <h2>Planteen</h2>
        </Link>
        <TextNavigation/>
        <IconNavigation/>
    </header>);

export default Header;