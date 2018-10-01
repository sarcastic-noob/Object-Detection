// import React, { Component } from 'react';
// import {
//   CameraRoll,
//   Image,
//   StyleSheet,
//   TouchableHighlight,
//   View,
//   Text
// } from 'react-native';
//
//
// class CameraScreen extends Component {
//
//   getPhotosFromGallery() {
//    CameraRoll.getPhotos({ first: 1000000 })
//      .then(res => {
//        console.log(res, "images data")
//      })
//  }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight
//         onPress={() => this.getPhotosFromGallery()}>
//         <Text> hi me here</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 200,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });
//
// export default CameraScreen;


import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class CameraScreen extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
