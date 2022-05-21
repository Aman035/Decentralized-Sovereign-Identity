import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import User from './reducers/user';
import Auth from './reducers/auth';
// import logger from 'redux-logger';

const store = createStore(
  combineReducers({
    User: User,
    Auth: Auth,
    }),
    applyMiddleware(thunk)
);

export default store;