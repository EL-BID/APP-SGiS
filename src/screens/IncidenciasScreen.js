import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StatusBar, Text, View } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import * as actions from '../actions';

class IncidenciasScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: <MaterialIcons name='menu' style={styles.iconStyle} onPress={() => { navigation.navigate('DrawerOpen'); }} />,
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
    this.props.navigation.navigate('IncidenciaDetalle', { incidencia });
  }

  makeRemoteRequest = async () => {
    const { clues, token, page, limit } = this.props;
    await this.props.showIncidencias(clues, token, page, limit);
  };

  handleRefresh = () => {
    this.makeRemoteRequest();
  }

  handleLoadMore = () => {
    this.makeRemoteRequest();
  }

  renderSeparator = () => (
    <View 
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
        //marginLeft: '14%'
      }}
    />
  );

  renderHeader = () => <SearchBar lightTheme round onChangeText={this.onSearchChange.bind(this)} placeholder='Buscar incidencia...' />;

  renderFooter = () => {
    if (!this.props.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE'
        }}
      >
        <ActivityIndicator animating size='large' />
      </View>
    );
  };

  render() {
    return (
      <List containerStyle={styles.listStyle}>
        <StatusBar backgroundColor="#303F9F" animated barStyle="light-content" /> 
        <FlatList
          data={this.props.incidencias}
          renderItem={({ item }) => { 
            return (
              <ListItem
                title={<Text style={styles.titleStyle}>{item.id}</Text>}
                subtitleNumberOfLines={2}
                subtitle={
                  <View style={styles.subtitleView}>
                    <Text style={styles.subtitleText}>{item.pacientes[0].personas.nombre} {item.pacientes[0].personas.paterno} {item.pacientes[0].personas.materno} ({item.pacientes[0].personas.edad} años)</Text>
                    <Text style={styles.subtitleText}>{item.movimientos_incidencias[item.movimientos_incidencias.length - 1].triage_colores.nombre}</Text>
                  </View>
                }
                onPress={() => this.onItemPress(item)}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            );
          }}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          refreshing={this.props.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.1}
        />
      </List>
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

  },
  iconStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 30
  }
};

const mapStateToProps = ({ incidencias, auth }) => {
  const { listIncidencias, page, limit, loading, error, refreshing } = incidencias;
  const { token, clues } = auth;
  return { incidencias: listIncidencias, token, clues, page, limit, loading, error, refreshing };
};

export default connect(mapStateToProps, actions)(IncidenciasScreen);
