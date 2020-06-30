import React from 'react';
import './cart-dropdown.styles.css';

import { connect } from 'react-redux';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems, toggleCartHidden, cartHidden }) => (
    <div className='cart-dropdown'>
        { cartItems && cartItems.length?
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
        <CustomButton 
            label='GO TO CHECKOUT' 
            linkUrl='/checkout' 
            handleClick={() => { if(!cartHidden) toggleCartHidden(); }}/>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    cartHidden: selectCartHidden(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);

