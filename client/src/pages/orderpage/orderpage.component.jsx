import React from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './orderpage.styles.css';

import { connect } from 'react-redux';
import { selectCartTotals } from '../../redux/cart/cart.selectors';
import { selectCompleteAddress, selectPaymentComplete } from '../../redux/order/order.selectors';

import AddressContainer from '../../components/address-container/address-container.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import PaymentContainer from '../../components/payment-container/payment-container.components';
import GoToAction from '../../components/go-to-action/go-to-action.component';

const OrderPage = ({totalInclTax, completeAddress, completePayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async () => {
        if(!stripe || !elements) return;
        const card = elements.getElement(CardElement);
        const stripePrice = totalInclTax * 100;

        try {
            const result = await stripe.createToken(card);
            const res = await axios.post('http://localhost:5000/payments', {
                token: result.token,
                amount: stripePrice
            });
            
            console.log('successfull:', res);
        } catch(err) {
            console.log('Failed to complete payment:', err.message);
        }
    }

    return (
        <div className='orderpage'>
            <GoToAction linkUrl='/checkout' label='Back to Cart'/>
            <section className='input-section'>
                <AddressContainer/>
                <div className='vert-divider'/>
                <PaymentContainer/>
            </section>
            <CustomButton
                label={`PLACE ORDER - $${totalInclTax}`}
                handleClick={handleSubmit}
                disabled={!completeAddress || !completePayment || totalInclTax === 0 }/>
        </div>
)};

const mapStateToProps = state => ({
    totalInclTax: selectCartTotals(state)[2],
    completeAddress: selectCompleteAddress(state),
    completePayment: selectPaymentComplete(state)
});

export default connect(mapStateToProps)(OrderPage);