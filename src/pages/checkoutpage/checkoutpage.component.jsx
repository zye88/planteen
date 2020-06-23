import React from 'react';
import './checkoutpage.styles.css';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckOutPage = ({cartItems}) => (
    <div className='checkoutpage'>
        <div className='checkout__heading'>
            <span>Item</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Subtotal</span>
        </div>
        { cartItems.length?
            <ul className='checkout__list'>
                    {
                        cartItems.map(item => <CheckoutItem 
                            key={item.id} 
                            item={item}/>)
                    }
            </ul>:
            <span className='empty-checkout-msg'>
                There are currently no items in the shopping cart...
            </span>
        }
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CheckOutPage);