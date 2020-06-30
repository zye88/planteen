import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './orderpage.styles.css';

import { connect } from 'react-redux';
import { selectCartTotals, selectCartItems } from '../../redux/cart/cart.selectors';

import AddressContainer from '../../components/address-container/address-container.component';
import OrderSummary from '../../components/order-summary/order-summary.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const OrderPage = ({totalInclTax, cartItems}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async e => {
        e.preventDefault();
        // if (!stripe || !elements) return;
    
        // const cardElement = elements.getElement(CardElement);
    
        // const {error, paymentMethod} = await stripe.createPaymentMethod({
        //   type: 'card',
        //   card: cardElement,
        // });
    
        // if (error) console.log('[error]', error);
        // else console.log('[PaymentMethod]', paymentMethod);
      };

    // useEffect(() => {
    //     if (stripe) {
    //     const pr = stripe.paymentRequest({
    //         country: 'CA',
    //         currency: 'cad',
    //         total: 
    //             {
    //                 label: 'Order total',
    //                 amount: totalInclTax * 100
    //             }
    //     });

    //     pr.canMakePayment().then(result => {
    //         if (result) {
    //             setPaymentRequest(pr);
    //             console.log('result', result);
    //         }
    //       });
    //     }
    // }, [stripe, cartItems]);

    return (
        <div className='orderpage'>
            <section>
                <div className='shipping-address'>
                    <h2>Shipping Address</h2>
                    <AddressContainer/>
                </div>
                <div className='payment-info'>
                    <h2>Payment Information</h2>
                    <div className='test-credit-card'>
                        <span>To test payments, use any of the test credit cards below, any CVC number, and a card expiry date in the future</span>
                        <ul>
                            <li>AMEX: 378282246310005</li>
                            <li>Visa: 4111111111111111</li>
                            <li>Mastercard: 5105105105105100</li>
                        </ul>
                    </div>
                    <CardElement options={{
                        style: {
                            base: {
                                fontFamily: 'Quicksand, sans-serif',
                                '::placeholder': {
                                    fontFamily: 'Quicksand, sans-serif',
                                    fontWeight: '400'
                                }
                            },
                        },
                        }}/>
                </div>
            </section>
            <section className='summary-section'>
                <h2>Order Summary</h2>
                <OrderSummary/>
                <CustomButton
                    label='PLACE ORDER'
                    handleClick={() => {}}/>
            </section>
        </div>
)};

const mapStateToProps = state => ({
    totalInclTax: selectCartTotals(state)[2],
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(OrderPage);