import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.cartHidden
);

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);