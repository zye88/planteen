import React from 'react';
import './checkoutpage.styles.css';

import { connect } from 'react-redux';
import { selectCartItems, selectCartTotals } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const CheckOutPage = ({cartItems, cartTotals: [total, tax, totalWithTax]}) => (
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
                <div className='container__summary'>
                    <span>Total (excl. tax): ${total.toFixed(2)}</span>
                    <span>Tax: ${tax.toFixed(2)}</span>
                    <span>Total (incl. tax): ${totalWithTax.toFixed(2)}</span>
                </div>
                <CustomButton label='PAY NOW' handleClick={() => {}}/>
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
    cartTotals: selectCartTotals(state)
});

export default connect(mapStateToProps)(CheckOutPage);