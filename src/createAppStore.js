import { applyMiddleware, combineReducers, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import initialState from './reducers/initialState';
import { reduxSearch } from 'redux-search';
import thunk from 'redux-thunk';

export default function createAppStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
    reduxSearch({
      resourceIndexes: {
        users: ['firstName', 'lastName', 'email'],
      },
      resourceSelector: (resourceName, state) => {
        return state.resources.get(resourceName);
      }
    })
  );
}
