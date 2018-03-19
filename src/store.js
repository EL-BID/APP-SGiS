import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import AppReducer from './reducers';
import { middleware } from './utils/redux';

const middleWare = [];
middleWare.push(thunk);
middleWare.push(middleware);

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware);

const store = createStore(AppReducer, compose(
    applyMiddleware(...middleWare)
));

export default store;
