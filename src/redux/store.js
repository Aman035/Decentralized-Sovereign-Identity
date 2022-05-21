import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import User from './reducers/user';
import Auth from './reducers/auth';
import Alert from './reducers/alert';
import Issuer from './reducers/issuer';
// import logger from 'redux-logger';

const store = createStore(
  combineReducers({
    User: User,
    Auth: Auth,
    Alert: Alert,
    Issuer: Issuer
  }),
  applyMiddleware(thunk)
);

export default store;