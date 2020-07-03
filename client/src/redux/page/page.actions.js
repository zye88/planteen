import PageActionTypes from './page.types';

export const setPageData = (page, data) => ({
    type: PageActionTypes.SET_PAGE_DATA,
    page, 
    data
});