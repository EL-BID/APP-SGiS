import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';

class EstadoFuerzaScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: <Button title="Menu" onPress={() => { navigation.navigate('DrawerToggle'); }} />,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen1
        </Text>
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

export default EstadoFuerzaScreen;
