import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import User from './reducers/user';
import Auth from './reducers/auth';
import Alert from './reducers/alert';
// import logger from 'redux-logger';

const store = createStore(
  combineReducers({
    User: User,
    Auth: Auth,
    Alert: Alert
  }),
  applyMiddleware(thunk)
);

export default store;