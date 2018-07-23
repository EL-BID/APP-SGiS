import React, { Component } from 'react';
import { StatusBar, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import colors from '../../../resources/styles/colors';

/**
 * Clase que crea la Pantalla donde se muestran la informacion de las clues
 *
 * @class CluesScreen
 * @extends {Component}
 */
class CluesDetalleScreen extends Component {

  /**
   * Funcion del ciclo de vida React 
   * renderiza la vista para que se muestre en pantalla
   * 
   * @returns
   * @memberof CluesDetalleScreen
   */
  render() {
      const { clues } = this.props.navigation.state.params;

      return (
        <Container>
          <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
          <Header style={styles.headerStyle}>
            <Left>
              <Icon onPress={() => this.props.navigation.goBack()} name='arrow-back' style={styles.iconStyle} />
            </Left>
            <Body>
              <Title>Detalle Clues</Title>
            </Body>
            <Right />
          </Header>
          <Card>
            <CardItem>
              <Text>{`${clues.clues}`}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.name}>{`CURP: ${clues.clues}`}</Text>
                <Text style={styles.name}>{`${clues.nombre}`}</Text>
                <Text style={styles.name}>{`${clues.domicilio}`}</Text>
                <Text style={styles.name}>{`Jurisdiccion: ${clues.jurisdicciones.nombre}`}</Text>
                <Text style={styles.name}>{`${clues.municipios.nombre}`}</Text>
                <Text style={styles.name}>{`${clues.localidad}`}</Text>
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

export default CluesDetalleScreen;
