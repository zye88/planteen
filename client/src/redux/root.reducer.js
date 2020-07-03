import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';
import orderReducer from './order/order.reducer';
import pageReducer from './page/page.reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer,
    user: userReducer,
    order: orderReducer,
    page: pageReducer
});

export default rootReducer;