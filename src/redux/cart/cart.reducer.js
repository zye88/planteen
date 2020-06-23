import CartActionTypes from './cart.types';
import { updateItem, addItem } from './cart.utils';

const INITIAL_STATE = {
    cartHidden: true,
    cartItems: [{ id: 0,
                name: 'fiddle fig leaf',
                image: 'fiddle-leaf-fig.jpg',
                price: 35,
                quantity: 1}]
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
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItem(action.item, state.cartItems)
            }
        case CartActionTypes.UPDATE_CART_ITEM:
            return {
                ...state,
                cartItems: updateItem(action.id, action.quantity, state.cartItems)
            }
        case CartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;