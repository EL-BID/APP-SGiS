import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Icon, Title } from 'native-base';
import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import colors from '../../../resources/styles/colors';
import * as actions from '../../../redux/actions';

class IncidenciaCameraScreen extends Component {
  state = {
    avatarSource: null,
    base64: null
  };

  enviarFoto = () => {
    const { clues, token } = this.props;
    const { 
      referenciaId, 
      incidencias_id, 
      multimedias, 
      impresion_diagnostica,
      motivo_ingreso,
      cluesI,
      estados_incidencias_id
    } = this.props.navigation.state.params;

    const objetos = {};
    objetos.id = referenciaId;
    objetos.incidencias_id = incidencias_id;
    objetos.multimedias = this.state.base64;

    const arrayReferencia = [];
    arrayReferencia.push(objetos);
 
    const miObjeto = {};
    miObjeto.tieneReferencia = 0;
    miObjeto.clues = cluesI;
    miObjeto.id = incidencias_id;
    miObjeto.estados_incidencias_id = estados_incidencias_id;
    miObjeto.impresion_diagnostica = impresion_diagnostica;
    miObjeto.motivo_ingreso = motivo_ingreso;
    miObjeto.foto_referencia_celular = arrayReferencia;

    const fotoReferencia = JSON.stringify(miObjeto);
    //console.log(fotoReferencia);
    
    this.props.insertNewPhotoReference({ clues, token, incidencias_id, fotoReferencia });
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 900,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        const base64 = response.data;
        this.setState({
          avatarSource: source,
          base64
        });
      }
    });
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
            <Title>Adjuntar Foto</Title>
          </Body>
        </Header>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
            { this.state.avatarSource === null ? <Text>Seleccione Foto</Text> :
              <Image style={styles.avatar} source={this.state.avatarSource} />
            }
            </View>
          </TouchableOpacity>
          <View style={styles.containerStyleButtons}>
            <Button
              title="ENVIAR FOTO"
              backgroundColor={colors.accentColor}
              onPress={() => this.enviarFoto()}
            />
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 350,
    height: 350
  },
  iconStyle: {
    color: 'white'
  },
  selectPhoto: {
    flex: 1
  },
  containerStyleButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10
  },
});

const mapStateTopProps = ({ auth }) => {
  const { token, clues } = auth;

  return { 
    clues, 
    token
  };
};

export default connect(mapStateTopProps, actions)(IncidenciaCameraScreen);
