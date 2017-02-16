import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import usersReducer from './userReducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
