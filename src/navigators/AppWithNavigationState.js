import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addListener } from '../redux/utils';
import AppNavigator from './AppNavigator';

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator 
        navigation={{
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        }} 
      />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
