import CartActionTypes from './cart.types';
import { removeItem, addItem } from './cart.utils';

const INITIAL_STATE = {
    cartHidden: false,
    cartItems: [{ id: 0,
                name: 'fiddle fig leaf',
                image: 'fiddle-leaf-fig.jpg',
                price: 35,
                count: 1}],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return { 
                ...state, 
                cartHidden: !state.cartHidden};
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            };
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItem(action.payload, state.cartItems)
            }
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItem(action.payload, state.cartItems)
            }
        default:
            return state;
    }
}

export default cartReducer;