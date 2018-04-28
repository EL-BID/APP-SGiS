import React, { Component } from 'react';
import { ActivityIndicator, FlatList, InteractionManager, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Container, Header, Left, Body, Right, List, ListItem, Icon, Title } from 'native-base';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';
import colors from '../../resources/styles/colors';
import * as actions from '../../actions';

class CensoMujeresScreen extends Component {
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.makeRemoteRequest();
    });
  }

  onSearchChange(text) {
    const { clues, token } = this.props;
    //this.props.onSearchChanged(text, clues, token);
  }

  onItemPress(censo) {
    this.props.navigation.navigate('CensoMujeresDetalle', { censo });
  }

  makeRemoteRequest = async () => {
    const { clues, token, page, limit } = this.props;
    await this.props.showCenso(clues, token, page, limit);
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

  renderItem = (item) => (
    <ListItem
      onPress={() => this.onItemPress(item)}
    >
      <Body>
        <Text style={styles.titleTextStyle}>{item.id}</Text>
        <Text note>{item.nombre} {item.paterno} {item.materno}</Text>
      </Body>
      <Right>
        <Text note>{item.edad} años</Text>
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

  renderActionButton = () => {
    if (this.props.loading) return null;

    return (
      <ActionButton
        buttonColor={colors.accentColor}
        onPress={() => { this.props.navigation.navigate('CensoMujeresNuevo'); }}
      />
    );
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon onPress={() => this.props.navigation.navigate('DrawerOpen')} name='md-menu' style={styles.iconStyle} />
          </Left>
          <Body>
            <Title>Censo de Mujeres</Title>
          </Body>
          <Right />
        </Header>
        <List>
        <StatusBar backgroundColor="#303F9F" animated barStyle="light-content" /> 
        <FlatList
          data={this.props.censo}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          refreshing={this.props.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.1}
        />
        </List>
        {this.renderActionButton()}
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

const mapStateToProps = ({ censo, auth }) => {
  const { listCenso, page, limit, loading, error, refreshing } = censo;
  const { token, clues } = auth;
  return { censo: listCenso, token, clues, page, limit, loading, error, refreshing };
};

export default connect(mapStateToProps, actions)(CensoMujeresScreen);
