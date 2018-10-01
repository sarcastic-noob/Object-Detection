import React, { Component } from 'react';
import { Text, View,ScrollView } from 'react-native';
import  ScrollDown  from './src/next.js';
import CameraScreen from './src/CameraScreen';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
          <ScrollView>
            <View>
        <Text>Hello world!</Text>
        <CameraScreen/>
        </View>
      </ScrollView>
  </View>
    );
  }
}
