import React, { PureComponent } from 'react';
import { 
  ActivityIndicator, 
  FlatList, 
  InteractionManager, 
  StatusBar, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { Container, 
  Header, 
  Left, 
  Body, 
  Right, 
  ListItem, 
  Icon, 
  Title, 
  Content 
} from 'native-base';
import { connect } from 'react-redux';
import colors from '../../../resources/styles/colors';
import * as actions from '../../../redux/actions';

/**
* Clase que crea la Pantalla donde se listan las incidencias
 *
 * @class IncidenciasScreen
 * @extends {PureComponent}
 */
class IncidenciasScreen extends PureComponent {
  state = {
    renderHeader: false,
    renderList: false,
  }

  /**
   * Funcion del ciclo de vida React 
   * se manda a llamar despues de renderizar el componente
   * 
   * @memberof IncidenciasScreen
   */
  componentDidMount() {
    setTimeout(() => { this.setState({ renderHeader: true }) }, 0);
    setTimeout(() => { this.setState({ renderList: true }) }, 0);

    InteractionManager.runAfterInteractions(() => {
      this.makeRemoteRequest();
    });
  }

  /**
   * Funcion que sirve para navegar al detalla de la clues
   * enviando la informacion de la incidencia seleccionada a la pantalla
   * IncidenciaDetalle
   *
   * @param {*} incidencia
   * @memberof IncidenciasScreen
   */
  onItemPress(incidencia) {
    this.props.navigation.navigate('IncidenciaDetalle', { incidencia });
  }

  /**
   * Funcion que se llama para consultar la lista de incidencias
   *
   * @memberof IncidenciasScreen
   */
  makeRemoteRequest = async () => {
    const { clues, token, page, limit } = this.props;
    await this.props.showIncidencias(clues, token, page, limit);
  };

  /**
   * Funcion que sirve para hacer actulizar la lista de incidencias
   * por si esta no se hubiese cargado
   *
   * @memberof IncidenciasScreen
   */
  handleRefresh = () => {
    this.makeRemoteRequest();
  }

  /**
   * Funcion que sirve para crear el separador de las listas
   *
   * @memberof IncidenciasScreen
   */
  renderSeparator = () => (
    <View 
      style={{
        backgroundColor: '#CED0CE',
        height: 1,
        width: '100%',
      }}
    />
  );

  /**
   * Funcion que sirve para renderizar cada item en la lista con el diseño que se desee 
   * recibiendo el objeto item
   *
   * @memberof IncidenciasScreen
   */
  renderItem = (item) => (
    <ListItem
      onPress={() => this.onItemPress(item)}
    >
      <Body>
        <Text style={styles.titleTextStyle}>{item.id}</Text>
        <Text note>{item.pacientes[0].personas.nombre} {item.pacientes[0].personas.paterno} {item.pacientes[0].personas.materno}</Text>
        <Text note>{item.movimientos_incidencias[item.movimientos_incidencias.length - 1].triage_colores.nombre}</Text>
      </Body>
      <Right>
        <Text note>{item.pacientes[0].personas.edad} años</Text>
      </Right>
    </ListItem>
  ); 

  /**
   * Funcion que sirve para crear el Footer (pie) de la pantalla
   * evalua si esta cargado o si ya obtuvo los datos
   *
   * @memberof IncidenciasScreen
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
   * Funcion del ciclo de vida React 
   * renderiza la vista para que se muestre en pantalla
   * 
   * @returns
   * @memberof IncidenciasScreen
   */
  render() {
    const {
      renderHeader,
      renderList
    } = this.state;

    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        {
          renderHeader && 
          <Header style={styles.headerStyle}>
            <Left>
              <Icon onPress={() => this.props.navigation.openDrawer()} name='md-menu' style={styles.iconStyle} />
            </Left>
            <Body>
              <Title>Incidencias</Title>
            </Body>
            <Right />
          </Header>
        }
        <Content>
          {this.props.loading && this.props.incidencias.length === 0 && <ActivityIndicator animating size='large' />}
          {
            renderHeader && renderList &&
              <FlatList
                data={this.props.incidencias}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={this.renderSeparator}
                refreshing={this.props.refreshing}
                onRefresh={this.handleRefresh}
                //initialNumToRender={30}
              />
          } 
        </Content>
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
 * @param {*} { incidencias, auth }
 * @returns incidencias, token, clues, page, limit, loading, error, refreshing
 */
const mapStateToProps = ({ incidencias, auth }) => {
  const { listIncidencias, page, limit, loading, error, refreshing } = incidencias;
  const { token, clues } = auth;
  return { incidencias: listIncidencias, token, clues, page, limit, loading, error, refreshing };
};

export default connect(mapStateToProps, actions)(IncidenciasScreen);
