import { createSelector } from 'reselect';

const selectOrder = state => state.order;

export const selectAddress = createSelector(
    [selectOrder],
    order => order.address
);

export const selectCompleteAddress = createSelector(
    [selectAddress],
    address => address.fullName !== '' && 
                address.addressLine1 !== '' &&
                address.city !== '' &&
                address.postalCode!== '' &&
                address.province!== ''
);

export const selectPaymentComplete = createSelector(
    [selectOrder],
    order => order.paymentComplete
);