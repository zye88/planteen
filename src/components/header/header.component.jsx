import React from 'react';
import { Link } from 'react-router-dom';

// Redux related imports
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// Import components
import Navigation from '../navigation/navigation.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Import style and images
import './header.styles.css';
import leafLogo from '../../img/leaf.svg';
import profileIcon from '../../img/profile.svg';
import cartIcon from '../../img/cart.svg';

const Header = ({ cartHidden, toggleCartHidden}) => (
    <header className='header'>
        <Link className='header__branding' to='/'>
            <img src={leafLogo} alt='Leaf logo'/>
            <h2>Planteen</h2>
        </Link>
        <Navigation 
            addClass='header__nav--1'
            navItems={[['Plants', '/shop/plants'], 
                    ['Accessories', '/shop/accessories'], 
                    ['Gifts', '/shop/gifts'], 
                    ['Contact Us', '/contact']]}/>
        <div className='header__nav--2'>
            <Link to='/sign-in-up'>
                <img src={profileIcon} alt='Profile'/>
            </Link>
            <div onClick={toggleCartHidden}>
                <img src={cartIcon} alt='Cart'/>
            </div>
        </div>
        { cartHidden ? '' : <CartDropdown/>}
    </header>);

const mapStateToProps = state => ({
    cartHidden: selectCartHidden(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);