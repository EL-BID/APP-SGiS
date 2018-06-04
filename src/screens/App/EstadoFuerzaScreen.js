import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
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
  Text
} from 'native-base';
import { connect } from 'react-redux';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import colors from '../../resources/styles/colors';
import * as actions from '../../redux/actions';

class EstadoFuerzaScreen extends Component {
  state = {
    personalSelect: false,
    text: ''
  };
  
  componentDidMount() {
    this.makeRemoteRequest();
  }

  onSelect(index, value) {
    const { 
      clues, 
      token,
      itemsArray,
      carteraServicioArray,
      estadoFuerzaObject
    } = this.props;

    this.props.arrayItemCreated(value, itemsArray);
    this.props.arrayCarteraCreated(value, itemsArray, carteraServicioArray, estadoFuerzaObject);
  }

  // carteraServicio.id = subitem.cartera_servicios_id;
  // carteraServicio.items = itemsArray;

  // carteraServicioArray.push(carteraServicio);

  // estadoFuerzaObject.clues = clues;
  // estadoFuerzaObject.sis_usuarios_id = 1;
  // estadoFuerzaObject.turnos_id = 1;
  // estadoFuerzaObject.cartera_servicios = carteraServicioArray;

  onPressHandle = (subItem) => {
    // const { 
    //   clues, 
    //   token,
    //   itemsArray,
    //   carteraServicioArray,
    //   estadoFuerzaObject
    // } = this.props;

    // this.props.arrayItemCreated(subItem, itemsArray, carteraServicioArray, estadoFuerzaObject);

    // console.log(subItem);
  };

  makeRemoteRequest = async () => {
    const { clues, token } = this.props;
    await this.props.showEstadoFuerza(clues, token);
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon onPress={() => this.props.navigation.openDrawer()} name='md-menu' style={styles.iconStyle} />
          </Left>
          <Body>
            <Title>Estado de Fuerza</Title>
          </Body>
        </Header>

        <Content padder>
          {this.props.loading && <ActivityIndicator animating size='large' />}
          {
            this.props.cartera.length ? this.props.cartera.map((item, index) => {
              return (
                <Card key={index}>
                  <CardItem header bordered>
                    <Text>{item.nombre}</Text>
                  </CardItem>
                  <CardItem bordered>
                    <RadioGroup
                      onSelect={(idx, value) => this.onSelect(idx, value)}
                    >
                      {
                        item.items.map((subItem, i) => (
                          <RadioButton key={i} value={subItem}>
                            <Text>{subItem.nombre}</Text>
                          </RadioButton>
                        ))
                      }
                    </RadioGroup>
                  </CardItem>
                </Card>
              );
            }) : null
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
  }
});

const mapStateToProps = ({ auth, catalogs, estadoFuerza }) => {
  const { 
    listEstadoFuerza, 
    isSave, 
    loading, 
    item,
    itemsArray,
    carteraServicio,
    carteraServicioArray,
    estadoFuerzaObject,
  } = estadoFuerza;
  const { token, clues } = auth;
  const { listMunicipios } = catalogs;

  return { 
    clues, 
    token, 
    cartera: listEstadoFuerza,
    isSave,
    loading,
    item,
    itemsArray,
    carteraServicio,
    carteraServicioArray,
    estadoFuerzaObject,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getEstadoFuerza: () => dispatch(showEstadoFuerza(ownProps.clues, ownProps.token))
  }
};

export default connect(mapStateToProps, actions)(EstadoFuerzaScreen);
