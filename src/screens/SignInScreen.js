import React, { Component } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FormInput, Button } from 'react-native-elements';
import { Spinner } from '../components/Spinner';

import * as actions from '../actions';

class SingInScreen extends Component {
  getDerivedStateFromProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.isLoggedIn) {
      //this.props.navigation.navigate('selectClues');
    }
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

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
        source={require('../../assets/images/fmovil.png')}
        style={styles.container}
      >
        <View>
          <Image
            style={styles.logoStyle}
            source={require('../../assets/images/logo.png')}
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
