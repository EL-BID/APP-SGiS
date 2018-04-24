import React, { Component } from 'react';
import { FlatList, StatusBar, ScrollView, Text, View } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import { Icon, SwipeRow, Button } from 'native-base';

class IncidenciaDetalleScreen extends Component {
  renderSeparator = () => (
    <View 
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
        //marginLeft: '14%'
      }}
    />
  );

  render() {
    const { incidencia } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.container}>
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
        <Card title="Atenciones">
          <List containerStyle={styles.listStyle}>
            <FlatList
              data={incidencia.movimientos_incidencias}
              renderItem={({ item }) => <SwipeRow
                body={
                  <View>
                    <Text style={styles.subtitleText}>{item.triage_colores.nombre} </Text>
                    <Text style={styles.subtitleText}>{item.triage_colores.nombre} </Text>
                  </View>
                }
              />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </List>
        </Card>
        <Card title="Referencias">
          <List containerStyle={styles.listStyle}>
            <FlatList
              data={incidencia.referencias}
              renderItem={({ item }) => <SwipeRow
                rightOpenValue={-75}
                body={
                  <View>
                    <Text style={{ paddingLeft: 15 }}>{item.value}</Text>
                  </View>
                }
                right={
                  <Button danger onPress={() => console.log('ok')}>
                    <Icon active name="camera" />
                  </Button>
                }
              />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </List>
        </Card>
        <Card title="Altas">
          <List containerStyle={styles.listStyle}>
            <FlatList
              data={incidencia.altas_incidencias}
              renderItem={({ item }) => <SwipeRow
                rightOpenValue={-75}
                body={
                  <View>
                    <Text style={{ paddingLeft: 15 }}>{item.value}</Text>
                  </View>
                }
                right={
                  <Button danger onPress={() => console.log('ok')}>
                    <Icon active name="camera" />
                  </Button>
                }
              />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </List>
        </Card>
      </ScrollView>
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
  },
  listStyle: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
};

export default IncidenciaDetalleScreen;
