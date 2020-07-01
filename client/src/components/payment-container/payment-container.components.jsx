import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import './payment-container.styles.css';

import { connect } from 'react-redux';
import { setPaymentComplete } from '../../redux/order/order.action';

const PaymentContainer = ({setPaymentComplete}) => {

    const handleChange = e => {
        setPaymentComplete(e.complete);
    }

    return (
        <div className='payment-container'>
            <h2>Payment Information</h2>
            <div className='test-credit-card'>
                <span>To test payments, use any of the test credit cards below, any CVC number, a card expiry date in the future, and any US zipcode with 5 digits.<br/><br/>ALL FIELDS ARE REQUIRED.
                </span>
                <ul>
                    <li>AMEX: 378282246310005</li>
                    <li>Visa: 4242424242424242</li>
                    <li>Mastercard: 5555555555554444</li>
                </ul>
            </div>
            <CardElement 
                onChange={handleChange}
                options={{
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

const mapDispatchToProps = dispatch => ({
    setPaymentComplete: complete => dispatch(setPaymentComplete(complete))
});

export default connect(null, mapDispatchToProps)(PaymentContainer);