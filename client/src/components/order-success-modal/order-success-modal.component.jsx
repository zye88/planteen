import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './order-success-modal.styles.css';

const OrderSuccessModal = ({ orderId}) => (
    <div className='success-modal'>
        <h2>Your order has been processed!</h2>
        <span>Your order {orderId} will be shipped to you within 5-10 business days.</span>
        <div className='btn-container'>
            <CustomButton
                label='Go Back To Home'
                linkUrl='/'/>
        </div>
    </div>
);

export default OrderSuccessModal;