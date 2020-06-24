import CartActionTypes from './cart.types';
import { addItem, removeItem } from './cart.utils';

const INITIAL_STATE = {
    cartHidden: true,
    cartItems: [{
        id: 0,
        name: 'Fiddle Leaf Fig 0',
        price: 30,
        image: 'fiddle-leaf-fig.jpg',
        quantity: 1
    }]
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
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItem(action.id, state.cartItems)
            }
        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
}

export default cartReducer;