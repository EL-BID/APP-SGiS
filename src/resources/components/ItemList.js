import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet
 } from 'react-native';
 import { Body, List, ListItem, Right } from 'native-base';

class ItemList extends Component {

  render() {
    return (
      <ListItem
        onPress={() => this.onItemPress(item)}
      >
        <Body>
          <Text style={styles.titleTextStyle}>{item.id}</Text>
          <Text note>{item.pacientes[0].personas.nombre} {item.pacientes[0].personas.paterno} {item.pacientes[0].personas.materno}</Text>
          <Text note>{item.movimientos_incidencias[item.movimientos_incidencias.length - 1].triage_colores.nombre}</Text>
        </Body>
        <Right>
          <Text note>{item.pacientes[0].personas.edad} años</Text>
        </Right>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  
})

export default ItemList;