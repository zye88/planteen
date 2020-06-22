import React from 'react';
import './cart-dropdown.styles.css';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
    console.log(cartItems);
    return (
    <div className='cart-dropdown'>
        <ul>
            {
                cartItems.map(({id, name, price, image, count}) => 
                    <li key={id} className='dropdown__item'>
                        <img src={require(`../../img/${image}`)}/>
                        <div className='item__info'>
                            <span className='item__name'>{name}</span>
                            <span>{count} x ${price}</span>
                        </div>
                    </li>
                )
            }
        </ul>
        <CustomButton label='GO TO CHECKOUT' linkUrl='/checkout' handleClick={toggleCartHidden}/>
    </div>
)};

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);

