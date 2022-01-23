import { systemSlice } from './slice';
import rootSaga from './saga';
import { createAction } from '@reduxjs/toolkit';
import { BeginQuizPayload, StoreResultsPayload } from './models';

export { rootSaga as systemStateSaga };

export * from './selectors';
export * from './models';

export const { name, reducer: systemStateReducer, actions } = systemSlice;
export const { setTitle, setAlertMessage, setCurrentQuestions, setCurrentResults, setPastResults } = actions;

export const beginQuiz = createAction<BeginQuizPayload>('beginQuiz');
export const saveResultsAndNavigateToPage = createAction<StoreResultsPayload>('saveResultsAndNavigateToPage');
export const initiatePastResults = createAction('initiatePastResults');
