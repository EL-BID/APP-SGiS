import React, { PureComponent } from 'react';
import { ActivityIndicator, FlatList, InteractionManager, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Body, Icon, List, ListItem, Right } from 'native-base';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class IncidenciasScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Icon name='md-menu' style={styles.iconStyle} onPress={() => { navigation.navigate('DrawerOpen'); }} />
  });

  state = {
    renderList: false,
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.makeRemoteRequest();
    });
    //setTimeout(() => { this.setState({ renderList: true }); }, 0);
  }

  onSearchChange(text) {
    const { clues, token } = this.props;
    //this.props.onSearchChanged(text, clues, token);
  }

  onItemPress(incidencia) {
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
    const { page } = this.props;
    this.props.nextPage(page);
    this.makeRemoteRequest();
  }

  renderSeparator = () => (
    <View 
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE'
      }}
    />
  );

  renderHeader = () => <SearchBar lightTheme round onChangeText={this.onSearchChange.bind(this)} placeholder='Buscar incidencia...' />;

  renderItem = (item) => (
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

  renderFooter = () => {
    if (this.props.loading) return null;

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
    const {
      renderList,
    } = this.state;

    return (
      <List>
      <StatusBar backgroundColor="#303F9F" animated barStyle="light-content" /> 
      <FlatList
          data={this.props.incidencias}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          refreshing={this.props.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.1}
          initialNumToRender={14}
          removeClippedSubviews
      />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    marginLeft: 15,
    color: 'white',
    fontSize: 30
  },
  titleTextStyle: {
    fontSize: 20,
  }
});

const mapStateToProps = ({ incidencias, auth }) => {
  const { listIncidencias, page, limit, loading, error, refreshing } = incidencias;
  const { token, clues } = auth;
  return { incidencias: listIncidencias, token, clues, page, limit, loading, error, refreshing };
};

export default connect(mapStateToProps, actions)(IncidenciasScreen);
