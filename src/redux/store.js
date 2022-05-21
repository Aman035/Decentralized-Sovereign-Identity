import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const store = createStore(
    combineReducers({}),
    applyMiddleware(thunk)
);

export default store;