import React from 'react';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { clearCartItem, updateCartItem } from '../../redux/cart/cart.action';

import trashIcon from '../../img/trash-outline.svg';
import './checkoutpage.styles.css';

const CheckOutPage = ({cartItems, clearCartItem, updateCartItem}) => {
    console.log('cartItem:', cartItems);
    return (
    <div className='checkoutpage'>
        <table className='checkout__summary'>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
            </tr>
            {
                cartItems.map(({id, image, name, price, quantity}) =>
                    <tr className='checkout__item'>
                        <td className='item__desc'>
                            <img src={require(`../../img/${image}`)}/>
                            <span>
                                {name}
                            </span>
                        </td>
                        <td className='item__quantity'>
                            <img 
                                src={trashIcon} 
                                onClick={() => clearCartItem(id)}
                                alt='Remove'/>
                            <input 
                                type='number' 
                                placeholder={quantity}
                                min='0'
                                step='1'/>
                        </td>
                        <td>
                            <span className='item__price'>${price}</span>
                        </td>
                        <td>
                            <span className='item__subtotal'>${price * quantity}</span>
                        </td>
                    </tr>)
            }
        </table>
    </div>
)};

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

const mapDispatchToState = dispatch => ({
    clearCartItem: id => dispatch(clearCartItem(id)),
    updateCartItem: (id, quantity) => dispatch(updateCartItem(id, quantity))
});

export default connect(mapStateToProps, mapDispatchToState)(CheckOutPage);