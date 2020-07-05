import React from 'react';
import { Link } from 'react-router-dom';

// Redux related imports
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// Component imports
import TextNavigation from '../text-navigation/text-navigation.component';
import IconNavigation from '../icon-navigation/icon-navigation.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Style and image imports
import './header.styles.css';

const Header = ({ cartHidden }) => (
    <header className='header'>
        <Link className='header__branding' to='/'>
            <img src='/img/leaf.svg' alt='Leaf logo'/>
            <h2>Planteen</h2>
        </Link>
        <TextNavigation/>
        <IconNavigation/>
        { cartHidden ? '' : <CartDropdown/>}
    </header>);

const mapStateToProps = state => ({
    cartHidden: selectCartHidden(state)
})

export default connect(mapStateToProps)(Header);