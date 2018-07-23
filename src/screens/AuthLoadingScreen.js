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
    await this.props.getUser();
    await this.props.getClues();
  };

  /**
   * Funcion del ciclo de vida React 
   * renderiza la vista para que se muestre en pantalla
   * 
   * @returns
   * @memberof AuthLoadingScreen
   */
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

/**
 * Se llama de la biblioteca de react-redux proporciona 
 * una forma conveniente de acceder al estadod e la aplicación
 *
 * @param {*} { auth }
 * @returns isSelectClues, token, clues
 */
const mapStateToProps = ({ auth }) => {
  const { isSelectClues, token, clues, usuario } = auth;

  return { isSelectClues, token, clues, usuario };
};

export default connect(mapStateToProps, actions)(AuthLoadingScreen);
