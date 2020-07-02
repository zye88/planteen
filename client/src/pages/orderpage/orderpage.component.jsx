import React, { useState } from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { createOrderDoc } from '../../firebase/firebase.utils';
import './orderpage.styles.css';

import { connect } from 'react-redux';
import { selectCartTotals, selectCartItems } from '../../redux/cart/cart.selectors';
import { 
    selectAddressComplete, 
    selectPaymentComplete, 
    selectContactComplete, 
    selectAddress, 
    selectContact, 
    selectOrderSuccessHidden } from '../../redux/order/order.selectors';
import { toggleOrderSuccessHidden, clearUserInput } from '../../redux/order/order.action';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCartItems } from '../../redux/cart/cart.action';

import AddressContainer from '../../components/address-container/address-container.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import PaymentContainer from '../../components/payment-container/payment-container.components';
import UserContactContainer from '../../components/user-contact-container/user-contact-container.component';
import GoToAction from '../../components/go-to-action/go-to-action.component';
import OrderSuccessContainer from '../../components/order-success-container/order-success-container.component';


const OrderPage = ({
    address,
    cartItems,
    contact,
    currentUser,
    totalInclTax, 
    addressComplete, 
    paymentComplete, 
    contactComplete,
    orderSuccessHidden,
    toggleOrderSuccessHidden,
    clearUserInput,
    setCartItems }) => {
    
    const stripe = useStripe();
    const elements = useElements();
    const [ paymentError, setPaymentError ] = useState('');
    const [orderId, setOrderId] = useState('');

    const handleSubmit = async () => {
        if(!stripe || !elements) return;
        const card = elements.getElement(CardElement);
        const stripePrice = totalInclTax * 100;

        try {
            const result = await stripe.createToken(card);
            const response = await axios.post('/payments', {
                token: result.token,
                amount: stripePrice
            });

            if(response.status === 200) {
                setPaymentError('');
                const uid = currentUser? currentUser.uid: null;
                const oid = await createOrderDoc(cartItems, address, contact, uid, response.data.success.id);

                if(oid) {
                    setOrderId(oid);
                    toggleOrderSuccessHidden();
                    clearUserInput();
                    setCartItems([]);
                    card.clear();
                }
            }
            
        } catch(err) {
            setPaymentError('Your payment didn\'t go through. Please try again');
            console.log('Failed to complete payment:', err.message);
        }
    }

    return (
        <div className='orderpage'>
            <GoToAction linkUrl='/checkout' label='Back to Cart'/>
            {paymentError? <div className='error-msg'>{paymentError}</div>: ''}
            <div className='orderpage__info'>
                <section className='left-section'>
                    <UserContactContainer/>
                    <AddressContainer/>
                </section>
                <div className='vert-divider'/>
                <section className='right-section'>
                    <PaymentContainer/>
                    <CustomButton
                        label={`PLACE ORDER - $${totalInclTax}`}
                        handleClick={handleSubmit}
                        disabled={!addressComplete || !paymentComplete || !contactComplete ||totalInclTax === 0 }/>
                </section>
            </div>
            {orderSuccessHidden? '':
                <OrderSuccessContainer orderId={orderId}/>}
        </div>
)};

const mapStateToProps = state => ({
    totalInclTax: selectCartTotals(state)[2],
    cartItems: selectCartItems(state),
    currentUser: selectCurrentUser(state), 
    address: selectAddress(state),
    contact: selectContact(state),
    addressComplete: selectAddressComplete(state),
    paymentComplete: selectPaymentComplete(state),
    contactComplete: selectContactComplete(state),
    orderSuccessHidden: selectOrderSuccessHidden(state)
});

const mapDispatchToProps = dispatch => ({
    toggleOrderSuccessHidden: () => dispatch(toggleOrderSuccessHidden()),
    clearUserInput: () => dispatch(clearUserInput()),
    setCartItems: items => dispatch(setCartItems(items))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);