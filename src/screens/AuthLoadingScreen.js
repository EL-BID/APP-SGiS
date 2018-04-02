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
    if (props.isSelectClues) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    await this.props.getToken();
    await this.props.getClues();
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
  const { isSelectClues, token, clues } = auth;

  return { isSelectClues, token, clues };
};

export default connect(mapStateToProps, actions)(AuthLoadingScreen);
