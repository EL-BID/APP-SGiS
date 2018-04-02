import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';

class IncidenciaDetalleScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#303F9F" animated barStyle="light-content" /> 
        <Text style={styles.welcome}>
          {this.props.navigation.state.params.incidencia.id}
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  iconStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 30
  }
};

export default IncidenciaDetalleScreen;
