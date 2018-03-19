import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Header, List, ListItem } from 'react-native-elements';
import * as actions from '../actions';

class SelectCluesScreen extends Component {
  componentDidMount() {
    this.props.showUsuarioClues();
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onSelectComplete(nextProps);
  }

  onSelectComplete(props) {
    if (props.clues) {
      this.props.navigation.navigate('incidencias');
    }
  }

  onItemPress(clues) {
    this.props.insertSelectClues(clues);
  }

  renderCluesList() {
    return this.props.usuario_clues.map((clues) => {
      return (
        <ListItem
          key={clues.clues}
          title={clues.nombre}
          onPress={() => this.onItemPress(clues.clues)}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ backgroundColor: '#303F9F' }}
          centerComponent={{ text: 'Seleccione una clue:', style: { color: '#fff' } }}
        />
        <List>
          { this.renderCluesList() }
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

const mapStateToProps = ({ usuarioClues }) => {
  const { list, clues } = usuarioClues;
  return {
    usuario_clues: list,
    clues
  };
};

export default connect(mapStateToProps, actions)(SelectCluesScreen);
