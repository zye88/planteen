import React from 'react';
import { connect } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../redux/cart/cart.action';
import './checkout-item.styles.css';
import trashIcon from '../../img/trash-outline.svg';

const CheckoutItem = ({item: {id, image, name, price, quantity}, 
        removeCartItem, 
        updateCartItem}) => {
    
    const handleChange = e => {
        const newQty = e.target.value;
        const itemId = e.target.dataset.id;
        updateCartItem(itemId, parseInt(newQty));
    }

    return (
        <li className='checkout-item'>
            <div className='item__desc'>
                <img src={require(`../../img/${image}`)}/>
                <span>
                    {name}
                </span>
            </div>
            <div className='item__quantity'>
                <img 
                    src={trashIcon} 
                    onClick={() => removeCartItem(id)}
                    alt='Remove'/>
                <input 
                    type='number' 
                    data-id={id}
                    defaultValue={quantity}
                    onChange={handleChange}
                    min='0'
                    step='1'/>
            </div>
            <div>
                <span className='item__price'>${price}</span>
            </div>
            <div>
                <span className='item__subtotal'>${price * quantity}</span>
            </div>
        </li>
)};

const mapDispatchToState = dispatch => ({
    removeCartItem: id => dispatch(removeCartItem(id)),
    updateCartItem: (id, quantity) => dispatch(updateCartItem(id, quantity))
});

export default connect(null, mapDispatchToState)(CheckoutItem);