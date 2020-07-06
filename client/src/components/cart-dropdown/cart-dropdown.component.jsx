import React from 'react';
import './cart-dropdown.styles.css';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        { cartItems.length?
            <ul>
                {
                    cartItems.map(({id, name, price, image, quantity}) => 
                        <li key={id} className='dropdown__item'>
                            <img src={require(`../../img/${image}`)} alt={name}/>
                            <div className='item__info'>
                                <span className='item__name'>{name}</span>
                                <span>{quantity} x ${price}</span>
                            </div>
                        </li>
                    )
                }
            </ul>:
            <span className='empty-message'>Empty Cart...</span>
        }
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);

