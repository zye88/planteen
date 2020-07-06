import { createSelector } from 'reselect';
import { toTwoDecimals } from './cart.utils';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartTotals = createSelector(
    [selectCartItems],
    cartItems => {
        const total = toTwoDecimals(cartItems.reduce((acc, item) => 
            acc + item.price * item.quantity, 0));
        const tax = toTwoDecimals(total * .13);
        return [total, tax, toTwoDecimals(total + tax)];
    }
)