import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    item
});

export const removeCartItem = id => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    id
});

export const clearCartItem = id => ({
    type: CartActionTypes.CLEAR_CART_ITEM,
    id
});

export const setCartItems = cartItems => ({
    type: CartActionTypes.SET_CART_ITEMS,
    cartItems
})