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
  Text, 
  ListItem, 
  CheckBox
} from 'native-base';
import { connect } from 'react-redux';
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

  onSelect(subItem, indexItem, indexCartera) {
    const { 
      clues, 
      token,
      cartera
    } = this.props;
    //console.log(`Cartera: ${indexCartera} - item: ${indexItem}`);
    //console.log(cartera[indexCartera].items[indexItem]);
    //console.log(cartera);
    
    this.props.arrayItemCreated(indexItem, indexCartera);
  }

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
                  {
                    item.items.map((subItem, i) => (
                      <ListItem key={i} onPress={() => this.onSelect(subItem, i, index)} >
                        <CheckBox checked={subItem.respuesta !== ''} />
                        <Body>
                          <Text>{subItem.nombre}</Text>
                        </Body>
                      </ListItem>
                    ))
                  }
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
    loading,
  } = estadoFuerza;
  const { token, clues } = auth;
  const { listMunicipios } = catalogs;

  return { 
    clues, 
    token, 
    cartera: listEstadoFuerza,
    loading
  };
};

export default connect(mapStateToProps, actions)(EstadoFuerzaScreen);
