import React from 'react';
import './cart.styles.css';

const Cart = ({ handleClick, count }) => (
    <div className='cart' onClick={ handleClick }>
        <div className='cart-icon'>icon</div>
        <div className='cart-count'>{count}</div>
    </div>
);

export default Cart;