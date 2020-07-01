import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import './payment-container.styles.css';

const PaymentContainer = () => {
    return (
        <div className='payment-container'>
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
        )
    };

export default PaymentContainer;