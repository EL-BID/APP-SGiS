import React, { PureComponent } from 'react';
import { 
  ActivityIndicator, 
  FlatList, 
  InteractionManager, 
  StatusBar, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { Container, 
  Header, 
  Left, 
  Body, 
  Right, 
  ListItem, 
  Icon, 
  Title, 
  Content 
} from 'native-base';
import { connect } from 'react-redux';
import colors from '../../../resources/styles/colors';
import * as actions from '../../../redux/actions';

class IncidenciasScreen extends PureComponent {
  state = {
    renderHeader: false,
    renderList: false,
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ renderHeader: true }) }, 0);
    setTimeout(() => { this.setState({ renderList: true }) }, 0);

    InteractionManager.runAfterInteractions(() => {
      this.makeRemoteRequest();
    });
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

  renderSeparator = () => (
    <View 
      style={{
        backgroundColor: '#CED0CE',
        height: 1,
        width: '100%',
      }}
    />
  );

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
      renderHeader,
      renderList
    } = this.state;

    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        {
          renderHeader && 
          <Header style={styles.headerStyle}>
            <Left>
              <Icon onPress={() => this.props.navigation.openDrawer()} name='md-menu' style={styles.iconStyle} />
            </Left>
            <Body>
              <Title>Incidencias</Title>
            </Body>
            <Right />
          </Header>
        }
        <Content>
          {this.props.loading && this.props.incidencias.length === 0 && <ActivityIndicator animating size='large' />}
          {
            renderHeader && renderList &&
              <FlatList
                data={this.props.incidencias}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={this.renderSeparator}
                refreshing={this.props.refreshing}
                onRefresh={this.handleRefresh}
                //initialNumToRender={30}
              />
          } 
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
