import React from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';

import Cart from '../cart/cart.component';

const Header = () => (
    <div className='header'>
        <div className='header-left'>
            <Link to='/'>BRANDING</Link>
        </div>
        <div className='header-right'>
            <ul className='navigation'>
                <li>
                    <Link to='/shop'>SHOP</Link>
                </li>
                <li>
                    <Link to='/signin'>SIGN IN</Link>
                </li>
                <li>
                    <Link to='/contact'>CONTACT</Link>
                </li>
                <li>
                    <Link to='/checkout'>CHECKOUT</Link>
                </li>
            </ul>
            <Cart />
        </div>
    </div>
);

export default Header;