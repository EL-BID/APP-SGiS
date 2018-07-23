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
import { 
  Container,
  Header, 
  Left, 
  Body, 
  Right, 
  List, 
  ListItem, 
  Icon, 
  Title 
  } from 'native-base';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';
import colors from '../../../resources/styles/colors';
import * as actions from '../../../redux/actions';

/**
 * Clase que crea la Pantalla donde se listan las personas ingresadas al censo
 *
 * @class CensoMujeresScreen
 * @extends {Component}
 */
class CensoMujeresScreen extends Component {

  /**
   * Funcion del ciclo de vida React 
   * se manda a llamar despues de renderizar el componente
   * 
   * @memberof CensoMujeresScreen
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
   * @memberof CensoMujeresScreen
   */
  onSearchChange(text) {
    const { clues, token } = this.props;
    //this.props.onSearchChanged(text, clues, token);
  }

  /**
   * Funcion que sirve para navegar al detalla de la clues
   * enviando la informacion de la mujer seleccionada a la pantalla
   * CensoMujeresDetalle
   *
   * @param {*} censo
   * @memberof CensoMujeresScreen
   */
  onItemPress(censo) {
    this.props.navigation.navigate('CensoMujeresDetalle', { censo });
  }

  /**
   * Funcion que se llama para consultar la lista de mujeres
   *
   * @memberof CensoMujeresScreen
   */
  makeRemoteRequest = async () => {
    const { clues, token, page, limit } = this.props;
    await this.props.showCenso(clues, token, page, limit);
  };

  /**
   * Funcion que sirve para hacer actualizar la lista de mujeres
   * por si esta no se hubiese cargado
   *
   * @memberof CensoMujeresScreen
   */
  handleRefresh = () => {
    this.makeRemoteRequest();
  }

  /**
   * Funcion que sirve para crear el separador de las listas
   *
   * @memberof CensoMujeresScreen
   */
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

  /**
   * Funcion que sirve para renderizar cada item en la lista con el diseño que se desee 
   * recibiendo el objeto item
   *
   * @memberof CensoMujeresScreen
   */
  renderItem = (item) => (
    <ListItem
      onPress={() => this.onItemPress(item)}
    >
      <Body>
        <Text style={styles.titleTextStyle}>{item.id}</Text>
        <Text note>{item.nombre} {item.paterno} {item.materno}</Text>
      </Body>
      <Right>
        <Text note>{item.edad} años</Text>
      </Right>
    </ListItem>
  ); 
  
  /**
   * Funcion que sirve para crear el Footer (pie) de la pantalla
   * evalua si esta cargado o si ya obtuvo los datos
   *
   * @memberof CensoMujeresScreen
   */
  renderFooter = () => {
    if (this.props.loading) return null;

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
   * Funcion que sirve para renderizar (pintar) un boton flotante
   *
   * @memberof CensoMujeresScreen
   */
  renderActionButton = () => {
    if (this.props.loading) return null;

    return (
      <ActionButton
        buttonColor={colors.accentColor}
        onPress={() => { this.props.navigation.navigate('CensoMujeresNuevo'); }}
      />
    );
  }

  /**
   * Funcion del ciclo de vida React 
   * renderiza la vista para que se muestre en pantalla
   * 
   * @returns
   * @memberof CensoMujeresScreen
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
            <Title>Censo de Mujeres</Title>
          </Body>
          <Right />
        </Header>
        <List>
        <StatusBar backgroundColor="#303F9F" animated barStyle="light-content" /> 
        <FlatList
          data={this.props.censo}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          refreshing={this.props.refreshing}
          onRefresh={this.handleRefresh}
        />
        </List>
        {this.renderActionButton()}
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
  },
  titleTextStyle: {
    fontSize: 20,
  }
});

/**
 * Se llama de la biblioteca de react-redux proporciona 
 * una forma conveniente de acceder al estadod e la aplicación
 *
 * @param {*} { censo, auth }
 * @returns censo, token, clues, page, limit, loading, error, refreshing
 */
const mapStateToProps = ({ censo, auth }) => {
  const { listCenso, page, limit, loading, error, refreshing } = censo;
  const { token, clues } = auth;
  return { censo: listCenso, token, clues, page, limit, loading, error, refreshing };
};

export default connect(mapStateToProps, actions)(CensoMujeresScreen);
