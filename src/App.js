import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppWithNavigationState from '../src/navigators/AppWithNavigationState';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
