import React from 'react';
import './cart.styles.css';

const Cart = ({ handleClick }) => (
    <div className='cart' onClick={ handleClick }>
        <div className='cart-icon'>icon</div>
        <div className='cart-count'>0</div>
    </div>
);

export default Cart;