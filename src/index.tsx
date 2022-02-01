import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from 'src/redux/store';
import 'src/assets/styles/fonts.scss';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'src/assets/styles/theme';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CacheProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
