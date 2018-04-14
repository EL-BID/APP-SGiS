import React, { Component } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

class IncidenciaDetalleScreen extends Component {
  render() {
    const { incidencia } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#303F9F" animated barStyle="light-content" /> 
        <Card title={`${incidencia.pacientes[0].personas.nombre} ${incidencia.pacientes[0].personas.paterno} ${incidencia.pacientes[0].personas.materno} (${incidencia.pacientes[0].personas.edad} años)`}>
          <View key={incidencia.id} style={styles.user}>
            <Text style={styles.name}>{`${incidencia.pacientes[0].personas.id}`}</Text>
            <Text style={styles.name}>{`${incidencia.pacientes[0].personas.telefono}`}</Text>
            <Text style={styles.name}>{`Domicilio: ${incidencia.pacientes[0].personas.domicilio}`}</Text>
            <Text style={styles.name}>{`${incidencia.pacientes[0].personas.localidades.nombre}`}</Text>
            <Text style={styles.name}>{`${incidencia.pacientes[0].personas.municipios.nombre}`}</Text>
          </View>
        </Card>
        <Card title={'Datos del responsable'}>
        <View key={incidencia.id} style={styles.user}>
          <Text style={styles.name}>{`${incidencia.pacientes[0].acompaniantes[0].personas.nombre}`}</Text>
          <Text style={styles.name}>{`${incidencia.pacientes[0].personas.telefono}`}</Text>
          <Text style={styles.name}>{`Domicilio: ${incidencia.pacientes[0].personas.domicilio}`}</Text>
          <Text style={styles.name}>{`${incidencia.pacientes[0].personas.localidades.nombre}`}</Text>
          <Text style={styles.name}>{`${incidencia.pacientes[0].personas.municipios.nombre}`}</Text>
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

export default IncidenciaDetalleScreen;
