import { applyMiddleware, combineReducers, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import initialState from './reducers/initialState';
import thunk from 'redux-thunk';

export default function createAppStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
}
