import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as actions from '../actions';

class AuthLoadingScreen extends Component {
  componentDidMount() {
    this.bootstrapAsync();
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.isLoggedIn) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    await this.props.getToken();
    //this.props.getClues();
    //await this.props.getToken();
    //console.log(userToken);
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    //this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
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
  const { isLoggedIn, token } = auth;

  return { isLoggedIn, token };
};

export default connect(mapStateToProps, actions)(AuthLoadingScreen);
