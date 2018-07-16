import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FormInput, Button } from 'react-native-elements';
import { Spinner } from '../../resources/components/Spinner';

import * as actions from '../../redux/actions';

/**
 * Pantalla de Inicio de Sesión
 *
 * @class SingInScreen
 * @extends {Component}
 */
class SingInScreen extends Component {
  /**
   * Funcion del ciclo de vida React
   * se manda a llamar al momento que se detectan nuevos cambios 
   * en las props
   * 
   * @param {*} nextProps
   * @memberof SingInScreen
   */
  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  /**
   * Funcion que sirve para el inicio de sesión
   * del usuario y enviarlo a la pantalla seleccionar clues
   *
   * @param {*} props
   * @memberof SingInScreen
   */
  onAuthComplete(props) {
    if (props.isLoggedIn) {
      this.props.navigation.navigate('SelectClues');
    }
  }

  /**
   * Funcion que detecta el cambio en el formulario de Email
   *
   * @param {*} text
   * @memberof SingInScreen
   */
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario de Contraseña
   *
   * @param {*} text
   * @memberof SingInScreen
   */
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  /**
   * Funcion que sirve para enviar los datos del usuarioa ingresados
   * y realizar el inicio de sesión
   *
   * @memberof SingInScreen
   */
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        small
        title="INGRESAR"
        backgroundColor="#FF4081"
        onPress={this.onButtonPress.bind(this)}
      />
    );
  }

  render() {
    return (
      <ImageBackground
        source={require('../../resources/images/fmovil.png')}
        style={styles.container}
      >
        <StatusBar backgroundColor="#303F9F" barStyle="light-content" />
        <View>
          <Image
            style={styles.logoStyle}
            source={require('../../resources/images/logo.png')}
          />

          <View>
            <FormInput
              inputStyle={styles.inputStyle}
              placeholderTextColor="white"
              placeholder="Usuario"
              underlineColorAndroid="#FF4081"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <FormInput
              inputStyle={styles.inputStyle}
              placeholderTextColor="white"
              placeholder="Contraseña"
              underlineColorAndroid="#FF4081"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </View>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          {this.renderButton()}
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  inputStyle: {
    color: 'white',
    fontSize: 18
  },
  labelStyle: {
    color: 'white',
    fontSize: 18
  },
  logoStyle: {
    alignSelf: 'center',
    width: 300,
    height: 300
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, isLoggedIn } = auth;

  return { email, password, error, loading, isLoggedIn };
};

export default connect(mapStateToProps, actions)(SingInScreen);
