import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import User from './reducers/user';
// import logger from 'redux-logger';

const store = createStore(
  combineReducers({
      User : User,
    }),
    applyMiddleware(thunk)
);

export default store;