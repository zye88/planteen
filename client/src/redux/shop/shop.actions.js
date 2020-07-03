import ShopActionTypes from './shop.types';

export const updateCategoryData = (key, value) => ({
    type: ShopActionTypes.UPDATE_CATEGORY,
    key, 
    value
});