import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import './orderpage.styles.css';
import AddressContainer from '../../components/address-container/address-container.component';
import OrderSummary from '../../components/order-sumary/order-summary.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const OrderPage = () => (
    <div className='orderpage'>
        <section>
            <div className='shipping-address'>
                <h2>Shipping Address</h2>
                <AddressContainer/>
            </div>
            <div className='payment-info'>
                <h2>Payment Information</h2>
                <CardElement/>
            </div>
        </section>
        <section className='summary-section'>
            <h2>Order Summary</h2>
            <OrderSummary/>
            <CustomButton
                label='PLACE ORDER' 
                handleClick={()=> {}}/>
        </section>
    </div>
);

export default OrderPage;