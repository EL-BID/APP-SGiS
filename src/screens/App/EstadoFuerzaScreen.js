import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Icon, 
  Card, 
  CardItem,
  Body, 
  Left,
  Text, 
  ListItem, 
  CheckBox,
  Form, 
  Picker 
} from 'native-base';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';
import colors from '../../resources/styles/colors';
import * as actions from '../../redux/actions';

/**
 *
 *
 * @class EstadoFuerzaScreen
 * @extends {Component}
 */
class EstadoFuerzaScreen extends Component {  
  /**
   *
   *
   * @memberof EstadoFuerzaScreen
   */
  componentDidMount() {
    this.makeRemoteRequest();
  }

  /**
   *
   *
   * @param {*} indexItem
   * @param {*} indexCartera
   * @memberof EstadoFuerzaScreen
   */
  onSelect(indexItem, indexCartera, respuesta) {
    this.props.arrayItemCreated(indexItem, indexCartera, respuesta !== '' ? '' : true);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof EstadoFuerzaScreen
   */
  onTurnoChanged(text) {
    this.props.turnoChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof EstadoFuerzaScreen
   */
  onCamasChange(indexCartera, indexItem, text) {
    this.props.arrayItemFormCreated(indexCartera, indexItem, text);
  }

    /**
   * Funcion que sirve para enviar los datos que agrego el usuario
   * y realizar el guardado de la mujer
   *
   * @memberof EstadoFuerzaScreen
   */
  onButtonSavePress() {
    const { clues, token, cartera, turnos_id, usuario } = this.props;

    const userObject = JSON.parse(usuario);
    
    const objeto = {};
    objeto.clues = clues;
    objeto.sis_usuarios_id = userObject.id;
    objeto.turnos_id = turnos_id;
    objeto.cartera_servicios = cartera;
    
    const estadoFuerza = JSON.stringify(objeto);
    this.props.insertNewEstadoFuerza({ clues, token, estadoFuerza });
    
  }

  /**
   *
   *
   * @memberof EstadoFuerzaScreen
   */
  makeRemoteRequest = async () => {
    const { clues, token } = this.props;
    await this.props.showTurnos(clues, token);
    await this.props.showEstadoFuerza(clues, token);
  };

  /**
   *
   *
   * @returns
   * @memberof EstadoFuerzaScreen
   */
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon 
              onPress={() => this.props.navigation.openDrawer()} name='md-menu' style={styles.iconStyle} 
            />
          </Left>
          <Body>
            <Title>Estado de Fuerza</Title>
          </Body>
        </Header>

        <Content padder>
          <Card>
            <CardItem header bordered>
            <View>
              <FormLabel
                labelStyle={styles.labelStyle}
              >
                Turno
              </FormLabel>
              <Form>
                <Picker
                  mode="dropdown"
                  placeholder="Selecciona Turno"
                  placeholderStyle={{ color: '#bfc6ea' }}
                  placeholderIconColor="#007aff"
                  style={{ height: 50, width: 320 }}
                  selectedValue={this.props.turnos_id}
                  onValueChange={(itemValue) => this.onTurnoChanged(itemValue)}
                >
                  {this.props.listTurno.map((i, index) => (
                    <Picker.Item key={index} label={i.nombre} value={i.id} />
                  ))}
                </Picker>
              </Form>
            </View>
            </CardItem>
          </Card>
          {this.props.loading && <ActivityIndicator animating size='large' />}
          {
            this.props.cartera.length ? this.props.cartera.map((item, index) => {
              return (
                <Card key={index}>
                  <CardItem header bordered>
                    <Text>{item.nombre}</Text>
                  </CardItem>
                  {
                    item.items.map((subItem, i) => {
                      if (subItem.tipos_items_id === '1' || subItem.tipos_items_id === 1) {
                        return (
                          <ListItem key={i} onPress={() => this.onSelect(i, index, subItem.respuesta)} >
                            <CheckBox checked={subItem.respuesta !== ''} />
                            <Body>
                              <Text>{subItem.nombre}</Text>
                            </Body>
                          </ListItem>
                        );
                      }

                      return (
                        <View key={i}>
                          <FormLabel
                            labelStyle={styles.labelStyle}
                          >
                            {subItem.nombre}
                          </FormLabel>
                          <FormInput
                            inputStyle={styles.inputStyle}
                            placeholderTextColor="#757575"
                            placeholder={subItem.nombre}
                            underlineColorAndroid="#757575"
                            onChangeText={(text) => this.onCamasChange(index, i, text)}
                            keyboardType="numeric"
                          />
                        </View>
                        );
                    })
                  }
                </Card>
              );
            }) : null
          }
          <View style={styles.containerStyleButtons}>
            <Button
              title="GUARDAR"
              backgroundColor={colors.accentColor}
              onPress={this.onButtonSavePress.bind(this)}
            />
          </View>
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
  inputStyle: {
    color: '#212121',
    fontSize: 15
  },
  labelStyle: {
    color: '#212121',
    fontSize: 15
  }
});

/**
 *
 *
 * @param {*} { auth, catalogs, estadoFuerza }
 * @returns
 */
const mapStateToProps = ({ auth, catalogs, estadoFuerza }) => {
  const { 
    listEstadoFuerza,
    loading,
    turnos_id
  } = estadoFuerza;
  const { token, clues, usuario } = auth;
  const { listTurno } = catalogs;

  return { 
    clues, 
    token, 
    cartera: listEstadoFuerza,
    listTurno,
    turnos_id,
    loading,
    usuario
  };
};

export default connect(mapStateToProps, actions)(EstadoFuerzaScreen);
