import React from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from '../cart/cart.component';
import Dropdown from '../dropdown/dropdown.component';

const Header = ({cartItems, cartHidden}) => {
    console.log(`cartHidden: ${cartHidden}`);
    return (
    <div className='header'>
        <div className='header-item'>
            <Link to='/'>BRANDING</Link>
        </div>
        <div className='header-item'>
            <ul>
                <li>
                    <Link to='/shop'>SHOP</Link>
                </li>
                <li>
                    <Link to='/contact'>CONTACT</Link>
                </li>
                <li>
                    <Link to='/checkout'>CHECKOUT</Link>
                </li>
            </ul>
        </div>
        <div className='header-item'>
            <Link to='/signin'>SIGN IN</Link>
            <Cart/>
            {cartHidden? '' : 
                <Dropdown title='cart dropdown' items={cartItems}/>}
        </div>
    </div>
)};

const mapStateToProps = state => ({
    cartHidden: state.cart.cartHidden,
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(Header);