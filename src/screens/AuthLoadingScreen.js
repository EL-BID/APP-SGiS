import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as actions from '../redux/actions';

/**
 * Pantalla de carga que sirve para verificar si el usuario esta logueado o no
 *
 * @class AuthLoadingScreen
 * @extends {Component}
 *
 */
class AuthLoadingScreen extends Component {
  /**
   * Funcion del ciclo de vida React 
   * se manda a llamar despues de renderizar el componente
   * 
   * @memberof AuthLoadingScreen
   */
  componentDidMount() {
    this.bootstrapAsync();
  }

  /**
   * Funcion del ciclo de vida React
   * se manda a llamar al momento que se detectan nuevos cambios 
   * en las props
   * 
   * @param {*} nextProps
   * @memberof AuthLoadingScreen
   */
  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  /**
   * Funcion que sirve para verificar si el usuario esta logueado o no
   * viendo si tiene seleccionada una clues
   *
   * @param {*} props
   * @memberof AuthLoadingScreen
   */
  onAuthComplete(props) {
    if (props.isSelectClues) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  /**
   * Funcion que sirve para obtener el token y la clues del usuario
   *
   * @memberof AuthLoadingScreen
   */
  bootstrapAsync = async () => {
    await this.props.getToken();
    await this.props.getClues();
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = ({ auth }) => {
  const { isSelectClues, token, clues } = auth;

  return { isSelectClues, token, clues };
};

export default connect(mapStateToProps, actions)(AuthLoadingScreen);
