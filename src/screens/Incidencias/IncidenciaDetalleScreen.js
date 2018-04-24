import React, { Component } from 'react';
import { FlatList, StatusBar, ScrollView, Text, View } from 'react-native';
import { Card, Container, Header, Left, Body, Right, List, ListItem, Icon, Title, Button, SwipeRow, CardItem } from 'native-base';
import colors from '../../resources/styles/colors';

class IncidenciaDetalleScreen extends Component {
  renderSeparator = () => (
    <View 
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
      }}
    />
  );

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
          <StatusBar backgroundColor="#303F9F" animated barStyle="light-content" /> 
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
              <Body>
                <List>
                  <FlatList
                    data={incidencia.movimientos_incidencias}
                    renderItem={({ item }) => 
                      <ListItem>
                        <Text>{item.triage_colores.nombre} </Text>
                      </ListItem>
                    }
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                  />
                </List>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Referencias</Text>
            </CardItem>
            <CardItem>
              <Body>
                <List>
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
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Altas</Text>
            </CardItem>
            <CardItem>
              <Body>
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
