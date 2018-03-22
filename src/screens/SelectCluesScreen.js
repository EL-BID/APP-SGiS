import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import * as actions from '../actions';

class SelectCluesScreen extends Component {
  componentDidMount() {
    this.props.showUsuarioClues();
  }

  componentWillReceiveProps(nextProps) {
    this.onSelectComplete(nextProps);
  }

  onSelectComplete(props) {
    if (props.clues) {
      this.props.navigation.navigate('Dashboard');
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
          titleNumberOfLines={2}
          onPress={() => this.onItemPress(clues.clues)}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
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