import React, { Component } from 'react';
import { Image, StyleSheet, View, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import colors from '../../resources/styles/colors';

class DashboardScreen extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon name='md-menu' style={styles.iconStyle} onPress={() => this.props.navigation.openDrawer()} />
          </Left>
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <Image
            style={styles.logoStyle}
            source={require('../../resources/images/logo.png')}
          />
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
  },
  logoStyle: {
    width: 300,
    height: 300
  }
});

export default DashboardScreen;
