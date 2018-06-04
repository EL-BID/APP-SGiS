import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './reducers';
import { middleware } from './utils';

const middleWare = [];
middleWare.push(thunk);
middleWare.push(middleware);

let composeEnhansers = compose;
if ( __DEV__ ) {
  composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  AppReducer,
  composeEnhansers(
    applyMiddleware(...middleWare)
  )
);

export default store;
