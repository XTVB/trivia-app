import { systemSlice } from './slice';
import rootSaga from './saga';

export { rootSaga as systemStateSaga };

export * from './selectors';
export * from './models';

export const { name, reducer: systemStateReducer, actions } = systemSlice;
export const { setTitle, setAlertMessage, beginQuiz, setCurrentQuestions, setCurrentResults } = actions;
