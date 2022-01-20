import { createSelector } from 'reselect';
import { RootState } from '../store';

const getSystemState = (state: RootState) => state.systemState;

export const getTitle = createSelector(getSystemState, (state) => state.title);

export const getAlertMessage = createSelector(getSystemState, (state) => state.alertMessage);

export const getCurrentQuestions = createSelector(getSystemState, (state) => state.currentQuestions);

export const getCurrentResults = createSelector(getSystemState, (state) => state.currentResults);
