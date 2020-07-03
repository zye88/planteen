import ShopActionTypes from './shop.types';

const shopReducer = (state = {}, action) => {
    switch(action.type) {
        case ShopActionTypes.UPDATE_CATEGORY:
            return {
                ...state,
                [action.key]: action.value
            };
        default:
            return state;
    }
}

export default shopReducer;