import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './cart.styles.css';

const Cart = ({ toggleCartHidden, count }) => (
    <div className='cart' onClick={ toggleCartHidden }>
        <div className='cart-icon'>icon</div>
        <div className='cart-count'>{count}</div>
    </div>
);

const mapStateToProps = state => ({
    count: state.cart.cartCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);