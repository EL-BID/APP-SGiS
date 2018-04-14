import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../resources/styles/colors';

class IncidenciaCameraScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: <MaterialIcons name='menu' style={styles.iconStyle} onPress={() => { navigation.navigate('DrawerOpen'); }} />,
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Text style={styles.welcome}>
          Clues
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

export default IncidenciaCameraScreen;
