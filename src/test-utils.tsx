import React, { FC, ReactElement } from 'react';
import { Matcher, render, RenderOptions, RenderResult, SelectorMatcherOptions, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'src/assets/styles/theme';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, rootSaga } from 'src/redux/store';
import { createMemoryHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { Question } from './redux/SystemState';

// Wrap app in necessary providers for test
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult => {
  const history = createMemoryHistory();

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer(history),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([sagaMiddleware, routerMiddleware(history)]),
  });

  const muiCache = createCache({
    key: 'mui',
    prepend: true,
  });

  sagaMiddleware.run(rootSaga);

  const Wrapper: FC = ({ children }) => {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CacheProvider value={muiCache}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </CacheProvider>
        </ConnectedRouter>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

export const expectQuestionDisplaysCorrectly = (
  frontCard: HTMLElement,
  getTitleText: (id: Matcher, options?: SelectorMatcherOptions | undefined) => HTMLElement,
  expectedQuestion: Question
): void => {
  expect(frontCard).toBeVisible();
  expect(getTitleText(expectedQuestion.category)).toBeInTheDocument();
  expect(within(frontCard).getByText(expectedQuestion.question)).toBeInTheDocument();

  // Ensure answer buttons are available
  expect(within(frontCard).getByText('True')).toBeInTheDocument();
  expect(within(frontCard).getByText('False')).toBeInTheDocument();
};

export * from '@testing-library/react';
export { customRender as render };
