import React from 'react';
import {Route, IndexRoute} from 'react-router';
import HomePage from './components/home/HomePage';
import UsersPage from './components/users/Users';

export default (
  <Route>
    <Route name="Home" path="/">
      <IndexRoute component={HomePage} />
    </Route>
    <Route name="Users" path="users">
      <IndexRoute component={UsersPage} />
    </Route>
  </Route>
);
