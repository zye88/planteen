import CartActionTypes from './cart.types';
import UserActionTypes from '../user/user.types';
import { addItem, removeItem, clearItem } from './cart.utils';

const INITIAL_STATE = {
    cartHidden: true,
    cartItems: [],
    userUid: null
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
                cartItems: addItem(action.item, state.cartItems, state.userUid)
            }
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItem(action.id, state.cartItems, state.userUid)
            }
        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: clearItem(action.id, state.cartItems, state.userUid)
            }
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                cartItems: action.user? state.cartItems: [],
                userUid: action.user? action.user.uid: null
            }
        default:
            return state;
    }
}

export default cartReducer;