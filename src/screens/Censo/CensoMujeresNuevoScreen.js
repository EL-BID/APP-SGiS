import React, { Component } from 'react';
import { StatusBar, ScrollView, View, StyleSheet } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import { Container, Header, Left, Body, Right, Icon, Title, Form, Picker } from 'native-base';
import colors from '../../resources/styles/colors';

class CensoMujeresNuevoScreen extends Component {
  constructor() {
    super();
    this.state = {
      localidad: '',
      municipio: '',
      estadoEmbarazo: '',
      derechohabiente: ''
    };
  }

  onButtonSavePress() {
    const { navigate } = this.props.navigation;
    navigate('dashboard');
  }

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
              onChangeText={console.log("s")}
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
              onChangeText={console.log("s")}
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
              onChangeText={console.log("s")}
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
              onChangeText={console.log("s")}
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
              onChangeText={console.log("s")}
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
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={this.state.municipio}
                onValueChange={(itemValue, itemIndex) => this.setState({ municipio: itemValue })}
              >
                <Picker.Item label="Chanal" value="1" />
                <Picker.Item label="San Cristobal" value="2" />
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
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={this.state.localidad}
                onValueChange={(itemValue, itemIndex) => this.setState({ localidad: itemValue })}
              >
                <Picker.Item label="Chanal" value="1" />
                <Picker.Item label="Naranjal" value="2" />
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
              onChangeText={console.log("s")}
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
              onChangeText={console.log("s")}
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
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={this.state.estadoEmbarazo}
                onValueChange={(itemValue, itemIndex) => this.setState({ estadoEmbarazo: itemValue })}
              >
                <Picker.Item label="Chanal" value="1" />
                <Picker.Item label="Naranjal" value="2" />
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
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={this.state.derechohabiente}
                onValueChange={(itemValue, itemIndex) => this.setState({ derechohabiente: itemValue })}
              >
                <Picker.Item label="Chanal" value="1" />
                <Picker.Item label="Naranjal" value="2" />
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

export default CensoMujeresNuevoScreen;
