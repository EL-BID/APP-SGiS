import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import * as actions from '../../redux/actions';

/**
 * Pantalla que sirve para que el usuario seleccione la clues
 * a la cual desea ingresar
 *
 * @class SelectCluesScreen
 * @extends {Component}
 */
class SelectCluesScreen extends Component {
  /**
   * Funcion del ciclo de vida React 
   * se manda a llamar despues de renderizar el componente
   * 
   * @memberof SelectCluesScreen
   */
  componentDidMount() {
    this.props.showUsuarioClues();
  }

  /**
   * Funcion del ciclo de vida React
   * se manda a llamar al momento que se detectan nuevos cambios 
   * en las props
   * 
   * @param {*} nextProps
   * @memberof SelectCluesScreen
   */
  componentWillReceiveProps(nextProps) {
    this.onSelectComplete(nextProps);
  }

  /**
   * Funcion que sirve para enviar al usuario a la pantalla inicial
   * despues de seleccionar su clues
   *
   *
   * @param {*} props
   * @memberof SelectCluesScreen
   */
  onSelectComplete(props) {
    if (props.isSelectClues) {
      this.props.navigation.navigate('Dashboard');
    }
  }

  /**
   * Funcion que obtiene la clues seleccinada por el usuario 
   *
   * @param {*} clues
   * @memberof SelectCluesScreen
   */
  onItemPress(clues) {
    this.props.insertSelectClues(clues);
  }

  /**
   * Funcion que renderiza la lista de Clues
   *
   * @returns
   * @memberof SelectCluesScreen
   */
  renderCluesList() {
    return this.props.usuario_clues.map((clues) => (
              <ListItem
                key={clues.clues}
                title={clues.nombre}
                titleNumberOfLines={2}
                onPress={() => this.onItemPress(clues.clues)}
              />
            ));
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

const mapStateToProps = ({ usuarioClues, auth }) => {
  const { list } = usuarioClues;
  const { clues, isSelectClues } = auth;
  return { usuario_clues: list, clues, isSelectClues };
};

export default connect(mapStateToProps, actions)(SelectCluesScreen);
