import { createSelector }  from 'reselect';

const selectPage = state => state.page;

export const selectPageData = pageName => createSelector(
    [selectPage],
    page => page[pageName]
);