import CartActionTypes from './cart.types';
import UserActionTypes from '../user/user.types';
import { addItem, removeItem, clearItem, updateCartStorage } from './cart.utils';

const INITIAL_STATE = {
    cartItems: [],
    userId: null
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.SET_CART_ITEMS:
            updateCartStorage(state.userId, action.cartItems);
            return {
                ...state,
                cartItems: action.cartItems
            };
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItem(action.item, state.cartItems, state.userId)
            }
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItem(action.id, state.cartItems, state.userId)
            }
        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: clearItem(action.id, state.cartItems, state.userId)
            }
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                cartItems: action.user? state.cartItems: [],
                userId: action.user? action.user.uid: null
            }
        default:
            return state;
    }
}

export default cartReducer;