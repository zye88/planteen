import { createSelector } from 'reselect';

const selectShipping = state => state.shipping;

export const selectAddress = createSelector(
    [selectShipping],
    shipping => shipping.address
);

export const selectRequiredProvided = createSelector(
    [selectAddress],
    address => address.fullName !== '' && 
                address.addressLine1 !== '' &&
                address.city !== '' &&
                address.postalCode!== '' &&
                address.province!== ''
);