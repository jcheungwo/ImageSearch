import React, { Component } from "react";
import { ActivityIndicator, FlatList, Text, View, Modal, StyleSheet } from "react-native";
import { List, ListItem, Button } from "react-native-elements";
import DetailView from './detailView'

export default class Results extends Component {

  static navigationOptions = {
     header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      page: 1,
      search: props.navigation.state.params,
      end: false
    }
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const searchRequest = this.state.search.split(' ').join('+')
    const searchURL = `${searchRequest}&image_type=photo&pretty=true&page=${this.state.page}`
    const response = await fetch(`http://pixabay.com/api/?key=8118928-e3af9d4a6e7f2178b3811919d&q=${searchURL}`);
    const json = await response.json();
    this.setState(state => ({
      data: [...state.data, ...json.hits],
      lastfetch: json.hits.length,
      modalVisible: false,
      currentPhoto: {}
    }));
  };

  handleEnd = () => {
    if (this.state.lastfetch === 20 || !this.state.lastfetch)
      this.setState(state => ({ page: this.state.page + 1 }), () => this.fetchData());
    else{
      this.setState({end:true})
    }
  };

  openModal() {
    this.setState({modalVisible:true})
  }

  closeModal() {
    this.setState({modalVisible:false})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button
            title='New Search'
            onPress={() => (this.props.navigation.navigate('Main'))}
          />
          <Text>Search Results for {this.state.search}</Text>
          <Text> </Text>
        </View>
        <List>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            onEndReached={() => this.handleEnd()}
            onEndReachedThreshold={10}
            ListFooterComponent={() =>
              this.state.end
                ? null
                : <ActivityIndicator size="large" animating />}
            renderItem={({ item }) =>
              <ListItem
                button
                avatar={{ uri: item.previewURL }}
                onPress={() => {
                  this.setState({currentPhoto:item})
                  this.openModal()}
                }
              />}
          />
        </List>
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={()=>this.closeModal()}
        >
          <View style={styles.container}>
            {this.state.currentPhoto 
              && 
              <DetailView closeModal={this.closeModal} photo={this.state.currentPhoto}/>
            }
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10
  }
});