import OrderActionTypes from './order.types';

export const setAddress = address => ({
    type: OrderActionTypes.SET_ADDRESS,
    address
});

export const setPaymentComplete = complete => ({
    type: OrderActionTypes.SET_COMPLETE_PAYMENT,
    complete
});