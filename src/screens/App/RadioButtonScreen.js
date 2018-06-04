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
  List, 
  Body, 
  Left,
  Text, 
  Radio, 
  ListItem
} from 'native-base';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

import colors from '../../resources/styles/colors';
import * as actions from '../../redux/actions';

class RadioButtonScreen extends Component {
  state = {
    text: ''
  };

  onSelect(index, value){
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    });
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon onPress={() => this.props.navigation.openDrawer()} name='md-menu' style={styles.iconStyle} />
          </Left>
          <Body>
            <Title>RadioButton</Title>
          </Body>
        </Header>

        <Content padder>
          <RadioGroup
            onSelect={(index, value) => this.onSelect(index, value)}
          >
            <RadioButton value={'item1'} >
              <Text>This is item #1</Text>
            </RadioButton>

            <RadioButton value={'item2'}>
              <Text>This is item #2</Text>
            </RadioButton>

            <RadioButton value={'item3'}>
              <Text>This is item #3</Text>
            </RadioButton>
          </RadioGroup>
          
          <Text style={styles.text}>{this.state.text}</Text>
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


export default RadioButtonScreen;
