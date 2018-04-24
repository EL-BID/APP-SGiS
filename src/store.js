import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import navigationDebouncer from 'react-navigation-redux-debouncer';
import { createLogger } from 'redux-logger';

import AppReducer from './reducers';
import { middleware } from './utils/redux';

const middleWare = [];
middleWare.push(thunk);
middleWare.push(middleware);
//middleWare.push(navigationDebouncer(100));

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware);

const store = createStore(AppReducer, compose(
    applyMiddleware(...middleWare)
));

export default store;
