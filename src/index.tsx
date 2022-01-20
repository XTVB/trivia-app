import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from 'src/redux/store';
import 'src/assets/styles/index.scss';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
