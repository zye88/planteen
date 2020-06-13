import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    cartHidden: true,
    cartItems: [1, 2, 3],
    cartCount: 3
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return { ...state, 
                    cartHidden: !state.cartHidden};
        default:
            return state;
    }
}

export default cartReducer;