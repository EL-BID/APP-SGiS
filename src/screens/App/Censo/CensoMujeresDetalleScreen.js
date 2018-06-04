import React, { Component } from 'react';
import { StatusBar, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import colors from '../../../resources/styles/colors';

class CensoMujeresDetalleScreen extends Component {
  render() {
    const { censo } = this.props.navigation.state.params;

    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon onPress={() => this.props.navigation.goBack()} name='arrow-back' style={styles.iconStyle} />
          </Left>
          <Body>
            <Title>Detalle Mujer</Title>
          </Body>
          <Right />
        </Header>
        <Card>
          <CardItem>
            <Text>{`${censo.nombre} ${censo.paterno} ${censo.materno}`}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.name}>{`CURP: ${censo.id}`}</Text>
              <Text style={styles.name}>{`Telefono: ${censo.telefono}`}</Text>
              <Text style={styles.name}>{`${censo.derechohabientes.nombre}`}</Text>
              <Text style={styles.name}>{`${censo.fecha_nacimiento}`}</Text>
              <Text style={styles.name}>{`Domicilio: ${censo.domicilio}`}</Text>
              <Text style={styles.name}>{`${censo.localidades.nombre}`}</Text>
              <Text style={styles.name}>{`${censo.municipios.nombre}`}</Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

export default CensoMujeresDetalleScreen;
