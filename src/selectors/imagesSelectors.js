import { createSelector } from 'reselect';
// selector
const getMainImagesState = state => state.images;
// reselect function
export const getImagesState = createSelector(
    [getMainImagesState],
    images => images,
);