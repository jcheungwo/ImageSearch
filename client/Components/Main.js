import React, {Component} from 'react';
import {connect} from 'react-redux';
import { StackNavigator } from 'react-navigation';
import {View, Text, StyleSheet, Image} from 'react-native';
import SearchBar from 'react-native-searchbar'
import InfiniteScrollView from 'react-native-infinite-scroll-view';
 
export default class Main extends Component {

  static navigationOptions = {
     header: null
  }

  constructor() {
    super()
    this.state = {
      currentSearch: ''
    }
  }

  handleSubmit() {
    this.props.navigation.navigate('Results', this.state.currentSearch)
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar 
          ref='searchBar'
          placeholder='Search for an Image'
          handleChangeText={(currentSearch) => this.setState({currentSearch})}
          onSubmitEditing={() => this.handleSubmit()}
          showOnLoad
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
});
