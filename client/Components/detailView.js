import React, {Component} from 'react';
import { Button } from 'react-native-elements'
import { Text, View, Image, StyleSheet } from "react-native";

export default class ModalView extends Component {
  render() {
    const {photo, closeModal} = this.props
    return(
        <View style={styles.container}>
          <View style={styles.container}>
            <Image 
              source={{uri: photo.previewURL}}
              style={styles.image}
            />
            <Text>Uploader: {photo.user}</Text>
            <Text>Resolution: {photo.imageWidth} x {photo.imageHeight}</Text>
            <Text>Tags: {photo.tags}</Text>
          </View>
          <Button
            style={styles.button}
            title='Return to Search Results'
            onPress={closeModal}
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
  image: {
    height:150,
    width:150,
    margin:10,
  },
  button: {
    margin:10
  }
});