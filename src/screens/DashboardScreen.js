import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ backgroundColor: '#303F9F' }}
          centerComponent={{ text: 'DASHBOARD', style: { color: '#fff' } }}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  }
};

export default DashboardScreen;
