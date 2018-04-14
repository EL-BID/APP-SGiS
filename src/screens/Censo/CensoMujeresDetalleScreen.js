import React, { Component } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

class CensoMujeresDetalleScreen extends Component {
  render() {
    const { censo } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#303F9F" animated barStyle="light-content" /> 
        <Card title={`${censo.nombre} ${censo.paterno} ${censo.materno}`}>
          <View key={censo.id} style={styles.user}>
            <Text style={styles.name}>{`CURP: ${censo.id}`}</Text>
            <Text style={styles.name}>{`Telefono: ${censo.telefono}`}</Text>
            <Text style={styles.name}>{`${censo.derechohabientes.nombre}`}</Text>
            <Text style={styles.name}>{`${censo.fecha_nacimiento}`}</Text>
            <Text style={styles.name}>{`Domicilio: ${censo.domicilio}`}</Text>
            <Text style={styles.name}>{`${censo.localidades.nombre}`}</Text>
            <Text style={styles.name}>{`${censo.municipios.nombre}`}</Text>
          </View>
        </Card>
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

export default CensoMujeresDetalleScreen;
