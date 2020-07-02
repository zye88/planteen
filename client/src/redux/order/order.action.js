import OrderActionTypes from './order.types';

export const setAddress = address => ({
    type: OrderActionTypes.SET_ADDRESS,
    address
});

export const setContact = contact => ({
    type: OrderActionTypes.SET_CONTACT,
    contact
});

export const setPaymentComplete = complete => ({
    type: OrderActionTypes.SET_COMPLETE_PAYMENT,
    complete
});

export const toggleOrderSuccessHidden = () => ({
    type: OrderActionTypes.TOGGLE_ORDER_SUCCESS_HIDDEN
});

export const clearUserInput = () => ({
    type: OrderActionTypes.CLEAR_USER_INPUT
});
