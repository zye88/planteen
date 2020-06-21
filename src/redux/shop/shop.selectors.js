import { createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCategory = category => createSelector(
    [selectShop],
    shop => shop[category]
);

export const selectProductDetails = (category, id) =>  createSelector(
    [selectShop],
    shop => shop[category].items.find(product => product.id === parseInt(id))
)