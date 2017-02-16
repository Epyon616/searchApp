import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as searchReducer } from 'redux-search';
import usersReducer from './userReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  users: usersReducer,
});

export default rootReducer;
