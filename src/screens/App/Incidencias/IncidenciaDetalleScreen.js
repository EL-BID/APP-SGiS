import React, { Component } from 'react';
import { FlatList, StatusBar, ScrollView, Text, View } from 'react-native';
import { 
  Card, 
  Container, 
  Header, 
  Left, 
  Body, 
  Right, 
  List, 
  ListItem, 
  Icon, 
  Title, 
  Button, 
  SwipeRow, 
  CardItem 
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../resources/styles/colors';

/**
* Clase que crea la Pantalla donde se muestran los detalles de la incidencia
 *
 * @class IncidenciaDetalleScreen
 * @extends {Component}
 */
class IncidenciaDetalleScreen extends Component {
  /**
   * Funcion que sirve para navegar a la pantalla IncidenciaCamera
   * enviando los datos de la incidenca
   *
   * @memberof IncidenciaDetalleScreen
   */
  openScreenCamera = (referencia) => {
    const { incidencia } = this.props.navigation.state.params;
    const { impresion_diagnostica, motivo_ingreso, clues: cluesI, estados_incidencias_id } = incidencia;
    const { id: referenciaId, incidencias_id, multimedias } = referencia;
    
    this.props.navigation.navigate('IncidenciaCamera', { referenciaId, incidencias_id, multimedias, impresion_diagnostica, motivo_ingreso, cluesI, estados_incidencias_id });
  };

  /**
   * Funcion que sirve para renderizar cada item de la lista de Movimientos que trae el array
   * recibiendo el objeto item
   *
   * @memberof IncidenciaDetalleScreen
   */
  renderItemAtenciones = (item) => (
    <ListItem>
      <Body>
        <Text>Diagnostico: {item.subcategorias_cie10.nombre}</Text>
        <Text>Triage: {item.estados_pacientes.nombre}</Text>
      </Body>
    </ListItem>
  ); 

  /**
   * Funcion que sirve para renderizar cada item de la lista de Referencias que trae el array
   * recibiendo el objeto item
   *
   * @memberof IncidenciaDetalleScreen
   */
  renderItemReferencias = (item) => (
    <SwipeRow
      rightOpenValue={-75}
      body={
        <View>
          <Text>{item.clues_origen_o.nombre}</Text>
          <Text><Ionicons name="ios-arrow-dropright-circle-outline" size={15} /> {item.clues_destino_o.nombre}</Text>
        </View>
      }
      right={
        <Button danger onPress={() => this.openScreenCamera(item)}>
          <Icon active name="camera" />
        </Button>
      }
    />
  ); 

  /**
   * Funcion que sirve para renderizar cada item de la lista de Altas que trae el array
   * recibiendo el objeto item
   *
   * @memberof IncidenciaDetalleScreen
   */
  renderItemAltas = (item) => (
    <SwipeRow
      rightOpenValue={-75}
      body={
        <View>
          <Text>alta</Text>
        </View>
      }
      right={
        <Button danger onPress={this.openScreenCamera}>
          <Icon active name="camera" />
        </Button>
      }
    />
  ); 

  /**
   * Funcion del ciclo de vida React 
   * renderiza la vista para que se muestre en pantalla
   * 
   * @returns
   * @memberof IncidenciaDetalleScreen
   */
  render() {
    const { incidencia } = this.props.navigation.state.params;
    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon onPress={() => this.props.navigation.goBack()} name='arrow-back' style={styles.iconStyle} />
          </Left>
          <Body>
            <Title>Incidencia</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <Card>
            <CardItem>
              <Text>Datos de la paciente</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.name}>{`${incidencia.pacientes[0].personas.nombre} ${incidencia.pacientes[0].personas.paterno} ${incidencia.pacientes[0].personas.materno} (${incidencia.pacientes[0].personas.edad} años)`}</Text>
                <Text style={styles.name}>{`${incidencia.pacientes[0].personas.id}`}</Text>
                <Text style={styles.name}>{`${incidencia.pacientes[0].personas.telefono}`}</Text>
                <Text style={styles.name}>{`Domicilio: ${incidencia.pacientes[0].personas.domicilio}`}</Text>
                <Text style={styles.name}>{`${incidencia.pacientes[0].personas.localidades.nombre}`}</Text>
                <Text style={styles.name}>{`${incidencia.pacientes[0].personas.municipios.nombre}`}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Datos del responsable</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.name}>{`${incidencia.pacientes[0].acompaniantes[0].personas.nombre}`}</Text>
                <Text style={styles.name}>{`${incidencia.pacientes[0].personas.telefono}`}</Text>
                <Text style={styles.name}>{`Domicilio: ${incidencia.pacientes[0].personas.domicilio}`}</Text>
                <Text style={styles.name}>{`${incidencia.pacientes[0].personas.localidades.nombre}`}</Text>
                <Text style={styles.name}>{`${incidencia.pacientes[0].personas.municipios.nombre}`}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Atenciones</Text>
            </CardItem>
            <CardItem>
              <FlatList
                data={incidencia.movimientos_incidencias}
                renderItem={({ item }) => this.renderItemAtenciones(item)}
                keyExtractor={item => item.id.toString()}
              />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Referencias</Text>
            </CardItem>
            <CardItem>
              <FlatList
                data={incidencia.referencias}
                renderItem={({ item }) => this.renderItemReferencias(item)}
                keyExtractor={item => item.id.toString()}
              />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Altas</Text>
            </CardItem>
            <CardItem>
              <Body>
                <List>
                  <FlatList
                    data={incidencia.altas_incidencias}
                    renderItem={({ item }) => this.renderItemAltas(item)}
                    keyExtractor={item => item.id.toString()}
                  />
                </List>
              </Body>
            </CardItem>
          </Card>   
        </ScrollView>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerStyle: {
    backgroundColor: colors.defaultPrimaryColor,
    borderBottomColor: 'white'
  },
  iconStyle: {
    color: 'white'
  },
};

export default IncidenciaDetalleScreen;
