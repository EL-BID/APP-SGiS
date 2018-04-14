import React, { Component } from 'react';
import { Picker, StatusBar, ScrollView, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

class CensoMujeresNuevoScreen extends Component {
  constructor() {
    super();
    this.state = {
      localidad: '',
      municipio: ''
    };
  }

  onButtonSavePress() {
    const { navigate } = this.props.navigation;
    navigate('dashboard');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#616161" animated barStyle="light-content" /> 

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
          <Picker
            selectedValue={this.state.municipio}
            onValueChange={(itemValue, itemIndex) => this.setState({ municipio: itemValue })}
          >
            <Picker.Item label="Chanal" value="1" />
            <Picker.Item label="San Cristobal" value="2" />
          </Picker>
        </View>
        <View>
          <FormLabel
            labelStyle={styles.labelStyle}
          >
            Localidad
          </FormLabel>
          <Picker
            selectedValue={this.state.localidad}
            onValueChange={(itemValue, itemIndex) => this.setState({ localidad: itemValue })}
          >
            <Picker.Item label="Chanal" value="1" />
            <Picker.Item label="Naranjal" value="2" />
          </Picker>
        </View>
        <View style={styles.containerStyleButtons}>
          <Button
            title="LIMPIAR"
            textStyle={{ color: '#536DFE' }}
            backgroundColor="transparent"
            onPress={console.log('ik')}
          />
          <Button
            title="GUARDAR"
            backgroundColor="#FF4081"
            onPress={this.onButtonSavePress.bind(this)}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  containerStyleButtons: {
    flexDirection: 'row',
    paddingTop: 5
  },
  inputStyle: {
    color: '#212121',
    fontSize: 15
  },
  labelStyle: {
    color: '#212121',
    fontSize: 13
  }
};

export default CensoMujeresNuevoScreen;
