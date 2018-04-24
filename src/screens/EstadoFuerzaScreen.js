import React, { Component } from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import colors from '../resources/styles/colors';

class EstadoFuerzaScreen extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon onPress={() => this.props.navigation.navigate('DrawerOpen')} name='md-menu' style={styles.iconStyle} />
          </Left>
          <Body>
            <Title>Estado de Fuerza</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <Text>
            Estado de Fuerza
          </Text>
        </View>
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

export default EstadoFuerzaScreen;
