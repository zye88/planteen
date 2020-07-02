import { createSelector } from 'reselect';

const selectOrder = state => state.order;

export const selectAddress = createSelector(
    [selectOrder],
    order => order.address
);

export const selectContact = createSelector(
    [selectOrder],
    order => order.contact
);

export const selectOrderSuccessHidden = createSelector(
    [selectOrder],
    order => order.successHidden
)

export const selectContactComplete = createSelector(
    [selectContact],
    contact => contact.email !== ''
);

export const selectAddressComplete = createSelector(
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