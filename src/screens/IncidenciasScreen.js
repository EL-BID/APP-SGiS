import React, { Component } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class IncidenciasScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: <Button title="Menu" onPress={() => { navigation.navigate('DrawerOpen'); }} />,
  });

  componentDidMount() {
    this.makeRemoteRequest();
  }

  onSearchChange(text) {
    console.log(text);
    const { clues, token } = this.props;
    //this.props.onSearchChanged(text, clues, token);
  }

  onItemPress(incidencia) {
    console.log(incidencia);
    //this.props.insertSelectClues(clues);
  }

  makeRemoteRequest = async () => {
    const { clues, token, page, limit } = this.props;
    await this.props.showIncidencias(clues, token, page, limit);
  };

  renderIncidenciasList() {
    return this.props.incidencias.map((incidencia) => {
      return (
        <ListItem
          key={incidencia.id}
          title={<Text style={styles.titleStyle}>{incidencia.id}</Text>}
          subtitleNumberOfLines={2}
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.subtitleText}>{incidencia.pacientes[0].personas.nombre} {incidencia.pacientes[0].personas.paterno} {incidencia.pacientes[0].personas.materno} ({incidencia.pacientes[0].personas.edad} años)</Text>
              <Text style={styles.subtitleText}>{incidencia.movimientos_incidencias[incidencia.movimientos_incidencias.length - 1].triage_colores.nombre}</Text>
            </View>
          }
          onPress={() => this.onItemPress(incidencia.id)}
          containerStyle={{ borderBottomWidth: 0 }}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          onChangeText={this.onSearchChange.bind(this)}
          placeholder='Buscar incidencia...'
        />
        <List containerStyle={styles.listStyle}>
          { this.renderIncidenciasList() }
        </List>
      </View>
    );
  }
}

const styles = {
  listStyle: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  titleStyle: {
    fontSize: 20,
    paddingLeft: 10,
  },
  subtitleView: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 5
  },
  subtitleText: {

  }
};

const mapStateToProps = ({ incidencias, auth }) => {
  const { listIncidencias, page, limit, loading, error, refreshing } = incidencias;
  const { token, clues } = auth;
  return { incidencias: listIncidencias, token, clues, page, limit, loading, error, refreshing };
};

export default connect(mapStateToProps, actions)(IncidenciasScreen);
