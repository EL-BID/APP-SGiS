import React, { Component } from 'react';
import { ActivityIndicator, FlatList, InteractionManager, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Container, Header, Left, Body, Right, List, ListItem, Icon, Title } from 'native-base';
import { connect } from 'react-redux';
import colors from '../resources/styles/colors';
import * as actions from '../actions';

class CluesScreen extends Component {
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.makeRemoteRequest();
    });
  }

  onSearchChange(text) {
    const { clues, token } = this.props;
    //this.props.onSearchChanged(text, clues, token);
  }

  onItemPress(clues) {
    this.props.navigation.navigate('CluesDetalle', { clues });
  }

  makeRemoteRequest = async () => {
    const { clues, token, page, limit } = this.props;
    await this.props.showClues(clues, token, page, limit);
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

  renderHeader = () => <SearchBar lightTheme round onChangeText={this.onSearchChange.bind(this)} placeholder='Buscar clues...' />;

  renderItem = (item) => (
    <ListItem
      onPress={() => this.onItemPress(item)}
    >
      <Body>
        <Text style={styles.titleTextStyle}>{item.clues}</Text>
        <Text note>{item.nombre}</Text>
        <Text note>{item.localidad}</Text>
      </Body>
      <Right>
        <Text note>{item.abreviacion}</Text>
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
    return (
      <Container>
        <StatusBar backgroundColor={colors.darkPrimaryColor} animated barStyle="light-content" /> 
        <Header style={styles.headerStyle}>
          <Left>
            <Icon onPress={() => this.props.navigation.navigate('DrawerOpen')} name='md-menu' style={styles.iconStyle} />
          </Left>
          <Body>
            <Title>Clues</Title>
          </Body>
          <Right />
        </Header>
        <List>
          <FlatList
              data={this.props.cluesl}
              renderItem={({ item }) => this.renderItem(item)}
              keyExtractor={(item, index) => index}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
              refreshing={this.props.refreshing}
              onRefresh={this.handleRefresh}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={0.1}
          />
          </List>
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
  }
});

const mapStateToProps = ({ cluesR, auth }) => {
  const { listClues, page, limit, loading, error, refreshing } = cluesR;
  const { token, clues } = auth;
  return { cluesl: listClues, token, clues, page, limit, loading, error, refreshing };
};

export default connect(mapStateToProps, actions)(CluesScreen);
