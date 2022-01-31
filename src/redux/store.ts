import { createSelectorHook, useDispatch } from 'react-redux';
import { all, fork } from 'typed-redux-saga';
import { systemStateReducer, systemStateSaga } from './SystemState';
import { configureStore } from '@reduxjs/toolkit';
import { History, createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

function* rootSaga() {
  yield* all([fork(systemStateSaga)]);
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    loadingBar: loadingBarReducer,
    systemState: systemStateReducer,
  });

export const history = createBrowserHistory();

const store = configureStore({
  reducer: rootReducer(history),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([sagaMiddleware, routerMiddleware(history)]),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector = createSelectorHook<RootState>();

export default store;
