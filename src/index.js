import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import createAppStore from './createAppStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import { fetchUsers } from './actions/userActions';

const store = createAppStore();
store.dispatch(fetchUsers());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
