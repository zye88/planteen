import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';
import shippingReducer from './shipping/shipping.reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer,
    user: userReducer,
   shipping: shippingReducer
});

export default rootReducer;