import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './icon-navigation.styles.css';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const IconNavigation = ({ location }) => (
    <div className='icon-navigation'>
        <Link to='/sign-in-up'>
            <img 
                src={require('../../img/profile.svg')} 
                alt='Profile'
                className={['/sign-in-up', '/welcome'].indexOf(location.pathname) > -1 ? 'icon--active': ''}/>
        </Link>
        <Link to='/checkout'>
            <img 
                src={require('../../img/cart.svg')}
                alt='Cart'
                className={`cart-icon 
                    ${location.pathname === '/checkout'? 'icon--active': ''}`}/>
            <CartDropdown/>
        </Link>
    </div>
);

export default withRouter(IconNavigation);