import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    item
});

export const updateCartItem = (id, quantity) => ({
    type: CartActionTypes.UPDATE_CART_ITEM,
    id,
    quantity
});

export const removeCartItem = (id) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    id
});