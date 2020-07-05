import React from 'react';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './icon-navigation.styles.css';

const IconNavigation = ({toggleCartHidden, location}) => (
    <div className='icon-navigation'>
        <Link to='/sign-in-up'>
            <img 
                src='/img/profile.svg' 
                alt='Profile'
                className={['/sign-in-up', '/welcome'].indexOf(location.pathname) > -1 ? 'icon--active': ''}/>
        </Link>
        <div onClick={toggleCartHidden}>
            <img 
                src='/img/cart.svg'
                alt='Cart'
                className={location.pathname === '/checkout'? 'icon--active': ''}/>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default compose(
    connect(null, mapDispatchToProps),
    withRouter)(IconNavigation);