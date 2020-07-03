import PageActionTypes from './page.types';

const pageReducer = (state={}, action) => {
    switch (action.type) {
        case PageActionTypes.SET_PAGE_DATA:
            return {
                ...state,
                [action.page]: action.data
            };
        default:
            return state;
    }
};

export default pageReducer;