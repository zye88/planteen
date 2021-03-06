import React from 'react';
import { connect } from 'react-redux';
import { removeCartItem, addCartItem, clearCartItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.css';

const CheckoutItem = ({ item, removeCartItem, addCartItem, clearCartItem }) => {
    const { id, image, name, price, quantity } = item;
    return (
        <li className='checkout-item'>
            <div className='item__desc'>
                <img src={require(`../../img/${image}`)} alt='Product Item'/>
                <div className='price-name-container'>
                    <span className='desc__name'>{name}</span>
                    <span className='desc__price'>${price}</span>
                </div>
            </div>
            <div className='item__quantity'>
                <img
                    className='clear-icon' 
                    src={require('../../img/trash-outline.svg')}
                    onClick={() => clearCartItem(id)}
                    alt='Remove'/>
                <div>
                    <img 
                        className='update-icon' 
                        src={require('../../img/chevron-back-outline.svg')} 
                        alt='Decrease' 
                        onClick={() => removeCartItem(id)}/>
                    <span>{quantity}</span>
                    <img 
                        className='update-icon' 
                        src={require('../../img/chevron-forward-outline.svg')}
                        alt='Increase'
                        onClick={() => addCartItem(item)}/>
                </div>
            </div>
            <div className='price-subtotal-container'>
                <span className='item__price'>${price}</span>
            </div>
            <div className='price-subtotal-container'>
                <span className='item__subtotal'>${price * quantity}</span>
            </div>
        </li>
)};

const mapDispatchToState = dispatch => ({
    removeCartItem: id => dispatch(removeCartItem(id)),
    clearCartItem: id => dispatch(clearCartItem(id)),
    addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToState)(CheckoutItem);