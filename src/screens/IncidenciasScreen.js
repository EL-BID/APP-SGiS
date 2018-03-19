import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Header, List, ListItem, SearchBar } from 'react-native-elements';

import * as actions from '../actions';

class IncidenciasScreen extends Component {
  componentWillMount() {
    const { clues, token } = this.props;
    this.props.showIncidencias(clues, token);
  }

  componentDidMount() {
    const { clues, token } = this.props;
    this.props.showIncidencias(clues, token);
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

  renderIncidenciasList() {
    return this.props.incidencias.map((incidencia) => {
      return (
        <ListItem
          key={incidencia.id}
          title={incidencia.id}
          onPress={() => this.onItemPress(incidencia.id)}
        />
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ backgroundColor: '#303F9F' }}
          centerComponent={{ text: 'INCIDENCIAS', style: { color: '#fff' } }}
        />
        <SearchBar
          lightTheme
          onChangeText={this.onSearchChange.bind(this)}
          placeholder='Buscar incidencia...'
        />
        <List>
          { this.renderIncidenciasList() }
        </List>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  }
};

const mapStateToProps = ({ incidencias }) => {
  const { token, clues, listIncidencias } = incidencias;
  return { incidencias: listIncidencias, token, clues };
};

export default connect(mapStateToProps, actions)(IncidenciasScreen);
