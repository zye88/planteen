import ShippingActionTypes from './shipping.types';

export const setAddress = address => ({
    type: ShippingActionTypes.SET_ADDRESS,
    address
});