import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './order-success-container.styles.css';

import { connect } from 'react-redux';
import { toggleOrderSuccessHidden } from '../../redux/order/order.action';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const OrderSuccess = ({ orderId, toggleOrderSuccesHidden, currentUser }) => (
    <div className='order-success-container'>
        <div className='success-modal'>
            <h2>Your order has been processed!</h2>
            <span>Your order {orderId} will be shipped to you within 5-10 business days.</span>
            <div className='btn-container'>
                {currentUser? <CustomButton
                    label='View Order'
                    linkUrl=''
                    handleClick={toggleOrderSuccesHidden}/>:''}
                <CustomButton
                    label='Go Back To Home'
                    linkUrl='/'
                    handleClick={toggleOrderSuccesHidden}/>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleOrderSuccesHidden: () => dispatch(toggleOrderSuccessHidden())
});

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccess);