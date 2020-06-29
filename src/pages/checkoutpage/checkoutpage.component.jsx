import React from 'react';
import './checkoutpage.styles.css';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import OrderSummary from '../../components/order-sumary/order-summary.component';

const CheckOutPage = ({cartItems}) => (
    <div className='checkoutpage'>
        <div className='checkout__heading'>
            <span>Item</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Subtotal</span>
        </div>
        { cartItems.length?
            <div className='checkout__container'>
                <ul className='container__list'>
                    {
                        cartItems.map(item => <CheckoutItem 
                            key={item.id} 
                            item={item}/>)
                    }
                </ul>
                <OrderSummary/>
                <CustomButton label='PAY NOW' linkUrl='/order-now'/>
            </div>
            :
            <span className='empty-checkout-msg'>
                There are currently no items in the shopping cart...
            </span>
        }
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CheckOutPage);