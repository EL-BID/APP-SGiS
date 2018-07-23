import React, { Component } from 'react';
import { StatusBar, ScrollView, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { Container, Header, Left, Body, Right, Icon, Title, Form, Picker } from 'native-base';
import colors from '../../../resources/styles/colors';
import * as actions from '../../../redux/actions';

/**
* Clase que crea la Pantalla donde se listan las incidencias
 *
 * @class CensoMujeresNuevoScreen
 * @extends {Component}
 */
class CensoMujeresNuevoScreen extends Component {
  /**
   * Funcion del ciclo de vida React 
   * se manda a llamar despues de renderizar el componente
   * 
   * @memberof CensoMujeresNuevoScreen
   */
  componentDidMount() {
    this.makeRemoteRequest();
  }

  /**
   * Funcion del ciclo de vida React
   * se manda a llamar al momento que se detectan nuevos cambios 
   * en las props
   * 
   * @param {*} nextProps
   * @memberof CensoMujeresNuevoScreen
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.isSave) {
      this.props.navigation.navigate('CensoMujeres');
    }
  }
  
  /**
   * Funcion que sirve para enviar los datos que agrego el usuario
   * y realizar el guardado de la mujer
   *
   * @memberof CensoMujeresNuevoScreen
   */
  onButtonSavePress() {
    const { clues, token, id, nombre, paterno, materno, domicilio, municipios_id, localidades_id,
      telefono, fecha_nacimiento, estados_embarazos_id, derechohabientes_id } = this.props;
    this.props.insertNewPerson({ 
      clues, 
      token,
      id, 
      nombre, 
      paterno, 
      materno, 
      domicilio, 
      municipios_id, 
      localidades_id, 
      telefono, 
      fecha_nacimiento, 
      estados_embarazos_id, 
      derechohabientes_id 
    });
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onMunicipioChange(text) {
    this.props.municipioChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onLocalidadChange(text) {
    this.props.localidadChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onEstadoEmbarazoChange(text) {
    this.props.estadoEmbarazoChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onDerechohabienteChange(text) {
    this.props.derechohabienteChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onCurpChange(text) {
    this.props.curpChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onNombreChange(text) {
    this.props.nombreChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onPaternoChange(text) {
    this.props.paternoChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onMaternoChange(text) {
    this.props.maternoChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onDireccionChange(text) {
    this.props.direccionChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onCelularChange(text) {
    this.props.celularChanged(text);
  }

  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @param {*} text
   * @memberof CensoMujeresNuevoScreen
   */
  onFechaNacimientoChange(text) {
    this.props.fechaNacimientoChanged(text);
  }
  
  /**
   * Funcion que detecta el cambio en el formulario y lo envia el estado
   *
   * @memberof CensoMujeresNuevoScreen
   */
  makeRemoteRequest = async () => {
    const { clues, token } = this.props;
    await this.props.showMunicipios(clues, token);
    await this.props.showLocalidades(clues, token);
    await this.props.showEstadosEmbarazos(clues, token);
    await this.props.showDerechohabientes(clues, token);
  };

  /**
   * Funcion del ciclo de vida React 
   * renderiza la vista para que se muestre en pantalla
   * 
   * @returns
   * @memberof CensoMujeresNuevoScreen
   */
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon onPress={() => this.props.navigation.goBack()} name='arrow-back' style={styles.iconStyle} />
          </Left>
          <Body>
            <Title>Registrar Mujer</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              CURP
            </FormLabel>
            <FormInput
              inputStyle={styles.inputStyle}
              placeholderTextColor="#757575"
              placeholder="CURP"
              underlineColorAndroid="#757575"
              onChangeText={this.onCurpChange.bind(this)}
            />
          </View>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              Nombre
            </FormLabel>
            <FormInput
              inputStyle={styles.inputStyle}
              placeholderTextColor="#757575"
              placeholder="Nombre"
              underlineColorAndroid="#757575"
              onChangeText={this.onNombreChange.bind(this)}
            />
          </View>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              Apellido Paterno
            </FormLabel>
            <FormInput
              inputStyle={styles.inputStyle}
              placeholderTextColor="#757575"
              placeholder="Apellido Paterno"
              underlineColorAndroid="#757575"
              onChangeText={this.onPaternoChange.bind(this)}
            />
          </View>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              Apellido Materno
            </FormLabel>
            <FormInput
              inputStyle={styles.inputStyle}
              placeholderTextColor="#757575"
              placeholder="Apellido Materno"
              underlineColorAndroid="#757575"
              onChangeText={this.onMaternoChange.bind(this)}
            />
          </View>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              Direccion
            </FormLabel>
            <FormInput
              inputStyle={styles.inputStyle}
              placeholderTextColor="#757575"
              placeholder="Direccion"
              underlineColorAndroid="#757575"
              onChangeText={this.onDireccionChange.bind(this)}
            />
          </View>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              Municipio
            </FormLabel>
            <Form>
              <Picker
                mode="dropdown"
                placeholder="Selecciona Municipio"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={this.props.municipios_id}
                onValueChange={(itemValue) => this.onMunicipioChange(itemValue)}
              >
                {this.props.listMunicipios.map((i, index) => (
                  <Picker.Item key={index} label={i.nombre} value={i.id} />
                ))}
              </Picker>
            </Form>
          </View>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              Localidad
            </FormLabel>
            <Form>
              <Picker
                mode="dropdown"
                placeholder="Selecciona Localidad"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={this.props.localidades_id}
                onValueChange={(itemValue) => this.onLocalidadChange(itemValue)}
              >
                {this.props.listLocalidades.map((i, index) => (
                  <Picker.Item key={index} label={i.nombre} value={i.id} />
                ))}
              </Picker>
            </Form>
          </View>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              Celular
            </FormLabel>
            <FormInput
              inputStyle={styles.inputStyle}
              placeholderTextColor="#757575"
              placeholder="Celular"
              underlineColorAndroid="#757575"
              onChangeText={this.onCelularChange.bind(this)}
            />
          </View>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              Fecha de Nacimiento
            </FormLabel>
            <FormInput
              inputStyle={styles.inputStyle}
              placeholderTextColor="#757575"
              placeholder="Fecha de Nacimiento"
              underlineColorAndroid="#757575"
              onChangeText={this.onFechaNacimientoChange.bind(this)}
            />
          </View>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              Estado del Embarazo
            </FormLabel>
            <Form>
              <Picker
                mode="dropdown"
                placeholder="Selecciones Estado Embarazo"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={this.props.estados_embarazos_id}
                onValueChange={(itemValue) => this.onEstadoEmbarazoChange(itemValue)}
              >
                {this.props.listEstadosEmbarazo.map((i, index) => (
                  <Picker.Item key={index} label={i.nombre} value={i.id} />
                ))}
              </Picker>
            </Form>
          </View>
          <View>
            <FormLabel
              labelStyle={styles.labelStyle}
            >
              Derechohabiente
            </FormLabel>
            <Form>
              <Picker
                mode="dropdown"
                placeholder="Seleccione Derechohabiente"
                placeholderStyle={{ color: "#bfc6ea" }}
                style={{ width: undefined }}
                selectedValue={this.props.derechohabientes_id}
                onValueChange={(itemValue) => this.onDerechohabienteChange(itemValue)}
              >
                {this.props.listDerechohabiente.map((i, index) => (
                  <Picker.Item key={index} label={i.nombre} value={i.id} />
                ))}
              </Picker>
            </Form>
          </View>
          <View style={styles.containerStyleButtons}>
            <Button
              title="LIMPIAR"
              textStyle={{ color: colors.defaultPrimaryColor }}
              backgroundColor="transparent"
              onPress={console.log('ik')}
            />
            <Button
              title="GUARDAR"
              backgroundColor={colors.accentColor}
              onPress={this.onButtonSavePress.bind(this)}
            />
          </View>
        </ScrollView>
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
  containerStyleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10
  },
  inputStyle: {
    color: '#212121',
    fontSize: 15
  },
  labelStyle: {
    color: '#212121',
    fontSize: 13
  }
});

/**
 * Se llama de la biblioteca de react-redux proporciona 
 * una forma conveniente de acceder al estado de la aplicación
 *
 * @param {*} { auth, catalogs, censo }
 * @returns
 */
const mapStateTopProps = ({ auth, catalogs, censo }) => {
  const { id, nombre, paterno, materno, domicilio, municipios_id, localidades_id,
    telefono, fecha_nacimiento, estados_embarazos_id, derechohabientes_id, isSave } = censo;
  const { token, clues } = auth;
  const { listMunicipios, listLocalidades, listEstadosEmbarazo, listDerechohabiente } = catalogs;

  return { 
    clues, 
    token, 
    listMunicipios, 
    listLocalidades, 
    listEstadosEmbarazo, 
    listDerechohabiente,
    id, 
    nombre, 
    paterno, 
    materno, 
    domicilio, 
    municipios_id, 
    localidades_id, 
    telefono, 
    fecha_nacimiento, 
    estados_embarazos_id, 
    derechohabientes_id,
    isSave
  };
};

export default connect(mapStateTopProps, actions)(CensoMujeresNuevoScreen);
