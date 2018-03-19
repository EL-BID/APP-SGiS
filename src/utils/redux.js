import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  'app',
  state => state.nav,
);
const addListener = createReduxBoundAddListener('app');

export {
  middleware,
  addListener,
};
