import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SearchBar, Button} from 'react-native-elements'
 
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
        <Text>Pixelbay Image Lookup</Text>
        <SearchBar
          containerStyle={styles.searchBar}
          placeholder='Search for an Image'
          onChangeText={(currentSearch) => this.setState({currentSearch})}
        />
        <Button
          title='Search'
          onPress={() => this.handleSubmit()}      
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
    height: '100%',
    width: '100%'
  },
  searchBar: {
    margin: 10,
    width: '70%'
  }
});
