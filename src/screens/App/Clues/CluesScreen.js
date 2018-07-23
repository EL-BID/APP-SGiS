import React, { Component } from 'react';
import { 
  ActivityIndicator, 
  FlatList, 
  InteractionManager, 
  StatusBar, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Container, Header, Left, Body, Right, List, ListItem, Icon, Title } from 'native-base';
import { connect } from 'react-redux';
import colors from '../../../resources/styles/colors';
import * as actions from '../../../redux/actions';

/**
 * Clase que crea la Pantalla donde se listan las clues
 *
 * @class CluesScreen
 * @extends {Component}
 */
class CluesScreen extends Component {
  /**
   * Funcion del ciclo de vida React 
   * se manda a llamar despues de renderizar el componente
   * 
   * @memberof CluesScreen
   */
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.makeRemoteRequest();
    });
  }

  /**
   * Funcion que sirve para detectar los cambios hechos en el form de busqueda 
   *
   * @param {*} text
   * @memberof CluesScreen
   */
  onSearchChange(text) {
    const { clues, token } = this.props;
    //this.props.onSearchChanged(text, clues, token);
  }

  /**
   * Funcion que sirve para navegar al detalla de la clues
   * enviando la informacion de la clues seleccionada a la pantalla
   * CluesDetalle
   *
   * @param {*} clues
   * @memberof CluesScreen
   */
  onItemPress(clues) {
    this.props.navigation.navigate('CluesDetalle', { clues });
  }

  /**
   * Funcion que se llama para consultar la lista de clues
   *
   * @memberof CluesScreen
   */
  makeRemoteRequest = async () => {
    const { clues, token, page, limit } = this.props;
    await this.props.showClues(clues, token, page, limit);
  };

  /**
   * Funcion que sirve para hacer actualizar la lista de clues
   * por si esta no se hubiese cargado
   *
   * @memberof CluesScreen
   */
  handleRefresh = () => {
    this.makeRemoteRequest();
  }

  /**
   * Funcion que sirve para crear el separador de las listas
   *
   * @memberof CluesScreen
   */
  renderSeparator = () => (
    <View 
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE'
      }}
    />
  );

  /**
   * Funcion que sirve para renderizar cada item en la lista con el diseño que se desee 
   * recibiendo el objeto item
   *
   * @memberof CluesScreen
   */
  renderItem = (item) => (
    <ListItem
      onPress={() => this.onItemPress(item)}
    >
      <Body>
        <Text style={styles.titleTextStyle}>{item.clues}</Text>
        <Text note>{item.nombre}</Text>
        <Text note>{item.localidad}</Text>
      </Body>
      <Right>
        <Text note>{item.abreviacion}</Text>
      </Right>
    </ListItem>
  ); 

  /**
   * Funcion que sirve para crear el Footer (pie) de la pantalla
   * evalua si esta cargado o si ya obtuvo los datos
   *
   * @memberof CluesScreen
   */
  renderFooter = () => {
    if (this.props.loading) return null;

    // Si esta en carga (obteniendo la informacion) se muestra un indicador de actividad
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE'
        }}
      >
        <ActivityIndicator animating size='large' />
      </View>
    );
  };

  /**
   * Funcion del ciclo de vida React 
   * renderiza la vista para que se muestre en pantalla
   * 
   * @returns
   * @memberof CluesScreen
   */
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon onPress={() => this.props.navigation.openDrawer()} name='md-menu' style={styles.iconStyle} />
          </Left>
          <Body>
            <Title>Clues</Title>
          </Body>
          <Right />
        </Header>
        <List>
          <FlatList
              data={this.props.cluesl}
              renderItem={({ item }) => this.renderItem(item)}
              keyExtractor={(item, index) => item.clues}
              ItemSeparatorComponent={this.renderSeparator}
              ListFooterComponent={this.renderFooter}
              refreshing={this.props.refreshing}
              onRefresh={this.handleRefresh}
          />
          </List>
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

/**
 * Se llama de la biblioteca de react-redux proporciona 
 * una forma conveniente de acceder al estadod e la aplicación
 *
 * @param {*} { cluesR, auth }
 * @returns
 */
const mapStateToProps = ({ cluesR, auth }) => {
  const { listClues, page, limit, loading, error, refreshing } = cluesR;
  const { token, clues } = auth;
  return { cluesl: listClues, token, clues, page, limit, loading, error, refreshing };
};

export default connect(mapStateToProps, actions)(CluesScreen);
