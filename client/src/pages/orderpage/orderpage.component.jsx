import React from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './orderpage.styles.css';

import { connect } from 'react-redux';
import { selectCartTotals } from '../../redux/cart/cart.selectors';
import { selectRequiredProvided } from '../../redux/shipping/shipping.selectors';

import AddressContainer from '../../components/address-container/address-container.component';
import OrderSummary from '../../components/order-summary/order-summary.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import PaymentContainer from '../../components/payment-container/payment-container.components';

const OrderPage = ({totalInclTax, requiredProvided}) => {
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
            <section>
                <AddressContainer/>
                <PaymentContainer/>
            </section>
            <section className='summary-section'>
                <h2>Order Summary</h2>
                <OrderSummary/>
                <CustomButton
                    label='PLACE ORDER'
                    handleClick={handleSubmit}
                    disabled={!requiredProvided}/>
            </section>
        </div>
)};

const mapStateToProps = state => ({
    totalInclTax: selectCartTotals(state)[2],
    requiredProvided: selectRequiredProvided(state)
});

export default connect(mapStateToProps)(OrderPage);