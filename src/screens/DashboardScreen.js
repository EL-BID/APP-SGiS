import React, { Component } from 'react';
import { Image, StatusBar, Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';

class DashboardScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left>
            <Icon onPress={() => this.props.navigation.navigate('DrawerOpen')} name='md-menu' style={styles.iconStyle} />
          </Left>
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <Image
            style={styles.logoStyle}
            source={require('../resources/images/logo.png')}
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
    backgroundColor: '#3F51B5',
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
