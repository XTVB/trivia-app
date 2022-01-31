import { createSelector } from 'reselect';
import { RootState } from '../store';

const getSystemState = (state: RootState) => state.systemState;

export const getTitle = createSelector(getSystemState, (state) => state.title);

export const getAlertMessage = createSelector(getSystemState, (state) => state.alertMessage);

export const getCurrentQuizSetup = createSelector(getSystemState, (state) => state.currentQuizSetup);

export const getCurrentResults = createSelector(getSystemState, (state) => state.currentResults);

export const getPastResults = createSelector(getSystemState, (state) => state.pastResults);

export const getBaseCategoryList = createSelector(getSystemState, (state) => state.categoryList);

// Include option to select all categories, id=-1 isn't used by the api so we can reserve it and not send category if it's chosen
export const getCategoryList = createSelector(getBaseCategoryList, (list) => [
  {
    id: -1,
    name: 'Any',
  },
  ...list,
]);
