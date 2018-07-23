import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addListener } from '../redux/utils';
import AppNavigator from './AppNavigator';

/**
 * Clase que sirve para añadir redux a la navegacion de la APP
 *
 * @class AppWithNavigationState
 * @extends {Component}
 */
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

/**
 * Se llama de la biblioteca de react-redux proporciona 
 * una forma conveniente de acceder al estadod e la aplicación
 *
 * @param {*} state
 */
const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
