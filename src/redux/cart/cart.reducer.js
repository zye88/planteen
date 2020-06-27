import CartActionTypes from './cart.types';
import { addItem, removeItem, clearItem } from './cart.utils';

const INITIAL_STATE = {
    cartHidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return { 
                ...state, 
                cartHidden: !state.cartHidden};
        case CartActionTypes.SET_CART:
            return {
                ...state,
                cartItems: action.cartItems
            };
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItem(action.item, state.cartItems)
            }
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItem(action.id, state.cartItems)
            }
        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: clearItem(action.id, state.cartItems)
            }
        default:
            return state;
    }
}

export default cartReducer;