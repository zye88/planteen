import React, { Component } from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';

import Cart from '../cart/cart.component';
import Dropdown from '../dropdown/dropdown.component';

class Header extends Component { 
    constructor() {
        super();
        this.state = {
            dropdownHidden: true,
        }
    }

    render() {
        const { dropdownHidden } = this.state;
        const { cart: { items, count }} = this.props;
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
                    <Cart count={count} handleClick={() => {
                        this.setState({dropdownHidden: !dropdownHidden})}}/>
                    {dropdownHidden? '' : 
                        <Dropdown >
                            CART DROPDOWN
                            { items }
                        </Dropdown>}
                </div>
            </div>
        )
    }
};

export default Header;